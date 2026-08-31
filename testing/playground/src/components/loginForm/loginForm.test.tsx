// import the component
// import render, screen from testing lib
// import user event from testing lib userevent
// import vitest utilities
import LoginForm from "./LoginForm";
import { render, screen } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { userEvent } from "@testing-library/user-event";

describe("Login Form component", () => {
  // on mount initial render
  // setup userevent : test typing for both inputs => select input
  // test form submission: enter or click => userevent
  // test error condition for both inputs
  // type event for email
  it("change the email input, should render the text written inside", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText(/mahmoud/i);
    const passInput = screen.getByLabelText(/password/i);
    await user.type(emailInput, "mahmoud@gmail.com");
    expect(emailInput).toHaveDisplayValue(/@/);
    await user.type(passInput, "123maHmoD");
    expect(passInput).toHaveDisplayValue(/Hmod/i);
  });
});
