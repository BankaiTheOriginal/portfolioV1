"use client";
import React from "react";
import RainbowButton from "@/components/ui/rainbow-button";

export default function Contact() {
  function handleEmailClick() {
    window.location.href = "mailto:justicejuliuss1@gmail.com";
  }
  return (
    <section id="contact">
      <div className="container mx-auto px-10 md:px-14 lg:px-32 py-20">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-black/50 mb-10 text-center">
            Contact Me
          </h1>
        </div>
        <div className="text-sm md:text-lg lg:text-xl text-black/50 text-center">
          I&apos;m actively seeking new opportunities and my inbox is always
          open. Whether you have a question or just want to say hello, I&apos;ll
          do my best to respond promptly!
        </div>
        <div className="flex mt-7 justify-center items-center">
          <RainbowButton onClick={handleEmailClick}>Contact Me</RainbowButton>
        </div>
      </div>
    </section>
  );
}
