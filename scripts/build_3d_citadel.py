import struct
import json
import os
import math

def create_alien_citadel_glb(output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    positions = []
    normals = []
    uvs = []
    colors = []
    indices = []

    def add_quad(v0, v1, v2, v3, norm, col):
        base_idx = len(positions) // 3
        positions.extend(v0)
        positions.extend(v1)
        positions.extend(v2)
        positions.extend(v3)

        for _ in range(4):
            normals.extend(norm)
            colors.extend(col)
            uvs.extend([0.0, 0.0])

        indices.extend([base_idx, base_idx + 1, base_idx + 2, base_idx, base_idx + 2, base_idx + 3])

    def add_cylinder(center_x, center_y, center_z, r_bot, r_top, height, sides, col):
        for i in range(sides):
            a0 = (i / sides) * 2 * math.pi
            a1 = ((i + 1) / sides) * 2 * math.pi

            cos0, sin0 = math.cos(a0), math.sin(a0)
            cos1, sin1 = math.cos(a1), math.sin(a1)

            # Bottom ring vertices
            b0 = [center_x + r_bot * cos0, center_y, center_z + r_bot * sin0]
            b1 = [center_x + r_bot * cos1, center_y, center_z + r_bot * sin1]

            # Top ring vertices
            t0 = [center_x + r_top * cos0, center_y + height, center_z + r_top * sin0]
            t1 = [center_x + r_top * cos1, center_y + height, center_z + r_top * sin1]

            norm = [(cos0 + cos1) * 0.5, 0.2, (sin0 + sin1) * 0.5]
            mag = math.sqrt(norm[0]**2 + norm[1]**2 + norm[2]**2)
            norm = [norm[0]/mag, norm[1]/mag, norm[2]/mag]

            add_quad(b0, b1, t1, t0, norm, col)

    # Colors (R, G, B floats 0..1)
    HULL_DARK = [0.12, 0.16, 0.24]
    HULL_ARMOR = [0.20, 0.28, 0.40]
    NEON_CYAN = [0.0, 0.94, 1.0]
    NEON_MAGENTA = [1.0, 0.0, 0.5]
    GOLD_ACCENT = [0.95, 0.75, 0.2]

    # --- 1. Base Octagonal Bastion Fortress (Width ~40, Height ~15) ---
    add_cylinder(0, 0, 0, 24, 22, 12, 8, HULL_DARK)
    add_cylinder(0, 12, 0, 22, 18, 6, 8, HULL_ARMOR)

    # Ring glowing energy conduit band
    add_cylinder(0, 18, 0, 18.2, 18.2, 2, 12, NEON_CYAN)

    # --- 2. Middle Tier setbacks & Energy Rings ---
    add_cylinder(0, 20, 0, 17, 13, 25, 8, HULL_DARK)
    add_cylinder(0, 45, 0, 13.2, 13.2, 2.5, 12, NEON_MAGENTA)
    add_cylinder(0, 47.5, 0, 12, 8, 30, 8, HULL_ARMOR)

    # Floating outer energy ring wings (4 diagonal fins)
    for angle_deg in [45, 135, 225, 315]:
        rad = math.radians(angle_deg)
        fx = math.cos(rad) * 16
        fz = math.sin(rad) * 16
        add_cylinder(fx, 30, fz, 3.5, 1.5, 20, 6, NEON_CYAN)

    # --- 3. Upper Tower Spire & Energy Needle ---
    add_cylinder(0, 77.5, 0, 7.5, 4.0, 35, 6, HULL_DARK)
    add_cylinder(0, 112.5, 0, 4.2, 4.2, 3, 8, GOLD_ACCENT)
    add_cylinder(0, 115.5, 0, 3.5, 0.2, 40, 6, NEON_CYAN) # Needle Spire tip

    # Top Crown Spire Needles (4 satellite antennae)
    for angle_deg in [0, 90, 180, 270]:
        rad = math.radians(angle_deg)
        ax = math.cos(rad) * 6
        az = math.sin(rad) * 6
        add_cylinder(ax, 110, az, 0.8, 0.1, 25, 4, NEON_MAGENTA)

    # Prepare Binary Buffer (Positions, Normals, Colors, Indices)
    pos_bytes = bytearray()
    for p in positions:
        pos_bytes.extend(struct.pack('<f', float(p)))

    norm_bytes = bytearray()
    for n in normals:
        norm_bytes.extend(struct.pack('<f', float(n)))

    col_bytes = bytearray()
    for c in colors:
        col_bytes.extend(struct.pack('<f', float(c)))

    idx_bytes = bytearray()
    for i in indices:
        idx_bytes.extend(struct.pack('<H', int(i))) # 16-bit unsigned int

    # Align byte arrays to 4-byte boundaries
    while len(idx_bytes) % 4 != 0:
        idx_bytes.extend(b'\x00')

    offset_pos = 0
    len_pos = len(pos_bytes)

    offset_norm = len_pos
    len_norm = len(norm_bytes)

    offset_col = offset_norm + len_norm
    len_col = len(col_bytes)

    offset_idx = offset_col + len_col
    len_idx = len(idx_bytes)

    buffer_data = pos_bytes + norm_bytes + col_bytes + idx_bytes

    # Calculate min/max bounds for positions
    min_x = min(positions[0::3])
    max_x = max(positions[0::3])
    min_y = min(positions[1::3])
    max_y = max(positions[1::3])
    min_z = min(positions[2::3])
    max_z = max(positions[2::3])

    num_vertices = len(positions) // 3
    num_indices = len(indices)

    # Build glTF 2.0 JSON Structure
    gltf_json = {
        "asset": {"version": "2.0", "generator": "ALINV-3D Procedural GLB Generator"},
        "scenes": [{"nodes": [0]}],
        "nodes": [{"name": "AlienSpaceshipHQ", "mesh": 0}],
        "meshes": [{
            "name": "AlienCitadelMesh",
            "primitives": [{
                "attributes": {
                    "POSITION": 0,
                    "NORMAL": 1,
                    "COLOR_0": 2
                },
                "indices": 3,
                "mode": 4 # TRIANGLES
            }]
        }],
        "accessors": [
            {
                "bufferView": 0,
                "byteOffset": 0,
                "componentType": 5126, # FLOAT
                "count": num_vertices,
                "type": "VEC3",
                "max": [max_x, max_y, max_z],
                "min": [min_x, min_y, min_z]
            },
            {
                "bufferView": 1,
                "byteOffset": 0,
                "componentType": 5126, # FLOAT
                "count": num_vertices,
                "type": "VEC3"
            },
            {
                "bufferView": 2,
                "byteOffset": 0,
                "componentType": 5126, # FLOAT
                "count": num_vertices,
                "type": "VEC3"
            },
            {
                "bufferView": 3,
                "byteOffset": 0,
                "componentType": 5123, # UNSIGNED_SHORT
                "count": num_indices,
                "type": "SCALAR"
            }
        ],
        "bufferViews": [
            {"buffer": 0, "byteOffset": offset_pos, "byteLength": len_pos, "target": 34962},
            {"buffer": 0, "byteOffset": offset_norm, "byteLength": len_norm, "target": 34962},
            {"buffer": 0, "byteOffset": offset_col, "byteLength": len_col, "target": 34962},
            {"buffer": 0, "byteOffset": offset_idx, "byteLength": len_idx, "target": 34963}
        ],
        "buffers": [{"byteLength": len(buffer_data)}]
    }

    json_str = json.dumps(gltf_json, separators=(',', ':')).encode('utf-8')
    while len(json_str) % 4 != 0:
        json_str += b' '

    # Package as GLB Binary Format (Header + JSON Chunk + BIN Chunk)
    json_chunk_len = len(json_str)
    bin_chunk_len = len(buffer_data)
    total_length = 12 + (8 + json_chunk_len) + (8 + bin_chunk_len)

    glb = bytearray()
    # Header: Magic, Version, Total Length
    glb.extend(struct.pack('<I', 0x46546C67)) # "glTF"
    glb.extend(struct.pack('<I', 2))          # Version 2
    glb.extend(struct.pack('<I', total_length))

    # Chunk 0: JSON
    glb.extend(struct.pack('<I', json_chunk_len))
    glb.extend(struct.pack('<I', 0x4E4F534A)) # "JSON"
    glb.extend(json_str)

    # Chunk 1: BIN
    glb.extend(struct.pack('<I', bin_chunk_len))
    glb.extend(struct.pack('<I', 0x004E4942)) # "BIN\0"
    glb.extend(buffer_data)

    with open(output_path, 'wb') as f:
        f.write(glb)

    print(f"[build_3d_citadel] Successfully constructed 3D Alien Spaceship HQ GLB asset ({len(glb)} bytes, {num_vertices} vertices) -> {output_path}")

if __name__ == '__main__':
    out_path = '/home/berkans/development/alienv2/static/3d/spaceship_hq/spaceship_hq.glb'
    create_alien_citadel_glb(out_path)
