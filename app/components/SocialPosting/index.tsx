"use client";

import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import { GrLineChart } from "react-icons/gr";
import { motion } from "framer-motion";

const SocialPosting = () => {
  return (
    <section className="w-full bg-white pb-[96px] mt-[96px] overflow-hidden">
      <div className="relative h-[120px] z-50 mx-[16px] ">
        <Image
          src="/under2.png"
          alt="Bottom curve mobile"
          fill
          className="object-fill md:hidden"
        />
        {/* desktop */}
        <Image
          src="/under.png"
          alt="Bottom curve desktop"
          fill
          className="object-fill hidden md:block"
        />
      </div>
      <div className="mx-auto px-6 lg:px-[96px] max-w-[1440px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="flex justify-center mb-3 -mt-[20px] z-70 relative">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#F0E7FF] text-[#160041] text-sm font-semibold shadow-[0px_4px_12px_#3300800D]">
              <Image
                src="/logo.png"
                alt="Badge"
                width={20}
                height={20}
                className="object-contain"
              />
              What You’ll Love
            </div>
          </div>
          <h2 className="text-[40px] lg:text-[56px] font-bold text-[#160041] mt-3 leading-tight font-britti tracking-tight">
            Social Media Superpowers,
            <br />
            <span className="text-[#6E43FC] italic font-garamond">
              All in One Place.
            </span>
          </h2>
          <p className="text-[#667085] text-[14px] font-geist mx-auto mt-4 text-center max-w-[280px] block lg:hidden">
            A single workspace that connects your content, your team, and your
            schedule.
          </p>
          <p className="text-[#667085] text-[14px] font-geist mx-auto mt-4 text-center max-w-[480px] hidden lg:block">
            Save time, collaborate better, and grow faster with
            PostSyncer&apos;s smart automation and AI-driven insights.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Card: One Click Everywhere */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="bg-[#FBFBFB] rounded-3xl px-4 py-6 lg:pb-0 lg:px-6 lg:pt-6 relative group font-geist flex-1 w-full"
          >
            <h3 className="text-[18px] font-medium text-[#160041] mb-2 ">
              One Click. Everywhere.
            </h3>
            <p className="text-[#667085] text-sm md:max-w-xs w-full">
              Schedule once. Post everywhere. Free up hours every week.
            </p>

            {/* Social Icons Mockup */}
            <div className="bg-white rounded-[24px] p-4 lg:p-6 shadow-[0px_0px_24px_0px_#3300800A] relative z-10 mt-8 mb-8 lg:mt-[80px]">
              <h4 className=" font-medium text-[#2E2E2E] mb-4 font-roboto">
                Posting to these accounts
                <p className="text-[13px] font-roboto text-[#737A87] w-full mt-1">
                  Click on any account to customize platform-specific settings
                  for that account
                </p>
              </h4>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 lg:pb-0 justify-start lg:justify-start">
                {/* Icons with profile images behind small logo badges */}
                {[
                  {
                    img: "/social1.png",
                  }, // Placeholder img
                  {
                    img: "/social2.png",
                  },
                  {
                    img: "/social3.png",
                  },
                  {
                    img: "/social4.png",
                  },
                  {
                    img: "/social5.png",
                  },
                ].map((social, i) => (
                  <div
                    key={i}
                    className=" rounded-3xl border-2 border-[#A060FF0D] shadow-[0px_4px_12px_#3300800D] flex items-center justify-center cursor-pointer p-[12px] lg:p-[14px] mt-8 lg:mt-[56px] shrink-0"
                  >
                    <Image
                      src={social.img}
                      alt="Social Icon"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Schedule Bar */}
              <div className="flex flex-col lg:flex-row items-center justify-between mt-8 pt-4 gap-4 lg:gap-0">
                <span className=" text-[11px] lg:text-xs font-medium text-[#160041] bg-[#FBFBFB] p-4 rounded-[12px] font-roboto border border-[#16004108] w-full lg:w-auto text-center lg:text-left wrap-break-word cursor-pointer">
                  Schedule for Today at 7:00 PM
                </span>

                <button className="hidden lg:flex bg-[#FF6D00] text-white font-semibold rounded-full items-center gap-1 shadow-md hover:scale-105 transition-transform pr-[9px] w-full lg:w-auto justify-center lg:justify-start cursor-pointer">
                  <span className="text-[14px] border-r border-white rounded-r-full py-2 px-[12px] pl-[16px]">
                    Schedule
                  </span>
                  <span className="pl-1">
                    <HiArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Two Stacked Cards */}
          <div className="flex flex-col gap-4 flex-1 w-full">
            {/* Top Right: Team Members */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#FBFBFB] rounded-3xl p-4 lg:p-6"
            >
              <h3 className="text-lg font-medium text-[#160041] mb-2 font-geist">
                Built for Teams, Loved by Freelancers
              </h3>
              <p className="text-[#667085] text-[14px] mb-6 font-geist w-full lg:w-[60%]">
                Invite unlimited team members, assign roles, and approve content
                seamlessly.
              </p>

              <div className="bg-white border border-gray-100 rounded-2xl p-4 lg:p-5 shadow-sm">
                <h4 className="font-medium text-[#2E2E2E] mb-4">
                  Invite Team Members
                </h4>
                <div className="space-y-3">
                  <div className="h-[10px] lg:w-full w-[97%] bg-[#66708514] rounded-full"></div>
                  <div className="h-[10px] lg:w-full w-[97%] bg-[#66708514] rounded-full"></div>
                  <div className="h-[10px] lg:w-[50%] w-full bg-[#66708514] rounded-full"></div>
                  <div className="flex flex-col lg:flex-row gap-2 mt-4">
                    <input
                      type="text"
                      placeholder="example@domain.com"
                      className="w-full lg:flex-1 border border-[#3300800F] shadow-[0px_1px_2px_0px_#3300800F] rounded-lg px-3 py-2 text-xs outline-none focus:border-indigo-500 placeholder:text-[#737A87] placeholder:text-[13px] placeholder:font-roboto"
                    />
                    <button className="w-full lg:w-auto bg-[#4F46E5] text-white text-[13px] px-4 py-2 rounded-lg cursor-pointer">
                      Send Invite
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Right: Analytics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-[#FBFBFB] rounded-3xl p-4 pb-0 lg:px-6 lg:py-6 "
            >
              <h3 className="text-lg font-medium text-[#160041] mb-2 font-roboto">
                Know What Works. Double Down on It.
              </h3>
              <p className="text-[#667085] text-[14px] mb-6 font-geist">
                View performance across all platforms with real-time analytics.
              </p>

              <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 lg:items-end h-auto lg:h-[160px]">
                {/* Stat Card */}
                <div className="bg-white rounded-[20px] p-4 lg:p-5 shadow-sm w-[60%] md:w-[40%] h-auto lg:h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[24px] font-semibold text-[#160041] leading-none mb-1 font-roboto">
                        164.5k
                      </div>
                      <div className="text-[12px] text-[#2E2E2E9C] tracking-wider font-roboto">
                        FOLLOWERS
                      </div>
                    </div>
                    <div className="flex items-center text-[#00990F] text-[12px] gap-0.5 font-roboto">
                      <GrLineChart />
                      +0.63
                    </div>
                  </div>

                  {/* Area Chart */}
                  <div className="w-full flex-1 min-h-[60px] relative mt-4">
                    <svg
                      viewBox="0 0 100 40"
                      preserveAspectRatio="none"
                      className="w-full h-full"
                    >
                      <defs>
                        <linearGradient
                          id="chartGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#5745E2"
                            stopOpacity="0.2"
                          />
                          <stop
                            offset="100%"
                            stopColor="#5745E2"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 32 C 25 30 25 22 50 20 S 75 12 100 6 V 40 H 0 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0 32 C 25 30 25 22 50 20 S 75 12 100 6"
                        fill="none"
                        stroke="#5745E2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Heatmap Card */}
                <div className="bg-white rounded-t-[20px] md:rounded-[20px] p-4 pb-0 shadow-sm flex-1 h-full flex flex-col overflow-hidden">
                  {/* Month Labels */}
                  <div className="flex justify-between mb-2">
                    <span className="text-[12px] text-[#737A87] font-roboto">
                      May
                    </span>
                    <span className="text-[12px] text-[#737A87] font-roboto">
                      Jun
                    </span>
                    <span className="text-[12px] text-[#737A87] font-roboto">
                      Jul
                    </span>
                  </div>

                  {/* Grid with fade */}
                  <div className="relative -mb-4">
                    <Image
                      src="/feature.png"
                      alt="Heatmap"
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialPosting;
