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
        <button className="w-full flex items-center justify-between group mt-auto pl-[16px] p-[8px] rounded-[39px] bg-[#6E43FC] hover:bg-[#5B33DF] transition-colors relative z-10 shadow-[0_8px_24px_rgba(110,67,252,0.25)] cursor-pointer">
          <span className="text-white font-semibold font-geist text-[15px]">
            {buttonText}
          </span>
          <div className="p-[10px] rounded-[20px] bg-white flex items-center justify-center text-[#6E43FC] transition-colors">
            <BsArrowRight />
          </div>
        </button>
      );
    }

    if (buttonColor === "sales") {
      return (
        <button className="w-full flex items-center justify-between group mt-auto pl-[16px] p-[8px] rounded-[39px] border-2 border-[#F1EDFF] bg-white hover:bg-gray-50 transition-colors cursor-pointer">
          <span className="text-[#1266F7] font-semibold font-geist text-[15px]">
            {buttonText}
          </span>
          <div className="p-[10px] bg-[#F4F8FF] rounded-[20px] flex items-center justify-center text-[#1266F7] transition-colors">
            <BsArrowRight />
          </div>
        </button>
      );
    }

    // secondary (default)
    return (
      <button className="w-full flex items-center justify-between group mt-auto pl-[16px] p-[8px] rounded-[39px] border-2 border-[#F1EDFF] bg-white hover:bg-gray-50 transition-colors">
        <span className="text-[#6E43FC] font-semibold font-geist text-[16px]">
          {buttonText}
        </span>
        <div className="p-[10px] bg-[#F1EDFF] rounded-[20px] flex items-center justify-center text-[#6E43FC] transition-colors">
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
        className={`${containerClassName} relative isolate mb-8 md:mb-0 ${onClick ? "cursor-pointer" : ""}`}
        onClick={onClick}
      >
        ── Glow blobs (z-0) ──
        <div className="absolute top-60 -left-12 h-[170px] w-[70px] rounded-full bg-[#1266F7]/15 blur-2xl pointer-events-none z-0 lg:block hidden" />
        <div className="absolute top-60 -right-12 h-[170px] w-[70px] rounded-full bg-[#6E43FC]/15 blur-2xl pointer-events-none z-0 lg:block hidden" />
        {/* ── Decorative corner images / manual stack (z-20) ── */}
        {/* ── RIGHT SIDE STACK ── */}
        <div
          className="absolute right-[-30px] top-60 z-20 pointer-events-none"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
          }}
        >
          <div className="flex flex-col gap-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-9 h-10 bg-white rounded-md" />
            ))}
          </div>
        </div>
        {/* ── LEFT SIDE STACK ── */}
        <div
          className="absolute left-[-30px] top-60 z-20 pointer-events-none"
          style={{
            WebkitMaskImage:
              "linear-gradient(to left, transparent, black 30%, black 70%, transparent)",
            maskImage:
              "linear-gradient(to left, transparent, black 30%, black 70%, transparent)",
          }}
        >
          <div className="flex flex-col gap-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-9 h-10 bg-white rounded-md " />
            ))}
          </div>
        </div>
        {/* ── Frosted container (z-30) ── */}
        <div className="relative z-30 bg-white/40 backdrop-blur-xl ">
          <div
            className="absolute top-[8px] left-0 w-full h-[150px] blur-[16px] opacity-90 pointer-events-none rounded-t-[32px]"
            style={{
              background: "linear-gradient(to right, #eef3ff, #ede8ff)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
            }}
          ></div>
          <div className="pt- pb-4 text-center relative z-10">
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
          <div className="relative rounded-[32px] bg-gradient-to-r from-[#f3f6ff] to-[#f0ecff] p-[2.5px]">
            <div className="rounded-[30px] bg-white p-6 lg:p-8 relative z-10">
              <div className="grow space-y-4 mb-10">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center ${
                      feature.value ? "justify-between" : "gap-3"
                    } ${!feature.included ? "opacity-50" : ""}`}
                  >
                    <div
                      className={`flex items-center gap-3 ${
                        !feature.value ? "w-full" : ""
                      }`}
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
