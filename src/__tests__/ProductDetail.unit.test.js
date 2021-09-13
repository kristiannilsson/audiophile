import { screen, render } from "@testing-library/react";
import ProductDetail from "../pages/ProductDetail";
import data from "../data/data.json";

describe("ProductDetail tests", () => {
  test("Image renders correctly", () => {
    render(<ProductDetail data={data[0]} />);
    const img = screen.getByAltText(data[0].name);
    expect(img).toBeInTheDocument();
  });
});
