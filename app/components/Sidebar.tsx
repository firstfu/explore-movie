"use client";

import Link from "next/link";
import React from "react";

const navItems = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/now-playing",
    title: "Now Playing",
  },
  {
    href: "/popular",
    title: "Popular",
  },
  {
    href: "/top-rated",
    title: "Top Rated",
  },
  {
    href: "/upcoming",
    title: "Upcoming",
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  function closeSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={closeSidebar} className="fixed top-0  left-0 z-40 text-white m-2">
        {isOpen ? "X" : "Menu"}
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 h-full  z-30 w-54 bg-gray-800 p-5 transition-all duration-300">
          <nav className="mt-8 flex flex-col">
            {navItems.map(navItem => {
              return (
                <Link key={navItem.href} href={navItem.href} className="hover:bg-gray-700 text-white p-2 rounded transition-colors duration-200">
                  {navItem.title}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
