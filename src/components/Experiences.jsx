import React from "react";
// import "flowbite/dist/flowbite.css";
import "flowbite";
import StackTrekLogo from "../assets/img/stacktrek/stacktrek-logo.png";
import st1 from "../assets/img/stacktrek/stacktrek-photoshoot.jpg";
import st2 from "../assets/img/stacktrek/stacktrek-working.jpeg";
import st3 from "../assets/img/stacktrek/stacktrek-meeting.jpg";
import st4 from "../assets/img/stacktrek/stacktrek-group.JPG";
import st5 from "../assets/img/stacktrek/stacktrek-working2.jpg";

const Experiences = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dirtyWhite to-lightPeach">
      <h1 className="name p-8 md:text-4xl">Experiences</h1>

      <div className="px-8 py-4">
        <a
          href="https://stacktrek.com"
          target="_blank"
          data-popover-target="popover-default"
          className="bg-dirtyWhite p-6 w-96 rounded-lg shadow-md flex"
        >
          <div>
            <h1 className="title text-xl">On-The-Job Training</h1>
            <h2 className="text-lg">Stacktrek Academy</h2>
            <h2 className="text-sm">February 2023 - May 2023</h2>
          </div>

          <div className="flex w-20 ml-auto items-center">
            <img src={StackTrekLogo} alt="StackTrek Logo" />
          </div>
        </a>

        <div
          data-popover
          id="popover-default"
          role="tooltip"
          class="absolute z-10 invisible inline-block w-fit text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
        >
          <div class="px-3 py-2 text-xs">
            <p>Click to visit their website!</p>
          </div>
          <div data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
