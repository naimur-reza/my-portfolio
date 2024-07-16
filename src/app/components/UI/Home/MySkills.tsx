"use client";

import { styles } from "@/app/styles/styles";
import StarWrapper from "@/hoc/SectionWrapper";
import { fadeIn, textVariant } from "@/utils/motions";
import { motion } from "framer-motion";
import Image from "next/image";
import { mySkills } from "@/constants";

const MySkills = () => {
  return (
    <div className="container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Superpowers.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("", "", 0.5, 1)}
          className="mt-3  text-secondary text-[17px] max-w-3xl  leading-[30px]"
        >
          The skills, tools and technologies I use to bring your products to
          life
        </motion.p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3  ">
        {mySkills.map((item, index) => (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            key={index}
            variants={fadeIn("up", "spring", index * 1, 1)}
          >
            <div
              className="m-1 md:md-4"
              style={{ transform: "none", opacity: 1 }}
            >
              <div
                className="   rounded-[4rem] overflow-hidden
          bg-gradient-to-bl from-slate-900 to-stone-900
          w-full block p-7"
              >
                <div className="pl-4 mb-4 flex cursor-pointer md:cursor-default justify-between items-center">
                  <div className=" flex space-x-5 items-center rounded-3xl w-11/12 text-gray-400 text-[18px] tracking-wide text-muted font-medium">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      className="h-10"
                      height={40}
                      width={40}
                    />
                    <h1>{item.name}</h1>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  {item.techs.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-teal-900 bg-opacity-40 my-2 px-4 py-2 text-teal-400 font-bold z-20 rounded-3xl mx-2 flex items-center gap-2 justify-center "
                    >
                      {tech.icon && (
                        <Image
                          src={tech.icon}
                          width={25}
                          height={25}
                          alt={tech.name}
                        />
                      )}
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StarWrapper(MySkills, "");
