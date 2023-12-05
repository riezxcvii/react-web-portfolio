import React, { useState, useRef, useEffect } from "react";
import html5 from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import java from "../assets/svg/java.svg";
import javascript from "../assets/svg/javascript.svg";
import php from "../assets/svg/php.svg";
import mysql from "../assets/svg/mysql.svg";
import javaswing from "../assets/img/javaswing.png";
import rjs from "../assets/svg/rjs.svg";
import nextjs from "../assets/svg/next-js.svg";
import tailwind from "../assets/svg/tailwind-css.svg";
import previous from "../assets/svg/previous.svg";
import next from "../assets/svg/next.svg";

const TechnicalSkills = () => {
  // Set array value for hard skills and call it in the list
  const [hardSkills] = useState([
    { skill: "HTML", logo: html5, alt: "HTML Logo", id: 1 },
    { skill: "CSS", logo: css, alt: "CSS Logo", id: 2 },
    { skill: "Java", logo: java, alt: "Java Logo", id: 3 },
    { skill: "JavaScript", logo: javascript, alt: "JavaScript Logo", id: 4 },
    { skill: "PHP", logo: php, alt: "PHP Logo", id: 5 },
    { skill: "MySQL", logo: mysql, alt: "MySQL Logo", id: 6 },
    { skill: "React", logo: rjs, alt: "React Logo", id: 7 },
    { skill: "Next.js", logo: nextjs, alt: "Next.js Logo", id: 8 },
    { skill: "Tailwind CSS", logo: tailwind, alt: "Tailwind CSS Logo", id: 9 },
    { skill: "Java Swing", logo: javaswing, alt: "Java Swing Logo", id: 10 },
  ]);

  hardSkills.sort((a, b) => b.id - a.id); // Sort the 'hardSkills' array in descending order based on the 'id' property

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
    <div id="skills" className="md:mb-6 pt-[5rem]">
      <h1 className="name md:py-4 py-0 md:text-3xl text-2xl px-8 rounded-lg w-full text-white">
        TECHNICAL SKILLS
      </h1>

      <div className="flex px-8 h-full">
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
          className="h-full w-[78rem] items-center mx-auto overflow-x-hidden px-0 py-6 flex justify-start gap-8"
        >
          {hardSkills.map((hs) => (
            <li
              key={hs.id}
              className="md:h-32 h-36 bg-white text-black rounded-md w-32 px-4 py-4"
            >
              <div className="flex flex-col w-24 items-center justify-end h-full text-center">
                <img
                  src={hs.logo}
                  className="w-auto h-11 justify-between m-auto"
                  alt={hs.alt}
                />
                <span className="title tracking-wide md:text-base text-sm align-middle my-auto flex">
                  {hs.skill}
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

export default TechnicalSkills;
