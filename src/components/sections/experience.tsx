"use client";
import React, { useState } from "react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "NIIT",
      role: "Full Stack Developer",
      duration: "Jan 2023 - Aug 2023",
      description: [
        "Created and Handled, an online examination for IT students during Internship",
        "Handled Authentication for seamless commencement and submission of accurate examination results",
        "Setup routers and servers, boosting network inter-connectivity between staff and students",
        "Performed regular system diagnosis on computer systems",
        "Regular security and firewall updates were performed on computer systems to ensure safety for staff and students",
      ],
    },
    {
      id: 2,
      company: "Excellium Consulting",
      role: "Full Stack Developer",
      duration: "June 2025 - Present",
      description: [
        "Built robust backend integrations and synchronizations between services, reducing user input by 90%",
        "Followed security protocols and network compliance regulations for application integrations",
        "Built scripts and APIs to integrate Sage Pastel 50c with Zoho Books",
        "Implemented updates immediately based on user feedback",
        "Followed strict efficiency protocols to ensure APIs were optimized for time complexity",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-10 md:px-14 lg:px-32 py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-10">
          Where I’ve Worked
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4">
            {experiences.map((experience, index) => (
              <button
                key={experience.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left px-4 py-3 border-l-2 ${
                  activeTab === index
                    ? "border-black bg-black/10 text-black"
                    : "border-gray-300 hover:bg-gray-200 text-black"
                }`}
              >
                {experience.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="md:w-3/4 mt-6 md:mt-0 md:ml-10">
            <h3 className="text-xl font-semibold text-black">
              {experiences[activeTab].role}{" "}
              <span className="text-black/30">
                @ {experiences[activeTab].company}
              </span>
            </h3>
            <p className="text-gray-500 mb-4">
              {experiences[activeTab].duration}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {experiences[activeTab].description.map((desc, index) => (
                <li key={index} className="text-gray-700">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
