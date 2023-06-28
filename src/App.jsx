import React from "react";
import About from "./components/About";
import Works from "./components/Works";
import Menu from "./components/Menu";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className=" bg-black overflow-hidden">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="h-[100vh]  px-24  ">
          <Menu />

          <About />
          {/* <Works /> */}
        </div>
        <a href="" className="scroll-btn" />
        <div className=" px-24 pt-10">
          <Services />
        </div>
      </div>
    </>
  );
};

export default App;
