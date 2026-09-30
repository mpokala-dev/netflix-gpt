import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Sign in/sign up link", () => {
  render(<App />);
  const linkElement = screen.getByText(/sign in/i);
  expect(linkElement).toBeInTheDocument();
});
