import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "@/components/form/InfoMessage";

test("Should render message correctly", () => {
  render(<ErrorMessage error={"test"} />);
  const container = screen.getByTestId("errorMessage");
  expect(screen.getByText("test")).toBeInTheDocument();
  expect(container).toBeInTheDocument();
});

test("Should not be render", () => {
  render(<ErrorMessage error={""} />);
  const container = screen.queryByTestId("errorMessage");
  expect(container).toBeNull();
});
