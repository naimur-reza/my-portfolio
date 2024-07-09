import { styles } from "./styles/styles";
import Menu from "./components/UI/Home/Menu";
import "./globals.css";
import HeroSection from "./components/UI/Home/HeroSection";
import Services from "./components/UI/Home/Services";
import MySkills from "./components/UI/Home/MySkills";
import Projects from "./components/UI/Home/Projects";

const App = () => {
  return (
    <>
      {/* <PreLoader /> */}
      <div className=" bg-black overflow-hidden">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="h-[100vh]  ">
          <Menu />
          <HeroSection />
        </div>
        <a href="#services" className="scroll-btn" />
        <div className=" pt-10">
          {/* <Services /> */}
          <MySkills />
        </div>
        <Projects />
        <h1 className={`${styles.heroSubText} text-center py-4`}>
          Made by 💫 Naimur Reza
        </h1>
      </div>
    </>
  );
};

export default App;
