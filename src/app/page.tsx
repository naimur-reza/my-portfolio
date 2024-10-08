import { styles } from "./styles/styles";
import Menu from "./components/UI/Home/Menu";
import "./globals.css";
import HeroSection from "./components/UI/Home/HeroSection";
import Services from "./components/UI/Home/Services";
import MySkills from "./components/UI/Home/MySkills";
import Projects from "./components/UI/Home/Projects";
import Footer from "./components/UI/Home/Footer";
import CursorAnimation from "./components/CursorAnimation";

const App = () => {
  return (
    <div>
      <CursorAnimation />
      <div className=" bg-deep overflow-hidden">
        <Menu />
        <div className=" max-w-[1050px] mx-auto px-5 ">
          <HeroSection />

          <Services />
          <Projects />
          <MySkills />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
