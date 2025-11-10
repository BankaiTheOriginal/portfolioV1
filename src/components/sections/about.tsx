import React from "react";
import { Icons } from "../ui/icons/icons";
const iconList = [
  Icons.typescript,
  Icons.javascript,
  Icons.react,
  Icons.nextjs,
  Icons.nestjs,
  Icons.firebase,
  Icons.tailwindcss,
  Icons.java,
  Icons.redis,
  Icons.express,
  Icons.prisma,
  Icons.mongodb,
  Icons.mongoose,
  Icons.django,
];
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto px-10 md:px-14 lg:px-32 py-20">
        <div>
          <p className=" text-2xl md:text-4xl font-bold text-black mb-10">
            About Me
          </p>
          <div className="text-sm md:text-lg lg:text-xl mt-3">
            Hello, I’m Justice Julius, a full-stack engineer passionate about
            building impactful digital experiences. My journey began with coding
            in my early days, and I further developed my skills at{" "}
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
            Here are a few technologies i work with:
          </div>
          <br></br>
          <div className="relative overflow-hidden w-full container mt-6">
            <ul className="flex gap-20  whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
              {iconList.concat(iconList).map((Icon, index) => (
                <li key={index} className="inline-block">
                  <Icon className="text-4xl text-black hover:text-gray-800 transition-colors" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
