export type TInfoMessage = string | null;

interface IErrorMessage {
  error: TInfoMessage;
}

export const ErrorMessage = ({ error }: IErrorMessage) => {
  const errorMessage = error ? (
    <span
      className="font-semibold text-sm text-red-400"
      data-testid="errorMessage"
    >
      {error}
    </span>
  ) : null;
  return <>{errorMessage}</>;
};
