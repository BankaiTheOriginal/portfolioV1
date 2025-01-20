import React from "react";

export default function Header() {
  return (
    <header className="sticky backdrop-filter backdrop-blur-lg">
      <div>
        <div className="bg-black text-center text-white p-4">
          Welcome to my portfolio site 🚀
        </div>
        <div className="p-4 flex justify-between items-center bg-white text-black cursor-default">
          <span className="bg-black px-2  md:py-2 md:px-4 rounded-full flex items-center justify-center">
            <h1 className="md:text-3xl  text-white p-2">J</h1>
          </span>
          <nav className="hidden md:flex gap-5">
            <a
              href="#about"
              className="hover:bg-black hover:text-white rounded-lg px-4 py-2 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:bg-black hover:text-white rounded-lg px-4 py-2 transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:bg-black hover:text-white rounded-lg px-4 py-2 transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="#projects"
              className="hover:bg-black hover:text-white rounded-lg px-4 py-2 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:bg-black hover:text-white rounded-lg px-4 py-2 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
