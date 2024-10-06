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
        <Menu />
        <div className=" max-w-[1020px] mx-auto">
          <HeroSection />

          <Services />
          {/* <Projects /> */}
        </div>
        {/* <MySkills /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
