import json
import os
import random
from PIL import Image

GRID_DIM = 64
TILE_SIZE = 16
CHUNK_SIZE = 16
CHUNKS_PER_AXIS = 4

# Terrain Types:
# 0: ROAD_STRAIGHT_NS, 1: ROAD_STRAIGHT_EW, 2: ROAD_INTERSECTION,
# 4: PLAZA_STONE, 5: GRASS, 6: WATER, 7: SIDEWALK (used for urban lots)

def process_reference_image(img_path):
    if not os.path.exists(img_path):
        return None

    img = Image.open(img_path).convert("RGB")
    img_resized = img.resize((GRID_DIM, GRID_DIM), Image.Resampling.BILINEAR)

    density_mask = [[0.5 for _ in range(GRID_DIM)] for _ in range(GRID_DIM)]
    water_mask = [[0.0 for _ in range(GRID_DIM)] for _ in range(GRID_DIM)]
    park_mask = [[0.0 for _ in range(GRID_DIM)] for _ in range(GRID_DIM)]

    for x in range(GRID_DIM):
        for z in range(GRID_DIM):
            r, g, b = img_resized.getpixel((x, z))
            luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255.0

            if b > r * 1.2 and b > g * 1.1:
                water_mask[x][z] = 1.0
            elif g > r * 1.25 and g > b * 1.25:
                park_mask[x][z] = 1.0
            elif r > g * 1.1 or luminance < 0.35:
                density_mask[x][z] = 0.85
            else:
                density_mask[x][z] = 0.4

    return {
        "density_mask": density_mask,
        "water_mask": water_mask,
        "park_mask": park_mask
    }

def generate_chunk_based_map(ref_image_path, seed=42):
    random.seed(seed)
    masks = process_reference_image(ref_image_path)

    # Initialize all cells to GRASS (5)
    tiles = [[{"terrainType": 5, "overlayType": 0} for _ in range(GRID_DIM)] for _ in range(GRID_DIM)]
    buildings = []
    occupied = [[False for _ in range(GRID_DIM)] for _ in range(GRID_DIM)]

    # 1. Lay Arterial Avenue Road Grid along Chunk Borders
    # Main Avenues at x,z in {0, 16, 32, 48, 63}
    road_xs = set([0, 16, 32, 48, 63])
    road_zs = set([0, 16, 32, 48, 63])

    for x in range(GRID_DIM):
        for z in range(GRID_DIM):
            # Check for water mask from reference image (canal zone)
            if masks and masks["water_mask"][x][z] > 0.75 and x not in (0, 63) and z not in (0, 63):
                tiles[x][z] = {"terrainType": 6, "overlayType": 0} # WATER
                occupied[x][z] = True
                continue

            is_road_x = x in road_xs
            is_road_z = z in road_zs

            if is_road_x and is_road_z:
                tiles[x][z] = {"terrainType": 2, "overlayType": 1, "isIntersection": True}
                occupied[x][z] = True
            elif is_road_x:
                tiles[x][z] = {"terrainType": 0, "overlayType": 1, "roadAxis": "NS"}
                occupied[x][z] = True
            elif is_road_z:
                tiles[x][z] = {"terrainType": 1, "overlayType": 1, "roadAxis": "EW"}
                occupied[x][z] = True
            elif masks and masks["park_mask"][x][z] > 0.7:
                tiles[x][z] = {"terrainType": 5, "overlayType": 0} # GRASS PARK

    # Building catalog specs
    high_rise_types = ["mega_titan", "sky_cyber", "sky_biotech", "sky_artdeco", "res_sky"]
    mid_rise_types = ["1", "2", "3", "4", "b3", "b4", "pentagon_defense"]
    low_rise_types = ["b1", "b2", "res_bronze"]

    # 2. Place Civic Landmark Hub Buildings (4x4) cleanly inside specific chunks
    landmarks = [
        {"typeKey": "mega_titan", "w": 4, "h": 4, "lotType": "landmark", "preferredChunk": (1, 1)},
        {"typeKey": "spaceship_hq", "w": 4, "h": 4, "lotType": "landmark", "preferredChunk": (2, 1)},
        {"typeKey": "mega_stadium", "w": 4, "h": 4, "lotType": "landmark", "preferredChunk": (1, 2)},
    ]

    for lm in landmarks:
        cx, cz = lm["preferredChunk"]
        chunk_origin_x = cx * CHUNK_SIZE + 1
        chunk_origin_z = cz * CHUNK_SIZE + 1
        placed = False

        for rx in range(chunk_origin_x, chunk_origin_x + CHUNK_SIZE - lm["w"] - 1):
            for rz in range(chunk_origin_z, chunk_origin_z + CHUNK_SIZE - lm["h"] - 1):
                fits = True
                for dx in range(lm["w"]):
                    for dz in range(lm["h"]):
                        gx, gz = rx + dx, rz + dz
                        if gx >= GRID_DIM or gz >= GRID_DIM or occupied[gx][gz]:
                            fits = False
                            break
                    if not fits: break

                if fits:
                    for dx in range(lm["w"]):
                        for dz in range(lm["h"]):
                            gx, gz = rx + dx, rz + dz
                            occupied[gx][gz] = True
                            tiles[gx][gz] = {"terrainType": 4, "overlayType": 0} # PLAZA_STONE ground

                    buildings.append({
                        "id": f"building_lm_{len(buildings)}",
                        "typeKey": lm["typeKey"],
                        "gridX": rx, "gridZ": rz,
                        "footprintWidth": lm["w"], "footprintHeight": lm["h"],
                        "lotType": lm["lotType"]
                    })
                    placed = True
                    break
            if placed: break

    # 3. Dense Chunk Building Packing: Process each 16x16 Chunk District
    for chunk_x in range(CHUNKS_PER_AXIS):
        for chunk_z in range(CHUNKS_PER_AXIS):
            min_x = chunk_x * CHUNK_SIZE + 1
            max_x = (chunk_x + 1) * CHUNK_SIZE - 1
            min_z = chunk_z * CHUNK_SIZE + 1
            max_z = (chunk_z + 1) * CHUNK_SIZE - 1

            # Determine Chunk Archetype & Density
            avg_density = 0.5
            if masks:
                sample_x = min(chunk_x * CHUNK_SIZE + 8, GRID_DIM - 1)
                sample_z = min(chunk_z * CHUNK_SIZE + 8, GRID_DIM - 1)
                avg_density = masks["density_mask"][sample_x][sample_z]

            # Pack 2x2 buildings tightly inside inner chunk blocks
            for x in range(min_x, max_x - 1, 2):
                for z in range(min_z, max_z - 1, 2):
                    if occupied[x][z] or occupied[x+1][z] or occupied[x][z+1] or occupied[x+1][z+1]:
                        continue

                    # Select building type based on district density
                    if avg_density > 0.7:
                        b_type = random.choice(high_rise_types)
                        ground_terrain = 4 # PLAZA_STONE for downtown
                    elif avg_density > 0.4:
                        b_type = random.choice(mid_rise_types)
                        ground_terrain = 3 if (x + z) % 4 == 0 else 4 # SIDEWALK / PLAZA
                    else:
                        b_type = random.choice(low_rise_types)
                        ground_terrain = 3 # SIDEWALK

                    # Mark 2x2 ground tiles to match building footprint
                    for dx in range(2):
                        for dz in range(2):
                            gx, gz = x + dx, z + dz
                            occupied[gx][gz] = True
                            tiles[gx][gz] = {"terrainType": ground_terrain, "overlayType": 0}

                    buildings.append({
                        "id": f"building_{len(buildings)}",
                        "typeKey": b_type,
                        "gridX": x, "gridZ": z,
                        "footprintWidth": 2, "footprintHeight": 2,
                        "lotType": "commercial" if avg_density > 0.5 else "residential"
                    })

    return {
        "version": "1.3.0",
        "seed": seed,
        "gridDim": GRID_DIM,
        "metadata": {
            "refImage": os.path.basename(ref_image_path) if ref_image_path else "None",
            "buildingCount": len(buildings),
            "generationType": "Chunk-Based District Packing v1.4"
        },
        "buildings": buildings,
        "tiles": tiles
    }

def bake_assets():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(script_dir)
    static_dir = os.path.join(project_dir, 'static')

    ref_img_path = os.path.join(static_dir, 'tileset1.jpg')
    if not os.path.exists(ref_img_path):
        ref_img_path = os.path.join(static_dir, 'alinv2city.jpg')

    print(f"[bake_assets] Generating Chunk-Based Dense City Map using {ref_img_path}...")
    map_data = generate_chunk_based_map(ref_img_path, 42)
    out_map = os.path.join(static_dir, 'map_data.json')

    with open(out_map, 'w') as f:
        json.dump(map_data, f, indent=2)

    # Also sync generated_map.json and generated_map_arcade.json for backwards compatibility
    with open(os.path.join(static_dir, 'generated_map.json'), 'w') as f:
        json.dump(map_data, f, indent=2)
    with open(os.path.join(static_dir, 'generated_map_arcade.json'), 'w') as f:
        json.dump(map_data, f, indent=2)

    print(f"[bake_assets] Successfully generated Chunk-Based Map JSON ({len(map_data['buildings'])} buildings packed tightly across 16 districts) -> {out_map}")

if __name__ == '__main__':
    bake_assets()
