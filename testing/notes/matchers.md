# Matchers

Working code experiments for everything on this page live in
[`../playground/exercises/matchers/matchers.test.ts`](../playground/exercises/matchers/matchers.test.ts).

## Vitest matchers

Negative versions of all of these exist (`.not.…`), and you can always fall back to
loops or plain JS methods around a simple matcher.

- `expect(sth).toEqual(expect.anything())`
- `expect(sth).toEqual(expect.any(Constructor))`
- `toBe(false)` → prefer `toBeFalsy()`
- `toHaveLength`
- `toEqual` — can be combined with `expect.anything()` (matches anything except `null` or `undefined`)
- `toContain`
- `toBeGreaterThan` / `toBeGreaterThanOrEqual`
- `toBeLessThan` / `toBeLessThanOrEqual`
- `toBeUndefined`
- `toBeNull`
- `toBeNullable` — `undefined` or `null`
- `toHaveProperty` — object key as string or `string[]`, and optionally the value, e.g. `toHaveProperty('age', 25)`
- `toMatch(/regex/i)` — string against a regex
- `toEqual(expect.arrayContaining([...]))` — subarray check: any order, by element, duplicates allowed

## jest-dom matchers (DOM assertions)

More natural language for DOM state:

- `toBeInTheDocument`, `toBeVisible`
- `toBeDisabled`, `toBeEnabled`
- `toHaveFocus`, `toHaveClass`, `toHaveTextContent`, `toHaveValue`, `toHaveDisplayValue`

## Custom matchers

Extend `expect` with your own matchers via `expect.extend({ ... })`. Each matcher
receives the value under test plus your arguments, and returns `{ pass, message }`.
See `toBeLargerThan` and `toBeInRange` in the playground exercise.
