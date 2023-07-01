import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/email.json";
const EmailLottie = () => {
  return (
    <div>
      <Lottie
        animationData={animationData}
        width={400}
        height={400}
        loop={true}
      />
    </div>
  );
};

export default EmailLottie;
