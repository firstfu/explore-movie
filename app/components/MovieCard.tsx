"use client";

import Image from "next/image";
import React from "react";

export default function MovieCard({ movie, handleMovieClick }: any) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const truncatedTitle = movie.title.length > 20 ? movie.title.substring(0, 20) + "..." : movie.title;
  return (
    <div
      onClick={() => {
        console.log("MovieCard movie:", movie);
        handleMovieClick(movie);
      }}
      className="cursor-pointer"
    >
      <div className="relative w-64 h-96">
        <Image src={imageUrl} alt={truncatedTitle} layout="responsive" width={128} height={192} objectFit="cover" className="rounded-r-md" />
      </div>
      <h3 className="text-white text-lg">{truncatedTitle}</h3>
    </div>
  );
}
