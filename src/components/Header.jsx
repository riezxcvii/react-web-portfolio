import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 sticky top-0 z-30 p-2 px-4 md:mt-[-3.55rem]">
      <h1 className="md:w-fit w-max title md:text-2xl text-md uppercase">
        Developer's Portfolio
      </h1>
      <hr className="flex md:min-w-full h-px bg-black border-0 md:my-5 my-auto md:ml-[-22rem] ml-10" />
    </div>
  );
};

export default Header;
