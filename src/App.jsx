import React from "react";
import About from "./components/About";
import Works from "./components/Works";
import Menu from "./components/Menu";

const App = () => {
  return (
    <>
      <div className="h-[100vh]  bg-black ">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Menu />
        <About />
        {/* <Works /> */}
      </div>
      <a href="" className="scroll-btn" />
    </>
  );
};

export default App;
