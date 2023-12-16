import React, { useState, useRef, useEffect } from "react";
import cv from "../assets/pdf/CV-Rieza-Marie-Banquillo.pdf";
import home from "../assets/svg/home.svg";
import skills from "../assets/svg/skills.svg";
import projects from "../assets/svg/projects.svg";
import inbox from "../assets/svg/inbox.svg";
import user from "../assets/svg/user-profile.svg";
import folder from "../assets/svg/folder.svg";
import download from "../assets/svg/download.svg";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Function to open the drawer
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  // Store the drawer element
  const drawerRef = useRef(null);

  // Function to close the drawer when clicking outside
  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setDrawerOpen(false);
    }
  };

  // Attach click event listener when the component mounts
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Set array value for navigation links and call it in the list
  const [navigation] = useState([
    { page: "Home", link: "#home", logo: home, alt: "Home Icon", id: 1 },
    {
      page: "Skills",
      link: "#skills",
      logo: skills,
      alt: "Skills Icon",
      id: 2,
    },
    {
      page: "Projects",
      link: "#projects",
      logo: projects,
      alt: "Projects Icon",
      id: 3,
    },
  ]);

  // Set array value and call it in the profile section
  const [profile] = useState([
    {
      link: "mailto:rizmarezlo@gmail.com",
      profile: "G-Mail",
      logo: inbox,
      alt: "",
      id: 1,
    },
    {
      link: "https://www.linkedin.com/in/riezamarie-banquillo/",
      profile: "Linkedin",
      logo: user,
      alt: "",
      id: 2,
    },
    {
      link: "https://github.com/rieza-ix",
      profile: "GitHub",
      logo: folder,
      alt: "",
      id: 3,
    },
  ]);

  return (
    <div>
      <nav className="bg-[#191716] border-gray-200 fixed w-full z-20 top-0 start-0 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="title self-center text-2xl font-semibold whitespace-nowrap text-white cursor-default select-none">
            Portfolio
          </span>

          <div className="flex md:order-2 space-x-4 md:space-x-0 rtl:space-x-reverse">
            <a href={cv} target="_blank" rel="noreferrer">
              <button
                type="button"
                className="text-black bg-white shadow-md font-semibold rounded-lg text-sm md:px-4 px-2 py-[0.35rem] md:my-0 my-1 text-center"
              >
                Download CV
              </button>
            </a>
            <button
              onClick={toggleDrawer}
              type="button"
              className="inline-flex items-center p-0 w-6 h-10 justify-center text-sm rounded-lg md:hidden"
              aria-expanded={isDrawerOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5 z-40"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navigation links in mobile view */}
          <div
            className={`fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform ${
              isDrawerOpen ? "" : "translate-x-full"
            } bg-gray-900 bg-opacity-50 w-full`}
            tabIndex={isDrawerOpen ? 0 : -1}
            onClick={closeDrawer}
          >
            <div
              id="drawer-right"
              className={`fixed top-0 right-0 z-50 h-screen py-4 px-6 overflow-y-auto transition-transform ${
                isDrawerOpen ? "" : "translate-x-full"
              } bg-[#191716] w-60`}
              tabIndex={isDrawerOpen ? 0 : -1}
              aria-labelledby="drawer-right-label"
            >
              <button
                type="button"
                onClick={toggleDrawer}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close menu</span>
              </button>

              <ul className="space-y-2 font-medium mt-8">
                <h3 className="text-white py-2">NAVIGATION LINKS</h3>
                <hr className="border-white" />

                {navigation.map((navLink) => (
                  <li key={navLink.id} className="flex py-2 h-fit">
                    <img
                      src={navLink.logo}
                      className="w-5 mr-1 my-auto"
                      alt={navLink.alt}
                    />
                    <a
                      href={navLink.link}
                      className="flex text-white rounded md:p-0 pt-[0.3rem]"
                      aria-current="page"
                    >
                      {navLink.page}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2 font-medium mt-8">
                <h3 className="text-white py-2 mt-8">PROFILE LINKS</h3>
                <hr className="border-white" />

                {profile.map((profileLink) => (
                  <li key={profileLink.id} className="flex py-2 h-fit">
                    <img
                      src={profileLink.logo}
                      className="w-5 mr-1 my-auto"
                      alt={profileLink.logo}
                    />
                    <a
                      href={profileLink.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex text-white rounded md:p-0 pt-[0.3rem]"
                    >
                      {profileLink.profile}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="font-medium fixed bottom-0 flex w-fit mx-8 pb-6 py-2">
                <img
                  src={download}
                  className="w-5 mr-1 my-auto"
                  alt="Download Icon"
                />
                <a
                  href={cv}
                  className="underline text-center text-white rounded md:p-0 hover:underline hover:underline-offset-4 pt-[0.2rem]"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Navigation links in desktop view */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#191716] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {navigation.map((navLink) => (
                <li key={navLink.id} className="flex">
                  <img
                    src={navLink.logo}
                    className="w-5 mr-1"
                    alt={navLink.alt}
                  />
                  <a
                    href={navLink.link}
                    className="flex py-2 px-3 text-white rounded md:p-0 hover:underline hover:underline-offset-4"
                    aria-current="page"
                  >
                    {navLink.page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
