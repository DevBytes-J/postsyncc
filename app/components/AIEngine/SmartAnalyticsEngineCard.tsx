import Image from "next/image";
import { RiFireLine } from "react-icons/ri";

const SmartAnalyticsEngineCard = () => {
  return (
    <div className="bg-[#FBFBFB] rounded-[32px] p-6 flex flex-col h-full">
      <div className="bg-white rounded-3xl p-4 shadow-sm flex flex-col flex-1 mb-6 cursor-pointer">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="text-[18px] font-bold text-[#000000] mb-1 font-roboto flex items-center">
              4 days streak{" "}
              <span className="text-[#FF7600] text-[14px] ml-[4px]">
                <RiFireLine />
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[14px] font-bold text-[#000000] leading-none mb-1 font-roboto">
              173 posts
            </div>
            <div className="text-[11px] text-[#6B7280] font-roboto">
              Best streak: 5 days
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex justify-between mb-1">
            <span className="text-[10px] text-[#737A87] font-roboto">May</span>
            <span className="text-[10px] text-[#737A87] font-roboto">Jun</span>
            <span className="text-[10px] text-[#737A87] font-roboto">Jul</span>
          </div>
          <Image
            src="/feature2.png"
            alt="Heatmap"
            width={400}
            height={100}
            className="w-full h-auto max-h-[100px] object-cover object-top opacity-90"
            unoptimized
          />
          <div className="flex items-center gap-2 mt-[34px] text-[10px] text-[#737A87] font-roboto">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-sm bg-[#F1F1FF]"></div>
              <div className="w-2 h-2 rounded-sm bg-[#BBB5FA]"></div>
              <div className="w-2 h-2 rounded-sm bg-[#9790F7]"></div>
              <div className="w-2 h-2 rounded-sm bg-[#736CF4]"></div>
              <div className="w-2 h-2 rounded-sm bg-[#4F47EE]"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
      <h3 className="text-[18px] font-medium text-[#160041] mb-2 font-geist w-full">
        Smart Analytics Engine
      </h3>
      <p className="text-[#667085] text-[14px] font-geist tracking-tight">
        Discover what works best across platforms, content types, and time
        zones.
      </p>
    </div>
  );
};

export default SmartAnalyticsEngineCard;
