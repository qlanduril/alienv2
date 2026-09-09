"""
remove_bg_batch.py
------------------
Strips the background from every frame in static/school/video/ using the
corner-color-distance technique from partition_spritesheet.py, then saves
the cleaned transparent PNGs to static/school/ with names that match the
game's AssetLoader convention:

  frame_001.png → 00_pristine.png  (frame index 0)
  frame_002.png → 01_damaged_1.png (frame index 1)
  ...
  frame_N.png   → (N-1)_<label>.png

If there are more video frames than the 15 existing labels, extra frames
are named  <index>_damaged_<index>.png  automatically.

After processing, sprite_offsets.json is regenerated automatically by
calling generate_offsets.py's logic inline.

Usage (run from the scripts/ directory):
    python remove_bg_batch.py

Or from the repo root:
    python static/scripts/remove_bg_batch.py
"""

import os
import sys
import json
import numpy as np
from PIL import Image

# ---------------------------------------------------------------------------
# Helpers (same technique as partition_spritesheet.py)
# ---------------------------------------------------------------------------

def detect_bg_color_from_corners(arr: np.ndarray) -> np.ndarray:
    """Average the four corner pixels to determine the background RGBA colour."""
    h, w = arr.shape[:2]
    corners = [arr[0, 0], arr[0, w - 1], arr[h - 1, 0], arr[h - 1, w - 1]]
    bg = np.mean(corners, axis=0).astype(float)
    # Pre-multiply RGB by alpha so fully-transparent corners don't skew result
    alpha_norm = bg[3] / 255.0
    bg[:3] *= alpha_norm
    return bg


def compute_color_distances(arr: np.ndarray, bg_color: np.ndarray) -> np.ndarray:
    """
    Per-pixel Euclidean distance from bg_color in pre-multiplied RGBA space,
    normalised to [0, 1].  Identical to the version in partition_spritesheet.py.
    """
    arr_float = arr.astype(float)
    alpha_norm = arr_float[:, :, 3:4] / 255.0
    arr_float[:, :, :3] *= alpha_norm
    diff = arr_float - bg_color
    dist = np.sqrt(np.sum(diff ** 2, axis=2))
    return dist / 510.0          # max possible distance ≈ sqrt(4 * 255²) ≈ 510


def remove_background(img: Image.Image, alpha_thresh: int = 20) -> Image.Image:
    """
    Replace background pixels with full transparency.
    alpha_thresh is a 0-255 colour-distance value; pixels closer than
    (alpha_thresh / 510) to the detected background colour become transparent.
    """
    img = img.convert("RGBA")
    arr = np.array(img)
    bg_color = detect_bg_color_from_corners(arr)
    dist = compute_color_distances(arr, bg_color)

    threshold_norm = alpha_thresh / 510.0
    is_bg = dist <= threshold_norm
    arr[is_bg] = [0, 0, 0, 0]

    return Image.fromarray(arr)


# ---------------------------------------------------------------------------
# Frame-name convention for the school building
# ---------------------------------------------------------------------------

FRAME_LABELS = [
    "00_pristine",
    "01_damaged_1",
    "02_damaged_2",
    "03_damaged_3",
    "04_damaged_4",
    "05_damaged_5",
    "06_damaged_6",
    "07_damaged_7",
    "08_damaged_8",
    "09_damaged_9",
    "10_damaged_10",
    "11_damaged_11",
    "12_damaged_12",
    "13_damaged_13",
    "14_rubble",
]


def frame_label(index: int) -> str:
    if index < len(FRAME_LABELS):
        return FRAME_LABELS[index]
    return f"{index:02d}_damaged_{index}"


# ---------------------------------------------------------------------------
# Offset generation (inline port of generate_offsets.py)
# ---------------------------------------------------------------------------

def compute_offsets_for_dir(directory: str) -> dict:
    offsets = {}
    files = sorted(f for f in os.listdir(directory) if f.endswith(".png"))

    for f in files:
        name = os.path.splitext(f)[0]
        try:
            # e.g. "00_pristine" → 0,  "frame_3" → 3
            if name.startswith("frame_"):
                frame_idx = int(name.split("_")[1])
            else:
                frame_idx = int(name.split("_")[0])
        except ValueError:
            print(f"  Skipping {f}: unexpected name format.")
            continue

        img = Image.open(os.path.join(directory, f)).convert("RGBA")
        w, h = img.size
        arr = np.array(img)
        alpha = arr[:, :, 3]
        ys, xs = np.where(alpha > 0)

        if len(ys) > 0:
            cx = float(np.mean(xs))
            cy = float(np.mean(ys))
            y_max = int(np.max(ys))
            widths = []
            for y_val in range(int(np.min(ys)), y_max + 1):
                row_xs = xs[ys == y_val]
                if len(row_xs) > 0:
                    widths.append((y_val, int(np.max(row_xs) - np.min(row_xs))))
            base_cy, _ = max(widths, key=lambda item: item[1])
        else:
            cx, cy = w / 2.0, h / 2.0
            y_max = h
            base_cy = h / 2.0

        offsets[frame_idx] = {
            "w": w,
            "h": h,
            "dx": round(-cx, 2),
            "dy": round(-cy, 2),
            "y_max": y_max,
            "base_cy": base_cy,
        }
        print(f"  offset [{frame_idx}] size={w}x{h}  centroid=({cx:.1f},{cy:.1f})  y_max={y_max}")

    return offsets


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    # Resolve paths relative to this script's location
    script_dir = os.path.dirname(os.path.abspath(__file__))
    static_dir = os.path.join(script_dir, "..", "static") if not script_dir.endswith("static") else script_dir
    
    # Allow running from repo root or from scripts/
    # Detect where we actually are
    if os.path.isdir(os.path.join(script_dir, "..", "school")):
        # Running from static/scripts/
        school_dir = os.path.abspath(os.path.join(script_dir, "..", "school"))
    elif os.path.isdir(os.path.join(script_dir, "static", "school")):
        # Running from repo root
        school_dir = os.path.abspath(os.path.join(script_dir, "static", "school"))
    else:
        print("ERROR: Could not locate static/school/. Run from the repo root or from static/scripts/.")
        sys.exit(1)

    video_dir = os.path.join(school_dir, "video")
    offsets_path = os.path.join(school_dir, "..", "sprite_offsets.json")

    if not os.path.isdir(video_dir):
        print(f"ERROR: video directory not found: {video_dir}")
        sys.exit(1)

    # Collect input frames sorted numerically
    input_frames = sorted(
        f for f in os.listdir(video_dir)
        if f.lower().endswith(".png") and f.startswith("frame_")
    )

    if not input_frames:
        print("No frame_*.png files found in the video directory.")
        sys.exit(1)

    print(f"Found {len(input_frames)} input frames in: {video_dir}")
    print(f"Output directory: {school_dir}")
    print()

    # Background removal pass
    processed = 0
    for i, filename in enumerate(input_frames):
        src_path = os.path.join(video_dir, filename)
        label = frame_label(i)
        dst_path = os.path.join(school_dir, f"{label}.png")

        img = Image.open(src_path)
        cleaned = remove_background(img, alpha_thresh=20)
        cleaned.save(dst_path)

        w, h = cleaned.size
        print(f"  [{i:02d}] {filename} → {label}.png  ({w}x{h})")
        processed += 1

    print(f"\n✓ Processed {processed} frames → {school_dir}")

    # Re-generate sprite_offsets.json
    print("\nRegenerating sprite_offsets.json …")
    school_offsets = compute_offsets_for_dir(school_dir)

    # Load existing offsets to preserve hospital data
    existing = {}
    if os.path.isfile(offsets_path):
        with open(offsets_path) as fh:
            existing = json.load(fh)

    existing["building_3"] = school_offsets

    with open(offsets_path, "w") as fh:
        json.dump(existing, fh, indent=2)

    print(f"\n✓ Saved sprite_offsets.json  ({len(school_offsets)} school frames)")


if __name__ == "__main__":
    main()
