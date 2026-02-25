"use client";

import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiArrowRight } from "react-icons/hi";
import { CgMenuLeftAlt } from "react-icons/cg";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-[18px] lg:px-6 py-[12px] w-full max-w-6xl bg-white/80 backdrop-blur-md rounded-full shadow-lg shadow-gray-200/50 border border-white/50 transition-all duration-300 mx-[5px] relative z-100">
        {/* Logo Section */}
        <div className="flex items-center gap-[2px] justify-center">
          <div className=" ">
            <Image src="/logo.png" alt="Logo" width={24} height={24} />
          </div>
          <span className="text-[18px] font-bold tracking-tight text-[#1e1b4b] font-palanquin">
            PostSyncer
          </span>
        </div>

        {/* Centered Navigation Links - Desktop (Visible above 1300px) */}
        <div className="hidden min-[1301px]:flex items-center gap-8 text-[14px] font-medium text-[#667085] font-geist">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#4F46E5] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4F46E5] transition-all group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side Buttons - Desktop (Visible above 1300px) */}
        <div className="hidden min-[1301px]:flex items-center gap-3 font-geist">
          <button className="flex items-center gap-3 pl-[16px] pr-[4px] py-[11px] text-sm font-semibold text-[#160041] bg-[#F8F7F9] rounded-full transition-all border border-transparent hover:border-gray-200">
            Join with Google{" "}
            <span className="bg-white rounded-[36px] p-2 shadow-sm">
              <FcGoogle className="text-lg" />
            </span>
          </button>
          <button className="flex items-center gap-2 pl-[16px] pr-[4px] py-[11px] text-sm font-semibold text-white bg-[#6E43FC] rounded-full transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 group">
            Start For Free
            <div className="bg-[#ffffff] text-[#6E43FC] rounded-[36px] p-2 group-hover:translate-x-0.5 transition-transform">
              <HiArrowRight size={12} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Button (Visible at 1300px and below) */}
        <div className="min-[1301px]:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-gray-700 hover:text-[#4F46E5] transition-colors"
          >
            <CgMenuLeftAlt size={28} color="#6E43FC" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Sidebar) */}
      <div
        className={`fixed inset-0 z-200 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-300 transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Logo" width={24} height={24} />
                <span className="font-bold text-[#1e1b4b]">PostSyncer</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#667085] hover:text-[#160041]"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-lg font-medium text-gray-600 mb-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#6E43FC] py-2 border-b border-gray-50 flex justify-between items-center group"
                >
                  {link.name}
                  <HiArrowRight
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-[#6E43FC]"
                    size={16}
                  />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-8">
              <button className="flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold text-gray-700 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border border-gray-200">
                Join with Google <FcGoogle className="text-lg" />
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[#6E43FC] rounded-xl hover:bg-[#4f46e5] transition-all shadow-lg shadow-indigo-200">
                Start For Free <HiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
