"use client";

import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="w-full -mt-[20px] relative z-70">
      <div className="lg:px-[96px] px-6 text-center max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#F0E7FF] text-[#160041] text-sm font-semibold shadow-[0px_4px_12px_#3300800D] cursor-pointer">
              <Image
                src="/logo2.png"
                alt="Badge"
                width={15}
                height={15}
                className="object-contain"
              />
              See it to Believe it
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-[40px] lg:text-[48px] font-semibold text-[#160041] mb-[18px] leading-tight font-britti tracking-tight">
            See PostSyncer in Action
          </h2>

          {/* Subtitle */}
          <p className="text-[#667085] mb-16 font-geist w-full lg:w-[40%] mx-auto text-center text-[14px] lg:text-[16px]">
            A single workspace that connects your content, your team, and your
            schedule.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Browser Mockup */}
          <div className="relative h-[300px] lg:h-[600px] rounded-xl overflow-hidden hidden lg:block">
            <Image
              src="/video.png"
              alt="PostSyncer Dashboard"
              fill
              quality={100}
              unoptimized
              className="object-cover"
            />
          </div>
          <Image
            src="/video2.png"
            alt="PostSyncer Dashboard"
            width={400}
            height={300}
            quality={100}
            unoptimized
            className="object-cover lg:hidden block mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-[40px]"
        >
          <button className="flex items-center gap-2 pl-[16px] p-[4px] text-sm font-semibold text-white bg-[#6E43FC] rounded-[39px] transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 group cursor-pointer">
            Start For Free
            <div className="bg-[#ffffff] text-[#6E43FC] rounded-[20px] p-[10px] group-hover:translate-x-0.5 transition-transform">
              <HiArrowRight size={14} />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
