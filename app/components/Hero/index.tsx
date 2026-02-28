"use client";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { BsStarFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Navbar from "../Layout/Navbar";
import Rings from "./Rings";
import Reviews from "./Reviews";
import StartButton from "../ui/StartButton";

const Hero = () => {
  return (
    <div className="min-h-screen font-sans m-[8px] relative text-neutral-900 bg-white selection:bg-indigo-100 selection:text-indigo-900 overflow-clip lg:overflow-visible">
      <img
        src="/bg-img.png"
        alt="Background Pattern"
        className="absolute inset-0 w-full object-cover z-0 rounded-[8px]"
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none rounded-[8px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(110, 67, 252, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      <div className="fixed top-3 left-0 right-0 z-100 px-6 flex justify-center pointer-events-none transition-all duration-300">
        <div className="w-full max-w-[1440px] pointer-events-auto">
          <Navbar />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <main className="flex flex-col items-center pt-32 lg:pt-40 text-center w-full">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[48px] sm:text-5xl lg:text-[70px] font-bold tracking-tight mb-6 leading-[1.1] lg:leading-[1.05] text-[#160041] max-w-4xl mx-auto"
          >
            <span className="italic font-garamond text-[#160041]">
              Create More.
            </span>
            <br className="block " />
            <span className="">Stress Less.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="max-w-xl text-lg  text-[#46468A] mb-8 lg:mb-10 leading-relaxed font-medium px-4"
          >
            PostSyncer helps you manage all your social accounts, schedule
            content, and create AI videos in minutes.
          </motion.p>

          {/* CTA Buttons - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 font-geist"
          >
            <button className="flex items-center gap-3 pl-[18px] pr-[8px] py-[11px] font-semibold text-[#160041] bg-white rounded-[39px] transition-all border border-transparent hover:border-gray-200 cursor-pointer">
              Join with Google{" "}
              <span className="bg-[#F8F7F9] rounded-[20px] p-[10px] shadow-sm bg-[#16004108]">
                <FcGoogle className="text-lg" />
              </span>
            </button>
            <StartButton />
          </motion.div>

          {/* Avatars & Social Proof */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-row gap-[18px] mt-[32px] lg:mt-[33px] items-center justify-center "
          >
            <div className="relative h-10 lg:h-12 w-35 grayscale-[0.0]">
              <Image
                src="/avatars.png"
                alt="User avatars"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex gap-1 flex-col justify-center">
              <div className="flex gap-0.5 items-center">
                <BsStarFill size={10} className="text-[#FF9A00]" />
                <BsStarFill size={10} className="text-[#FF9A00]" />
                <BsStarFill size={10} className="text-[#FF9A00]" />
                <BsStarFill size={10} className="text-[#FF9A00]" />
                <BsStarFill size={10} className="text-[#FF9A00]" />
              </div>
              <div className="text-[#46468A] text-[12px] font-medium tracking-wide leading-none mt-0.5 whitespace-nowrap">
                Loved by 1500+ creators
              </div>
            </div>
          </motion.div>

          {/* Animated Rings Section */}
          <Rings />

          {/* Reviews Section */}
          <Reviews />
        </main>
      </div>
    </div>
  );
};

export default Hero;
