"use client";

import SmartAnalyticsEngineCard from "./SmartAnalyticsEngineCard";
import AIContentStudioCard from "./AIContentStudioCard";
import AIVideoCreatorCard from "./AIVideoCreatorCard";
import SocialAccountsRow from "../ui/SocialAccountsRow";
import Curve from "../ui/Curve";
import Image from "next/image";

const AIEngine = () => {
  return (
    <section className="w-full bg-white pb-[96px] overflow-hidden">
      <Curve />
      <div className=" px-6 lg:px-[96px]">
        <div className="flex justify-center mb-3 -mt-[30px] z-70 relative">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#F0E7FF] text-[#160041] text-sm font-semibold shadow-[0px_4px_12px_#3300800D]">
            <Image
              src="/logo.png"
              alt="Badge"
              width={20}
              height={20}
              className="object-contain"
            />
            Smarter. Faster. Easier.
          </div>
        </div>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] lg:text-[56px] font-bold text-[#160041] leading-tight font-britti tracking-tight">
            The AI Engine Behind
            <br />
            <span className="text-[#6E43FC] italic font-garamond">
              Effortless Growth
            </span>
          </h2>
          <p className="text-[#667085] text-[14px] lg:text-[16px] font-geist mx-auto mt-4 text-center max-w-xl">
            AI, analytics, and automation working together to help you grow your
            reach with less effort.
          </p>
        </div>

        {/* 3 Cards Flex Layout */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="w-full lg:w-[30%]">
            <SmartAnalyticsEngineCard />
          </div>
          <div className="w-full lg:w-[45%]">
            <AIContentStudioCard />
          </div>
          <div className="w-full lg:w-[27.5%]">
            <AIVideoCreatorCard />
          </div>
        </div>

        <SocialAccountsRow />
      </div>
    </section>
  );
};

export default AIEngine;
