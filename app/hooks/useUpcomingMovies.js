import React, { useEffect } from "react";
import { API_OPTIONS, BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../lib/redux/slices/moviesSlice";

export default function useUpcomingMovies() {
  const dispatch = useDispatch();
  const upcomingMoviesData = useSelector(
    (store) => store.movies.upcomingMovies
  );
  const getUpcomingMovies = async () => {
    const data = await fetch(
      `${BASE_URL}/upcoming?language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data?.json();
    dispatch(addUpcomingMovies(json?.results));
  };
  useEffect(() => {
    !upcomingMoviesData && getUpcomingMovies();
  }, [upcomingMoviesData]);
}
