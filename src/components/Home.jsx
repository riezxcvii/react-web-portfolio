import React, { useState } from "react";
import Linkedin from "../assets/svg/linkedin.svg";
import GitHub from "../assets/svg/github.svg";

const Home = () => {
  // Set array value and call it in the profile section
  const [links] = useState([
    {
      link: "https://www.linkedin.com/in/riezamarie-banquillo/",
      logo: Linkedin,
      alt: "LinkedIn",
      style: "w-[2rem] mx-auto my-3 shadow-lg",
      id: 1,
    },
    {
      link: "https://github.com/rieza-ix",
      logo: GitHub,
      alt: "GitHub",
      style: "w-[1.9rem] mx-auto my-3 shadow-lg",
      id: 2,
    },
  ]);

  return (
    <div id="home" className="flex items-center justify-center h-screen">
      <div className="m-auto block p-8 md:w-[42.8rem] w-[23.45rem] md:space-y-4 space-y-2">
        <div className="flex justify-between">
          <h3 className="title md:text-4xl text-2xl text-white cursor-default select-none">
            Hi, I'm
          </h3>
          <h3 className="title text-black bg-white rounded-md w-fit h-fit py-1 px-3 shadow-md md:text-base text-sm cursor-default select-none">
            Developer
          </h3>
        </div>

        <h1 className="name md:text-7xl text-4xl text-white uppercase cursor-default select-none">
          Rieza Banquillo
        </h1>

        <hr className="border-2" />

        <p className="text-white md:text-lg text-base whitespace-normal cursor-default select-none tracking-wider">
          I'm dedicated to leveraging cutting-edge technologies to bring your
          visions to life. Let's collaborate and elevate your digital presence
          with expertise and creativity.
        </p>

        {/* Profile links */}
        <div className="py-6 px-8 grid grid-cols-1 grid-rows-2 absolute right-0 bottom-0 m-0 mt-0 items-center justify-center">
          {links.map((profile) => (
            <ul key={profile.id}>
              <li>
                <div className="flex items-center justify-center mx-auto">
                  <a href={profile.link} target="_blank" rel="noreferrer">
                    <img
                      src={profile.logo}
                      alt={profile.alt}
                      className={profile.style}
                    />
                  </a>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
