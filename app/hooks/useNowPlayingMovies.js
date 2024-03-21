"use client";
import React, { useEffect } from "react";
import { API_OPTIONS, BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../lib/redux/slices/moviesSlice";

export default function useNowPlayingMovies() {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.addNowPlayingMovies
  );
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `${BASE_URL}/now_playing?language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, [nowPlayingMovies]);
}
