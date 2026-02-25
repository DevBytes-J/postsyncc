"use client";
import Image from "next/image";
import { PiVideoCameraLight } from "react-icons/pi";
import { VscSparkle } from "react-icons/vsc";
import { GrDesktop } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoArrowUp } from "react-icons/io5";

const AIContentStudioCard = () => {
  return (
    <div className="bg-[#FBFBFB] rounded-[32px] p-4 md:p-6 flex flex-col h-full">
      <div className="mb-6 flex-1 flex flex-col justify-between items-center text-center">
        <div className="flex justify-center items-center">
          <Image
            src="/content.png"
            alt="AI Content Studio"
            width={130}
            height={130}
            className="opacity"
            unoptimized
          />
        </div>
        <div className="font-medium text-[#2E2E2E] md:text-[18px] font-roboto">
          AI Studio - Create Amazing Content
        </div>
        <p className="text-[#6B7280] text-[11px] font-roboto max-w-[240px]">
          Generate videos and images using cutting-edge AI models including Sora
          2, VEO 3 and more
        </p>

        <div className="bg-white rounded-2xl p-3 shadow-sm w-full mt-4 text-left border border-[#F0E7FF]">
          <p className="text-[#8B92A1] text-[11px] mb-2 font-roboto leading-relaxed">
            Describe your video with shot type, subject, action, setting, and
            lighting. Example: Wide shot of a child flying a red kite in grassy
            park, golden hour sunlight, camera slowly pans upward.
          </p>
          <div className="flex items-center justify-between text-[10px] text-[#A3A9B5] font-roboto flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 bg-gray-50 text-gray-500 cursor-pointer">
                +
              </span>
              <span className="flex items-center gap-1 cursor-pointer text-[9px]">
                <span className=" text-[#737A87]">
                  <PiVideoCameraLight />
                </span>{" "}
                Video
              </span>
              <span className="flex items-center gap-1 cursor-pointer text-[9px]">
                <span className=" text-[#737A87]">
                  <VscSparkle />
                </span>{" "}
                Sora 2
              </span>
              <span className="flex items-center gap-1 cursor-pointer text-[9px]">
                <span className=" text-[#737A87]">
                  <GrDesktop />
                </span>{" "}
                720p
              </span>
              <span className="flex items-center gap-1 cursor-pointer text-[9px]">
                <span className=" text-[#737A87]">
                  <MdAccessTime />
                </span>{" "}
                12s
              </span>
              <span className="flex items-center gap-1 cursor-pointer text-[9px]">
                <span className=" text-[#737A87]">
                  <HiOutlineDevicePhoneMobile />
                </span>{" "}
                9:16
              </span>
              <span className=" items-center gap-1 cursor-pointer text-[9px] hidden md:flex">
                <span className="text-[#737A87]">0/5000</span>
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0 md:pt-0 pt-2">
              <span className="border-r pr-2">64 credits</span>
              <div className="w-5 h-5 rounded-full bg-[#4F46E566] text-[#ffffff] flex items-center justify-center cursor-pointer">
                <IoArrowUp />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-[18px] font-medium text-[#160041] mb-2 font-geist">
        AI Content Studio
      </h3>
      <p className="text-[#667085] text-[14px] font-geist">
        Generate high-converting captions, hooks, and hashtags in your brand
        voice.
      </p>
    </div>
  );
};

export default AIContentStudioCard;
