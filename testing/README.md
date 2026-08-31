# Testing

Everything about testing: Vitest, React Testing Library, user-event, jest-dom, jsdom, MSW.

## Two halves

| I want to…                                        | Go to                    |
| ------------------------------------------------- | ------------------------ |
| Write down a concept, rule, matcher, gotcha       | [`notes/`](notes/)       |
| Try something out in code (a component, a matcher, a mock) | [`playground/`](playground/) |

## Notes — one file per topic

- [fundamentals.md](notes/fundamentals.md) — the stack, philosophy, TDD, general rules
- [queries-and-rtl.md](notes/queries-and-rtl.md) — query priority, accessible names, screen methods, a11y tooling
- [matchers.md](notes/matchers.md) — Vitest + jest-dom matchers, custom matchers
- [setup-and-config.md](notes/setup-and-config.md) — config, hooks, coverage

Learned something new? Append it to the matching file. New topic (e.g. MSW in
practice, mocking, integration tests)? Create a new file here and add it to
this list. No template needed — just a `# Title` and plain Markdown.

## Playground — runnable experiments

A small React app plus plain-TS exercises:

- `src/components/` — components built to practice testing:
  greeting (queries), counter (user-event), loginForm (forms — 🚧),
  accordion (🚧), dataTable (🚧)
- `exercises/` — non-React experiments: `sum` (first TDD steps), `matchers` (custom & asymmetric matchers)

New experiment → new folder in `src/components/` (React) or `exercises/` (plain TS),
with a `NOTES.md` if there's anything worth writing down.

## Running

From the **repo root**:

```
npm test                  # all tests in the repo
npm run dev:playground    # playground in the browser
```

## Topics

- [x] Vitest basics, matchers, custom matchers
- [x] RTL queries & query priority
- [x] user-event interactions
- [x] jest-dom assertions
- [x] Test setup: jsdom, setup file, cleanup
- [x] Coverage
- [ ] Forms testing (loginForm — in progress)
- [ ] MSW in practice (only conceptual notes so far — no code yet)
- [ ] Mocks & spies
- [ ] Integration tests
