import React from "react";
import data from "../../public/loader.json";
import Lottie from "lottie-react";
const PreLoader = () => {
  return (
    <div className="flex min-h-[100vh] items-center justify-center bg-primary">
      <Lottie animationData={data} loop={true} />
    </div>
  );
};

export default PreLoader;
