"use client";

import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import Curve from "../ui/Curve";
import { motion } from "framer-motion";

const reviews = [
  {
    type: "text",
    name: "Marius",
    text: "PostSycer is an banger product! I've tried various options, even built my own, but I ended up decommissioning it because PostSycer has everything I need. :)",
    avatar: "/review.png",
  },
  {
    type: "image",
    image: "/testimonial-g.jpg",
    name: "Marius",
    text: "PostSycer is an banger product! I've tried various options, even built my own, but I ended up decommissioning it because PostSycer has everything I need. :)",
    avatar: "/review.png",
  },
  {
    type: "image",
    image: "/testimonial-g.jpg",
    name: "Marius",
    text: "PostSycer is an banger product! I've tried various options, even built my own, but I ended up decommissioning it because PostSycer has everything I need. :)",
    avatar: "/review.png",
  },
  {
    type: "text",
    name: "Marius",
    text: "PostSycer is an banger product! I've tried various options, even built my own, but I ended up decommissioning it because PostSycer has everything I need. :)",
    avatar: "/review.png",
  },
  {
    type: "text",
    name: "Marius",
    text: "PostSycer is an banger product! I've tried various options, even built my own, but I ended up decommissioning it because PostSycer has everything I need. :)",
    avatar: "/review.png",
  },
  {
    type: "image",
    image: "/testimonial-g.jpg",
    name: "Marius",
    text: "PostSycer is an banger product! I've tried various options, even built my own, but I ended up decommissioning it because PostSycer has everything I need. :)",
    avatar: "/review.png",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-white">
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
      <div className="lg:px-[96px] pb-[96px] p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-[] -mt-[50px] z-70 relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#F0E7FF] text-[#160041] text-sm font-semibold cursor-pointer">
            <Image
              src="/logo.png"
              alt="Badge"
              width={20}
              height={20}
              className="object-contain"
            />
            Proof it Works
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-10"
        >
          <h2 className="text-[40px] lg:text-[56px] font-bold text-[#160041] leading-tight font-britti tracking-tight mb-4">
            Don't Just Take our Word
            <br className="hidden lg:block" /> for It
          </h2>
          <div className="flex flex-col items-center justify-center text-[#667085] text-[14px] md:text-[15px] font-geist text-center leading-relaxed">
            <p className="whitespace-nowrap">
              Join thousands of creators and teams scaling
            </p>
            <div className="flex items-center justify-center gap-1">
              <span className="whitespace-nowrap">smarter with</span>
              <div className="flex items-center gap-1 font-medium text-[#00005E] whitespace-nowrap text-[15.8px]">
                <span className="p-0.5 w-4 h-4 flex items-center justify-center relative">
                  <Image
                    src="/logo.png"
                    alt="PostSyncer Logo"
                    fill
                    className="object-contain"
                  />
                </span>
                PostSyncer
              </div>
            </div>
          </div>
        </motion.div>
        {/* Avatar stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="flex relative">
            <Image
              src="/testimonial.png"
              alt="Avatar"
              className="object-cover"
              width={250}
              height={250}
            />
          </div>
        </motion.div>
        {/* Masonry Layout for Reviews */}
        <div className="columns-1 lg:columns-3 gap-6 lg:pt-[56px] pt-[40px]">
          {reviews.map((review, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="break-inside-avoid mb-6 rounded-2xl overflow-hidden bg-[#FAFAFA] "
            >
              {review.type === "image" && review.image && (
                <div className="w-full h-[213px] relative rounded-t-2xl overflow-hidden p-[20px] pb-0">
                  <div className="w-full h-full relative rounded-[12px] overflow-hidden">
                    <Image
                      src={review.image as string}
                      alt="Testimonial visual"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              <div className="pt-6 px-[20px] pb-[20px]">
                <div className="flex text-[#FFC759] mb-4 gap-1">
                  {[...Array(5)].map((_, index) => (
                    <BsStarFill key={index} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[14px] text-[#667085] mb-4 leading-relaxed font-geist">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-[8px] overflow-hidden relative">
                    <Image
                      src={review.avatar as string}
                      alt={review.name as string}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[14px] text-[#00005E] font-geist">
                    {review.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
