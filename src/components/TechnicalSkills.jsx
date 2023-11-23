import React, { useState } from "react";
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

const TechnicalSkills = () => {
  const [hardSkills] = useState([
    { skill: "HTML", logo: html5, alt: "HTML Logo", id: 1 },
    { skill: "CSS", logo: css, alt: "CSS Logo", id: 2 },
    { skill: "Java", logo: java, alt: "Java Logo", id: 3 },
    { skill: "JavaScript", logo: javascript, alt: "JavaScript Logo", id: 4 },
    { skill: "PHP", logo: php, alt: "PHP Logo", id: 5 },
    { skill: "MySQL", logo: mysql, alt: "MySQL Logo", id: 6 },
    { skill: "Java Swing", logo: javaswing, alt: "Java Swing Logo", id: 7 },
    { skill: "React", logo: rjs, alt: "React Logo", id: 8 },
    { skill: "Next.js", logo: nextjs, alt: "Next.js Logo", id: 9 },
    { skill: "Tailwind CSS", logo: tailwind, alt: "Tailwind CSS Logo", id: 10 },
  ]);

  return (
    <div id="skills" className="md:mb-5 mb-11">
      <h1 className="name md:py-4 py-0 md:text-3xl text-2xl px-8 rounded-lg w-full text-white">
        TECHNICAL SKILLS
      </h1>

      <ul className="md:h-[11.5rem] h-[20rem] overflow-y-scroll p-8 grid md:grid-cols-5 grid-cols-2 justify-between gap-8">
        {hardSkills.map((hs) => (
          <li
            key={hs.id}
            className="flex md:h-20 h-[3.5rem] bg-white text-black rounded-md w-full md:px-6 px-4 md:py-4 py-2"
          >
            <img
              src={hs.logo}
              className="md:w-12 w-10 md:mr-4 mr-2 h-fit my-auto"
              alt={hs.alt}
            />
            <span className="title tracking-wide md:text-lg text-sm align-middle my-auto">
              {hs.skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnicalSkills;
