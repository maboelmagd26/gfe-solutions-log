import { myData } from "./matchers";
import { describe, it, expect } from "vitest";
describe.skip("check array methods behavior with matchers", () => {
  it("check array length with toHaveLength", () => {
    expect(myData).toHaveLength(6);
  });
  it("check it with toBe matcher", () => {
    expect(myData.length).toBe(6);
  });
  it("check the membership with toContain", () => {
    expect(myData).toContain(2);
  });
  it("check if array not contain zero with native methods", () => {
    myData.forEach((el) => {
      expect(el).not.toBe(0);
    });
  });
  it("check if it is an array of nums", () => {
    for (let i = 0; i < myData.length; i++) {
      const element = myData[i];
      expect(isNaN(element)).toBeFalsy();
    }
  });
  it("checks if first element > 1", () => {
    expect(myData[0]).toBeGreaterThanOrEqual(1);
  });
});
describe.skip("checks for null and undefinded", () => {
  it("check for undefined/null", () => {
    let a;
    expect(a).toBeNullable();
    a = 2;
    expect(a).not.toBeUndefined();
    a = null;
    expect(a).toBeNull();
  });
  it("check for regex", () => {
    expect("I love apple. apple is a good fruit").toMatch(/appLe/i);
  });
  it("object if it has certain key", () => {
    expect({ name: "mahmoud", age: 25 }).toHaveProperty("age", 25);
  });
});
// own matchers
expect.extend({
  toBeLargerThan(recieved: number, target: number) {
    const pass = recieved > target;
    if (pass) {
      return {
        pass: true,
        message: () =>
          `expected ${recieved} to be larger than ${target} recieved ${pass}`,
      };
    } else {
      return {
        pass: false,
        message: () =>
          `Expected ${recieved} to be larger than ${target} recieved ${pass}`,
      };
    }
  },
  // you can optimize by setting default call with min, max
  toBeInRange(recieved: number, range: [number, number]) {
    let pass: undefined | boolean;
    if (!Array.isArray(range)) {
      return {
        message: () =>
          `invalid type : you must send the range in a 2-len sized tuple [min,max] or [max,min]`,
        pass: false,
      };
    }
    if (range[0] > range[1]) {
      const temp = range[1];
      range[1] = range[0];
      range[0] = temp;
    }
    pass = recieved >= range[0] && recieved <= range[1];
    if (pass) {
      return {
        pass: true,
        message: () =>
          `expected ${recieved} to be in range ${range[0]} ${range[1]}`,
      };
    } else {
      return {
        pass,
        message: () =>
          `expected ${recieved} to be in range ${range[0]} ${range[1]} recieved ${pass}`,
      };
    }
  },
});

describe.skip("test custom matchers", () => {
  it("check if number is >", () => {
    expect(10).toBeLargerThan(5);
  });
  it("checks if number is in range", () => {
    // @ts-expect-error deliberately wrong argument shape - exercises the matcher's invalid-input branch
    expect(10).toBeInRange(50);
  });
});

describe.skip("check for any or anything", () => {
  it("tests for anything but null or undefined", () => {
    let a: unknown;
    // expect(a).toEqual(expect.anything());
    a = "home";
    expect(a).toEqual(expect.anything());
    a = 25;
    expect(a).toEqual(expect.anything());
    a = null;
    // expect(a).toEqual(expect.anything());
    a = {};
    expect(a).toEqual(expect.anything());
    a = [];
    expect(a).toEqual(expect.anything());
    a = "";
    expect(a).toEqual(expect.anything());
  });
  it("checks for anytype against a constructor", () => {
    // expect(2323).toEqual(expect.any(Boolean));
    expect(2323).toEqual(expect.any(Number));
    expect([]).toEqual(expect.any(Array));
    expect({}).toEqual(expect.any(Object));
    expect("home").toEqual(expect.any(String));
  });
});

describe("subarrays w.r.t bigger arr", () => {
  it("checks for array containing", () => {
    const myArr = [1, 2, 3, 5];
    // search with any order search by element even if you duplicate an element
    expect(myArr).toEqual(expect.arrayContaining([1, 5, 5]));
  });
});
