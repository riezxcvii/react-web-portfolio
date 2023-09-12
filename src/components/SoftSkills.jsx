import React from "react";
import { useState } from "react";

const SoftSkills = () => {
  // set array value and call it in the developement skills section
  const [softSkills] = useState([
    { skill: "Organized", id: 1 },
    { skill: "Quick learner", id: 2 },
    { skill: "Good communication skills", id: 3 },
    { skill: "Team player", id: 4 },
    { skill: "Good management skills", id: 5 },
    { skill: "Good with meeting deadlines", id: 6 },
    { skill: "Agile and Scrum practices", id: 7 },
  ]);
  return (
    <div className="w-full px-2 pb-2 md:p-0">
      {/* skills */}
      <div className="w-full flex flex-wrap justify-end">
        {softSkills.map((soft) => (
          <ul key={soft.id}>
            <li>
              <div className="flex md:mr-10 md:mx-[-1rem] justify-center items-center mt-4 bg-dirtyWhite border-2 border-peach rounded-lg py-2 px-4 w-fit">
                <h1 className="md:text-lg text-sm text-center">{soft.skill}</h1>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
