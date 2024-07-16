import { styles } from "@/app/styles/styles";
import { assets } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="flex justify-center gap-3 flex-col relative">
        <h1
          className={`text-gray-400 text-sm   undefined font-medium tracking-wide z-10 text-center py-3`}
        >
          MADE WITH
        </h1>
        <div className="flex items-center gap-3  mx-auto">
          <Image
            src={assets.nextJs}
            alt="nextJs"
            width={40}
            height={40}
            className="z-10 opacity-80"
          />
          <Image
            src={assets.tailwind}
            alt="tailwind"
            width={40}
            height={40}
            className="z-10 opacity-80"
          />
          <Image
            src={assets.typescript}
            alt="ts"
            width={40}
            height={40}
            className="z-10 opacity-80"
          />
        </div>

        <div className="flex justify-center ">
          <Image
            className="absolute -top-20 opacity-50 "
            src={assets.stroke}
            alt="heart"
            width={400}
            height={300}
          />
        </div>

        <div className="text-center text-gray-400 text-sm tracking-wide">
          All logos, trademarks, and brandnames are the property of their
          respective owners
          <br /> Hand-coded with 100% human efforts, zero AI
        </div>
      </div>
    </div>
  );
};

export default Footer;
