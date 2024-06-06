import { combineSlices, configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/movies/moviesSlice";

export const rootReducer = combineSlices(moviesSlice);

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
