import { HiArrowRight } from "react-icons/hi";
export default function StartButton() {
  return (
    <button className="flex items-center gap-2 pl-[25px] pr-[4px] py-[11px] text-sm font-semibold text-white bg-[#6E43FC] rounded-full transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 group cursor-pointer">
      Get Started For Free
      <div className="bg-[#ffffff] text-[#6E43FC] rounded-[36px] p-2 group-hover:translate-x-0.5 transition-transform">
        <HiArrowRight size={12} />
      </div>
    </button>
  );
}
