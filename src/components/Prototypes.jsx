import React, { useState, useRef, useEffect } from "react";
import stacksched from "../assets/img/prototype-stack-sched.png";
import inventory from "../assets/img/prototype-inventory-system.png";
import previous from "../assets/svg/previous.svg";
import next from "../assets/svg/next.svg";

const Prototypes = () => {
  // Set array value for hard skills and call it in the list
  const [projects] = useState([
    {
      title: "StackTrek Scheduling System",
      figma:
        "https://www.figma.com/proto/UF6Lf0hGmFoIIde3Q5pPR2/Scheduling-System?type=design&node-id=1-2&t=h0cyhoUJgxpLaXCY-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
      desktop: stacksched,
      mobileVisibility: "hidden my-auto",
      alt: "StackSched - Scheduling Page",
      id: 1,
    },
    {
      title: "Inventory System",
      figma:
        "https://www.figma.com/proto/ijlwB8FBESsBKHYa2OK8e4/Java-Inventory-System?type=design&node-id=1-2&t=cO6DQPGvZQY4XasA-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
      desktop: inventory,
      mobileVisibility: "hidden my-auto",
      alt: "Inventory System - Dashboard Page",
      id: 2,
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
      <div className="pt-[4rem] min-h-screen flex flex-col">
        <h1 className="name tracking-wider my-auto py-2 text-[1.6rem] px-8 w-fit rounded-lg text-[#e6af2e]">
          PROTOTYPES
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
            className="items-center mx-auto overflow-x-hidden overflow-y-auto px-4 py-4 md:flex block justify-start gap-8 md:space-y-0 space-y-8"
          >
            {projects.map((p) => (
              <li
                key={p.id}
                className="text-black rounded-b-[1rem] rounded-t-[30rem] md:p-6 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 bg-[#D7CEC2]"
              >
                <a href={p.figma} target="_blank" rel="noreferrer">
                  <div className="flex justify-between md:space-x-6 space-x-1">
                    {/* Desktop mockup */}
                    <div className="m-auto">
                      <div className="relative mx-auto border-black md:border-[10px] border-[8px] rounded-t-xl w-full h-fit bg-black">
                        <div className="rounded-lg overflow-hidden md:w-[20.4rem] w-[100%]">
                          {/* Screen image */}
                          <img
                            src={p.desktop}
                            className="dark:hidden h-[13vh] md:h-full w-full rounded-lg my-0"
                            alt={p.alt}
                          />
                        </div>
                      </div>
                      <div className="relative mx-auto bg-white shadow-xl rounded-b-xl h-[1.6vh] max-w-[301px] md:h-[28px] md:max-w-[512px]"></div>
                      <div className="relative mx-auto bg-white shadow-xl rounded-b-md h-[3vh] max-w-[26%] md:h-[40px] md:max-w-[85px]"></div>
                    </div>

                    {/* Phone mockup */}
                    <div className={p.mobileVisibility}>
                      <div className="relative m-auto border-black md:border-[10px] border-[6px] md:rounded-[2rem] rounded-[1.4rem] md:h-[270px] h-[17.8vh] md:w-[150px] w-[4.6rem] shadow-xl">
                        {/* Notch */}
                        <div className="md:w-[70px] w-[38px] md:h-[12px] h-[9.5px] bg-black top-0 mt-[-0.35rem] rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                        {/* Volume up */}
                        <div className="md:h-[30px] h-[20px] w-[3px] bg-black absolute md:-start-[12px] -start-[7px] md:top-[40px] top-[20px] rounded-s-lg"></div>
                        {/* Volume down */}
                        <div className="md:h-[30px] h-[20px] w-[3px] bg-black absolute md:-start-[12px] -start-[7px] md:top-[80px] top-[50px] rounded-s-lg"></div>
                        {/* Power button */}
                        <div className="md:h-[40px] h-[25px] w-[3px] bg-black absolute md:-end-[12px] -end-[7px] md:top-[58px] top-[33px] rounded-e-lg"></div>
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
                  <div className="flex flex-col items-center justify-end h-max space-y-2 w-full text-center tracking-wide md:pt-4 pt-2 p-2">
                    {/* Project title */}
                    <span className="name md:text-xl text-base">{p.title}</span>
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

export default Prototypes;
