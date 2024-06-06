import dbConnect from "@/lib/db";
import Movie from "@/models/Movie";
import type { Movies } from "@/models/Movie";

//force no cache to see changes
export const dynamic = "force-dynamic";

const getMovies = async (): Promise<Movies[]> => {
  await dbConnect();
  const movies = await Movie.find<Movies>({});
  return movies;
};

export default async function Movies() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.original_title}>
            <div>
              <span>Title : </span>
              {movie.original_title}
            </div>
          </div>
        );
      })}
    </div>
  );
}
