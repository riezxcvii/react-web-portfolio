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
      desktop: anslmsD,
      mobile: anslmsM,
      mobileVisibility: "block",
      alt: "ANS LMS - Login Page",
      id: 1,
    },
    {
      title: "StackTrek Scheduling System",
      description: "Next.js • Tailwind CSS • Prisma • Supabase",
      desktop: stackschedD,
      mobile: stackschedM,
      mobileVisibility: "block",
      alt: "StackSched - Scheduling Page",
      id: 2,
    },
    {
      title: "Appointment System",
      description: "Java • Java Swing • JDBC • MySQL",
      desktop: appointment,
      mobileVisibility: "hidden",
      alt: "Appointment System - Login Page",
      id: 3,
    },
    {
      title: "Inventory System",
      description: "Java • Java Swing • JDBC • MySQL",
      desktop: inventory,
      mobileVisibility: "hidden",
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
      <div id="projects">
        <h1 className="name md:py-4 py-0 md:text-3xl text-2xl px-8 rounded-lg w-full text-white">
          PROJECTS
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

          {/* Project list */}
          <ul
            ref={containerRef}
            className="items-center mx-auto overflow-x-hidden px-0 py-3 flex justify-start gap-8"
          >
            {projects.map((p) => (
              <li key={p.id} className="text-black rounded-md px-6 py-4">
                <div className="flex justify-between space-x-4">
                  {/* Desktop mockup */}
                  <div>
                    <div className="relative mx-auto border-black bg-gray-black border-[16px] rounded-t-xl w-full h-fit bg-black">
                      <div className="rounded-xl overflow-hidden w-[24rem]">
                        {/* Screen image */}
                        <img
                          src={p.desktop}
                          className="dark:hidden h-[140px] md:h-full w-full rounded-xl my-0"
                          alt={p.alt}
                        />
                      </div>
                    </div>
                    <div className="relative mx-auto bg-gray-200 rounded-b-xl h-[24px] max-w-[301px] md:h-[28px] md:max-w-[512px]"></div>
                    <div className="relative mx-auto bg-gray-200 shadow-lg rounded-b-xl h-[55px] max-w-[83px] md:h-[40px] md:max-w-[85px]"></div>
                  </div>

                  {/* Phone mockup */}
                  <div className={p.mobileVisibility}>
                    <div class="relative mx-auto border-black border-[10px] rounded-[2rem] h-[300px] w-[170px] shadow-xl">
                      {/* Notch */}
                      <div class="w-[70px] h-[11px] bg-black top-0 mt-[-0.35rem] rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                      {/* Volume up */}
                      <div class="h-[30px] w-[3px] bg-black absolute -start-[13px] top-[50px] rounded-s-lg"></div>
                      {/* Volume down */}
                      <div class="h-[30px] w-[3px] bg-black absolute -start-[13px] top-[90px] rounded-s-lg"></div>
                      {/* Power button */}
                      <div class="h-[45px] w-[3px] bg-black absolute -end-[13px] top-[65px] rounded-e-lg"></div>
                      <div class="rounded-[1.3rem] overflow-hidden w-full h-full bg-white">
                        {/* Screen image */}
                        <img
                          src={p.mobile}
                          class="dark:hidden w-full h-full"
                          alt={p.alt}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-end h-max space-y-2 w-full text-center tracking-wide bg-white p-4 rounded-md shadow-lg mt-4">
                  {/* Project title */}
                  <span className="name md:text-xl text-sm ">{p.title}</span>
                  <span className="md:text-base text-sm ">{p.description}</span>
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
    </div>
  );
};

export default Projects;
