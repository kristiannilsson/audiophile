import { render } from "@testing-library/react";
import ProductButton from "../components/ProductButton";

describe("ProductButton Unit Test", () => {
  test("Matches snapshot", () => {
    const tree = render(<ProductButton />);
    expect(tree).toMatchSnapshot();
  });
});
