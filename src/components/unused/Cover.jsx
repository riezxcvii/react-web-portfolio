import React from "react";
import "flowbite";
import rieza from "../assets/img/rieza.png";

const Cover = () => {
  return (
    <div>
      <div className="bg-dirtyWhite flex flex-row-1 max-w-screen justify-center items-center m-4 rounded-lg">
        <div className="w-2/5 flex justify-center items-center m-auto">
          <div className="bg-lightBeige md:w-60 md:h-[26rem] w-20 h-[8.9rem] z-0 flex justify-center items-center fixed"></div>
          <img
            src={rieza}
            alt="Rieza Marie Banquillo"
            className="brightness-125 w-[26rem] z-30"
          />
        </div>
        <div className="relative w-2/3 flex flex-col md:space-y-4 space-y-2">
          <div className="flex">
            <h1 className="md:text-3xl text-sm">Greetings! I am </h1>
            <button className="bg-rust text-white rounded-full text-xs md:text-base md:py-2 py-1 md:px-4 px-3 md:ml-20 ml-3">
              Web Developer
            </button>
          </div>
          <div className="name uppercase md:text-7xl text-4xl">
            <h1>Rieza Marie</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
