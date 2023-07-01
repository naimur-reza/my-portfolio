import React from "react";
import EmailLottie from "./EmailLottie";

const Contact = () => {
  return (
    <div className="container  px-6 py-10 mx-auto flex items-center gap-3 lg:flex-row flex-col-reverse">
      <div className="mt-8 lg:w-2/3 w-full lg:mx-6">
        <div className="w-full px-8 py-8 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-white/5 backdrop-blur-sm  ">
          <form className="mt-6">
            <div className="flex-1">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="flex-1 mt-6">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Email address
              </label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-full mt-6">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Message
              </label>
              <textarea
                className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"></textarea>
            </div>
            <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <EmailLottie />
    </div>
  );
};

export default Contact;
