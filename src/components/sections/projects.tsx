import React from "react";
import { SparklesText } from "../ui/sparkles-text";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-10 md:px-14 lg:px-32 py-20">
        <h1 className="text-2xl md:text-4xl font-bold text-black mb-10">
          Projects
        </h1>
        <SparklesText
          className="text-xl md:text-2xl font-light text-black/50"
          text="Coming soon😁👌"
        />
      </div>
    </section>
  );
}
