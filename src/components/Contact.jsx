import React from "react";
import Image from "../assets/img/rmjb.png";
import Facebook from "../assets/svg/facebook.svg";
import Linkedin from "../assets/svg/linkedin.svg";
import GitHub from "../assets/svg/github.svg";

const Main = () => {
  return (
    <div className="md:min-w-screen md:min-h-screen min-h-screen md:flex px-4">
      <img
        src={Image}
        alt="Rieza Marie Banquillo"
        className="md:mx-40 brightness-110 md:w-[36.2rem] md:absolute md:inset-y-0 md:right-0 md:mb-0 mb-1"
      />

      <div className="md:my-auto md:mx-20">
        <div className="flex flex-col items-center space-y-[-1.2rem] justify-center">
          <h2 className="name uppercase md:text-[4.65rem] text-[3rem]">
            Rieza Marie
          </h2>
          <h1 className="name uppercase md:text-[5rem] text-[3.2rem]">
            Banquillo
          </h1>
        </div>
        <p className="md:mx-0 mx-auto mb-6 px-1 md:text-left md:w-[24rem] text-center w-80">
          A passionate web developer willing to be trained who wants to be part
          of an organization where I can continuously enhance my skills.
        </p>

        <div className="flex space-x-4 items-center justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/1hebmoFubstqMKKk8lrc50MGPwormIxCq/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg py-2 px-4 bg-beige hover:bg-darkBeige flex"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-5 my-auto mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              ></path>
            </svg>
            Download CV
          </a>
          <a
            href="mailto:rizmarezlo@gmail.com"
            className="rounded-lg py-2 px-4 bg-beige hover:bg-darkBeige flex"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-5 my-auto mr-1"
            >
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              ></path>
            </svg>
            Send E-Mail
          </a>
        </div>
      </div>

      <div className="md:p-8 grid grid-cols-3 grid-rows-1 md:grid-cols-1 md:grid-rows-3 md:absolute md:right-0 md:bottom-0 md:space-y-4 md:m-0 m-8">
        <div>
          <a
            href="https://www.facebook.com/octa.xixmm"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Facebook} alt="Facebook" className="w-7 mx-auto" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/riezamarie-banquillo/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Linkedin}
              alt="Linkedin"
              className="w-7 md:mt-[-0.45rem] mx-auto"
            />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/rieza-ix"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHub} alt="GitHub" className="w-7 mx-auto" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
