import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import dbConnect from "@/lib/db";
import Movie from "@/models/Movie";
import StoreProvider from "./StoreProvider";
import { IMovie } from "./getData/page";
import { initialTrendState } from "@/lib/store/features/trend/trendSlice";
import {
  ISessionState,
  initialState,
} from "@/lib/store/features/session/sessionSlice";
import { getSession } from "@/actions/session";

const inter = Inter({ subsets: ["latin"] });

const getMovies = async (): Promise<IMovie[]> => {
  await dbConnect();
  const movies = await Movie.find<IMovie>({});
  //remove _id property to prevent nextjs message error
  const returnValue: IMovie[] = movies.map((movie) => {
    return {
      id: movie.id,
      backdrop_path: movie.backdrop_path,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      original_title: movie.original_title,
      overview: movie.overview,
      trending_time: movie.trending_time,
    };
  });
  return returnValue;
};

export const metadata: Metadata = {
  title: "Plus que pro - Test React",
  description: "Test React",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const movies = await getMovies();
  const jwt = cookies().get("jwt");
  let session: ISessionState;
  if (jwt) {
    session = await getSession(jwt);
  } else {
    session = initialState;
  }
  return (
    <StoreProvider
      preloadedState={{ movies, trend: initialTrendState, session }}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
