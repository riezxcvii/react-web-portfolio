import React, { useEffect, useRef, useState } from "react";
import mysql from "../assets/svg/mysql.svg";
import next from "../assets/svg/next.svg";
import previous from "../assets/svg/previous.svg";

const Database = () => {
  // Set array value for database and call it in the list
  const [database] = useState([
    { skill: "MySQL", logo: mysql, alt: "MySQL Logo", id: 1 },
  ]);

  database.sort((a, b) => b.id - a.id); // Sort the 'database' array in descending order based on the 'id' property

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
    <div>
      <h1 className="title tracking-wider my-auto text-2xl mt-6 px-8 w-fit rounded-lg text-white">
        Database
      </h1>

      <div className="flex px-8 h-full">
        {/* Previous button */}
        {isScrollable && (
          <img
            src={previous}
            id="previous"
            className="w-12 font-extrabold md:block hidden"
            alt="Go to previous"
            onClick={() => scrollSkills("previous")}
          />
        )}

        {/* Skill set */}
        <ul
          ref={containerRef}
          className="h-full md:w-[78rem] w-full items-center mx-auto overflow-x-auto px-0 py-4 flex justify-start md:gap-8 gap-4"
        >
          {database.map((d) => (
            <li
              key={d.id}
              className="bg-white w-fit rounded-md md:p-3 px-10 py-2"
            >
              <div className="flex w-full items-center justify-end h-full">
                <img
                  src={d.logo}
                  className="w-8 h-8 justify-between m-auto mr-2"
                  alt={d.alt}
                />
                <span className="title tracking-wide md:text-base text-sm align-middle my-auto flex">
                  {d.skill}
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
            className="w-12 font-extrabold md:block hidden"
            alt="Go to next"
            onClick={() => scrollSkills("next")}
          />
        )}
      </div>
    </div>
  );
};

export default Database;
