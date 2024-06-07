import { MdOutlineMail } from "react-icons/md";
import type { TInfoMessage } from "./InfoMessage";
import { ErrorMessage } from "./InfoMessage";

interface IEmail {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: TInfoMessage;
}

export default function Email({ onChange, error }: IEmail) {
  return (
    <>
      <div className="relative" data-testid="email">
        <input
          type="email"
          className={`p-4 px-14 border-2 rounded-xl focus:drop-shadow-xl outline-none w-full ${
            error ? "border-red-300" : "border-gray-200"
          }`}
          onChange={onChange}
          data-testid="emailInput"
        />
        <MdOutlineMail className="absolute top-[50%] translate-y-[-50%] left-4 text-[1.5rem] text-gray-300" />
      </div>
      <ErrorMessage error={error} />
    </>
  );
}
