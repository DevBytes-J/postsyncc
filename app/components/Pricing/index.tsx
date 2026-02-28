"use client";

import { useState } from "react";
import { PricingCard, PricingFeature } from "./PricingCard";
import Curve from "../ui/Curve";
import Image from "next/image";
import { motion } from "framer-motion";

const starterFeatures: PricingFeature[] = [
  { name: "Social Accounts", included: true, value: "5" },
  { name: "AI Video Credits", included: true, value: "50/mo" },
  { name: "Team Members", included: true, value: "1" },
  { name: "Media Library", included: true, value: "Basic" },
  { name: "Analytics", included: true, value: "Standard" },
  { name: "AI Content Studio", included: true },
  { name: "Content Calendar", included: true },
  { name: "Priority Support", included: false },
  { name: "Custom Branding", included: false },
  { name: "SLA & SSO", included: false },
];

const proFeatures: PricingFeature[] = [
  { name: "Social Accounts", included: true, value: "Unlimited" },
  { name: "AI Video Credits", included: true, value: "300/mo" },
  { name: "Team Members", included: true, value: "Unlimited" },
  { name: "Media Library", included: true, value: "Advanced" },
  { name: "Analytics", included: true, value: "Pro" },
  { name: "AI Content Studio", included: true },
  { name: "Content Calendar", included: true },
  { name: "Priority Support", included: true },
  { name: "Custom Branding", included: true },
  { name: "SLA & SSO", included: false },
];

const scaleFeatures: PricingFeature[] = [
  { name: "Social Accounts", included: true, value: "Unlimited" },
  { name: "AI Video Credits", included: true, value: "Unlimited" },
  { name: "Team Members", included: true, value: "Unlimited" },
  { name: "Media Library", included: true, value: "Advanced" },
  { name: "Analytics", included: true, value: "Enterprise" },
  { name: "AI Content Studio", included: true, value: "Advanced" },
  { name: "Content Calendar", included: true },
  { name: "Priority Support", included: true },
  { name: "Custom Branding", included: true },
  { name: "SLA & SSO", included: true },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"starter" | "pro" | "scale">(
    "pro",
  );

  const getFeaturedClass = () => "relative lg:-mt-12 lg:-mb-12 z-20 shrink-0 ";

  return (
    <section id="pricing" className="pb-32 overflow-hidden relative ">
      <div className="absolute inset-0 bg-[#FBFBFB] mix-blend-multiply -z-10 lg:block hidden" />
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
      <div className="mx-[8px]">
        <img
          src="/bg-img.png"
          alt="Background Pattern"
          className="absolute bottom-0 inset-x-0 w-full object-cover -z-20 pointer-events-none rotate-180 lg:block hidden opacity-60"
        />
        <div className="relative w-full max-w-[1440px] px-4 mx-auto">
          {/* Isolated background blend layer */}
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
              Flexible Pricing
            </div>
          </motion.div>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-[40px] lg:text-[56px] font-semibold text-[#160041] leading-tight font-britti tracking-tight mb-4 px-4 flex flex-col items-center">
              <span className="whitespace-nowrap">
                Invest in{" "}
                <span className="text-[#6E43FC] italic font-garamond font-medium">
                  Growth
                </span>
                ,
              </span>
              <span className="whitespace-nowrap">Not Just Tools</span>
            </h2>
            <p className="text-[#667085] text-[14px] lg:text-[15px] font-geist flex flex-col items-center leading-relaxed">
              <span className="whitespace-nowrap">
                Choose a plan built for creators, teams,
              </span>
              <span className="md:whitespace-nowrap">
                and agencies. No fees, limits or surprises.
              </span>
            </p>
          </motion.div>

          {/* Pricing Cards Container */}
          <div className="mx-0 lg:mx-[70px] bg-[#FFFFFF] rounded-[32px] border border-[#F0E7FF] lg:border-0 p-2 lg:p-12 w-auto grid py-6 min-[1301px]:grid-cols-1 lg:grid-cols-3 min-[1301px]:gap-8 lg:gap-0 relative items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <PricingCard
                title="Starter Plan"
                subtitle="For solo creators and freelancers"
                price="$19"
                features={starterFeatures}
                buttonText="Get Starter"
                buttonColor={activeTab === "starter" ? "primary" : "secondary"}
                isFeatured={activeTab === "starter"}
                onClick={() => setActiveTab("starter")}
                containerClassName={`flex flex-col ${
                  activeTab === "starter"
                    ? getFeaturedClass()
                    : "px-[32px] lg:px-8 relative "
                }`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <PricingCard
                title="Pro"
                subtitle="Growing teams and agencies"
                price="$300"
                features={proFeatures}
                buttonText="Get Started For Free"
                buttonColor={activeTab === "pro" ? "primary" : "secondary"}
                isFeatured={activeTab === "pro"}
                showBestValue
                onClick={() => setActiveTab("pro")}
                containerClassName={`flex flex-col ${
                  activeTab === "pro"
                    ? getFeaturedClass()
                    : "px-[32px] lg:px-8 relative "
                }`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <PricingCard
                title="Scale"
                subtitle="Large organizations"
                price="Custom"
                features={scaleFeatures}
                buttonText="Talk to Sales"
                buttonColor={activeTab === "scale" ? "primary" : "sales"}
                isFeatured={activeTab === "scale"}
                onClick={() => setActiveTab("scale")}
                containerClassName={`flex flex-col ${
                  activeTab === "scale"
                    ? getFeaturedClass()
                    : "px-[32px] lg:px-8 relative"
                }`}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
