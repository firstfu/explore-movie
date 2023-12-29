"use client";

import { SyntheticEvent, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = async (e: SyntheticEvent) => {
    e.preventDefault();
    alert(query);
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
              console.log(e.target.value);
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
