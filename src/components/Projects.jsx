import React from "react";
import Poster from "../assets/img/project-lms/Byte-Techies.png";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dirtyWhite to-lightPeach">
      <h1 className="name py-4 md:text-4xl text-center">PROJECTS</h1>

      <ol className="px-8 flex flex-wrap">
        <li>
          <div className="bg-dirtyWhite p-6 m-[0.85rem] h-[15.95rem] w-[28rem] rounded-lg shadow-md flex">
            <div>
              <div>
                <h1 className="title text-xl mb-1">
                  Library Management System
                </h1>
                <h2 className="text-sm">
                  An automated library system for Antique National School built
                  using HTML, Tailwind CSS, PHP, and MySQL.
                </h2>
              </div>

              <div className="text-sm items-end mt-11 justify-start w-52 pt-4 flex space-x-4">
                <div>
                  <h2>Status</h2>
                </div>
                <div className="flex space-x-4">
                  <button>GitHub</button>
                  <button>Screenshots</button>
                </div>
              </div>
            </div>

            <div className="flex w-full ml-auto items-start justify-end my-auto pl-4">
              <img src={Poster} alt="" />
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Projects;
