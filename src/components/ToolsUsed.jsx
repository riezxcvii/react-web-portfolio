import React, { useState, useRef, useEffect } from "react";
import git from "../assets/svg/git.svg";
import github from "../assets/svg/github.svg";
import vscode from "../assets/svg/vs-code.svg";
import netbeans from "../assets/img/netbeans.png";
import canva from "../assets/svg/canva.svg";
import figma from "../assets/svg/figma.svg";
import previous from "../assets/svg/previous.svg";
import next from "../assets/svg/next.svg";

const ToolsUsed = () => {
  // Set array value for tools used and call it in the list
  const [toolsUsed] = useState([
    { skill: "Canva", logo: canva, alt: "Canva Logo", id: 1 },
    { skill: "Figma", logo: figma, alt: "Figma Logo", id: 2 },
    { skill: "VS Code", logo: vscode, alt: "VS Code Logo", id: 3 },
    { skill: "Git", logo: git, alt: "Git Logo", id: 4 },
    { skill: "GitHub", logo: github, alt: "GitHub Logo", id: 5 },
    { skill: "NetBeans", logo: netbeans, alt: "NetBeans Logo", id: 6 },
  ]);

  toolsUsed.sort((a, b) => b.id - a.id); // Sort the 'toolsUsed' array in descending order based on the 'id' property

  // JavaScript code for previous and next button
  const containerRef = useRef();
  const [isScrollable, setIsScrollable] = useState(false);

  const scrollSkills = (direction) => {
    const container = containerRef.current;

    if (container) {
      const scrollAmount = container.offsetWidth;

      if (direction === "next") {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else if (direction === "previous") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const hasScrollbar = container.scrollWidth > container.clientWidth;
        setIsScrollable(hasScrollbar);
      }
    };

    container.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  return (
    <div className="md:mb-4 mb-10">
      <h1 className="name md:text-3xl text-2xl px-8 md:py-4 py-0 rounded-lg w-full text-white">
        TOOLS USED
      </h1>

      <div className="flex px-8">
        {/* Previous button */}
        {isScrollable && (
          <img
            src={previous}
            id="previous"
            className="w-12 font-extrabold"
            alt="Go to previous"
            onClick={() => scrollSkills("previous")}
          />
        )}

        {/* Skill set */}
        <ul
          ref={containerRef}
          className="md:h-[11.5rem] h-[13rem] w-[78rem] items-center mx-auto overflow-x-hidden px-0 py-6 flex justify-start gap-8"
        >
          {toolsUsed.map((ts) => (
            <li
              key={ts.id}
              className="h-32 bg-white text-black rounded-md w-32 px-4 py-4"
            >
              <div className="flex flex-col w-24 items-center justify-end h-full text-center">
                <img
                  src={ts.logo}
                  className="w-auto h-11 justify-between m-auto"
                  alt={ts.alt}
                />
                <span className="title tracking-wide md:text-base text-sm align-middle my-auto flex">
                  {ts.skill}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Next button */}
        {isScrollable && (
          <img
            src={next}
            id="next"
            className="w-12 font-extrabold"
            alt="Go to next"
            onClick={() => scrollSkills("next")}
          />
        )}
      </div>
    </div>
  );
};

export default ToolsUsed;
