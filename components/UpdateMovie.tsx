"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/store/hooks";
import { updateMovieById } from "@/lib/store/features/movies/moviesSlice";
import Spinner from "./Spinner";
import { TInfoMessage } from "./form/InfoMessage";
import Edit from "./form/Edit";
import { IMovie } from "@/app/getData/page";
import EditMovieSchema from "@/schemas/EditMovie";
import { z } from "zod";

interface IUpdateMovie {
  cancel: () => void;
  id: string;
  movie: IMovie;
}

interface IEditError {
  title: TInfoMessage;
  overview: TInfoMessage;
  response: TInfoMessage;
  date: TInfoMessage;
}

export default function UpdateMovie({ cancel, id, movie }: IUpdateMovie) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState(movie.original_title);
  const [overview, setOverview] = useState(movie.overview);
  const [date, setDate] = useState(movie.release_date);
  const [error, setError] = useState<IEditError>({
    title: null,
    overview: null,
    date: null,
    response: null,
  });

  const handleOnClick = async () => {
    try {
      const res = EditMovieSchema.parse({ title, overview, date });
      setIsLoading(true);
      const response = await fetch("/api/edit/movie", {
        method: "PUT",
        body: JSON.stringify({ title, overview, date, id }),
      });
      const data = await response.json();
      setIsLoading(false);
      if (data.success) {
        dispatch(updateMovieById({ id, date, title, overview }));
        cancel();
      } else {
        setError({
          title: null,
          overview: null,
          date: null,
          response: data.error,
        });
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        let ret: IEditError = {
          title: null,
          overview: null,
          date: null,
          response: null,
        };
        err.issues.map((e) => {
          const path = e.path[0] as "title" | "overview" | "date";
          ret[path] = e.message;
        });
        setError({ ...error, ...ret });
      } else {
        throw err;
      }
    }
  };

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center rounded-md overflow-hidden gap-2 text-sm backdrop-blur-md">
      <div className="flex flex-col w-[80%] bg-slate-50 p-4 text-center rounded-md border-[1px]">
        <p className="font-bold text-2xl">Edit</p>
        <span className="font-semibold text-md my-4">Title</span>
        <Edit
          onChange={(e) => setTitle(e.target.value)}
          error={error.title}
          type="text"
          value={title}
        />
        <span className="font-semibold text-md my-4">Overview</span>
        <Edit
          onChange={(e) => setOverview(e.target.value)}
          error={error.overview}
          type="text"
          value={overview}
        />
        <span className="font-semibold text-md my-4">Release Date</span>
        <Edit
          onChange={(e) => setDate(e.target.value)}
          error={error.date}
          type="date"
          value={date}
        />
        <div className="flex gap-2 justify-center flex-grow items-center mt-4">
          <button
            className="bg-white p-4 h-[50px] rounded-md text-red-500 border-[1px] hover:bg-slate-50 hover:border-slate-300"
            onClick={cancel}
          >
            Cancel
          </button>
          <button
            className="bg-white p-4 h-[50px] rounded-md text-green-500 border-[1px] hover:bg-slate-50 hover:border-slate-300"
            onClick={handleOnClick}
          >
            Submit
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
