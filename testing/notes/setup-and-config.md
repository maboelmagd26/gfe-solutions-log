# Test Setup & Configuration

## This repository's setup

One shared setup at the repo root covers every test in the repository:

- [`vitest.config.ts`](../../vitest.config.ts) — `globals: true`, `environment: "jsdom"`, React plugin, setup file.
- [`vitest.setup.ts`](../../vitest.setup.ts) — imports `@testing-library/jest-dom` (registers the DOM matchers) and runs RTL `cleanup()` after each test.

Run everything with `npm test` from the repo root, or filter: `npx vitest counter`.

## Lifecycle hooks

`beforeAll`, `beforeEach`, `afterAll` (and `afterEach`):

- accept `(fn, timeout = 5s)`
- the timeout is the wait time before aborting.

## Skipping

`describe.skip` / `it.skip` keep experiments in the file without running them
(used heavily in the matchers exercise).

## Code coverage

```
npm test -- --coverage
```

Reports on all files and tests, and shows uncovered lines you added recently
with no tests covering them — with reports and HTML pages.
