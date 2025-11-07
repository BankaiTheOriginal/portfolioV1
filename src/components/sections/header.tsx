import React from "react";
import { LayoutTextFlip } from "../ui/layout-text-flip";

export default function Header() {
  return (
    <header className="sticky backdrop-filter backdrop-blur-lg">
      <div>
        <div className="bg-black text-center text-white p-4">
          Welcome to my portfolio site 🚀
        </div>
        <div className="p-4 flex justify-between items-center bg-white text-black cursor-default">
          <span className="w-full px-2 md:py-2 md:px-4 rounded-full flex   text-xl sm:text-2xl md:text-4xl">
            <LayoutTextFlip
              text=""
              words={["Strategic", "Disciplined", "Relentless", "The Bankai"]}
            />
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
