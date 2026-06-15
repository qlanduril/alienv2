import os
import numpy as np
from PIL import Image
from scipy.ndimage import label, find_objects

def main():
    img_path = 'static/fire2.png'
    output_dir = 'static/fire'
    os.makedirs(output_dir, exist_ok=True)

    # Load image and convert to RGBA
    img = Image.open(img_path).convert('RGBA')
    width, height = img.size
    print(f"Loaded image: {img_path} ({width}x{height})")

    arr = np.array(img)
    alpha = arr[:, :, 3]
    mask = alpha > 10

    # Label connected components
    labeled, num_features = label(mask)
    slices = find_objects(labeled)

    large_features = []
    for i, sl in enumerate(slices):
        if sl is None: continue
        y_slice, x_slice = sl
        h = y_slice.stop - y_slice.start
        w = x_slice.stop - x_slice.start
        if w > 20 and h > 20:
            # Calculate centroid of active pixels in this slice
            feature_mask = (labeled[y_slice, x_slice] == (i + 1))
            ys, xs = np.where(feature_mask)
            cx = x_slice.start + np.mean(xs)
            cy = y_slice.start + np.mean(ys)
            large_features.append((cx, cy, w, h))

    # Sort from left to right by X centroid
    large_features.sort(key=lambda x: x[0])
    print(f"Found {len(large_features)} fire frames. Slicing with size 256x256...")

    # Clear old files in directory
    for f in os.listdir(output_dir):
        if f.endswith('.png'):
            os.remove(os.path.join(output_dir, f))

    # Crop 256x256 centered on each centroid
    for idx, (cx, cy, w, h) in enumerate(large_features):
        # Determine crop box (256x256)
        half_sz = 128
        x0 = int(round(cx - half_sz))
        y0 = int(round(cy - half_sz))
        x1 = x0 + 256
        y1 = y0 + 256

        # Crop (PIL crop handles out-of-bounds automatically by padding with 0/transparent)
        cropped = img.crop((x0, y0, x1, y1))
        
        # Save frame
        frame_path = os.path.join(output_dir, f"frame_{idx}.png")
        cropped.save(frame_path)
        print(f"  -> Saved frame_{idx}.png centered at ({cx:.1f}, {cy:.1f}), bounds: [{x0}:{x1}, {y0}:{y1}]")

    print("Perfect fire partitioning complete!")

if __name__ == '__main__':
    main()
