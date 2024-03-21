import React, { useEffect } from "react";
import { API_OPTIONS, BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../lib/redux/slices/moviesSlice";

export default function useTopRatedMovies() {
  const dispatch = useDispatch();
  const topRatedMoviesData = useSelector(
    (store) => store.movies.topRatedMovies
  );
  const getTopRatedMovies = async () => {
    const data = await fetch(
      `${BASE_URL}/top_rated?language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data?.json();
    dispatch(addTopRatedMovies(json?.results));
  };
  useEffect(() => {
    !topRatedMoviesData && getTopRatedMovies();
  }, [topRatedMoviesData]);
}
