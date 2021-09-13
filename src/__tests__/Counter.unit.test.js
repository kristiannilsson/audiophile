import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event";

describe("ProductButton Unit Test", () => {
  test("Matches snapshot", () => {
    const tree = render(<Counter />);
    expect(tree).toMatchSnapshot();
  });
  test("Increases and decreases correctly", () => {
    render(<Counter />);
    const increase = screen.getByText("+");
    const decrease = screen.getByText("-");
    const counter = screen.getByText("0");
    userEvent.click(increase);
    expect(counter).toHaveTextContent("1");
    userEvent.click(decrease);
    expect(counter).toHaveTextContent("0");
  });
  test("Does not decrease lower than 0", () => {
    render(<Counter />);
    const decrease = screen.getByText("-");
    const counter = screen.getByText("0");
    userEvent.click(decrease);
    expect(counter).toHaveTextContent("0");
  });
});
