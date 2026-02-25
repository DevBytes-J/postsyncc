"use client";

import Image from "next/image";
import { useState } from "react";

const AIVideoCreatorCard = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(0);

  return (
    <div className="bg-[#FBFBFB]  p-4 md:p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 overflow-hidden relative rounded-[32px]">
      <div className="mb-6 flex-1 flex flex-col justify-center relative -mr-4 md:-mr-6">
        {/* Fade Out Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-14 md:w-12 bg-linear-to-l from-[#FBFBFB] via-[#FBFBFB]/90 to-transparent z-10 pointer-events-none"></div>

        {/* Hook Generator UI */}
        <div className="bg-white p-3 shadow-sm mb-[7px] border border-r-0 border-[#F0E7FF] relative rounded-l-2xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-[#F1F0FE] text-[#6B7280] flex items-center justify-center text-[9.84px] font-medium font-roboto">
              1
            </div>
            <span className="text-[#2E2E2E] text-[11.45px] font-medium font-roboto whitespace-nowrap">
              Create Your Hook
            </span>
          </div>
          <div className="bg-[#FBFBFB] pt-[10px] border border-r-0 border-[#3300800F] flex items-center justify-center text-[#737A87] text-[9.14px] h-8 pb-[30px] overflow-hidden whitespace-nowrap mb-[10px] rounded-l-sm  shadow-sm">
            Enter your hook here
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <div className="flex items-center gap-2 text-[#737A87] text-[10px]">
              <span>Font Size</span>
              <div className="flex items-center justify-center bg-[#FBFBFB] border border-gray-100 rounded-md h-[22px]">
                <span className="cursor-pointer w-5 flex items-center justify-center text-[#737A87]">
                  -
                </span>
                <span className="text-[#160041] flex items-center justify-center text-center font-medium border-l border-r border-[#3300800F] h-full w-[34px] text-[9.14px]">
                  35px
                </span>
                <span className="cursor-pointer w-5 flex items-center justify-center text-[#737A87]">
                  +
                </span>
              </div>
            </div>
            <div className="text-[9px] text-[#A3A9B5] font-roboto italic">
              Use arrow to browse hook ideas...
            </div>
          </div>
        </div>

        {/* Avatar Selector UI */}
        <div className="bg-white py-3 pl-3 shadow-sm border border-r-0 border-[#F0E7FF] relative rounded-l-2xl">
          <div className="flex items-center mb-3 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-[9.84px] font-medium">
                2
              </div>
              <span className="text-[#2E2E2E] text-[11.25px] font-medium font-roboto whitespace-nowrap">
                Choose AI Avatar
              </span>
            </div>
            <div className="bg-[#4F46E5] text-[#FFFFFF] px-2 py-2 text-[8.44px] rounded-[4px] font-medium cursor-pointer whitespace-nowrap shadow-[0px_1.41px_1.41px_0px_rgba(51,0,128,0.25)]">
              Default
            </div>
          </div>
          {/* Replace these paths with actual avatar paths when ready */}
          <div className="grid grid-cols-8 gap-x-[20px] gap-y-1.5 mb-1">
            {[
              "a1.jpg",
              "a1i.jpg",
              "a2.jpg",
              "a3.jpg",
              "a4.jpg",
              "a5.jpg",
              "a6.jpg",
              "a7.jpg",
              "a8.jpg",
              "a9.jpg",
              "a10.jpg",
              "a11.jpg",
              "a12.jpg",
              "a13.jpg",
              "a14.jpg",
              "a15.jpg",
            ].map((imgName, i) => (
              <div
                key={i}
                onClick={() => setSelectedAvatar(i)}
                className={`relative w-8 h-8 shrink-0 cursor-pointer ${
                  selectedAvatar === i
                    ? "ring-1 ring-[#6E43FC] ring-offset-1 rounded-[4px]"
                    : ""
                }`}
              >
                {selectedAvatar === i && (
                  <div className="absolute -top-1.5 -right-1.5 w-2.5 rounded-full h-2.5 bg-[#6E43FC] flex items-center justify-center text-white text-[6px] z-20 border border-white">
                    ✓
                  </div>
                )}
                <div className="w-full h-full relative rounded-[8px] overflow-hidden">
                  <Image
                    src={`/${imgName}`}
                    alt={`Avatar ${i + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h3 className="text-[18px] font-medium text-[#160041] mb-2 font-geist relative z-20">
        AI Video Creator
      </h3>
      <p className="text-[#667085] text-[14px] font-geist relative z-20">
        Turn blog posts or ideas into scroll-stopping short-form videos in
        seconds.
      </p>
    </div>
  );
};

export default AIVideoCreatorCard;
