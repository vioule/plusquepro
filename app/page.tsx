"use client";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { selectMovies } from "@/lib/store/features/movies/moviesSlice";
import MovieCard from "@/components/MovieCard";

export default function Home() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
      <div className="flex flex-wrap gap-4 w-full h-full">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </main>
  );
}
