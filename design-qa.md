# Design QA — Running reference dashboard

## Evidence

- Source image: `qa/reference.png`
- Implementation screenshot: `qa/implementation-reference-dashboard.png`
- Side-by-side comparison: `qa/design-comparison.png`
- Capture viewport: 1520 × 1200 CSS px
- Pixel density: browser default (1× capture)
- Tested state: imported local MP4, pose analysis completed, all dashboard charts populated

## Comparison findings

| Priority | Finding | Resolution |
| --- | --- | --- |
| P1 | Reference requires video/pose at left and a black quantitative dashboard at right. | Implemented the same split hierarchy with live pose overlay and a black metrics panel. |
| P1 | Cadence, step count, cadence-over-time, strike-knee shape, and left/right ankle paths must all be present. | All five outputs are rendered from analysis results; short clips receive a valid flat cadence fallback instead of a blank chart. |
| P1 | The original page overflowed horizontally at narrow widths because the event table contributed its intrinsic width to the grid. | Added zero-min-width grid safeguards; verified no horizontal document overflow at 390, 768, and 1520 px. |
| P2 | Knee visualization initially used the internal joint angle and produced the wrong geometric shape. | Converted the displayed value to knee flexion (`180° − internal angle`) and redrew the segment shape to match the reference convention. |
| P2 | Video controls needed recognizable, professional icons and usable touch targets. | Added Material Symbols for previous/play/next/overlay, import, analyze, and export; verified all video toolbar targets are 42 × 42 px. |
| P3 | The implementation retains the project's dark Running Lab shell rather than copying the source's white presentation-page margin. | Intentional: the requested analytical composition is matched while preserving the existing product identity and sponsor footer. |

## Functional verification

- Local file import: passed with `/private/tmp/reference-runner-qa.mp4`.
- Pose analysis state: passed; cadence, steps, knee flexion, ankle paths, timing, and quality populated.
- Playback synchronization: progressive snapshots are derived from the current video time; returning to 0 seconds resets accumulated events and ankle paths, while advancing time increases the included frames/events.
- Timeline interaction: play, pause, native seeking, previous/next frame, video replay, and event-row jumps all trigger the synchronized dashboard renderer.
- Layout: portrait video remains in the left column and all synchronized metrics remain in the right column from 761 px upward; narrower phones stack the panels to preserve usability.
- Unit tests: 2/2 passed.
- JavaScript syntax and build: passed.
- Responsive widths: 390, 768, and 1520 px passed without document overflow.
- Export buttons: enabled after a completed analysis; existing CSV and JSON generation retained.
- Scope note: all metrics are browser-local single-camera 2D estimates for training review, not medical diagnosis.

final result: passed
