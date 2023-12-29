import React from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, handleClick }: any) {
  if (!movies) return null;

  console.log("MovieGrid movies數據:", movies);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {movies.map((movie: any) => {
        // return <div key={movie.id}>{movie?.title}</div>;
        return <MovieCard key={movie.id} movie={movie} handleClick={handleClick} />;
      })}
    </div>
  );
}
