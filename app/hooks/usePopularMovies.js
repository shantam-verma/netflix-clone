"use client";
import React, { useEffect } from "react";
import { API_OPTIONS, BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../lib/redux/slices/moviesSlice";

export default function usePopularMovies() {
  const dispatch = useDispatch();
  const popularMoviesData = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      `${BASE_URL}/popular?language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data?.json();
    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    !popularMoviesData && getPopularMovies();
  }, []);
}
