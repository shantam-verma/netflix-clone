"use client";
import useMovieDetails from "@/app/hooks/useMovieDetails";
import Loading from "@/app/loading";
import { IMG_CDN_URL } from "@/app/utils/constant";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export default function MovieInfo({ params }) {
  useMovieDetails(params.movie);
  const movieDetails = useSelector((store) => store.movies.movieDetails);
  if (!movieDetails) {
    return <Loading />;
  }
  return (
    <div className="bg-black min-h-screen w-screen text-white pt-16">
      <div className="flex justify-center w-11/12 m-auto">
        <div className="grid grid-flow-col grid-rows-2 lg:grid-rows-1 w-full gap-10">
          <div className="flex justify-center col-span-12 lg:col-span-7">
            <Image
              width={400}
              height={200}
              src={IMG_CDN_URL + movieDetails?.poster_path}
              alt="movie"
            />
          </div>
          <div className="col-span-12 lg:col-span-5 pt-16 px-5 lg:px-0">
            <h1 className="text-3xl">{movieDetails?.original_title}</h1>
            <h1 className="text-xl pt-5">
              {movieDetails?.tagline ? movieDetails?.tagline : ""}
            </h1>
            <p className="w-full lg:w-10/12 pt-1">{movieDetails?.overview}</p>
            <div className="pt-5 grid grid-cols-12 gap-4">
              <p className="w-fit text-gray-600 font-bold col-span-3">
                Popularity
              </p>
              <p className="text-white font-normal col-span-9">
                {movieDetails?.popularity ? movieDetails?.popularity : "--"}+
              </p>
              <p className="w-fit text-gray-600 font-bold col-span-3">Budget</p>
              <p className="text-white font-normal col-span-9">
                {movieDetails?.budget ? <>$ {movieDetails?.budget}</> : "--"}
              </p>
              <p className="w-fit text-gray-600 font-bold col-span-3">
                Release Date
              </p>
              <p className="text-white font-normal col-span-9">
                {movieDetails?.release_date ? movieDetails?.release_date : "--"}
              </p>
              <p className="w-fit text-gray-600 font-bold col-span-3">Status</p>
              <p className="text-white font-normal col-span-9">
                {movieDetails?.status ? movieDetails?.status : "--"}
              </p>
              <p className="w-fit text-gray-600 font-bold col-span-3">
                Average Vote
              </p>
              <p className="text-white font-normal col-span-9 flex items-center">
                {movieDetails?.vote_average ? (
                  <>
                    {movieDetails?.vote_average}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 pb-1  text-yellow-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </>
                ) : (
                  "--"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
