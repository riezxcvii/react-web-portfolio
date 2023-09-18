import React from "react";
import "flowbite";
import { useState } from "react";
import StackTrekLogo from "../assets/img/stacktrek-logo.png";

const Experiences = () => {
  // set array value for experiences and call it in the list
  const [experience] = useState([
    {
      link: "https://stacktrek.com",
      title: "On-The-Job Training",
      company: "StackTrek Academy",
      date: "Feb 2023 - May 2023",
      logo: StackTrekLogo,
      alt: "StackTrek Logo",
      id: 1,
    },
  ]);

  experience.sort((a, b) => b.id - a.id); // sort the 'experience' array in descending order based on the 'id' property

  return (
    <div className="min-h-screen bg-gradient-to-b from-dirtyWhite to-lightPeach">
      <h1 className="name p-8 md:text-4xl">EXPERIENCES</h1>

      {/* list of experiences */}
      <ol className="px-8 flex flex-wrap">
        {experience.map((exp) => (
          <li key={exp.id}>
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              data-popover-target="popover-default"
              className="bg-dirtyWhite p-6 m-[0.85rem] h-[8rem] w-[25rem] rounded-lg shadow-md flex"
            >
              <div>
                <h1 className="title text-xl">{exp.title}</h1>
                <h2 className="text-lg">{exp.company}</h2>
                <h2 className="text-sm">{exp.date}</h2>
              </div>

              <div className="flex w-20 ml-auto items-center">
                <img src={exp.logo} alt={exp.alt} />
              </div>
            </a>
          </li>
        ))}

        {/* pop hover */}
        <div
          data-popover
          id="popover-default"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-fit text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
        >
          <div className="px-3 py-2 text-xs">
            <p>Click to visit their website!</p>
          </div>
          <div data-popper-arrow></div>
        </div>
      </ol>
    </div>
  );
};

export default Experiences;
