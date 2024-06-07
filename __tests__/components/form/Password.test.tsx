import { fireEvent, render, screen } from "@testing-library/react";
import Password from "@/components/form/Password";

const onChange = jest.fn();

describe("<Password />", () => {
  beforeEach(() => {
    render(<Password onChange={onChange} error={"test"} />);
  });

  afterEach(() => {
    onChange.mockClear();
  });

  test("Should contain ErrorMessage component", () => {
    const container = screen.getByTestId("errorMessage");
    expect(container).toBeInTheDocument();
  });

  test("Should render correctly", () => {
    const container = screen.queryByTestId("password");
    expect(container?.children).toHaveLength(3);
  });

  test("Should call onChange correctly", () => {
    const input = screen.getByTestId<HTMLInputElement>("passwordInput");
    fireEvent.change(input, {
      target: { value: "T" },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test("Button show password works correctly", () => {
    const input = screen.getByTestId<HTMLInputElement>("passwordInput");
    const button = screen.getByTestId<HTMLButtonElement>("showPasswordButton");
    expect(input.type).toBe("password");
    expect(
      screen.queryByTestId("passwordRiEyeCloseLine")
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("passwordRiEyeLine")).toBeInTheDocument();
    fireEvent.click(button);
    expect(input.type).toBe("text");
    expect(screen.queryByTestId("passwordRiEyeCloseLine")).toBeInTheDocument();
    expect(screen.queryByTestId("passwordRiEyeLine")).not.toBeInTheDocument();
  });
});
