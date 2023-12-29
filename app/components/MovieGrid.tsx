import React from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, handleMovieClick }: any) {
  if (!movies) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
      {movies.map((movie: any) => {
        return <MovieCard key={movie.id} movie={movie} handleMovieClick={handleMovieClick} />;
      })}
    </div>
  );
}
