import React from "react";
import EmailLottie from "./EmailLottie";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import StarWrapper from "../hoc/SectionWrapper";
import "../buttonStyle.css";
import { styles } from "../style";
const Contact = () => {
  return (
    <>
      <h1 className={`${styles.sectionSubText}`}>Way For</h1>
      <h1 className={`${styles.sectionHeadText}`}>Contact</h1>
      <div className="container gap-4   mx-auto flex items-center justify-between lg:flex-row flex-col-reverse">
        <div className="mt-5 lg:w-2/3 w-full ">
          <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
            <div className="w-full px-8 py-8 mx-auto overflow-hidden   rounded-lg shadow-2xl     backdrop-blur-sm  ">
              <form className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm      text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="block w-full px-5 py-3 mt-2      border   rounded-md   placeholder-gray-600   bg-gray-900   text-gray-300   border-gray-700    focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm      text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="block w-full px-5 py-3 mt-2      border   rounded-md   placeholder-gray-600   bg-gray-900   text-gray-300   border-gray-700     focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm      text-gray-200">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2      border   rounded-md md:h-48   placeholder-gray-600   bg-gray-900   text-gray-300   border-gray-700    focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"></textarea>
                </div>
                <button class="button-85" role="button">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <EmailLottie />
      </div>
    </>
  );
};

export default StarWrapper(Contact, "");
