import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-between w-full p-4 text-white bg-blue-500">
      <span>
        © {new Date().getFullYear()} Dr. Albert M. Boyce, DDS. All rights
        reserved.
      </span>
      <span>
        Site design by:{" "}
        <a
          href="https://www.jcc-dev.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="text-blue-300 underline hover:text-blue-200"
        >
          Jordan Cruz-Correa
        </a>
      </span>
    </footer>
  );
}
