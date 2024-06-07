import type { TInfoMessage } from "./InfoMessage";
import { ErrorMessage } from "./InfoMessage";

interface IEdit {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: TInfoMessage;
  type: "text" | "date";
  value: string;
}

export default function Edit({ onChange, error, type, value }: IEdit) {
  return (
    <>
      <div className="relative">
        <input
          type={type}
          className={`p-4 border-[1px] rounded-md focus:drop-shadow-xl outline-none w-full ${
            error ? "border-red-300" : "border-gray-200"
          }`}
          onChange={onChange}
          value={value}
        />
      </div>
      <ErrorMessage error={error} />
    </>
  );
}
