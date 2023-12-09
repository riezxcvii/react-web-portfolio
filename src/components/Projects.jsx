import React, { useState, useRef, useEffect } from "react";
import anslmsD from "../assets/img/desktop-ans-lms.png";
import anslmsM from "../assets/img/mobile-ans-lms.png";
import stackschedD from "../assets/img/desktop-stack-sched.png";
import stackschedM from "../assets/img/mobile-stack-sched.png";
import appointment from "../assets/img/desktop-appointment-system.png";
import inventory from "../assets/img/desktop-inventory-system.png";
import previous from "../assets/svg/previous.svg";
import next from "../assets/svg/next.svg";

const Projects = () => {
  // Set array value for hard skills and call it in the list
  const [projects] = useState([
    {
      title: "ANS Library Management System",
      description: "HTML • Tailwind CSS • PHP • MySQL",
      github: "https://github.com/rieza-ix/library-management-system.git",
      desktop: anslmsD,
      mobile: anslmsM,
      mobileVisibility: "block",
      alt: "ANS LMS - Login Page",
      id: 1,
    },
    {
      title: "StackTrek Scheduling System",
      description: "Next.js • Tailwind CSS • Prisma • Supabase",
      github: "https://github.com/Stacktrek-Training/stack-sched.git",
      desktop: stackschedD,
      mobile: stackschedM,
      mobileVisibility: "block",
      alt: "StackSched - Scheduling Page",
      id: 2,
    },
    {
      title: "Appointment System",
      description: "Java • Java Swing • JDBC • MySQL",
      github: "https://github.com/rieza-ix/java-appointment-system.git",
      desktop: appointment,
      mobileVisibility: "hidden ym-aut mr-[-2rem]o",
      alt: "Appointment System - Login Page",
      id: 3,
    },
    {
      title: "Inventory System",
      description: "Java • Java Swing • JDBC • MySQL",
      github: "https://github.com/rieza-ix/inventory-system.git",
      desktop: inventory,
      mobileVisibility: "hidden my-auto",
      alt: "Inventory System - Dashboard Page",
      id: 4,
    },
  ]);

  projects.sort((a, b) => b.id - a.id); // Sort the 'projects' array in descending order based on the 'id' property

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
      <div className="pt-[4rem] min-h-screen flex flex-col items-center">
        <h1 className="name my-auto py-4 text-4xl px-8 rounded-lg w-full text-white text-center">
          PROJECTS
        </h1>

        <div className="flex md:px-8 px-6 w-full md:py-0 py-2 md:h-full h-[79vh] my-auto">
          {/* Previous button */}
          {isScrollable && (
            <img
              src={previous}
              id="previous"
              className="w-12 font-extrabold md:block hidden mr-4"
              alt="Go to previous"
              onClick={() => scrollSkills("previous")}
            />
          )}

          {/* Project list */}
          <ul
            ref={containerRef}
            className="items-center mx-auto overflow-x-hidden overflow-y-auto px-0 py-3 md:flex block justify-start gap-8 md:space-y-0 space-y-8"
          >
            {projects.map((p) => (
              <li
                key={p.id}
                className="text-black rounded-md md:p-6 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 bg-white"
              >
                <a href={p.github} target="_blank" rel="noreferrer">
                  <div className="flex justify-between md:space-x-6 space-x-1">
                    {/* Desktop mockup */}
                    <div className="m-auto">
                      <div className="relative mx-auto border-black md:border-[10px] border-[8px] rounded-t-xl w-full h-fit bg-black">
                        <div className="rounded-lg overflow-hidden md:w-[24rem] w-[10rem]">
                          {/* Screen image */}
                          <img
                            src={p.desktop}
                            className="dark:hidden h-[100px] md:h-full w-full rounded-lg my-0"
                            alt={p.alt}
                          />
                        </div>
                      </div>
                      <div className="relative mx-auto bg-black rounded-b-xl h-[10px] max-w-[301px] md:h-[28px] md:max-w-[512px]"></div>
                      <div className="relative mx-auto bg-black shadow-xl rounded-b-md h-[20px] max-w-[45px] md:h-[40px] md:max-w-[85px]"></div>
                    </div>

                    {/* Phone mockup */}
                    <div className={p.mobileVisibility}>
                      <div className="relative m-auto border-black md:border-[10px] border-[8px] md:rounded-[2rem] rounded-[1.5rem] md:h-[300px] h-[165px] md:w-[170px] w-[100px] shadow-xl">
                        {/* Notch */}
                        <div className="md:w-[70px] w-[38px] md:h-[12px] h-[9.5px] bg-black top-0 mt-[-0.35rem] rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                        {/* Volume up */}
                        <div className="md:h-[30px] h-[20px] w-[3px] bg-black absolute md:-start-[12px] -start-[9px] md:top-[40px] top-[30px] rounded-s-lg"></div>
                        {/* Volume down */}
                        <div className="md:h-[30px] h-[20px] w-[3px] bg-black absolute md:-start-[12px] -start-[9px] md:top-[80px] top-[60px] rounded-s-lg"></div>
                        {/* Power button */}
                        <div className="md:h-[40px] h-[25px] w-[3px] bg-black absolute md:-end-[12px] -end-[9px] md:top-[58px] top-[48px] rounded-e-lg"></div>
                        <div className="md:rounded-[1.3rem] rounded-[1rem] overflow-hidden w-full h-full bg-white">
                          {/* Screen image */}
                          <img
                            src={p.mobile}
                            className="dark:hidden w-full h-full"
                            alt={p.alt}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end h-max space-y-2 w-full text-center tracking-wide md:pt-4 pt-2 p-2 mt-4">
                    {/* Project title */}
                    <span className="name md:text-xl text-base">{p.title}</span>
                    <span className="md:text-base text-sm">
                      {p.description}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          {/* Next button */}
          {isScrollable && (
            <img
              src={next}
              id="next"
              className="w-12 font-extrabold md:block hidden ml-4"
              alt="Go to next"
              onClick={() => scrollSkills("next")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
