"use client";

import SmartAnalyticsEngineCard from "./SmartAnalyticsEngineCard";
import AIContentStudioCard from "./AIContentStudioCard";
import AIVideoCreatorCard from "./AIVideoCreatorCard";
import SocialAccountsRow from "../ui/SocialAccountsRow";
import Image from "next/image";
import { motion } from "framer-motion";

const AIEngine = () => {
  return (
    <section className="w-full bg-white pb-[96px] overflow-hidden">
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
      <div className=" px-6 lg:px-[96px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-3 -mt-[30px] z-70 relative"
        >
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
        </motion.div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
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
        </motion.div>

        {/* 3 Cards Flex Layout */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[30%]"
          >
            <SmartAnalyticsEngineCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-[45%]"
          >
            <AIContentStudioCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-[27.5%]"
          >
            <AIVideoCreatorCard />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <SocialAccountsRow />
        </motion.div>
      </div>
    </section>
  );
};

export default AIEngine;
