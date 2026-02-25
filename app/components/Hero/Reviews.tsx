"use client";

import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import Curve from "../ui/Curve";

const Reviews = () => {
  return (
    <div className="w-full overflow-hidden mt-[-100px] lg:mt-[-250px] relative z-60 border-t-5 border-[#ffffff]">
      <div className="rounded-[16px] bg-[#FBFBFB] overflow-hidden">
        <div className="flex gap-6 animate-marquee w-max">
          {/* Review Cards (Duplicated for seamless loop) */}
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-6">
              {/* Review 1 */}
              <div className="w-[300px] lg:w-[350px] bg-[#FBFBFB] backdrop-blur-sm p-6 text-left shrink-0">
                <div className="flex text-[#FFC367] mb-3 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <BsStarFill key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed font-geist">
                  "I must say... your app is literally the 1st X app I see real
                  value in and will not regret handing my money over for! 💪"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image
                      src="/avatars.png"
                      alt="User"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1e1b4b]">
                      arelentinecook
                    </p>
                    <p className="text-[10px] text-gray-400">July 9, 2025</p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="w-[300px] lg:w-[350px] bg-[#FBFBFB] backdrop-blur-sm p-6 text-left shrink-0">
                <div className="flex text-amber-400 mb-3 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <BsStarFill key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed font-geist">
                  "PostSycer is an banger product! I've tried various options,
                  even built my own, but I ended up decommissioning it because
                  PostSycer has everything I need. :)"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 overflow-hidden flex items-center justify-center">
                    <span className="text-xs font-bold text-white">M</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1e1b4b]">Marius</p>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="w-[300px] lg:w-[350px] bg-[#FBFBFB] backdrop-blur-sm p-6 text-left shrink-0">
                <div className="flex text-amber-400 mb-3 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <BsStarFill key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed font-geist">
                  "I thought all these tools were the same until I used
                  PostSycer. The Content Studio + Inspiration feature combo
                  makes this OP. Makes showing up daily so much easier."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500 overflow-hidden flex items-center justify-center">
                    <span className="text-xs font-bold text-white">J</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1e1b4b]">Jazz</p>
                  </div>
                </div>
              </div>

              {/* Review 4 */}
              <div className="w-[300px] lg:w-[350px] bg-[#FBFBFB] backdrop-blur-sm p-6 text-left shrink-0">
                <div className="flex text-amber-400 mb-3 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <BsStarFill key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed font-geist">
                  "I really love about PostSycer is it helps me to find good
                  tweet ideas so good. Also I love that I finally schedule
                  threads because before I didn't."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 overflow-hidden flex items-center justify-center">
                    <span className="text-xs font-bold text-white">T</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1e1b4b]">TIMO.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom curve image */}
      <Curve />
    </div>
  );
};

export default Reviews;
