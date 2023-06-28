import React from "react";

const Menu = () => {
  return (
    <div className="flex   pt-10 justify-between">
      <h1 className="text-3xl font-bold pink-text-gradient">Portfolio</h1>
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
