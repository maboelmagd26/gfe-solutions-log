# JavaScript Functions

GreatFrontEnd JavaScript function challenges and smaller practice exercises.

## What belongs here

One folder per function challenge, containing:

```
<function-name>/
├── <function-name>.ts        # the solution
├── <function-name>.test.ts   # its tests
└── NOTES.md                  # problem, approach, what I learned
```

## How to add a new challenge

1. Create a `<function-name>/` folder (kebab-case — the name doubles as a future URL slug).
2. Write the solution and tests.
3. Copy [`TEMPLATE.md`](TEMPLATE.md) into the folder as `NOTES.md` and fill in what's useful.
4. Add a row to [`PROGRESS.md`](PROGRESS.md).

## Running

From the **repo root**:

```
npm test                # run everything
npx vitest flatten      # run one challenge's tests
```

## Solutions

- [flatten](flatten/NOTES.md) — ✅
- [get-name](get-name/NOTES.md) — ✅
