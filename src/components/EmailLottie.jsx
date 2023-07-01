import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/email.json";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const EmailLottie = () => {
  return (
    <motion.div variants={fadeIn("up", "spring", 1, 1)}>
      <Lottie
        animationData={animationData}
        width={400}
        height={400}
        loop={true}
      />
    </motion.div>
  );
};

export default EmailLottie;
