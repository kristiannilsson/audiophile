import { render } from "@testing-library/react";
import Overline from "../components/Overline";

describe("Overline Unit test", () => {
  test("Snapshot matches", () => {
    const tree = render(<Overline />);
    expect(tree).toMatchSnapshot();
  });
});
