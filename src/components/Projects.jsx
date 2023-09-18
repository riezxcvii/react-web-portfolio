import React, { useState } from "react";
import "flowbite";
import GitHub from "../assets/svg/github.svg";

const Projects = () => {
  // set array value for projects and call it in the list
  const [projects] = useState([
    {
      title: "Library Management System",
      subTitle: "Capstone Project",
      year: " • 2022",
      description:
        "An automated library system for Antique National School built using HTML, Tailwind CSS, PHP, and MySQL.",
      link: "https://github.com/rieza-ix/library-management-system",
      id: 1,
    },
    {
      title: "Scheduling System",
      subTitle: "OJT Project",
      year: " • 2023",
      description:
        "A scheduling system created for part-time trainers from StackTrek built with Next.js, TailwindCSS, and Supabase.",
      link: "https://github.com/Stacktrek-Training/stack-sched",
      id: 2,
    },
  ]);

  projects.sort((a, b) => b.id - a.id); // sort the 'projects' array in descending order based on the 'id' property

  return (
    <div className="min-h-screen bg-gradient-to-b from-dirtyWhite to-lightPeach">
      <h1 className="name p-8 md:text-4xl">PROJECTS</h1>

      <ol className="px-8 flex flex-wrap">
        {projects.map((project) => (
          <li key={project.id}>
            <div className="bg-dirtyWhite p-6 m-[0.85rem] h-[10.8rem] w-[25rem] rounded-lg shadow-md flex">
              <div className="w-[38rem]">
                <h1 className="title text-xl">{project.title}</h1>
                <div className="flex items-center">
                  <h2 className="text-lg mb-2">{project.subTitle}</h2>
                  <h3 className="text-xs mb-2 ml-2">{project.year}</h3>
                </div>
                <h2 className="text-sm">{project.description}</h2>
              </div>

              <div className="text-sm justify-center my-auto items-center w-20 py-4 space-y-4 px-1">
                <a href={project.link} target="_blank">
                  <img src={GitHub} alt="GitHub" />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Projects;
