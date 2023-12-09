import React, { useState, useRef, useEffect } from "react";
import cv from "../assets/pdf/CV-Rieza-Marie-Banquillo.pdf";

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
    { page: "Home", link: "#home", id: 1 },
    { page: "Skills", link: "#skills", id: 2 },
    { page: "Projects", link: "#projects", id: 3 },
  ]);

  return (
    <div>
      <nav className="bg-black border-gray-200 fixed w-full z-20 top-0 start-0 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="title self-center text-2xl font-semibold whitespace-nowrap text-white cursor-default select-none pl-2">
            Portfolio
          </span>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href={cv} target="_blank" rel="noreferrer">
              <button
                type="button"
                className="text-black bg-white shadow-md font-semibold rounded-lg text-sm px-4 py-[0.35rem] md:my-0 my-1 text-center"
              >
                Download CV
              </button>
            </a>
            <button
              onClick={toggleDrawer}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm hover:text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
              className={`fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform ${
                isDrawerOpen ? "" : "translate-x-full"
              } bg-black w-52`}
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
                {navigation.map((navLink) => (
                  <li key={navLink.id}>
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
          {/* Navigation links in desktop view */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navigation.map((navLink) => (
                <li key={navLink.id}>
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
