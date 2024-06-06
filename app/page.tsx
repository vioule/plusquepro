"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { selectMovies } from "@/lib/store/features/movies/moviesSlice";

export default function Home() {
  const movies = useAppSelector(selectMovies);
  console.log(movies);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
