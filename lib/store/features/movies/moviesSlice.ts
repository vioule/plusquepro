import { IMovie } from "@/app/getData/page";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const initialState: IMovie[] = [];

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state: IMovie[], action: PayloadAction<IMovie[]>) {
      state = action.payload;
      return state;
    },
  },

  selectors: {
    selectMovies: (state) => state,
  },
});

export const { setMovies } = moviesSlice.actions;
export const { selectMovies } = moviesSlice.selectors;
export default moviesSlice;
