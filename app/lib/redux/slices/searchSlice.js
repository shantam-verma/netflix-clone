"use client";
const { createSlice } = require("@reduxjs/toolkit");

const searchSlice = createSlice({
  name: "search",
  initialState: { switchPage: false },
  reducers: {
    togglePageView: (state) => {
      state.switchPage = !state.switchPage;
    },
  },
});

export const { togglePageView } = searchSlice.actions;
export default searchSlice.reducer;
