import React from "react";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";

const Skills = () => {
  return (
    <div className="min-h-screen">
      <div className="md:flex">
        {/* technical skills */}
        <div className="w-full bg-darkPeach">
          <h1 className="name w-fit py-2 px-4 shadow-md bg-dirtyWhite rounded-lg md:text-3xl mx-auto my-12 text-gray-900 text-center">
            Technical Skills
          </h1>

          <div className="md:flex">
            {/* skill set */}
            <HardSkills />
          </div>
        </div>

        {/* diagonal separator */}
        <div className="invisible md:visible bg-white md:border-l-[12rem] border-l-[4rem] border-darkPeach md:border-b-[39rem] border-b-[49rem] border-b-dirtyWhite"></div>

        {/* soft skills */}
        <div className="w-full relative bg-dirtyWhite">
          <h1 className="name w-fit py-2 px-4 shadow-md bg-darkPeach rounded-lg md:text-3xl mx-auto my-12 text-white text-center">
            Skills
          </h1>

          <div className="md:flex">
            {/* skill set */}
            <SoftSkills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
