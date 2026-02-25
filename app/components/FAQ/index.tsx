"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div
      className={`border border-transparent rounded-[16px] overflow-hidden transition-all duration-200 cursor-pointer ${
        isOpen
          ? "bg-[#FBFBFB] shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
          : "bg-[#FBFBFB] hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
      }`}
      onClick={onToggle}
    >
      <div className="p-[20px] flex justify-between items-center gap-4">
        <h4
          className={`font-semibold font-geist text-[16px] transition-colors ${isOpen ? "text-[#160041]" : "text-[#160041]"}`}
        >
          {question}
        </h4>
        <div
          className={`shrink-0 text-[#160041] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <FiChevronDown size={20} />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100 pb-6 px-6 lg:px-8 lg:pb-8"
            : "max-h-0 opacity-0 px-6 lg:px-8"
        }`}
      >
        <p className="text-[#667085] leading-relaxed font-geist text-[14px] lg:text-[16px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0); // Left column first item open by default

  const faqsLeft = [
    {
      question: "What is PostSyncer",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What is PostSyncer",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What is PostSyncer",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What is PostSyncer",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What is PostSyncer",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What is PostSyncer",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const faqsRight = [
    {
      question: "What is PostSyncer",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What is PostSyncer",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What is PostSyncer",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What is PostSyncer",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What is PostSyncer",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What is PostSyncer",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section
      id="faq"
      className="w-full bg-white pb-32 pt-20 overflow-hidden relative"
    >
      <div className="mx-auto px-6 lg:px-[96px] w-full max-w-[1440px]">
        <div className="flex items-center gap-2 justify-center  text-[#00005E] text-sm font-medium font-geist">
          <Image
            src="/logo.png"
            alt="Badge"
            width={20}
            height={20}
            className="object-contain"
          />
          Got Questions?
        </div>

        <div className="text-center mb-16">
          <h2 className="text-[32px] lg:text-[56px] font-bold text-[#00005E] leading-tight font-britti tracking-tight mb-4">
            Frequently Asked
            <br />
            Questions
          </h2>
          <p className="text-[#667085] text-[15px] font-geist max-w-2xl mx-auto">
            Join thousands of creators and teams scaling smarter
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {faqsLeft.map((faq, index) => (
              <FAQItem
                key={`left-${index}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {faqsRight.map((faq, index) => {
              const rightIndex = index + faqsLeft.length;
              return (
                <FAQItem
                  key={`right-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === rightIndex}
                  onToggle={() =>
                    setOpenIndex(openIndex === rightIndex ? -1 : rightIndex)
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
