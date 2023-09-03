import React, { useState } from "react";

const HardSkills = () => {
  // set array value and call it in the developement skills section
  const [hardSkills] = useState([
    { skill: "Java", rate: "90%", id: 1 },
    { skill: "JavaScript", rate: "70%", id: 2 },
    { skill: "PHP", rate: "75%", id: 3 },
    { skill: "MySQL", rate: "90%", id: 4 },
    { skill: "React JS", rate: "85%", id: 5 },
    { skill: "Next.js", rate: "60%", id: 6 },
    { skill: "Tailwind CSS", rate: "95%", id: 7 },
  ]);

  // set array value and call it in the tools used section
  const [toolsUsed] = useState([
    { skill: "Canva", rate: "95%", id: 1 },
    { skill: "ViS Code", rate: "95%", id: 2 },
    { skill: "Git", rate: "90%", id: 3 },
    { skill: "GitHub", rate: "95%", id: 4 },
    { skill: "Figma", rate: "75%", id: 5 },
    { skill: "Photoshop", rate: "70%", id: 6 },
  ]);

  return (
    <div className="w-full md:flex px-2 pb-2 md:p-0">
      {/* development skills */}
      <div className="w-full md:space-y-0 space-y-[-0.3em]">
        {hardSkills.map((hard) => (
          <ul key={hard.id}>
            <li>
              <div className="md:ml-7 px-1 md:mx-9 items-center mt-4">
                <h1 className="md:text-lg md:mr-4">{hard.skill}</h1>

                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="bg-gray-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
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

      {/* tools used */}
      <div className="w-full md:space-y-0 space-y-[-0.3em]">
        {toolsUsed.map((tool) => (
          <ul key={tool.id}>
            <li>
              <div className="md:ml-7 px-1 md:mx-9 items-center mt-4">
                <h1 className="md:text-lg md:mr-4">{tool.skill}</h1>

                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="bg-gray-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: tool.rate }}
                  >
                    {tool.rate}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default HardSkills;
