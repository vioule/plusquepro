import { fireEvent, render, screen } from "@testing-library/react";
import Edit from "@/components/form/Edit";

const onChange = jest.fn();

describe("<Edit />", () => {
  beforeEach(() => {
    render(
      <Edit onChange={onChange} error={"test"} type="text" value="Some value" />
    );
  });
  afterEach(() => {
    onChange.mockClear();
  });
  test("Should contain ErrorMessage component", () => {
    const container = screen.getByTestId("errorMessage");
    expect(container).toBeInTheDocument();
  });

  test("Should render correctly", () => {
    const container = screen.queryByTestId("edit");
    const input = screen.getByTestId<HTMLInputElement>("editInput");
    expect(container?.children).toHaveLength(1);
    expect(input.type).toBe("text");
    expect(input.value).toBe("Some value");
  });

  test("Should call onChange correctly", () => {
    const input = screen.getByTestId("editInput");
    fireEvent.change(input, {
      target: { value: "T" },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
