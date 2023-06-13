import React from "react";
import About from "./components/About";
import Works from "./components/Works";

const App = () => {
  return (
    <div className="dark:bg-gradient-to-t dark:from-black dark:via-purple-950 dark:to-black">
      {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-[rgb(255,0,85)]  to-gren-400 inline-block text-transparent bg-clip-text">
        Anik
      </h1> */}
      <About />
      <Works />
    </div>
  );
};

export default App;
