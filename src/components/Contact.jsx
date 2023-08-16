import React from "react";
import Image from "../assets/img/rmjb.png";
import Facebook from "../assets/svg/facebook.svg";
import Linkedin from "../assets/svg/linkedin.svg";
import GitHub from "../assets/svg/github.svg";

const Main = () => {
  return (
    <div className="md:min-w-screen md:min-h-screen md:flex">
      <img
        src={Image}
        alt="Rieza Marie Banquillo"
        className="mx-40 brightness-110 md:w-[36.2rem] md:absolute md:inset-y-0 md:right-0"
      />

      <div className="my-auto mx-20">
        <div className="space-y-[-2.2rem]">
          <h2 className="name uppercase text-[4.65rem]">Rieza Marie</h2>
          <h1 className="name uppercase text-[5rem]">Banquillo</h1>
        </div>
        <p className="mb-6">
          A passionate web developer willing to be trained
          <br />
          who wants to be part of an organization where I
          <br />
          can continuously enhance my skills.
        </p>

        <div className="flex space-x-4">
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

      <div className="p-8 grid-cols-1 grid-rows-3 md:absolute md:right-0 md:bottom-0 space-y-4">
        <div>
          <a
            href="https://www.facebook.com/octa.xixmm"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Facebook} alt="Facebook" className="w-7" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/riezamarie-banquillo/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="Linkedin" className="w-7" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/rieza-ix"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHub} alt="GitHub" className="w-7" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
