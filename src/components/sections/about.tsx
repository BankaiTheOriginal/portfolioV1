import React from "react";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto px-10 md:px-14 lg:px-32 py-20">
        <div>
          <p className=" text-2xl md:text-4xl font-bold text-black mb-10">
            About Me
          </p>
          <div className="text-sm md:text-lg lg:text-xl mt-3">
            Hello! I’m Julius-Attah Chukwulaka, a full-stack engineer passionate
            about building impactful digital experiences. My journey began with
            coding in my early days, and I further developed my skills at{" "}
            <a
              href="https://niit.com"
              target="_blank"
              className="text-black/50"
            >
              {" "}
              NIIT
            </a>
            , where I explored HTML, CSS, and JavaScript.<br></br>
            <br></br>Today, I focus on creating scalable and user-friendly
            applications. I’ve worked on a range of projects, from property
            rental platforms to e-commerce solutions. My current goal is to
            design accessible and efficient systems using modern technologies.
            Here are a few technologies I’ve been working with recently:
          </div>
          <br></br>
          <ul className="grid grid-cols-2 text-sm md:text-lg lg:text-xl mt-6 text-black/50 list-disc pl-5">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>NestJS</li>
            <li>Firebase</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
