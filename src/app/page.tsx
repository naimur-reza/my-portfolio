import { styles } from "./styles/styles";
import Menu from "./components/UI/Home/Menu";
import "./globals.css";
import HeroSection from "./components/UI/Home/HeroSection";
import Services from "./components/UI/Home/Services";
import MySkills from "./components/UI/Home/MySkills";
import Projects from "./components/UI/Home/Projects";
import Footer from "./components/UI/Home/Footer";

const App = () => {
  return (
    <>
      {/* <PreLoader /> */}
      <div className=" bg-deep overflow-hidden">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="h-[100vh]  ">
          <Menu />
          <HeroSection />
        </div>
        <a href="#services" className="scroll-btn" />
        <div className=" pt-10">
          <Services />
          <Projects />
        </div>
        <MySkills />
        <Footer />
      </div>
    </>
  );
};

export default App;
