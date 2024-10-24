//reducer: changeFilter
//export default function SelectNameFilter

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  selectors: { selectNameFilter: (state) => state.name },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { selectNameFilter } = slice.selectors;
export const { changeFilter } = slice.actions;
export const filtersReducer = slice.reducer;
