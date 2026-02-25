import { FaCheck, FaMinus } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

export interface PricingFeature {
  name: string;
  included: boolean;
  value?: string;
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: PricingFeature[];
  buttonText: string;
  buttonColor?: "primary" | "secondary" | "sales";
  isFeatured?: boolean;
  showBestValue?: boolean;
  containerClassName?: string;
  onClick?: () => void;
}

export const PricingCard = ({
  title,
  subtitle,
  price,
  features,
  buttonText,
  buttonColor = "secondary",
  isFeatured = false,
  showBestValue = false,
  containerClassName = "",
  onClick,
}: PricingCardProps) => {
  const renderButton = () => {
    if (buttonColor === "primary") {
      return (
        <button className="w-full flex items-center justify-between group mt-auto pl-[16px] pr-[4px] py-[11px] rounded-full bg-[#6E43FC] hover:bg-[#5B33DF] transition-colors relative z-10 shadow-[0_8px_24px_rgba(110,67,252,0.25)]">
          <span className="text-white font-semibold font-geist text-[15px]">
            {buttonText}
          </span>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#6E43FC] transition-colors">
            <BsArrowRight />
          </div>
        </button>
      );
    }

    if (buttonColor === "sales") {
      return (
        <button className="w-full flex items-center justify-between group mt-auto pl-[16px] pr-[4px] py-[11px] rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
          <span className="text-[#1266F7] font-semibold font-geist text-[15px]">
            {buttonText}
          </span>
          <div className="w-8 h-8 bg-[#F4F8FF] rounded-[36px] flex items-center justify-center text-[#1266F7] transition-colors">
            <BsArrowRight />
          </div>
        </button>
      );
    }

    // secondary (default)
    return (
      <button className="w-full flex items-center justify-between group mt-auto pl-[16px] pr-[4px] py-[11px] rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
        <span className="text-[#6E43FC] font-semibold font-geist text-[16px]">
          {buttonText}
        </span>
        <div className="w-8 h-8 bg-[#F1EDFF] rounded-[36px] flex items-center justify-center text-[#6E43FC] transition-colors">
          <BsArrowRight />
        </div>
      </button>
    );
  };

  // ── FEATURED: glassmorphism two-layer card ──
  // ── FEATURED: glassmorphism two-layer card ──
  if (isFeatured) {
    return (
      <div
        className={`${containerClassName} mb-8 md:mb-0 ${onClick ? "cursor-pointer" : ""}`}
        onClick={onClick}
      >
        {/* Decorative corner images */}
        <img
          src="/pricing1.png"
          alt=""
          className="absolute left-0 top-0 pointer-events-none z-0"
        />
        <img
          src="/pricing2.png"
          alt=""
          className="absolute right-0 top-0 pointer-events-none z-0"
        />

        {/* Outer frosted container */}
        <div className="relative overflow-hidden bg-white/40 p-1 backdrop-blur-xl shadow-[0_24px_48px_-12px_rgba(100,100,200,0.12)]">
          {/* ── Glow blobs INSIDE the outer container ── */}
          {/* Blue glow — top-left */}
          <div className="absolute -top-16 -left-16 h-[300px] w-[300px] rounded-full bg-[#1266F7]/15 blur-[80px] pointer-events-none" />
          {/* Purple glow — top-right */}
          <div className="absolute -top-16 -right-16 h-[300px] w-[300px] rounded-full bg-[#6E43FC]/15 blur-[80px] pointer-events-none" />

          {/* Header — in the translucent outer area */}
          <div className="pt-8 pb-4 text-center relative z-10">
            <div className="flex items-center justify-center gap-2 mb-1">
              <h3 className="text-[#160041] font-medium font-geist text-[18px]">
                {title}
              </h3>
              {showBestValue && (
                <span className="px-[8px] py-[4px] rounded-full bg-[#ffffff] text-[#160041] text-[13px] font-bold tracking-wide border border-[#F0E7FF] shadow-sm">
                  Best Value
                </span>
              )}
            </div>
            <p className="text-[#46468A] text-[14px] font-geist mb-6">
              {subtitle}
            </p>
            <div className="text-[#160041] font-semibold text-[40px] font-britti tracking-tight leading-none">
              {price}
            </div>
          </div>

          {/* Inner white card — features + button */}
          <div className="mx-1.5 mb-1.5 rounded-[30px] bg-white/90 p-6 lg:p-8 shadow-sm relative z-10">
            <div className="grow space-y-4 mb-10">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`flex items-center ${feature.value ? "justify-between" : "gap-3"} ${!feature.included ? "opacity-50" : ""}`}
                >
                  <div
                    className={`flex items-center gap-3 ${!feature.value ? "w-full" : ""}`}
                  >
                    {feature.included ? (
                      <FaCheck className="text-[#6E43FC]" size={14} />
                    ) : (
                      <FaMinus className="text-[#66708580]" size={14} />
                    )}
                    <span className="text-[#667085] text-[13px] font-geist">
                      {feature.name}
                    </span>
                  </div>
                  {feature.value && (
                    <span className="text-[#160041] font-bold text-[13px]">
                      {feature.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {renderButton()}
          </div>
        </div>
      </div>
    );
  }

  // ── NON-FEATURED: original flat layout ──
  return (
    <div
      className={`${containerClassName} mb-8 md:mb-0 ${onClick ? "cursor-pointer transition-transform duration-300 hover:-translate-y-1" : ""}`}
      onClick={onClick}
    >
      <div className="text-center mb-12 relative z-10 w-full flex flex-col items-center shrink-0">
        <div className="flex items-center justify-center gap-2 mb-1">
          <h3 className="text-[#160041] font-medium font-geist text-[18px]">
            {title}
          </h3>
          {showBestValue && (
            <span className="px-[8px] py-[4px] rounded-full bg-[#ffffff] text-[#160041] text-[13px] font-bold tracking-wide border border-[#F0E7FF] shadow-sm">
              Best Value
            </span>
          )}
        </div>
        <p className="text-[#667085] text-[14px] font-geist mb-6">{subtitle}</p>
        <div className="text-[#160041] font-semibold text-[40px] font-britti tracking-tight leading-none">
          {price}
        </div>
      </div>

      <div className="grow space-y-4 mb-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`flex items-center ${feature.value ? "justify-between" : "gap-3"} ${!feature.included ? "opacity-50" : ""}`}
          >
            <div
              className={`flex items-center gap-3 ${!feature.value ? "w-full" : ""}`}
            >
              {feature.included ? (
                <FaCheck className="text-[#6E43FC]" size={14} />
              ) : (
                <FaMinus className="text-[#66708580]" size={14} />
              )}
              <span className="text-[#667085] text-[13px] font-geist">
                {feature.name}
              </span>
            </div>
            {feature.value && (
              <span className="text-[#160041] font-bold text-[13px]">
                {feature.value}
              </span>
            )}
          </div>
        ))}
      </div>

      {renderButton()}
    </div>
  );
};
