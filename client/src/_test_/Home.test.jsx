import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test("renders welcome heading", () => {
  render(<Home />);
  const heading = screen.getByText(/Welcome to My Portfolio/i);
  expect(heading).toBeInTheDocument();
});
