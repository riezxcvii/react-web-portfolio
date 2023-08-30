import React, { useState } from "react";

const HardSkills = () => {
  const [hardSkills, setHSkills] = useState([
    { skill: "Java", rate: "90%", id: 1 },
    { skill: "JavaScript", rate: "60%", id: 2 },
    { skill: "PHP", rate: "60%", id: 3 },
    { skill: "MySQL", rate: "75%", id: 4 },
    { skill: "React JS", rate: "85%", id: 5 },
    { skill: "Next.js", rate: "50%", id: 6 },
    { skill: "Tailwind CSS", rate: "95%", id: 7 },
    { skill: "Canva", rate: "95%", id: 8 },
    { skill: "Visual Studio Code", rate: "95%", id: 9 },
    { skill: "Git", rate: "95%", id: 10 },
    { skill: "GitHub", rate: "95%", id: 11 },
    { skill: "Figma", rate: "95%", id: 12 },
    { skill: "Adobe Photoshop", rate: "95%", id: 13 },
  ]);

  return (
    <div className="w-full grid grid-cols-2 grid-rows-7">
      {hardSkills.map((hard) => (
        <ul key={hard.id}>
          <li>
            <div className="ml-7 md:mx-9 items-center mt-4">
              <h1 className="md:text-lg md:mr-4">{hard.skill}</h1>

              <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  class="bg-gray-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: hard.rate }}
                >
                  {hard.rate}
                </div>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default HardSkills;
