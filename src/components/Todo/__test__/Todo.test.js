import { render, fireEvent } from "@testing-library/react";
import Todo from "../Todo";

it("checkButton", () => {
  const { queryByTitle } = render(<Todo />);
  const btn = queryByTitle("add-task-btn");
  expect(btn).toBeTruthy();
});

describe("clickButton", () => {
  it("onClick", () => {
    const { queryByTitle } = render(<Todo />);
    const btn = queryByTitle("add-task-btn");
    fireEvent.click(btn);
    // expect(screen.getByTest)
  });
});
