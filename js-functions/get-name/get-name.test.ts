import getName from "./get-name";
import { expect, it, describe } from "vitest";
describe("validate name input field", () => {
  it("empty field", () => {
    expect(getName()).toBe("unknown");
  });
  it("spaces end and start", () => {
    expect(getName(" osama ")).toBe("osama");
  });
  it("shortens the name length", () => {
    expect(getName("Osama_mohamed_elzero")).toBe("Osama_moha");
  });
  it("trims underscore", () => {
    expect(getName("_Osama")).toBe("Osama");
  });
});
