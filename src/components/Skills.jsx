import React from "react";

const Skills = () => {
  return (
    <div className="md:min-w-screen min-w-screen md:min-h-screen min-h-screen flex">
      {/* soft skills */}
      <div className="bg-pastelBeige w-full"></div>

      {/* diagonal separator */}
      <div className="bg-white md:w-0 w-2/4 md:border-l-[20rem] border-l-[7rem] border-l-pastelBeige md:border-b-[39rem] border-b-[49rem] border-b-dirtyWhite"></div>

      {/* technical skills */}
      <div className="bg-dirtyWhite w-full"></div>
    </div>
  );
};

export default Skills;
