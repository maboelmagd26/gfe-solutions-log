import { describe, expect, it } from "vitest";
// 1. import the component
import Greeting from "./Greeting";
// 2. utilities for testing the component: RTL
import { render, screen } from "@testing-library/react";
// 3. Test runner utilities
describe("Greeting Component", () => {
  it("renders the greeting component with the provided name", () => {
    render(<Greeting name="Mahmoud" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent(/mahmoud/i);
  });
  it("renders the greeting component with empty name", () => {
    render(<Greeting />);
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toEqual("Hello, ");
  });
});
