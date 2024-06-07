import { combineSlices, configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/movies/moviesSlice";
import trendSlice from "./features/trend/trendSlice";
import sessionSlice from "./features/session/sessionSlice";

export const rootReducer = combineSlices(moviesSlice, trendSlice, sessionSlice);

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
