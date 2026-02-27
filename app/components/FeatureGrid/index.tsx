"use client";

import Image from "next/image";
import Curve from "../ui/Curve";
import StartButton from "../ui/StartButton";
import { motion } from "framer-motion";

const FeatureGrid = () => {
  return (
    <section id="features" className="w-full bg-white pb-[96px]">
      <div className="relative h-[120px] z-50 mx-[16px] ">
        <Image
          src="/under2.png"
          alt="Bottom curve mobile"
          fill
          className="object-fill md:hidden rounded-[16px]"
        />
        {/* desktop */}
        <Image
          src="/under.png"
          alt="Bottom curve desktop"
          fill
          className="object-fill hidden md:block"
        />
      </div>
      <div className="lg:px-[96px] px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 "
        >
          {" "}
          <div className="flex justify-center mb-3 -mt-[30px] z-70 relative">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#F0E7FF] text-[#160041] text-sm font-semibold shadow-[0px_4px_12px_#3300800D] cursor-pointer">
              <Image
                src="/logo.png"
                alt="Badge"
                width={20}
                height={20}
                className="object-contain"
              />
              Power Meets Simplicity
            </div>
          </div>
          <h2 className="text-[40px] lg:text-[56px] font-semibold text-[#160041] leading-none lg:leading-[1.1] lg:mb-[64px] mb-[16px] lg:mt-[18px] font-britti tracking-tight w-full">
            Smarter Tool.
            <br />
            Simpler Workflow.
            <br />
            <span className="text-[#6E43FC] italic font-garamond">
              Stronger Results.
            </span>
          </h2>
          <p className="text-[#667085] font-geist max-w-2xl mx-auto text-[14px] leading-relaxed">
            Powerful tools designed to simplify your workflow, boost engagement,
            and keep your content engine running smoothly.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="flex flex-col gap-4">
          {/* Feature 1: Plan & Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Top Full Width Card */}
            <div className="bg-[#FBFBFB] rounded-[24px] pt-4 pl-4 lg:pt-6 lg:pl-6 mb-4">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
                <div className="lg:w-[40%]">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-3 mb-3 lg:mt-[93px] mt-0 cursor-pointer">
                    <Image
                      src="/logo.png"
                      alt="Badge"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="lg:text-[40px] text-[24px] font-medium text-[#160041] mb-4 font-geist">
                    Plan & Schedule
                  </h3>
                  <p className="text-[#667085] mb-8 font-geist leading-relaxed text-[16px]">
                    Powerful scheduling tools designed to help you plan ahead,
                    stay consistent, and grow without chaos.
                  </p>
                  <StartButton />
                </div>
                {/* Image Side - Calendar Mockup */}
                <div className="lg:w-[60%] w-full flex justify-end overflow-hidden mask-[linear-gradient(to_bottom,black_60%,transparent_100%)] lg:pt-[32px] pt-0">
                  <Image
                    src="/plan-schedule.png"
                    alt="Plan & Schedule"
                    width={400}
                    height={300}
                    quality={100}
                    unoptimized
                    className="object-right object-contain w-[120%] lg:w-full ml-auto translate-x-4 lg:translate-x-12"
                  />
                </div>
              </div>
            </div>

            {/* Bottom 3 Cards */}
            <div className="grid lg:grid-cols-3 lg:gap-4 gap-2">
              <div className="bg-[#FBFBFB] rounded-[24px] p-8">
                <h4 className="font-medium text-[#160041] mb-2 font-geist lg:text-[18px] text-[16px]">
                  Visual Content Calendar
                </h4>
                <p className="text-[#667085] text-[14px] font-geist leading-relaxed">
                  Drag, drop, and visualize your entire content strategy in one
                  clean calendar. Plan weeks of content in minutes.
                </p>
              </div>
              <div className="bg-[#FBFBFB] rounded-[24px] p-8">
                <h4 className="font-medium text-[#160041] mb-2 font-geist lg:text-[18px] text-[16px]">
                  Carousel Posts Calendar
                </h4>
                <p className="text-[#667085] text-[14px] font-geist leading-relaxed">
                  Tell richer stories with multi-image posts. Schedule
                  scroll-stopping carousels that build engagement.
                </p>
              </div>
              <div className="bg-[#FBFBFB] rounded-[24px] p-8">
                <h4 className="font-medium text-[#160041] mb-2 font-geist lg:text-[18px] text-[16px]">
                  Reels & Shorts Scheduling
                </h4>
                <p className="text-[#667085] text-[14px] font-geist leading-relaxed">
                  Effortlessly schedule short-form content across platforms.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Collaborate & Manage */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Top Full Width Card */}
            <div className="bg-[#FBFBFB] rounded-[24px] pt-4 pl-4 lg:pt-6 lg:pl-6 mb-4">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
                <div className="lg:w-[40%]">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-3 mb-6 mt-0 lg:mt-[93px] cursor-pointer">
                    <Image
                      src="/logo.png"
                      alt="Badge"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[24px] font-medium text-[#160041] mb-4 font-geist lg:text-[40px] leading-tight lg:leading-[1.1]">
                    Collaborate & <br className="hidden lg:block" /> Manage
                  </h3>
                  <p className="text-[#667085] mb-8 font-geist leading-relaxed text-[16px]">
                    Smart workflows that keep your team in sync, your content
                    organized, and your launches smooth.
                  </p>
                  <StartButton />
                </div>
                {/* Image Side - Team Mockup */}
                <div className="lg:w-[60%] w-full flex justify-end overflow-hidden mask-[linear-gradient(to_bottom,black_60%,transparent_100%)] pt-0 lg:pt-[32px]">
                  <Image
                    src="/collaborate-manage.png"
                    alt="Collaborate & Manage"
                    width={500}
                    height={500}
                    quality={100}
                    unoptimized
                    className="object-right object-contain w-[120%] lg:w-full ml-auto translate-x-4 lg:translate-x-12"
                  />
                </div>
              </div>
            </div>

            {/* Bottom 3 Cards */}
            <div className="grid lg:grid-cols-3 lg:gap-4 gap-2">
              <div className="bg-[#FBFBFB] rounded-[24px] p-8">
                <h4 className="font-medium text-[#160041] mb-2 font-geist lg:text-[18px] text-[16px]">
                  Approved Workflow
                </h4>
                <p className="text-[#667085] text-[14px] font-geist leading-relaxed">
                  Review, comment, and approve content in one place. Say goodbye
                  to endless threads and last-minute edits.
                </p>
              </div>
              <div className="bg-[#FBFBFB] rounded-[24px] p-8">
                <h4 className="font-medium text-[#160041] mb-2 font-geist lg:text-[18px] text-[16px]">
                  Workspace
                </h4>
                <p className="text-[#667085] text-[14px] font-geist leading-relaxed">
                  Manage multiple brands or clients and switch between projects
                  seamlessly with dedicated spaces.
                </p>
              </div>
              <div className="bg-[#FBFBFB] rounded-[24px] p-8">
                <h4 className="font-medium text-[#160041] mb-2 font-geist lg:text-[18px] text-[16px]">
                  Labeling & Filtering
                </h4>
                <p className="text-[#667085] text-[14px] font-geist leading-relaxed">
                  Tag, sort, and find content in seconds. Keep campaigns
                  organized and easy to navigate.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Create & Store */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Top Full Width Card */}
            <div className="bg-[#FBFBFB] rounded-[24px] pt-4 pl-4 lg:pt-6 lg:pl-6 mb-4">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
                <div className="lg:w-[40%]">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-3 mb-6 mt-0 lg:mt-[93px] cursor-pointer">
                    <Image
                      src="/logo.png"
                      alt="Badge"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-[24px] font-medium text-[#160041] mb-4 font-geist lg:text-[40px]">
                    Create & Store
                  </h3>
                  <p className="text-[#667085] mb-8 font-geist leading-relaxed text-[16px]">
                    Everything you need to create, manage, and keep your content
                    assets at your fingertips.
                  </p>
                  <StartButton />
                </div>
                {/* Image Side - Media Mockup */}
                <div className="lg:w-[60%] w-full flex justify-end overflow-hidden mask-[linear-gradient(to_bottom,black_60%,transparent_100%)] pt-0 lg:pt-[32px]">
                  <Image
                    src="/create-store.png"
                    alt="Create & Store"
                    width={500}
                    height={500}
                    quality={100}
                    unoptimized
                    className="object-right object-contain w-[120%] lg:w-full ml-auto translate-x-4 lg:translate-x-12"
                  />
                </div>
              </div>
            </div>

            {/* Bottom 3 Cards */}
            <div className="grid lg:grid-cols-3 lg:gap-4 gap-2">
              <div className="bg-[#FBFBFB] rounded-[24px] p-8">
                <h4 className="font-medium text-[#160041] mb-2 font-geist lg:text-[18px] text-[16px]">
                  AI Video Creator
                </h4>
                <p className="text-[#667085] text-[14px] font-geist leading-relaxed">
                  Create videos in minutes. Fuel your socials with
                  high-performing content.
                </p>
              </div>
              <div className="bg-[#FBFBFB] rounded-[24px] p-8">
                <h4 className="font-medium text-[#160041] mb-2 font-geist lg:text-[18px] text-[16px]">
                  AI-Powered Content Studio
                </h4>
                <p className="text-[#667085] text-[14px] font-geist leading-relaxed">
                  Generate high-performing captions, hooks, and ideas in
                  seconds. Your always-on creative partner.
                </p>
              </div>
              <div className="bg-[#FBFBFB] rounded-[24px] p-8">
                <h4 className="font-medium text-[#160041] mb-2 font-geist lg:text-[18px] text-[16px]">
                  Media & Assets Library
                </h4>
                <p className="text-[#667085] text-[14px] font-geist leading-relaxed">
                  Store, organize, and reuse your content with ease. No more
                  digging through messy folders to find your stuff.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
