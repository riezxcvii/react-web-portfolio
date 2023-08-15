import React from "react";
import Image from "../assets/img/rmjb.png";

const Main = () => {
  return (
    <div className="md:min-w-screen md:min-h-screen md:flex">
      <img
        src={Image}
        alt="Rieza Marie Banquillo"
        className="brightness-125 md:w-[36.2rem] md:absolute md:inset-y-0 md:right-0"
      />

      <div>
        <button>Web Developer</button>
        <h2>Rieza Marie</h2>
        <h1>Banquillo</h1>
        <p>About Me</p>

        <div className="flex">
          <button>Download CV</button>
          <button>Send E-Mail</button>
        </div>
      </div>

      <div className="grid-cols-1 grid-rows-3 md:absolute md:inset-y-0 md:right-0">
        <div>
          <button>FB</button>
        </div>
        <div>
          <button>GT</button>
        </div>
        <div>
          <button>LI</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
