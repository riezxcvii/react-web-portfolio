import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 sticky top-0 z-30 p-2 px-4 md:mt-[-3.55rem]">
      <h1 className="w-fit title text-2xl uppercase">Developer's Portfolio</h1>
      <hr className="flex min-w-full h-px bg-black border-0 my-5 ml-[-22rem]" />
    </div>
  );
};

export default Header;
