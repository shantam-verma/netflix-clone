import React, { useEffect } from "react";
import { API_OPTIONS, BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailers } from "../lib/redux/slices/moviesSlice";

export default function useTrailers(movieId) {
  const dispatch = useDispatch();
  const trailerData = useSelector((store) => store.movies.trailer);
  const getTrailers = async () => {
    const data = await fetch(
      `${BASE_URL}/${movieId}/videos?language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data?.json();
    const filterData = await json?.results.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json?.results[0];
    dispatch(addTrailers(trailer));
  };
  useEffect(() => {
    !trailerData && getTrailers();
  }, []);
}
