import { render } from "@testing-library/react";
import Spinner from "@/components/Spinner";

test("render should match snapshot", () => {
  const { container } = render(<Spinner size={4} />);
  expect(container).toMatchSnapshot();
});
