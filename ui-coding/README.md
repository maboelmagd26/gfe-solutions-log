# UI Coding

GreatFrontEnd UI challenges and other UI implementations.

## What belongs here

Any UI component/widget challenge: the working code, its notes, and (later) its tests.

## How to add a new challenge

1. Create `src/components/<challenge-name>/` (kebab-case — the name doubles as a future URL slug).
2. Put the component code there.
3. Copy [`TEMPLATE.md`](TEMPLATE.md) into the folder as `NOTES.md` and fill in what's useful.
4. Render it from `src/App.tsx` to see it in the browser.
5. Add a row to [`PROGRESS.md`](PROGRESS.md).

## Running

From the **repo root**:

```
npm run dev:ui      # dev server for this app
npm test            # runs all tests in the repo, including any here
```

## Solutions

- [star-rating](src/components/star-rating/NOTES.md) — ✅ (keyboard support TODO)
