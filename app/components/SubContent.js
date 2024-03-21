import React from "react";
import Cards from "./Cards";
import { useSelector } from "react-redux";

export default function SubContent() {
  const movies = useSelector((store) => store.movies);
  return (
    <React.Fragment>
      <Cards title="Now Playing Movies" images={movies.nowPlayingMovies} />
      <Cards title="Popular Movies" images={movies.popularMovies} />
      <Cards title="Top-Rated Movies" images={movies.topRatedMovies} />
      <Cards title="Upcoming Movies" images={movies.upcomingMovies} />
    </React.Fragment>
  );
}
