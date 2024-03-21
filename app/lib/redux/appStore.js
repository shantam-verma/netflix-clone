"use client";
const { configureStore } = require("@reduxjs/toolkit");
import searchReducer from "@/app/lib/redux/slices/searchSlice";
import moviesReducer from "@/app/lib/redux/slices/moviesSlice";

const appStore = configureStore({
  reducer: { search: searchReducer, movies: moviesReducer },
});
export default appStore;
