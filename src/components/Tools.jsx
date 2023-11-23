import React, { useState } from "react";
import git from "../assets/svg/git.svg";
import github from "../assets/svg/github.svg";
import vscode from "../assets/svg/vs-code.svg";
import netbeans from "../assets/img/netbeans.png";
import canva from "../assets/svg/canva.svg";
import figma from "../assets/svg/figma.svg";

const Tools = () => {
  const [toolsUsed] = useState([
    { skill: "Git", logo: git, alt: "Git Logo", id: 1 },
    { skill: "GitHub", logo: github, alt: "GitHub Logo", id: 2 },
    { skill: "VS Code", logo: vscode, alt: "VS Code Logo", id: 3 },
    { skill: "NetBeans", logo: netbeans, alt: "NetBeans Logo", id: 4 },
    { skill: "Canva", logo: canva, alt: "Canva Logo", id: 5 },
    { skill: "Figma", logo: figma, alt: "Figma Logo", id: 6 },
    { skill: "Figma", logo: figma, alt: "Figma Logo", id: 6 },
    { skill: "Figma", logo: figma, alt: "Figma Logo", id: 6 },
    { skill: "Figma", logo: figma, alt: "Figma Logo", id: 6 },
    { skill: "Figma", logo: figma, alt: "Figma Logo", id: 6 },
    { skill: "Figma", logo: figma, alt: "Figma Logo", id: 6 },
    { skill: "Figma", logo: figma, alt: "Figma Logo", id: 6 },
    { skill: "Figma", logo: figma, alt: "Figma Logo", id: 6 },
  ]);

  return (
    <div className="md:mb-5 mb-11">
      <h1 className="name md:text-3xl text-2xl px-8 md:py-4 py-0 rounded-lg w-full text-white">
        TOOLS USED
      </h1>

      <ul className="md:h-[11.5rem] h-[20rem] overflow-y-scroll p-8 grid md:grid-cols-5 grid-cols-2 justify-between gap-8">
        {toolsUsed.map((tools) => (
          <li
            key={tools.id}
            className="flex bg-white md:h-20 h-[3.5rem] text-black rounded-md w-full md:px-6 px-4 md:py-4 py-0"
          >
            <img
              src={tools.logo}
              className="md:w-12 w-10 md:mr-4 mr-2 h-fit my-auto"
              alt={tools.alt}
            />
            <span className="title tracking-wide md:text-lg text-sm align-middle my-auto">
              {tools.skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tools;
