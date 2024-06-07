"use client";

import DeleteMovie from "@/components/DeleteMovie";
import { selectMovie } from "@/lib/store/features/movies/moviesSlice";
import { useAppSelector } from "@/lib/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

export default function Movie() {
  const [showDeleteMovie, setShowDeleteMovie] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const movie = useAppSelector((state) => selectMovie(state, id));
  return movie ? (
    <div className="flex w-screen h-screen">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie ? movie.original_title : ""}
        width={700}
        height={1000}
        className="absolute h-[100%] w-[33%] top-0 left-0 object-cover blur-md"
      />
      <div className="p-40 flex gap-4 z-0">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt={movie ? movie.original_title : ""}
          width={400}
          height={1000}
          className="object-cover rounded-md"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">{movie?.original_title}</h1>
          <p>{movie?.overview}</p>
          <p className="text-xs">{movie?.release_date}</p>
          <div>
            <button
              className="border-[1px] p-2 hover:bg-slate-50 rounded-md"
              onClick={() => setShowDeleteMovie(!showDeleteMovie)}
            >
              <MdDelete className="text-red-500" />
            </button>
          </div>
        </div>
      </div>
      <Link className="absolute right-0 m-4" href={"/"}>
        Home
      </Link>
      {showDeleteMovie && (
        <DeleteMovie cancel={() => setShowDeleteMovie(false)} id={id!} />
      )}
    </div>
  ) : (
    <div> Movie not found</div>
  );
}
