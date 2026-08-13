# Design Spec: Executive Dual-Tone Ukraine Gradient Color Redesign

## Objective
Redesign the visual color scheme of the Bagian Organisasi Setda Kab. Muaro Jambi application portal to use the **Executive Dual-Tone Ukraine Palette** (Royal Blue `#00449E` / Azure `#0057B7` and Gold `#FFD700`).

## Visual & Color Architecture
- **Background Primary**: Deep Slate Indigo (`#060b1e`)
- **Header Title Gradient**: `linear-gradient(90deg, #FFD700 0%, #FFF099 50%, #60A5FA 100%)`
- **Primary Buttons Gradient**: `linear-gradient(90deg, #00449E 0%, #0057B7 60%, #FFD700 100%)`
- **Cards & Panels**: Glassmorphic Deep Blue Tint (`rgba(11, 20, 44, 0.9)`) with 1.5px solid border (`rgba(0, 87, 183, 0.4)`) and hover highlight (`#0057B7` & `#FFD700` glow).
- **Status Pills & Badges**: Royal Blue semi-transparent background with soft sky-blue text (`#93c5fd`) and glowing Gold status dot (`#FFD700`).
- **Logo Border & Accents**: 3px Solid Metallic Gold (`#FFD700`) box around logo.

## Affected Files
1. `style.css`: Update CSS variables in `:root` and styling rules for header, titles, card backgrounds, borders, hover states, status pills, and buttons.
2. `index.html`: Ensure clean semantic structure, check contrast accessibility, and verify class names align with the new design system.

## Verification
- Serve the updated portal locally (`index.html`) on `http://127.0.0.1:8085/`.
- Verify UI appearance, glassmorphism contrast, responsiveness, and clean visual execution.
