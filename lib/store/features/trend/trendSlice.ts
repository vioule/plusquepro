import { TTrendingTime } from "@/app/getData/page";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ITrend {
  time: TTrendingTime;
  search: string;
}

export const initialTrendState: ITrend = {
  time: "day",
  search: "",
};

const trendSlice = createSlice({
  name: "trend",
  initialState: initialTrendState,
  reducers: {
    setTrendTime(state, action: PayloadAction<TTrendingTime>) {
      state.time = action.payload;
      return state;
    },
    setTrendSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      return state;
    },
  },

  selectors: {
    selectTrend: (state) => state,
  },
});

export const { setTrendTime, setTrendSearch } = trendSlice.actions;
export const { selectTrend } = trendSlice.selectors;
export default trendSlice;
