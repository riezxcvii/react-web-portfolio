import React from "react";
import HardSkills from "./HardSkills";

const Skills = () => {
  return (
    <div className="md:min-w-screen md:min-h-screen min-h-screen">
      <div className="flex">
        {/* technical skills */}
        <div className="bg-pastelBeige w-full">
          <h1 className="name w-fit py-2 px-4 shadow-md bg-dirtyWhite rounded-lg md:text-3xl mx-auto mt-10 mb-6 text-gray-900 text-center">
            HARD Skills
          </h1>

          <div className="md:flex">
            {/* skill set */}
            <HardSkills />
          </div>
        </div>

        {/* diagonal separator */}
        <div className="bg-white md:border-l-[12rem] border-l-[4rem] border-l-pastelBeige md:border-b-[39rem] border-b-[49rem] border-b-dirtyWhite"></div>

        {/* soft skills */}
        <div className="bg-dirtyWhite w-full relative">
          <h1 className="name text-center w-fit py-2 px-4 shadow-md bg-pastelBeige rounded-lg md:text-3xl md:mx-auto mx-6 my-8 md:my-20 text-black">
            SOFT Skills
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
