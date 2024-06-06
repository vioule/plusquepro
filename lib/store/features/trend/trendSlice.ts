import { TTrendingTime } from "@/app/getData/page";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ITrend {
  time: TTrendingTime;
  filter: string;
}

export const initialTrendState: ITrend = {
  time: "day",
  filter: "",
};

const trendSlice = createSlice({
  name: "trend",
  initialState: initialTrendState,
  reducers: {
    setTrendTime(state, action: PayloadAction<TTrendingTime>) {
      state.time = action.payload;
      return state;
    },
  },

  selectors: {
    selectTrend: (state) => state,
  },
});

export const { setTrendTime } = trendSlice.actions;
export const { selectTrend } = trendSlice.selectors;
export default trendSlice;
