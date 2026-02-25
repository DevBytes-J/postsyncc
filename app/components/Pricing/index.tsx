"use client";

import { useState } from "react";
import { PricingCard, PricingFeature } from "./PricingCard";
import Curve from "../ui/Curve";
import Image from "next/image";

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

  // Featured cards now render their own frosted container internally,
  // so containerClassName only needs to handle grid positioning.
  const getFeaturedClass = () =>
    "relative lg:-mt-12 lg:-mb-12 z-20 shrink-0 ";

  return (
    <section id="pricing" className="pb-32 overflow-hidden relative ">
      <div className="absolute inset-0 bg-[#FBFBFB] mix-blend-multiply -z-10 lg:block hidden" />
      <Curve />
      <div className="mx-[8px]">
        <img
          src="/bg-img.png"
          alt="Background Pattern"
          className="absolute bottom-0 inset-x-0 w-full object-cover -z-20 pointer-events-none rotate-180 lg:block hidden opacity-60"
        />
        <div className="relative w-full max-w-[1440px] px-4">
          {/* Isolated background blend layer */}
          <div className="flex justify-center mb-3 -mt-[30px] z-70 relative">
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
          </div>
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[32px] lg:text-[56px] font-semibold text-[#160041] leading-tight font-britti tracking-tight mb-4 px-4">
              Invest in{" "}
              <span className="text-[#6E43FC] italic font-garamond font-medium">
                Growth
              </span>
              ,
                

              Not Just Tools
            </h2>
            <p className="text-[#667085] text-[12px] lg:text-[15px] font-geist">
              Choose a plan built for creators, teams, and agencies. No
              <br className="lg:block hidden" /> per-user fees. No hidden
              limits. No surprises.
            </p>
          </div>

          {/* Pricing Cards Container */}
          <div className="mx-0 lg:mx-[96px] bg-[#FFFFFF] rounded-[32px] border border-[#F0E7FF] lg:border-0 p-0 lg:p-12 w-auto grid py-6 grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 relative items-center">
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
                  : "px-4 lg:px-8 relative lg:border-r border-gray-200"
              }`}
            />

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
                  : "px-4 lg:px-8 relative lg:border-r border-gray-200"
              }`}
            />

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
                  : "px-4 lg:px-8 relative"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
