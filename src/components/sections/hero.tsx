"use client";
import Image from "next/image";
import React from "react";
import Me from "../../lib/assets/me.jpg";
export default function Hero() {
  return (
    <section className="mb-44">
      <div className="container mx-auto px-10 md:px-14 lg:px-32 py-20">
        <h5 className="text-sm md:text-base">Hi, my name is</h5>
        <h1 className="text-3xl md:text-6xl lg:text-8xl mt-5">
          Justice Julius
        </h1>
        <div className="flex flex-row items-center mt-2 gap-4 ">
          <div>
            <h1 className="text-3xl md:text-6xl lg:text-8xl text-black/50">
              Full-Stack Engineer
            </h1>
          </div>
          <div className="relative w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 mb-4">
            <Image
              src={Me}
              alt="Moi"
              fill
              className="object-cover object-[50%_80%] rounded-full border-4 border-black/10 shadow-md"
              sizes="(max-width: 768px) 80px, (max-width: 1024px) 112px, 144px"
              priority
            />
          </div>{" "}
        </div>
        <p className="text-sm md:text-lg lg:text-xl mt-6">
          I’ve always been fascinated by how ideas turn into products that shape
          the way people live and connect. That curiosity led me to code — the
          language that turns imagination into something real.
          <br></br>
          <br></br>
          My professional journey began at{" "}
          <a href="https://niit.com" target="_blank" className="text-black/50">
            NIIT
          </a>
          , where I discovered my love for building things that work beautifully
          behind the scenes. I went on to earn a{" "}
          <span className="font-medium">BSc in Computer Science</span> from{" "}
          <span className="font-medium">Babcock University</span>.<br></br>
          <br></br>
          Since then, I’ve spent my time exploring how technology, design, and
          logic come together to solve real problems — from crafting responsive
          web apps to designing efficient backend systems. I enjoy the process
          of transforming complex ideas into elegant, scalable solutions that
          people actually enjoy using.
          <br></br>
          <br></br>
          Beyond the code, I’m deeply motivated by growth — both personal and
          technical. I see every project as a step toward mastering the craft,
          and every challenge as a reminder that learning never stops.
        </p>
      </div>
    </section>
  );
}
