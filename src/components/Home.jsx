import React, { useState } from "react";
import rmjb from "../assets/img/rmjb.png";
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
      <div>
        <div className="md:flex md:space-x-12 space-x-0 justify-between md:px-0 px-8 md:py md:pt-12 md:space-y-0 space-y-12">
          {/* Image */}
          <div className="md:w-[28rem] bg-[#D7CEC2] px-8 rounded-br-[12rem] rounded-tl-[12rem] m-auto">
            <img src={rmjb} alt="Rieza Marie Banquillo" />
          </div>

          {/* Other details */}
          <div className="my-auto block md:w-[36.6rem] md:py-20 w-full px-2">
            <div className="flex justify-between md:mb-6 mb-0">
              <h3 className="title md:text-4xl text-xl text-white cursor-default select-none tracking-wide">
                Hi, I'm
              </h3>
              <h3 className="title text-black bg-[#e6af2e] rounded-md w-fit h-fit py-1 px-3 shadow-md md:text-base text-xs cursor-default select-none developer appear my-auto tracking-wide">
                Software Developer
              </h3>
            </div>

            <h1 className="name md:text-[4rem] text-[2.5rem] sm:text-2xl text-white uppercase cursor-default select-none whitespace-nowrap tracking-wide md:mb-10 mb-2">
              Rieza Banquillo
            </h1>

            <hr className="border-2 md:mb-5 mb-4" />

            <p className="text-white md:text-lg text-sm whitespace-normal cursor-default select-none tracking-wide">
              I'm dedicated to leveraging cutting-edge technologies to bring
              your visions to life. Let's collaborate and elevate your digital
              presence with expertise and creativity.
            </p>
          </div>
        </div>

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
