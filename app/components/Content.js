import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import BackgroundVideo from "./BackgroundVideo";

export default function Content() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const findlength = movies.length;
  const randomMovieIndex = Math.round(Math.random() * findlength);
  const mainMovie = movies[randomMovieIndex];
  const { overview, original_title, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <BackgroundVideo movieId={id} />
    </div>
  );
}
