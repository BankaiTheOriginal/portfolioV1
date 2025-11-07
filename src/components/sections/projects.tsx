"use client";
import React, { useState } from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Vendtill POS API",
      description: [
        "Retrieves sales information using configured webhooks and transforms it into understandable data by Zoho Books using batch processing to reduce API load",
        "Retrieves and synchronizes real-time customer data and information on the go",
        "Updates and verifies item data in schedules to provide always up-to-date information",
      ],
    },
    {
      id: 2,
      name: "Microsoft BC API",
      description: [
        "Uploads and transforms expense information and uploads it to Microsoft BC",
        "Posts, verifies, and makes approved expense payments using Payable API",
        "Regular scheduled checks and syncs of expenses and payments made in Payable, Microsoft BC, and Zoho to ensure uniform data across all platforms",
      ],
    },
    {
      id: 3,
      name: "Python IDE",
      description: [
        "An IDE suite featuring an optimization compiler, interpreter, syntax highlighting, and error highlighting",
        "The compiler/interpreter operates on basic Python syntax supporting assignment statements, print statements, PEMDAS expressions, non-unary operators, and comments",
      ],
    },
    {
      id: 4,
      name: "Portfolio Site",
      description: [
        "Designed and built my portfolio site from scratch following industry-level design principles",
        "Implemented full responsiveness across all screen sizes",
      ],
    },
    {
      id: 5,
      name: "Cryb —(Currently in Dev)",
      description: [
        "Building a full-stack web and mobile platform for property listings",
        "Backend: NestJS + PostgreSQL with Prisma ORM",
        "Authentication: Firebase (Gmail + email/password)",
        "Frontend: Next.js with Expo + NativeWind for mobile",
      ],
    },
    {
      id: 6,
      name: "GitHub Contributions Visualizer (Currently in Dev)",
      description: [
        "Pulls data from the GitHub API to display commit activity",
        "Visual green-box contribution chart with user profile data",
      ],
    },
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-10 md:px-14 lg:px-32 py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-10">
          My Projects
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left px-4 py-3 border-l-2 ${
                  activeTab === index
                    ? "border-black bg-black/10 text-black"
                    : "border-gray-300 hover:bg-gray-200 text-black"
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="md:w-3/4 mt-6 md:mt-0 md:ml-10">
            <h3 className="text-xl font-semibold text-black">
              {projects[activeTab].name}{" "}
            </h3>
            <ul className="list-disc pl-6 space-y-2 py-4">
              {projects[activeTab].description.map((desc, index) => (
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
