import json
import os
import sys
import random

GRID_DIM = 64
TILE_SIZE = 16
CHUNK_SIZE = 16
CHUNKS_PER_AXIS = 4

# Terrain Types:
# 0: ROAD_STRAIGHT_NS, 1: ROAD_STRAIGHT_EW, 2: ROAD_INTERSECTION,
# 3: SIDEWALK, 4: PLAZA_STONE, 5: GRASS, 6: WATER

def generate_city_map(seed=42):
    random.seed(seed)

    # Initialize all cells to GRASS (5)
    tiles = [[{"terrainType": 5, "overlayType": 0} for _ in range(GRID_DIM)] for _ in range(GRID_DIM)]
    buildings = []
    occupied = [[False for _ in range(GRID_DIM)] for _ in range(GRID_DIM)]
    no_tall_sprites = [[False for _ in range(GRID_DIM)] for _ in range(GRID_DIM)]

    print(f"[bake_assets] === PASS 1: Laying Connected Arterial Avenue & Street Network ===")
    road_xs = [0, 16, 32, 48]
    road_zs = [0, 16, 32, 48]

    # Map of all road cells: (gx, gz) -> 'NS' | 'EW' | 'INT'
    road_cells = {}

    # All 4 Avenues span full height z in [0, 63]
    for rx in road_xs:
        for rz in range(GRID_DIM):
            road_cells[(rx, rz)] = 'NS'

    # Streets: st_0 and st_16 span x in [0, 63]
    # st_32 and st_48 span x in [0, 48] (terminate cleanly at Avenue 48 waterfront)
    for rz in road_zs:
        max_x = GRID_DIM if rz < 32 else 49 # includes intersection at 48
        for rx in range(max_x):
            if (rx, rz) in road_cells:
                road_cells[(rx, rz)] = 'INT'
            else:
                road_cells[(rx, rz)] = 'EW'

    # Stamp road cells into tiles and mark occupied
    for (rx, rz), rtype in road_cells.items():
        occupied[rx][rz] = True
        if rtype == 'INT':
            tiles[rx][rz] = {"terrainType": 2, "overlayType": 1, "isIntersection": True}
        elif rtype == 'NS':
            tiles[rx][rz] = {"terrainType": 0, "overlayType": 1, "roadAxis": "NS"}
        elif rtype == 'EW':
            tiles[rx][rz] = {"terrainType": 1, "overlayType": 1, "roadAxis": "EW"}

    print(f"[bake_assets] === PASS 2: Carving South-East Water Harbor & Bay (Guaranteed Zero Road Overlap) ===")
    # Water Harbor Bay: x in [50, 63] and z in [33, 63]
    # Avenue 48 is at x=48. At x=49 is a scenic seaside boardwalk promenade. Water begins at x=50.
    water_min_x = 50
    water_min_z = 33

    # Paved waterfront promenade at x=49 along the harbor
    for z in range(water_min_z, GRID_DIM):
        if not occupied[49][z]:
            tiles[49][z] = {"terrainType": 4, "overlayType": 0} # PLAZA_STONE boardwalk
            occupied[49][z] = True

    # Fill harbor bay with deep blue water
    water_cells_count = 0
    for x in range(water_min_x, GRID_DIM):
        for z in range(water_min_z, GRID_DIM):
            assert (x, z) not in road_cells, f"Water cell ({x}, {z}) collides with road!"
            tiles[x][z] = {"terrainType": 6, "overlayType": 0} # WATER
            occupied[x][z] = True
            water_cells_count += 1
    print(f"[bake_assets]   -> Carved contiguous harbor water body ({water_cells_count} water tiles, x: 50..63, z: 33..63).")

    print(f"[bake_assets] === PASS 3: Synthesizing Statue of Liberty Water Island ===")
    isl_x, isl_z, isl_w, isl_h = 54, 42, 5, 5

    # Paved stone promenade island platform (5x5)
    for dx in range(isl_w):
        for dz in range(isl_h):
            wx, wz = isl_x + dx, isl_z + dz
            tiles[wx][wz] = {"terrainType": 4, "overlayType": 0} # PLAZA_STONE
            occupied[wx][wz] = True

    # Centered 3x3 footprint on the 5x5 platform (with 1-tile promenade ring on all sides)
    statue_gx = isl_x + 1
    statue_gz = isl_z + 1
    buildings.append({
        "id": "building_lm_statue_liberty",
        "typeKey": "statue_liberty",
        "gridX": statue_gx, "gridZ": statue_gz,
        "footprintWidth": 3, "footprintHeight": 3,
        "lotType": "landmark"
    })
    print(f"[bake_assets]   -> Placed Statue of Liberty on water island at ({statue_gx}, {statue_gz}) surrounded by harbor moat.")

    print(f"[bake_assets] === PASS 4: Enforcing 3D Mega-Landmarks in Balanced Downtown Quad ===")
    # Exactly 4 unique 3D models balanced symmetrically around central downtown crossroads (32, 32):
    # - NW Downtown (1, 1): Apex Mega-Tower (mega_titan, 4x4) at (22, 22)
    # - NE Downtown (2, 1): Alien Spaceship HQ (spaceship_hq, 4x4) at (38, 22)
    # - SW Downtown (1, 2): Metro Financial Tower (financial_tower, 3x3) at (22, 38)
    # - SE Downtown (2, 2): Cyber Quantum Reactor (cyber_reactor, 3x3) at (38, 38)
    landmarks_3d = [
        {"typeKey": "mega_titan",      "w": 4, "h": 4, "gx": 22, "gz": 22, "name": "Apex Mega-Tower"},
        {"typeKey": "spaceship_hq",    "w": 4, "h": 4, "gx": 38, "gz": 22, "name": "Alien Spaceship HQ"},
        {"typeKey": "financial_tower", "w": 3, "h": 3, "gx": 22, "gz": 38, "name": "Metro Financial Tower"},
        {"typeKey": "cyber_reactor",   "w": 3, "h": 3, "gx": 38, "gz": 38, "name": "Cyber Quantum Reactor"}
    ]

    for lm in landmarks_3d:
        rx, rz, lw, lh = lm["gx"], lm["gz"], lm["w"], lm["h"]
        # Footprint + 2-tile wide grand stone plaza buffer around perimeter
        for dx in range(-2, lw + 2):
            for dz in range(-2, lh + 2):
                gx, gz = rx + dx, rz + dz
                if 0 <= gx < GRID_DIM and 0 <= gz < GRID_DIM:
                    occupied[gx][gz] = True
                    # Do not overwrite avenue roadways or water
                    if tiles[gx][gz].get("overlayType") != 1 and tiles[gx][gz].get("terrainType") != 6:
                        tiles[gx][gz] = {"terrainType": 4, "overlayType": 0} # PLAZA_STONE

        buildings.append({
            "id": f"building_lm_{lm['typeKey']}",
            "typeKey": lm["typeKey"],
            "gridX": rx, "gridZ": rz,
            "footprintWidth": lw, "footprintHeight": lh,
            "lotType": "landmark"
        })
        print(f"[bake_assets]   -> Anchored 3D {lm['name']} at ({rx}, {rz}) with 2-tile grand stone plaza.")

    print(f"[bake_assets] === PASS 5: Enforcing North/North-West Clearance Cones & Height Damping ===")
    for lm in landmarks_3d:
        rx, rz, lw, lh = lm["gx"], lm["gz"], lm["w"], lm["h"]

        # 8 tiles to the North (-Z) across the tower width (+ 2 tiles lateral buffer)
        for dz in range(-8, 0):
            for dx in range(-2, lw + 2):
                gx, gz = rx + dx, rz + dz
                if 0 <= gx < GRID_DIM and 0 <= gz < GRID_DIM:
                    occupied[gx][gz] = True
                    if tiles[gx][gz].get("overlayType") != 1 and tiles[gx][gz].get("terrainType") != 6:
                        tiles[gx][gz] = {"terrainType": 4, "overlayType": 0} # PLAZA_STONE

        # 6 tiles to the West (-X) across the tower length (+ 2 tiles lateral buffer)
        for dx in range(-6, 0):
            for dz in range(-2, lh + 2):
                gx, gz = rx + dx, rz + dz
                if 0 <= gx < GRID_DIM and 0 <= gz < GRID_DIM:
                    occupied[gx][gz] = True
                    if tiles[gx][gz].get("overlayType") != 1 and tiles[gx][gz].get("terrainType") != 6:
                        tiles[gx][gz] = {"terrainType": 4, "overlayType": 0} # PLAZA_STONE

        # Height damping zone: up to 12 tiles North (-Z), only low-rise or parklets allowed
        for dz in range(-12, 0):
            for dx in range(-4, lw + 4):
                gx, gz = rx + dx, rz + dz
                if 0 <= gx < GRID_DIM and 0 <= gz < GRID_DIM:
                    no_tall_sprites[gx][gz] = True

    print(f"[bake_assets] === PASS 6: Placing Major Civic Institutions in Perimeter Districts ===")
    civic_landmarks = [
        {"typeKey": "hospital_civic",   "w": 3, "h": 3, "gx": 6,  "gz": 22, "lotType": "civic"},
        {"typeKey": "pentagon_defense", "w": 4, "h": 4, "gx": 6,  "gz": 38, "lotType": "landmark"},
        {"typeKey": "mega_stadium",     "w": 4, "h": 4, "gx": 38, "gz": 6,  "lotType": "landmark"},
        {"typeKey": "mall_shopping",    "w": 3, "h": 3, "gx": 22, "gz": 6,  "lotType": "commercial"},
        {"typeKey": "school_civic",     "w": 3, "h": 3, "gx": 6,  "gz": 54, "lotType": "civic"},
        {"typeKey": "1",                "w": 3, "h": 3, "gx": 54, "gz": 6,  "lotType": "civic"},
        {"typeKey": "2",                "w": 3, "h": 3, "gx": 54, "gz": 22, "lotType": "commercial"},
        {"typeKey": "3",                "w": 3, "h": 3, "gx": 22, "gz": 54, "lotType": "civic"},
    ]

    for lm in civic_landmarks:
        rx, rz, lw, lh = lm["gx"], lm["gz"], lm["w"], lm["h"]
        fits = True
        for dx in range(-1, lw + 1):
            for dz in range(-1, lh + 1):
                gx, gz = rx + dx, rz + dz
                if gx < 0 or gz < 0 or gx >= GRID_DIM or gz >= GRID_DIM or occupied[gx][gz]:
                    fits = False
                    break
            if not fits: break

        if fits:
            for dx in range(-1, lw + 1):
                for dz in range(-1, lh + 1):
                    gx, gz = rx + dx, rz + dz
                    if 0 <= gx < GRID_DIM and 0 <= gz < GRID_DIM:
                        occupied[gx][gz] = True
                        if dx < 0 or dx >= lw or dz < 0 or dz >= lh:
                            if tiles[gx][gz].get("overlayType") != 1 and tiles[gx][gz].get("terrainType") != 6:
                                tiles[gx][gz] = {"terrainType": 3, "overlayType": 0} # SIDEWALK buffer
                        else:
                            if tiles[gx][gz].get("overlayType") != 1 and tiles[gx][gz].get("terrainType") != 6:
                                tiles[gx][gz] = {"terrainType": 4, "overlayType": 0} # PLAZA_STONE
            buildings.append({
                "id": f"building_lm_{lm['typeKey']}",
                "typeKey": lm["typeKey"],
                "gridX": rx, "gridZ": rz,
                "footprintWidth": lw, "footprintHeight": lh,
                "lotType": lm["lotType"]
            })

    print(f"[bake_assets] === PASS 7: Multi-District Infill with Streetfront Alignment ===")
    high_rise_types = ["sky_artdeco", "sky_biotech", "sky_cyber", "res_sky"]
    mid_rise_types = ["b3", "b4", "4", "res_sky"]
    low_rise_types = ["b1", "b2", "res_bronze"]

    for chunk_x in range(CHUNKS_PER_AXIS):
        for chunk_z in range(CHUNKS_PER_AXIS):
            min_x = chunk_x * CHUNK_SIZE + 1
            max_x = (chunk_x + 1) * CHUNK_SIZE - 1
            min_z = chunk_z * CHUNK_SIZE + 1
            max_z = (chunk_z + 1) * CHUNK_SIZE - 1

            is_downtown = (1 <= chunk_x <= 2) and (1 <= chunk_z <= 2)
            is_dense_comm = (chunk_x in (0, 3)) and (1 <= chunk_z <= 2)
            is_dense_res = (chunk_z in (0, 3)) and (1 <= chunk_z <= 2)
            is_park = (chunk_x >= 2 and chunk_z == 0)

            mid_alley_x = min_x + 6
            mid_alley_z = min_z + 6

            if is_park:
                # Great Park Campus around Stadium: open lawns, trees, pavilions
                for x in range(min_x, max_x - 1, 2):
                    for z in range(min_z, max_z - 1, 2):
                        if occupied[x][z] or occupied[x+1][z] or occupied[x][z+1] or occupied[x+1][z+1]:
                            continue
                        if random.random() < 0.40:
                            # Keep open green lawn
                            continue
                        b_type = random.choice(low_rise_types)
                        occupied[x][z] = True
                        tiles[x][z] = {"terrainType": 5, "overlayType": 0} # GRASS park
                        buildings.append({
                            "id": f"building_{len(buildings)}",
                            "typeKey": b_type,
                            "gridX": x, "gridZ": z,
                            "footprintWidth": 1, "footprintHeight": 1,
                            "lotType": "park"
                        })

            elif is_dense_comm:
                # High-Density Commercial Market District: tight storefronts along sidewalks
                for x in range(min_x, max_x):
                    for z in range(min_z, max_z):
                        if x == mid_alley_x or z == mid_alley_z:
                            if not occupied[x][z]:
                                tiles[x][z] = {"terrainType": 3, "overlayType": 0} # SIDEWALK pedestrian alley
                            continue
                        if occupied[x][z]:
                            continue

                        can_fit_2x2 = (x + 1 < max_x and z + 1 < max_z and 
                                       x + 1 != mid_alley_x and z + 1 != mid_alley_z and
                                       not occupied[x+1][z] and not occupied[x][z+1] and not occupied[x+1][z+1])
                        if can_fit_2x2 and random.random() < 0.32:
                            b_type = random.choice(mid_rise_types)
                            for dx in range(2):
                                for dz in range(2):
                                    occupied[x + dx][z + dz] = True
                                    tiles[x + dx][z + dz] = {"terrainType": 3, "overlayType": 0}
                            buildings.append({
                                "id": f"building_{len(buildings)}",
                                "typeKey": b_type,
                                "gridX": x, "gridZ": z,
                                "footprintWidth": 2, "footprintHeight": 2,
                                "lotType": "commercial"
                            })
                        else:
                            b_type = random.choice(low_rise_types)
                            occupied[x][z] = True
                            tiles[x][z] = {"terrainType": 3, "overlayType": 0}
                            buildings.append({
                                "id": f"building_{len(buildings)}",
                                "typeKey": b_type,
                                "gridX": x, "gridZ": z,
                                "footprintWidth": 1, "footprintHeight": 1,
                                "lotType": "commercial"
                            })

            elif is_dense_res:
                # Residential Brownstone Borough: brownstones and apartment blocks
                for x in range(min_x, max_x):
                    for z in range(min_z, max_z):
                        if x == mid_alley_x or z == mid_alley_z:
                            if not occupied[x][z]:
                                tiles[x][z] = {"terrainType": 3, "overlayType": 0}
                            continue
                        if occupied[x][z]:
                            continue

                        can_fit_2x2 = (x + 1 < max_x and z + 1 < max_z and 
                                       x + 1 != mid_alley_x and z + 1 != mid_alley_z and
                                       not occupied[x+1][z] and not occupied[x][z+1] and not occupied[x+1][z+1])
                        if can_fit_2x2 and random.random() < 0.45:
                            b_type = random.choice(mid_rise_types)
                            for dx in range(2):
                                for dz in range(2):
                                    occupied[x + dx][z + dz] = True
                                    tiles[x + dx][z + dz] = {"terrainType": 3, "overlayType": 0}
                            buildings.append({
                                "id": f"building_{len(buildings)}",
                                "typeKey": b_type,
                                "gridX": x, "gridZ": z,
                                "footprintWidth": 2, "footprintHeight": 2,
                                "lotType": "residential"
                            })
                        else:
                            b_type = random.choice(low_rise_types)
                            occupied[x][z] = True
                            tiles[x][z] = {"terrainType": 3, "overlayType": 0}
                            buildings.append({
                                "id": f"building_{len(buildings)}",
                                "typeKey": b_type,
                                "gridX": x, "gridZ": z,
                                "footprintWidth": 1, "footprintHeight": 1,
                                "lotType": "residential"
                            })

            elif is_downtown:
                # Downtown High-Rise Core: 2x2 high-rise towers around wide 3D landmark plazas
                for x in range(min_x, max_x - 1, 2):
                    for z in range(min_z, max_z - 1, 2):
                        if occupied[x][z] or occupied[x+1][z] or occupied[x][z+1] or occupied[x+1][z+1]:
                            continue

                        # Check if within height-damped zone (North visual backdrop of 3D towers)
                        is_damped = (no_tall_sprites[x][z] or no_tall_sprites[x+1][z] or 
                                     no_tall_sprites[x][z+1] or no_tall_sprites[x+1][z+1])
                        if is_damped:
                            b_type = random.choice(low_rise_types)
                            fp = 1
                        else:
                            b_type = random.choice(high_rise_types)
                            fp = 2

                        for dx in range(fp):
                            for dz in range(fp):
                                occupied[x + dx][z + dz] = True
                                tiles[x + dx][z + dz] = {"terrainType": 4, "overlayType": 0} # PLAZA_STONE
                        buildings.append({
                            "id": f"building_{len(buildings)}",
                            "typeKey": b_type,
                            "gridX": x, "gridZ": z,
                            "footprintWidth": fp, "footprintHeight": fp,
                            "lotType": "commercial"
                        })

            else:
                # Outer Suburbs & Parklets
                for x in range(min_x, max_x - 1, 2):
                    for z in range(min_z, max_z - 1, 2):
                        if occupied[x][z] or occupied[x+1][z] or occupied[x][z+1] or occupied[x+1][z+1]:
                            continue
                        if random.random() < 0.15:
                            continue
                        b_type = random.choice(low_rise_types + mid_rise_types)
                        fp_size = 2 if b_type in mid_rise_types else 1
                        for dx in range(fp_size):
                            for dz in range(fp_size):
                                occupied[x + dx][z + dz] = True
                                tiles[x + dx][z + dz] = {"terrainType": 3, "overlayType": 0}
                        buildings.append({
                            "id": f"building_{len(buildings)}",
                            "typeKey": b_type,
                            "gridX": x, "gridZ": z,
                            "footprintWidth": fp_size, "footprintHeight": fp_size,
                            "lotType": "residential"
                        })

    print(f"[bake_assets] === PASS 8: Multi-Constraint Validation & Verification ===")
    keys_3d = set(["mega_titan", "spaceship_hq", "financial_tower", "cyber_reactor"])
    count_3d = {k: 0 for k in keys_3d}
    statue_count = 0
    statue_pos = None

    for b in buildings:
        k = b["typeKey"]
        if k in keys_3d:
            count_3d[k] += 1
        elif k == "statue_liberty":
            statue_count += 1
            statue_pos = (b["gridX"], b["gridZ"])

    # 1. Validate 3D Landmark Count
    for k, c in count_3d.items():
        assert c == 1, f"Validation failure: 3D building '{k}' count is {c}, expected exactly 1!"
    print(f"[bake_assets]   [OK] All 4 3D landmarks present with exact count = 1.")

    # 2. Symmetrical average positions
    coords_3d = [(b["gridX"], b["gridZ"]) for b in buildings if b["typeKey"] in keys_3d]
    avg_x = sum(c[0] for c in coords_3d) / len(coords_3d)
    avg_z = sum(c[1] for c in coords_3d) / len(coords_3d)
    assert avg_x == 30.0 and avg_z == 30.0, f"Validation failure: Average 3D center is ({avg_x}, {avg_z}) (expected (30.0, 30.0))!"
    print(f"[bake_assets]   [OK] Symmetrical 3D downtown center verified at ({avg_x}, {avg_z}).")

    # 3. Validate Statue of Liberty water island isolation
    assert statue_count == 1, f"Validation failure: statue_liberty count is {statue_count}, expected exactly 1!"
    assert statue_pos is not None, "Validation failure: statue_liberty position is missing!"
    sx, sz = statue_pos
    # Outer moat must be 100% open water (6)
    for dx in range(-2, 5):
        assert tiles[sx + dx][sz - 2]["terrainType"] == 6, f"North island moat at ({sx+dx}, {sz-2}) is not water!"
        assert tiles[sx + dx][sz + 4]["terrainType"] == 6, f"South island moat at ({sx+dx}, {sz+4}) is not water!"
    for dz in range(-2, 5):
        assert tiles[sx - 2][sz + dz]["terrainType"] == 6, f"West island moat at ({sx-2}, {sz+dz}) is not water!"
        assert tiles[sx + 4][sz + dz]["terrainType"] == 6, f"East island moat at ({sx+4}, {sz+dz}) is not water!"
    print(f"[bake_assets]   [OK] Statue of Liberty verified at ({sx}, {sz}) strictly surrounded by open water.")

    # 4. Validate 3D Landmark North Clearance Cones
    for lm in landmarks_3d:
        rx, rz, lw, lh = lm["gx"], lm["gz"], lm["w"], lm["h"]
        for b in buildings:
            if b["typeKey"] in keys_3d: continue
            bx, bz = b["gridX"], b["gridZ"]
            bw, bh = b["footprintWidth"], b["footprintHeight"]
            if (rx - 1 <= bx < rx + lw + 1 or rx - 1 <= bx + bw - 1 < rx + lw + 1) and (rz - 6 <= bz < rz or rz - 6 <= bz + bh - 1 < rz):
                raise AssertionError(f"Validation failure: building {b['id']} ({b['typeKey']}) in North clearance cone of {lm['typeKey']}!")
    print(f"[bake_assets]   [OK] All 4 3D landmarks have 100% clear North corridors (zero occluding 2D sprites).")

    # 5. Validate Road Integrity & Connectivity: ZERO water on roads, all avenues and streets unbroken
    for (rx, rz), rtype in road_cells.items():
        cell = tiles[rx][rz]
        assert cell.get("overlayType") == 1, f"Road at ({rx}, {rz}) has missing road overlay!"
        assert cell.get("terrainType") != 6, f"Road at ({rx}, {rz}) was overwritten with WATER!"
        if rtype == 'INT':
            assert cell.get("terrainType") == 2, f"Intersection at ({rx}, {rz}) is not ROAD_INTERSECTION!"
        elif rtype == 'NS':
            assert cell.get("terrainType") == 0, f"Avenue at ({rx}, {rz}) is not ROAD_STRAIGHT_NS!"
        elif rtype == 'EW':
            assert cell.get("terrainType") == 1, f"Street at ({rx}, {rz}) is not ROAD_STRAIGHT_EW!"
    print(f"[bake_assets]   [OK] All {len(road_cells)} road cells verified intact, continuous, and ZERO water on roads.")

    # 6. Validate Road Overlap
    for b in buildings:
        bx, bz = b["gridX"], b["gridZ"]
        bw, bh = b["footprintWidth"], b["footprintHeight"]
        for dx in range(bw):
            for dz in range(bh):
                assert (bx + dx, bz + dz) not in road_cells, f"Building {b['id']} overlaps road at ({bx+dx}, {bz+dz})!"
    print(f"[bake_assets]   [OK] Zero buildings overlap road network.")

    # 7. Validate Water Overlap
    for b in buildings:
        if b["typeKey"] == "statue_liberty": continue
        bx, bz = b["gridX"], b["gridZ"]
        bw, bh = b["footprintWidth"], b["footprintHeight"]
        for dx in range(bw):
            for dz in range(bh):
                assert tiles[bx + dx][bz + dz].get("terrainType") != 6, f"Building {b['id']} placed in water at ({bx+dx}, {bz+dz})!"
    print(f"[bake_assets]   [OK] Zero buildings inside water (Statue of Liberty on dedicated platform).")

    print(f"[bake_assets] === PASS 9: Bake Complete! Total Buildings: {len(buildings)} ===")

    return {
        "version": "1.3.0",
        "seed": seed,
        "gridDim": GRID_DIM,
        "metadata": {
            "buildingCount": len(buildings),
            "generationType": "Single Master City Map v2.0"
        },
        "buildings": buildings,
        "tiles": tiles
    }

def bake_assets(seed=None):
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(script_dir)
    static_dir = os.path.join(project_dir, 'static')

    if seed is None:
        if len(sys.argv) > 1 and sys.argv[1].isdigit():
            seed = int(sys.argv[1])
        else:
            # Seed 424242 produces an exceptionally balanced skyline, dense downtown, and lush parks
            seed = 424242

    print(f"[bake_assets] Baking Single Master City Map (seed={seed})...")
    map_data = generate_city_map(seed)

    # The single authoritative map file
    out_map = os.path.join(static_dir, 'map_data.json')
    with open(out_map, 'w') as f:
        json.dump(map_data, f, indent=2)

    # Mirror to generated_map.json for backward compatibility
    with open(os.path.join(static_dir, 'generated_map.json'), 'w') as f:
        json.dump(map_data, f, indent=2)

    print(f"==================================================================")
    print(f"[bake_assets] MAP BAKE SUCCESSFUL!")
    print(f"[bake_assets] File: {out_map}")
    print(f"[bake_assets] Seed: {seed} | Buildings: {len(map_data['buildings'])}")
    print(f"[bake_assets] 3D Landmarks: 4 (Apex Mega-Tower, Spaceship HQ, Financial Tower, Quantum Reactor)")
    print(f"[bake_assets] Water Island: Statue of Liberty in SE Harbor Bay")
    print(f"[bake_assets] Roads: 466 continuous cells (100% connected, 0% water)")
    print(f"[bake_assets] To try another map seed, run: python3 scripts/bake_assets.py <any_number>")
    print(f"==================================================================")
    return map_data

if __name__ == '__main__':
    bake_assets()
