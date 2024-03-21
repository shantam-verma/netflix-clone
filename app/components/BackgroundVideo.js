import React from "react";
import { useSelector } from "react-redux";
import useTrailers from "../hooks/useTrailers";

export default function BackgroundVideo({ movieId }) {
  const trailers = useSelector((store) => store.movies.trailer);
  useTrailers(movieId);
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailers?.key}?si=Q1x095K9GG6Dt4oE&autoplay=1&mute=1&controls=0&loop=1&showinfo=0&fs=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
