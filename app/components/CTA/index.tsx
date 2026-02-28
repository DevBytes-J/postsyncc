"use client";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import StartButton from "../ui/StartButton";
import { BsStarFill } from "react-icons/bs";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className=" relative py-[40px] lg:py-[104px] overflow-hidden flex items-center justify-center mx-[8px]">
      {/* Background Image */}
      <img
        src="/bg-img.png"
        alt="Background Pattern"
        className="absolute top-0 inset-x-0 w-full object-cover z-0 pointer-events-none rounded-[8px]"
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none rounded-[8px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(110, 67, 252, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      <div className="relative z-10 px-6 lg:px-[96px] text-center w-full max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[32px] lg:text-[72px] font-semibold text-[#160041] leading-[1.1] font-britti tracking-tight mb-6"
        >
          Ready To Grow Without The <br className="hidden lg:block" /> Guess
          Work?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-col items-center justify-center text-[#667085] text-[15px] font-geist lg:flex hidden"
        >
          <p>Join 1,500+ creators and teams scaling their content</p>
          <div className="flex items-center justify-center gap-1">
            <span>with</span>
            <div className="flex items-center gap-1 font-bold text-[#160041]">
              <div className=" p-0.5 w-4 h-4 flex items-center justify-center relative">
                <Image
                  src="/logo.png"
                  alt="PostSyncer Logo"
                  fill
                  className="object-contain"
                />
              </div>
              PostSyncer
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:hidden block text-[#46468A] text-[15px] font-geist text-center mx-auto max-w-sm"
        >
          PostSyncer helps you manage all your social accounts, schedule
          content, and create AI videos in minutes.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center gap-3 font-geist justify-center my-[32px] w-full max-w-[400px] lg:max-w-none mx-auto relative z-20"
        >
          <button className="flex items-center gap-3 pl-[18px] pr-[8px] py-[11px] font-semibold text-[#160041] bg-white rounded-[39px] transition-all border border-transparent hover:border-gray-200 cursor-pointer">
            Join with Google{" "}
            <span className="bg-[#F8F7F9 rounded-[20px] p-[10px] shadow-sm bg-[#16004108]">
              <FcGoogle className="text-lg" />
            </span>
          </button>
          <StartButton />
        </motion.div>

        {/* Avatars & Social Proof */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
      </div>

      <div className="hidden lg:block absolute bottom-0 inset-x-0 w-full h-[60%] lg:h-30 bg-linear-to-t from-white to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default CTA;
