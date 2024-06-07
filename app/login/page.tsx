"use client";
import Password from "@/components/form/Password";
import Email from "@/components/form/Email";
import Spinner from "@/components/Spinner";
import { useState } from "react";
import { z } from "zod";
import LoginSchema from "@/schemas/Login";
import type { TInfoMessage } from "@/components/form/InfoMessage";
import { ErrorMessage } from "@/components/form/InfoMessage";
import { useAppDispatch } from "@/lib/store/hooks";
import { setUser } from "@/lib/store/features/session/sessionSlice";
import { useRouter } from "next/navigation";

interface ILoginError {
  email: TInfoMessage;
  password: TInfoMessage;
  response: TInfoMessage;
}

export default function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<ILoginError>({
    email: null,
    password: null,
    response: null,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleOnClick = async () => {
    try {
      const res = LoginSchema.parse({ email, password });
      setIsLoading(true);
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      setIsLoading(false);
      if (data.success) {
        //redirect to user dashboard
        dispatch(setUser(data.session.user));
        router.push("/");
      } else {
        setError({
          email: null,
          password: null,
          response: data.error,
        });
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        let ret: ILoginError = {
          email: null,
          password: null,
          response: null,
        };
        err.issues.map((e) => {
          const path = e.path[0] as "email" | "password";
          ret[path] = e.message;
        });
        setError({ ...error, ...ret });
      } else {
        throw err;
      }
    }
  };
  return (
    <div className="h-screen w-screen flex flex-row max-w-[1920px]">
      <div className="relative bg-white w-full h-full flex justify-center overflow-x-hidden">
        <div className="flex flex-col justify-center p-10 gap-2 h-full max-w-[600px] w-full min-h-[550px] max-sm:min-h-[500px]">
          <p className="text-5xl font-bold mb-4">Log in</p>
          <span className="font-bold text-lg mt-4">Email address</span>
          <Email
            onChange={(e) => setEmail(e.target.value)}
            error={error.email}
          />
          <span className="font-bold text-lg mt-4">Password</span>
          <Password
            onChange={(e) => setPassword(e.target.value)}
            error={error.password}
          />
          <button
            className=" bg-blue-500 text-white p-4 rounded-xl mt-6 hover:bg-primary-darken"
            onClick={handleOnClick}
          >
            Log in
          </button>
          <ErrorMessage error={error.response} />
        </div>
        {isLoading && (
          <div className="absolute left-0 top-0 h-full w-full flex justify-center items-center text-primary backdrop-blur-[2px] backdrop-saturate-50">
            <Spinner size={4} />
          </div>
        )}
      </div>
    </div>
  );
}
