# Star Rating

**Source:** GreatFrontEnd — UI Coding
**Status:** ✅ Solved (keyboard support still TODO)

## Problem

A star rating widget: show `maxStars` stars, fill them up to the current rating,
preview the rating on hover, and set it on click.

## My approach

- `Star` is a small presentational component (SVG) that takes `filled`.
- The widget is controlled: it receives `currentRating` and `onRatingChange` from the parent.
- Local `hoveredIndex` state drives the hover preview:
  - while hovering, stars up to `hoveredIndex` are filled (`index <= hoveredIndex`),
  - otherwise stars below `currentRating` are filled (`index < currentRating`).
- Clicking star `i` calls `onRatingChange(i + 1)`.
- Styling via `.star-icon` / `.star-icon-filled` classes (see `../../index.css`).

## What I learned

- Controlled component pattern: state lives in the parent, the widget only reports changes.
- `Array.from({ length }, (_, index) => …)` to render N items.
- Difference between hover preview state (local) and committed rating (lifted up).

## TODO

- Keyboard support: spans are focusable (`tabIndex={0}`) but there is no key
  handler yet (Enter/Space to select, arrows to move).
