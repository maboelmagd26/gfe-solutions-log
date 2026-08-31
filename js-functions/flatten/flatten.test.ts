import flatten from "./flatten";
import { expect, test, describe } from "vitest";
describe("flatten array", () => {
  test("empty array", () => {
    expect(flatten([])).toEqual([]);
  });

  test("nested array", () => {
    expect(flatten([1, [2]])).toEqual([1, 2]);
  });

  test("multiple levels of nesting", () => {
    expect(flatten([1, [2, [3]]])).toEqual([1, 2, 3]);
  });
  test("multiple types within the array", () => {
    expect(flatten(["hello", [1, 2, [3], [{ name: "Mahmoud" }]]])).toEqual([
      "hello",
      1,
      2,
      3,
      { name: "Mahmoud" },
    ]);
  });
});
