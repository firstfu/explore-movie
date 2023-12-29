"use client";

import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import MovieGrid from "../components/MovieGrid";
import Modal from "../components/Modal";

interface Movie {}

export default function TopRated() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, []);

  function handleMovieClick(movie: any) {
    console.log("######## movie ############:", movie);
    setSelectedMovie(movie);
  }

  function handleCloseModal() {
    setSelectedMovie(null);
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold m-3">Top Rated</h1>
        <MovieGrid movies={movies} handleMovieClick={handleMovieClick} />
        {selectedMovie && <Modal movie={selectedMovie} handleClose={handleCloseModal} />}
      </main>
    </div>
  );
}
