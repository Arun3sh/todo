import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render text from title", () => {
  render(<Header />);
  const headingElement = screen.getByText(/Todo/i);
  expect(headingElement).toBeInTheDocument();
});
