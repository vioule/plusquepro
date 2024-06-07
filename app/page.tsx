"use client";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { selectMovies } from "@/lib/store/features/movies/moviesSlice";
import MovieCard from "@/components/MovieCard";
import {
  selectTrend,
  setTrendTime,
} from "@/lib/store/features/trend/trendSlice";
import SearchBar from "@/components/SearchBar";
import LogOut from "@/components/buttons/Logout";

export default function Home() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  const trend = useAppSelector(selectTrend);
  let filterMovies = movies.filter((movie) =>
    movie.trending_time.includes(trend.time)
  );
  if (trend.search) {
    filterMovies = filterMovies.filter((movie) =>
      movie.original_title.toLowerCase().includes(trend.search.toLowerCase())
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <LogOut />
      <div className="flex gap-2">
        <button
          className={`p-4 rounded-md ${
            trend.time === "day" ? "bg-blue-200" : "bg-red-200"
          }`}
          onClick={() => dispatch(setTrendTime("day"))}
        >
          Day
        </button>
        <button
          className={`bg-blue-200 p-4 rounded-md ${
            trend.time === "week" ? "bg-blue-200" : "bg-red-200"
          }`}
          onClick={() => dispatch(setTrendTime("week"))}
        >
          Week
        </button>
      </div>
      <SearchBar />
      <div className="flex flex-wrap gap-4 w-full h-full">
        {filterMovies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </main>
  );
}
