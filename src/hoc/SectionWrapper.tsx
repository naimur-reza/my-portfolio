import { motion } from "framer-motion";

import { styles } from "@/app/styles/styles";
import { staggerContainer } from "@/utils/motions";

const StarWrapper = (Component: any, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto    `}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
