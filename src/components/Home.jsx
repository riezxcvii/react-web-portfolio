import React, { useState } from "react";
import Linkedin from "../assets/svg/linkedin.svg";
import GitHub from "../assets/svg/github.svg";
import GMail from "../assets/svg/gmail.svg";

const Home = () => {
  // Set array value and call it in the profile section
  const [links] = useState([
    {
      link: "mailto:rizmarezlo@gmail.com",
      logo: GMail,
      alt: "GMail",
      style: "w-[2rem] mx-auto my-3 shadow-lg",
      id: 1,
    },
    {
      link: "https://www.linkedin.com/in/riezamarie-banquillo/",
      logo: Linkedin,
      alt: "LinkedIn",
      style: "w-[2rem] mx-auto my-3 shadow-lg",
      id: 2,
    },
    {
      link: "https://github.com/rieza-ix",
      logo: GitHub,
      alt: "GitHub",
      style: "w-[2rem] mx-auto my-3 shadow-lg",
      id: 3,
    },
  ]);

  return (
    <div id="home" className="flex items-center justify-center h-screen">
      <div className="m-auto block p-8 md:w-[42.8rem] w-[24rem] md:space-y-5 space-y-3">
        <div className="flex justify-between">
          <h3 className="title md:text-4xl text-xl text-white cursor-default select-none">
            Hi, I'm
          </h3>
          <h3 className="title text-black bg-white rounded-md w-fit h-fit py-2 px-3 shadow-md md:text-base text-xs cursor-default select-none developer appear my-auto">
            Software Developer
          </h3>
        </div>

        <h1 className="name md:text-7xl text-4xl sm:text-2xl text-white uppercase cursor-default select-none">
          Rieza Banquillo
        </h1>

        <hr className="border-2" />

        <p className="text-white md:text-lg text-sm whitespace-normal cursor-default select-none tracking-wider">
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
