import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-10 md:px-14 lg:px-32 py-20">
        <div
          className="flex flex-row gap-6 justify-center items-center text-3xl 
          md:text-4xl lg:text-5xl text-black/50"
        >
          <a
            href="https://github.com/BankaiTheOriginal"
            className="transition  hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/justice-julius-attah-7137b2311"
            className="transition  hover:text-black"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/th3bankai/"
            className="transition  hover:text-black"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
