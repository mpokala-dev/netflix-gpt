import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Sign in/sign up link", () => {
  render(<App />);
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
});
