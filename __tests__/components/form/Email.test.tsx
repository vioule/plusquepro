import { fireEvent, render, screen } from "@testing-library/react";
import Email from "@/components/form/Email";

const onChange = jest.fn();

describe("<Email />", () => {
  beforeEach(() => {
    render(<Email onChange={onChange} error={"test"} />);
  });
  afterEach(() => {
    onChange.mockClear();
  });
  test("Should contain ErrorMessage component", () => {
    const container = screen.getByTestId("errorMessage");
    expect(container).toBeInTheDocument();
  });

  test("Should render correctly", () => {
    const container = screen.queryByTestId("email");
    expect(container?.children).toHaveLength(2);
  });

  test("Should call onChange correctly", () => {
    const input = screen.getByTestId("emailInput");
    fireEvent.change(input, {
      target: { value: "T" },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
