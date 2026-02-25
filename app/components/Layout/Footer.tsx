"use client";

import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" relative bg-white overflow-hidden pt-16 pb-6">
      <div className=" px-6 lg:px-[96px] w-full max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4">
          {/* Logo & Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 font-bold text-[#160041] text-[20px] mb-4 cursor-pointer">
              <div className="w-6 h-6 bg-[#160041] rounded-[6px] flex items-center justify-center text-white relative">
                <Image
                  src="/logo.png"
                  alt="PostSyncer Logo"
                  fill
                  className="object-contain"
                />
              </div>
              PostSyncer
            </div>
            <p className="text-[#667085] text-[13px] font-geist leading-relaxed mb-6 max-w-[250px]">
              Plan, publish, and analyze across every platform.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="w-8 h-8 rounded-[8px] bg-[#00005E0A] flex items-center justify-center text-[#6E43FC] hover:bg-[#00005E0A] transition-colors"
              >
                <FaXTwitter size={14} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-[8px] bg-[#00005E0A] flex items-center justify-center text-[#6E43FC] hover:bg-[#00005E0A] transition-colors"
              >
                <FaLinkedinIn size={14} />
              </Link>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-x-[7px] gap-y-[57px]">
            {/* Company */}
            <div className="flex flex-col gap-3">
              <h4 className=" text-[#667085] text-[12px] lg:text-[14px] font-geist mb-4 tracking-wider">
                Company
              </h4>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Become an Affiliate (40%)
              </Link>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-3">
              <h4 className=" text-[#667085] text-[14px] font-geist mb-4 tracking-wider">
                Resources
              </h4>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                FAQs
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                All Resources
              </Link>
            </div>

            {/* Platforms */}
            <div className="flex flex-col gap-3">
              <h4 className=" text-[#667085] text-[14px] font-geist mb-4 tracking-wider">
                Platforms
              </h4>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Twitter Scheduler
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Facebook Scheduler
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Instagram Scheduler
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                TikTok Scheduler
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                YouTube Scheduler
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Pinterest Scheduler
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Threads Scheduler
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Telegram Scheduler
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                LinkedIn Scheduler
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Bluesky Scheduler
              </Link>
            </div>

            {/* Free Tools */}
            <div className="flex flex-col gap-3">
              <h4 className=" text-[#667085] text-[14px] font-geist mb-4 tracking-wider">
                Free Tools
              </h4>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Photo & Video Downloader
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                UTM Generator
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Twitter Photo Resizer
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                LinkedIn Photo Resizer
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                TikTok Photo Resizer
              </Link>
              <Link
                href="#"
                className="text-[#160041] hover:text-[#667085] text-[14px] font-geist transition-colors"
              >
                Threads Photo Resizer
              </Link>
            </div>
          </div>
        </div>

        <div className=" my-[40px] w-full flex justify-center overflow-hidden pointer-events-none z-0 selection:bg-transparent -tracking-[8px]">
          <img src="/postsyncer.png" alt="PostSyncer Logo" />
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center items-left gap-4 pt-6 text-[12px] font-geist text-[#667085] border-t border-[#66708526]">
          <p>2024 PostSyncer. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="hover:text-[#667085] text-[#160041] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="hover:text-[#667085] text-[#160041] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
