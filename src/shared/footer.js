import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-between w-full p-4 text-white bg-blue-500">
      <span>
        © {new Date().getFullYear()} Dr. Albert M. Boyce, DDS. All
        rights reserved.
      </span>
    </footer>
  );
}
