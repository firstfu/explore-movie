"use client";

import { SyntheticEvent, useEffect, useState } from "react";
import { BASE_URL } from "./constants";

async function searchMovies(query: string) {
  try {
    let resposne = await fetch(`${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${encodeURIComponent(query)}}`);
    return await resposne.json();
  } catch (error) {
    console.log("🚀 ~ file: page.tsx:9 ~ searchMovies ~ error:", error);
    return [];
  }
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!query) return;
    const res = await searchMovies(query);
    console.log("🚀 ~ file: page.tsx:23 ~ handleSearch ~ res:", res);
    setMovies(res.results);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="flex flex-col items-center justify-center  min-h-screen">
        <h1 className="text-6xl font-bold">Movie Explorer</h1>
        <form onSubmit={handleSearch} className="mt-8">
          <input
            type="text"
            value={query}
            onChange={e => {
              //   console.log(e.target.value);
              setQuery(e.target.value);
            }}
            placeholder="Search for a movie..."
            className="px-4 py-2 w-80 text-gray-900"
          />
          <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </form>
        {/* MovieGrid */}
      </main>

      {/* Modal */}
    </div>
  );
}
