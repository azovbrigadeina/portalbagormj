# Design Spec: Viewer Floating Capsule Controls Redesign

## Objective
Simplify and reposition the embedded iframe viewer controls from an intrusive top floating header bar into a compact, elegant floating capsule pill positioned at the bottom-right corner. This prevents any overlap or click interference with embedded applications' header menus (such as SimVel's navigation bar, OPD badge, and action items).

## Problem Statement
The current viewer header (`.viewer-header`):
1. Occupies an 80px high hover zone across the entire top edge (`top: 0; left: 0; right: 0`).
2. Triggers floating buttons right over the embedded app's native header when users interact with top elements inside the iframe.
3. Contains redundant or cluttered controls (an explicit Crop button, duplicated app title and badge, large "Buka Tab Baru" button, and "Kembali" button).

## Solution Architecture: Bottom-Right Floating Capsule

### 1. Positioning & Structure
- Container: `.viewer-capsule` placed at `position: fixed; bottom: 20px; right: 24px; z-index: 100;`.
- Background & Styling: Glassmorphism (`background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.12); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35); border-radius: 9999px;`).
- Height: Compact 40px–42px height with rounded pill shape.
- Interaction:
  - Subtle resting state (`opacity: 0.85`) so it does not distract during reading.
  - Full clarity on hover (`opacity: 1; transform: translateY(-2px);`).
  - No background overlay blocking clicks elsewhere: only the capsule element itself intercepts pointer events (`pointer-events: auto`). The rest of the screen is 100% interactive for the iframe.

### 2. Action Controls
Inside the capsule:
1. **Kembali Button (`#closeViewerBtn`)**:
   - Left side: Left arrow SVG + "Kembali" text label.
   - On click: Closes viewer and returns to dashboard.
2. **Divider**:
   - Vertical separator line (`width: 1px; height: 18px; background: rgba(255, 255, 255, 0.15);`).
3. **Refresh Button (`#refreshViewerBtn`)**:
   - Circular icon button with reload SVG. Tooltip: "Muat Ulang Aplikasi".
4. **Buka di Tab Baru Link (`#externalViewerLink`)**:
   - Circular icon button with external-link SVG `↗`. Tooltip: "Buka di Tab Baru". Target `_blank`.

### 3. Removal of Clutter & Automatic Crop
- **Crop Button Removal**: Remove `#toggleCropBtn` from the visible UI. The automated Google Apps Script banner detection (`top: -37px`) remains active in JavaScript (`app.js`) without needing a manual button.
- **Redundant Titles**: Remove `#viewerAppTitle` and `#viewerAppBadge` from the viewer bar.

### 4. Responsiveness
- On mobile screens (`max-width: 640px`):
  - Bottom spacing adjusts to `bottom: 16px; right: 16px;`.
  - The "Kembali" text label is hidden via CSS (`display: none;`), leaving only the clean back arrow icon alongside refresh and external tab icons.

## Affected Files
1. `index.html`: Replace `<header class="viewer-header">` with the new `<div class="viewer-capsule">` structure.
2. `style.css`: Clean up obsolete `.viewer-header` hover overlay rules and add styles for `.viewer-capsule`.
3. `app.js`: Ensure clean initialization without errors when `toggleCropBtn` is omitted or optional.

## Verification
1. Run local test server or open `index.html`.
2. Open an app (e.g., SimVel or any Google Apps Script app).
3. Verify:
   - Top area of the embedded app is 100% unobstructed.
   - Capsule appears smoothly at bottom-right.
   - "Kembali" button cleanly returns to portal.
   - "Refresh" reloads the iframe.
   - "Buka Tab Baru" opens the app in a new tab.
   - Responsiveness tested on mobile viewport dimensions.
