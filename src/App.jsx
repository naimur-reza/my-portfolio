import React from "react";
import About from "./components/About";
import Works from "./components/Works";
import Menu from "./components/Menu";
import Services from "./components/Services";
import "../src/buttonStyle.css";
import MySkills from "./components/MySkills";
import Contact from "./components/Contact";
import { styles } from "./style";

const App = () => {
  return (
    <>
      <div className=" bg-primary overflow-hidden">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="h-[100vh]  ">
          <Menu />

          <About />
        </div>
        <a href="#services" className="scroll-btn" />
        <div className=" pt-10">
          <Services />
          <MySkills />
        </div>
        <Works />
        <Contact />
        <h1 className={`${styles.heroSubText} text-center py-4`}>
          Made by 💫 Naimur Reza
        </h1>
      </div>
    </>
  );
};

export default App;
