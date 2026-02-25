"use client";

import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import Curve from "../ui/Curve";

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
      <Curve />
      <div className="lg:px-[96px] pb-[96px] p-6">
        <div className="flex justify-center mb-[] -mt-[50px] z-70 relative">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#F0E7FF] text-[#160041] text-sm font-semibold">
            <Image
              src="/logo.png"
              alt="Badge"
              width={20}
              height={20}
              className="object-contain"
            />
            Proof it Works
          </div>
        </div>
        <div className="text-center mb-10">
          <h2 className="text-[32px] lg:text-[56px] font-bold text-[#160041] leading-tight font-britti tracking-tight mb-4">
            Don't Just Take our Word
            <br className="hidden lg:block" /> for It
          </h2>
          <div className="flex flex-col items-center justify-center text-[#667085] text-[15px] font-geist">
            <p>Join thousands of creators and teams scaling smarter</p>
            <div className="flex items-center gap-1">
              <span>with</span>
              <div className="flex items-center gap-1 font-bold text-[#160041]">
                <div className=" p-0.5 w-4 h-4 flex items-center justify-center relative">
                  <Image
                    src="/logo.png"
                    alt="PostSyncer Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                PostSyncer
              </div>
            </div>
          </div>
        </div>
        {/* Avatar stack */}
        <div className="flex justify-center">
          <div className="flex relative">
            <Image
              src="/testimonial.png"
              alt="Avatar"
              className="object-cover"
              width={250}
              height={250}
            />
          </div>
        </div>
        {/* Masonry Layout for Reviews */}
        <div className="columns-1 lg:columns-3 gap-6 pt-[56px]">
          {reviews.map((review, i) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
