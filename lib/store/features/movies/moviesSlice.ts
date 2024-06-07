import { IMovie } from "@/app/getData/page";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const initialState: IMovie[] = [];

interface updateMovieByIdPayload {
  id: string;
  title: string;
  overview: string;
  date: string;
}

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state: IMovie[], action: PayloadAction<IMovie[]>) {
      state = action.payload;
      return state;
    },
    deleteMovieById(state: IMovie[], action: PayloadAction<string>) {
      state = state.filter((movie) => movie.id.toString() !== action.payload);
      return state;
    },
    updateMovieById(
      state: IMovie[],
      action: PayloadAction<updateMovieByIdPayload>
    ) {
      state = state.map((movie) => {
        if (movie.id.toString() === action.payload.id) {
          return {
            ...movie,
            release_date: action.payload.date,
            original_title: action.payload.title,
            overview: action.payload.overview,
          };
        } else {
          return movie;
        }
      });
      return state;
    },
  },

  selectors: {
    selectMovies: (state) => state,
    selectMovie: (state, id: string | null) =>
      state.find((movie) => movie.id.toString() === id),
  },
});

export const { setMovies, deleteMovieById, updateMovieById } =
  moviesSlice.actions;
export const { selectMovies, selectMovie } = moviesSlice.selectors;
export default moviesSlice;
