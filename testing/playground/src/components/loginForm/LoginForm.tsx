import React, { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({ emailError: "", passError: "" });
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user.email) {
      setError((prev) => ({ ...prev, emailError: "Email is required" }));
      return;
    }
    if (!user.password) {
      setError((prev) => ({ ...prev, passError: "Password is required" }));
      return;
    }
    console.log("saved user credentials", user.email, user.password);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="mahmoud@gmail.com"
        value={user.email}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      {error.emailError ? <span role="alert">{error.emailError}</span> : null}
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        value={user.password}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      {error.passError ? <span role="alert">{error.passError}</span> : null}
      <button type="submit">Submit form</button>
    </form>
  );
};
export default LoginForm;
