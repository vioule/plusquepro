"use client";
import { useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import type { TInfoMessage } from "./InfoMessage";
import { ErrorMessage } from "./InfoMessage";

interface IPassword {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: TInfoMessage;
}

export default function Password({ onChange, error }: IPassword) {
  const [showPassword, setShowPassword] = useState(false);
  const type = showPassword ? "text" : "password";
  const icon = showPassword ? (
    <RiEyeCloseLine
      className="absolute top-[50%] translate-y-[-50%] right-4 text-[1.5rem]"
      data-testid="passwordRiEyeCloseLine"
    />
  ) : (
    <RiEyeLine
      className="absolute top-[50%] translate-y-[-50%] right-4 text-[1.5rem]"
      data-testid="passwordRiEyeLine"
    />
  );
  return (
    <>
      <div className="relative" data-testid="password">
        <input
          type={type}
          className={`p-4 px-14 border-2 rounded-xl focus:drop-shadow-xl outline-none w-full ${
            error ? "border-red-300" : "border-gray-200"
          }`}
          onChange={onChange}
          data-testid="passwordInput"
        />
        <MdLockOutline className="absolute top-[50%] translate-y-[-50%] left-4 text-[1.5rem] text-gray-300" />
        <div
          className="absolute top-0 right-0 h-full w-14 text-gray-300 hover:cursor-pointer hover:text-gray-400 "
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          data-testid="showPasswordButton"
        >
          {icon}
        </div>
      </div>
      <ErrorMessage error={error} />
    </>
  );
}
