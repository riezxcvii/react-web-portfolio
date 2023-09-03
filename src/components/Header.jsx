import React from "react";

const Header = ({ header }) => {
  return (
    <div>
      {header.map((headerVal) => (
        <div className="flex z-50 p-2 px-4" key={headerVal.id}>
          <h1 className="w-fit title md:text-2xl text-md uppercase whitespace-nowrap mr-2">
            {headerVal.title}
          </h1>
          <hr className="w-full h-px bg-black border-0 md:my-5 my-auto" />
        </div>
      ))}
    </div>
  );
};

export default Header;
