import React from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, handleMovieClick }: any) {
  if (!movies) return null;

  console.log("MovieGrid movies數據:", movies);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {movies.map((movie: any) => {
        return <MovieCard key={movie.id} movie={movie} handleMovieClick={handleMovieClick} />;
      })}
    </div>
  );
}
