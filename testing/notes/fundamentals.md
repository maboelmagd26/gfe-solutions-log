# Testing Fundamentals

## The testing stack

1. **Vitest** — test runner; provides spies, mocks, and assertions.
2. **React Testing Library (RTL)** — renders components and provides queries so you can test React components as the user sees them.
3. **@testing-library/user-event** — simulates user interactions the way a real user does: `click`, `mouseover`, `mousemove`, `mouseup`, `mousedown`, `focus`, `keyup`, `keypress`, `keydown`, `input`. Use it instead of `fireEvent`.
4. **@testing-library/jest-dom** — adds custom matchers for DOM assertions in more natural language (`toBeInTheDocument`, `toBeVisible`, `toBeDisabled`, `toBeEnabled`, `toHaveFocus`, `toHaveClass`, `toHaveTextContent`, `toHaveValue`).
5. **jsdom** — Vitest runs in Node.js, where `document`, `window`, `HTMLElement`, `localStorage`, `navigator`, etc. are not defined. jsdom creates a fake, lightweight browser without a real UI so DOM code can run. jsdom itself doesn't do assertions or simulate user events — it just provides the environment.
6. **MSW (Mock Service Worker)** — network mocking: it intercepts the request and returns a fake response, as if it were a real request.

## Philosophy

**Test behavior, not implementation.**

The test should represent how a user uses the component:

- find what users find: **role** and **accessible name**
- interact the way users do
- assert on what users see

This way a refactor will not break the test, but a behavior change will.

## Test-driven development (TDD)

Red → Green → Refactor:

1. Write a test that fails.
2. Write the least-effort code that makes the test pass.
3. Write another test (it will fail).
4. Refactor.
5. Tests pass.
6. Remove repetition, enhance performance, split the code.

## General rules

1. Test the behavior / user experience, not implementation details.
2. Single-responsibility tests (no dependent tests).
3. Every requirement needs an independent test.

## Types of test errors

- **Reference / assertion error** — `expected`: what I wrote in the test, `received`: what the function actually returned.
- **Type error** — wrong argument passed to an assertion (`.to…` / `.have…`).
