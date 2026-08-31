// 1. Types of errors: reference or assertion error, type error(wrong arg for assertions .to/have)
// (expected: what I wrote, recieved: the function actual return)

// 2. Test driven development: Red, Green, Refactor
// 2.1 Write a test that fails
// 2.2 Write the least effort code that make test pass
// 2.3 Write another test (will fail)
// 2.4 Refactor
// 2.5 Tests pass
// 2.6 Remove the repition, enhance performance, split the code

// 3. General Rules
// 3.1 Test the behavior/user experience not implementation details
// 3.2 Single responsibility test (not dependent tests)
// 3.3 Every requirement needs an independent test

// 4. RTL, jest-dom, MSW, user-event, vitest
// 4.1 user-event: simulates user interactions like the real user do
// click, mouseover, mousemove, mousup, mousedown, focus
// keyup, keypress, keydown, input, focus instead of fireevent
// 4.2 react: Provides utilities for testing React components as the user sees it
// 4.3 jest-dom: more assertions for Dom via new custom matchers (more natural language)
//(toBe:IntheDocument, Visible, Disabled, enabled || toHave: Focus, class, TextContent, Value)
// 4.4 js-dom: vitest works in node.js jsdom creates a fake browser
// document, window, HTMLElement, localStorage, navigator etc is not defined in vitest
// without a real ui (light weight version). don't do assertions, test user events, react
// 4.5 MSW: it obstructs the request and give fake response (as it is a real request)
// 4.6 vitest is a test runner, provides spies, mocks, assertions
import { add } from "./sum";
import { describe, it, expect } from "vitest";
describe("add() function", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
  it("adds another two numbers", () => {
    expect(add(2, 2)).toBe(4);
  });
});
