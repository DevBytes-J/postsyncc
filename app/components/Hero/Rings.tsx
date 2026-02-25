"use client";

import {
  FaInstagram,
  FaPinterest,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";
import Image from "next/image";

import { BsTwitterX } from "react-icons/bs";

const Rings = () => {
  return (
    <div className="relative w-full max-w-[100vw] h-[300px] lg:h-[550px] flex items-center justify-center overflow-visible mt-[38px] lg:mt-[93px]">
      {/* Center Hashtag Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
        <div className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] relative">
          <Image
            src="/2.png"
            alt="Hashtag Mobile"
            fill
            className="object-contain lg:hidden"
          />
          <Image
            src="/middle-hero.png"
            alt="Hashtag Desktop"
            fill
            className="object-contain hidden lg:block"
          />
        </div>
      </div>

      {/* Inner Ring - Static to keep color at bottom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] lg:w-[300px] lg:h-[300px] z-20">
        <div className="absolute inset-0 rounded-full border border-[#A060FF20]"></div>
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient( #6E43FC1A 0%, transparent 50%)",
          }}
        ></div>
      </div>

      {/* Outer Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] lg:w-[500px] lg:h-[500px] border border-[#6E43FC0F] rounded-full z-10 animate-spin-slow">
        {/* Instagram - Top Center (0 degrees) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 lg:p-[26px] rounded-xl shadow-lg text-[#E1306C] animate-counter-spin-slow border border-[#A060FF0D]">
          <FaInstagram className="text-xl lg:text-[30px]" />
        </div>

        {/* Pinterest - Left (approximately 216 degrees) */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-2 lg:p-[26px] rounded-xl shadow-lg text-[#E60023] animate-counter-spin-slow border border-[#A060FF0D]">
          <FaPinterest className="text-xl lg:text-[30px]" />
        </div>

        {/* X (Twitter) - Right (approximately 324 degrees) */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white p-2 lg:p-[26px] rounded-xl shadow-lg text-black animate-counter-spin-slow border border-[#A060FF0D]">
          <BsTwitterX className="text-xl lg:text-[30px]" />
        </div>

        {/* Facebook - Bottom Left (approximately 144 degrees) */}
        <div className="absolute bottom-[5%] left-[15%] bg-white p-2 lg:p-[26px] rounded-xl shadow-lg text-[#1877F2] animate-counter-spin-slow border border-[#A060FF0D]">
          <FaFacebookF className="text-xl lg:text-[30px]" />
        </div>

        {/* Tiktok - Bottom Right (approximately 36 degrees) */}
        <div className="absolute bottom-[5%] right-[15%] bg-white p-2 lg:p-[26px] rounded-xl shadow-lg text-black animate-counter-spin-slow border border-[#A060FF0D]">
          <FaTiktok className="text-xl lg:text-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default Rings;
