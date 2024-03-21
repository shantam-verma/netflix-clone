"use client";
import React from "react";
import BackgroundVideo from "./components/BackgroundVideo";
import VideoTitle from "./components/VideoTitle";
import Search from "./components/Search";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularMovies from "./hooks/usePopularMovies";
import SubContent from "./components/SubContent";
import Content from "./components/Content";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";

export default function Home() {
  const switchPage = useSelector((store) => store.search.switchPage);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      {!switchPage ? (
        <React.Fragment>
          <Content />
          <SubContent />
        </React.Fragment>
      ) : (
        <Search />
      )}
    </>
  );
}
