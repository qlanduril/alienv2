import os
import json
import numpy as np
from PIL import Image

def process_directory(directory_path, prefix):
    offsets = {}
    if not os.path.exists(directory_path):
        print(f"Directory {directory_path} not found.")
        return offsets
        
    files = sorted(os.listdir(directory_path))
    for f in files:
        if not f.endswith('.png'):
            continue
            
        # Extract frame index from filename
        # e.g., "00_pristine.png" -> 0, "01_damaged_1.png" -> 1
        # e.g., "frame_0.png" -> 0
        name = os.path.splitext(f)[0]
        try:
            if name.startswith('frame_'):
                frame_idx = int(name.split('_')[1])
            else:
                frame_idx = int(name.split('_')[0])
        except ValueError:
            print(f"Skipping file {f} with unexpected name format.")
            continue
            
        p = os.path.join(directory_path, f)
        img = Image.open(p).convert('RGBA')
        w, h = img.size
        
        arr = np.array(img)
        alpha = arr[:, :, 3]
        non_transparent = (alpha > 0)
        ys, xs = np.where(non_transparent)
        
        if len(ys) > 0:
            cx = float(np.mean(xs))
            cy = float(np.mean(ys))
            y_max = int(np.max(ys))
            
            # Find widest row to determine the base center Y coordinate
            widths = []
            for y_val in range(int(np.min(ys)), y_max + 1):
                row_xs = xs[ys == y_val]
                if len(row_xs) > 0:
                    widths.append((y_val, np.max(row_xs) - np.min(row_xs)))
            base_cy, max_w = max(widths, key=lambda item: item[1])
        else:
            cx = w / 2.0
            cy = h / 2.0
            y_max = h
            base_cy = h / 2.0
            
        offsets[frame_idx] = {
            "w": w,
            "h": h,
            "dx": -cx,
            "dy": -cy,
            "y_max": y_max,
            "base_cy": base_cy
        }
        print(f"Processed {f} (frame {frame_idx}): size={w}x{h}, centroid=({cx:.1f}, {cy:.1f}), dx={-cx:.1f}, dy={-cy:.1f}, y_max={y_max}, base_cy={base_cy}")
        
    return offsets

def main():
    # We will generate offsets for:
    # - building_3 (School) -> from static/school/
    # - building_1 (Hospital) -> from static/hospital/
    
    school_offsets = process_directory('../static/school', 'building_3')
    hospital_offsets = process_directory('../static/hospital', 'building_1')
    
    all_offsets = {
        "building_3": school_offsets,
        "building_1": hospital_offsets
    }
    
    output_path = '../static/sprite_offsets.json'
    with open(output_path, 'w') as f:
        json.dump(all_offsets, f, indent=2)
        
    print(f"\nSaved all offsets to {output_path}")

if __name__ == '__main__':
    main()
