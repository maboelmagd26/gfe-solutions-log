import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component", () => {
  // initial count is undefined
  it("initial count is left empty should show 0", () => {
    render(<Counter />);
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toHaveTextContent(/CoUnT: 0/i);
  });
  it("renders the counter with the initial count passed", () => {
    render(<Counter initialCount={-5} />);
    expect(screen.getByText("count: -5")).toBeInTheDocument();
  });
  // user events: + - reset
  it("increments the counter by one", async () => {
    const userInteraction = userEvent.setup();
    render(<Counter initialCount={9} />);
    const incrementButton = screen.getByRole("button", { name: "+" });
    // you should wait for the interaction
    await userInteraction.click(incrementButton);
    expect(screen.getByRole("paragraph").textContent).toEqual("count: 10");
  });
  // render the comp, select btn and p, wait for user, expect p content to be one less
  it("decrements the counter by 1", async () => {
    render(<Counter initialCount={-1} />);
    const button = screen.getByRole("button", { name: "-" });
    const paragrah = screen.getByRole("paragraph");
    await userEvent.click(button);
    expect(paragrah).toHaveTextContent("count: -2");
  });
  it("resets the counter to 0", async () => {
    render(<Counter initialCount={50} />);
    const button = screen.getByRole("button", { name: /reSet/i });
    const paragrah = screen.getByRole("paragraph");
    await userEvent.click(button);
    expect(paragrah).toHaveTextContent("count: 0");
  });
});
