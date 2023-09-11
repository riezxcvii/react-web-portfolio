import React, { useState } from "react";
import Java from "../assets/svg/java.svg";
import JavaScript from "../assets/svg/javascript.svg";
import Php from "../assets/svg/php.svg";
import MySql from "../assets/svg/mysql.svg";
import rjs from "../assets/svg/rjs.svg";
import Next from "../assets/svg/next-js.svg";
import Tailwind from "../assets/svg/tailwind-css.svg";
import Canva from "../assets/svg/canva.svg";
import VSCode from "../assets/svg/vs-code.svg";
import Git from "../assets/svg/git.svg";
import GitHub from "../assets/svg/github.svg";
import Figma from "../assets/svg/figma.svg";

const HardSkills = () => {
  // set array value and call it in the developement skills section
  const [hardSkills] = useState([
    { skill: "Java", logo: Java, id: 1 },
    { skill: "JavaScript", logo: JavaScript, id: 2 },
    { skill: "PHP", logo: Php, id: 3 },
    { skill: "MySQL", logo: MySql, id: 4 },
    { skill: "React JS", logo: rjs, id: 5 },
    { skill: "Next.js", logo: Next, id: 6 },
    { skill: "Tailwind CSS", logo: Tailwind, id: 7 },
  ]);

  // set array value and call it in the tools used section
  const [toolsUsed] = useState([
    { skill: "Canva", logo: Canva, id: 1 },
    { skill: "VS Code", logo: VSCode, id: 2 },
    { skill: "Git", logo: Git, id: 3 },
    { skill: "GitHub", logo: GitHub, id: 4 },
    { skill: "Figma", logo: Figma, id: 5 },
  ]);

  return (
    <div className="w-full px-2 pb-2 md:p-0">
      {/* development skills */}
      <div className="w-full flex flex-wrap">
        {hardSkills.map((hard) => (
          <ul key={hard.id}>
            <li>
              <div className="flex md:ml-10 md:mx-[-1rem] justify-center items-center mt-4 bg-dirtyWhite rounded-lg py-2 px-4 w-fit">
                <img src={hard.logo} alt={hard.logo} className="md:w-8 w-4" />
                <h1 className="md:text-lg text-sm ml-2">{hard.skill}</h1>
              </div>
            </li>
          </ul>
        ))}
      </div>

      {/* tools used */}
      <div className="w-full flex flex-wrap mt-6">
        {toolsUsed.map((tool) => (
          <ul key={tool.id}>
            <li>
              <div className="md:ml-10 flex md:mx-[-1rem] items-center mt-4 bg-dirtyWhite rounded-lg py-2 px-4 w-fit">
                <img src={tool.logo} alt={tool.logo} className="w-8" />
                <h1 className="md:text-lg text-sm ml-4">{tool.skill}</h1>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default HardSkills;
