import { IMovie } from "@/app/getData/page";
import Image from "next/image";
import Link from "next/link";

interface ICard {
  movie: IMovie;
}

export default function MovieCard({ movie }: ICard) {
  return (
    <Link href={`/movie?id=${movie.id}`}>
      <div className="relative flex bg-slate-200 rounded-md overflow-hidden w-[300px] gap-2 text-sm h-[450px]">
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.original_title}
          width={300}
          height={450}
          className=""
        />
        <div className="flex flex-col gap-2 h-[100px] w-[300px] absolute bottom-0 p-4 text-white backdrop-blur-lg backdrop-brightness-75">
          <p className="text-xl text-nowrap text-ellipsis overflow-hidden w-[250px] font-bold">
            {movie.original_title}
          </p>
          <p className="text-xs">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
}
