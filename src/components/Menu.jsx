import React from "react";

const Menu = () => {
  return (
    <div className="flex  px-24 pt-10 justify-between">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[rgb(255,23,123)]  to-[rgb(61,1,81)]  inline-block text-transparent bg-clip-text">
        Portfolio
      </h1>
      <ul className=" flex gap-7 text-gray-200">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="">Resume</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
