"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/store/hooks";
import { deleteMovieById } from "@/lib/store/features/movies/moviesSlice";
import Spinner from "./Spinner";

interface IDeleteMovie {
  cancel: () => void;
  id: string;
}

export default function DeleteMovie({ cancel, id }: IDeleteMovie) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleDeleteMovie = async () => {
    setIsLoading(true);
    const response = await fetch("/api/delete/movie", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    setIsLoading(false);
    if (data.success) {
      dispatch(deleteMovieById(id));
      router.push("/");
    } else {
      console.log(data.error);
      cancel();
    }
  };

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center rounded-md overflow-hidden gap-2 text-sm backdrop-blur-md">
      <div className="flex flex-col w-[300px] h-[200px] bg-slate-50 p-4 text-center rounded-md border-[1px]">
        <p className="font-semibold">
          Are you sure you want to delete this movie ?
        </p>
        <div className="flex gap-2 justify-center flex-grow items-center">
          <button
            className="bg-white p-4 h-[50px] rounded-md text-red-500 border-[1px] hover:bg-slate-50 hover:border-slate-300"
            onClick={cancel}
          >
            Cancel
          </button>
          <button
            className="bg-white p-4 h-[50px] rounded-md text-green-500 border-[1px] hover:bg-slate-50 hover:border-slate-300"
            onClick={handleDeleteMovie}
          >
            Yes
          </button>
        </div>
      </div>
      {isLoading && (
        <div className="absolute left-0 top-0 h-full w-full flex justify-center items-center text-primary backdrop-blur-[2px] backdrop-saturate-50">
          <Spinner size={4} />
        </div>
      )}
    </div>
  );
}
