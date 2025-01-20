"use client";
import React from "react";

export default function Hero() {
  return (
    <section className="mb-44">
      <div className="container mx-auto px-10 md:px-14 lg:px-32 py-20">
        <h5 className="text-sm md:text-base">Hi, my name is</h5>
        <h1 className="text-3xl md:text-6xl lg:text-8xl mt-5">
          Justice Julius
        </h1>
        <h1 className="text-3xl md:text-6xl lg:text-8xl text-black/50">
          Full-Stack Engineer
        </h1>
        <p className="text-sm md:text-lg lg:text-xl mt-6">
          I’m a full-stack engineer dedicated to crafting efficient and dynamic
          digital solutions. With expertise in both front-end and back-end
          development, I specialize in building robust, user-focused
          applications. Currently, I’m refining my skills and developing
          accessible, scalable systems through my experience with
          <a href="https://niit.com" target="_blank" className="text-black/50">
            {" "}
            NIIT
          </a>
          .{" "}
        </p>
      </div>
    </section>
  );
}
