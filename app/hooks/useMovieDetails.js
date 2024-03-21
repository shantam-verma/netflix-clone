import React, { useEffect } from "react";
import { API_OPTIONS, BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import {
  addMovieDtails,
  clearMovieDetails,
} from "../lib/redux/slices/moviesSlice";

export default function useMovieDetails(movieId) {
  const dispatch = useDispatch();
  const getMovieDetails = async () => {
    const data = await fetch(
      `${BASE_URL}/${movieId}?language=en-US`,
      API_OPTIONS
    );
    const json = await data?.json();
    dispatch(addMovieDtails(json));
  };
  useEffect(() => {
    getMovieDetails();
    return () => {
      dispatch(clearMovieDetails());
    };
  }, [movieId]);
}
