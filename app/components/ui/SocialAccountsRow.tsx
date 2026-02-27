import {
  FaPinterest,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaYoutube,
  FaThreads,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import Image from "next/image";

const SocialAccountsRow = () => {
  return (
    <div className="bg-[#FBFBFB] rounded-[24px] p-4 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
      <div
        className=" p-4 flex items-center gap-4 
        border-b lg:border-r border-[#1600410D] lg:ml-6 ml-0 justify-center "
      >
        <div>
          <div className="flex justify-center items-center">
            <Image
              src="/connect.png"
              alt="AI Content Studio"
              width={50}
              height={50}
              className="opacity"
              unoptimized
            />
          </div>
        </div>
        <span className="font-bold text-[14px] leading-tight text-[#160041B8] font-geist">
          Connect all your
          <br />
          favorite accounts
        </span>
        {/* <span className="border-r border-[#1600410D] ml-6 h-full "></span> */}
      </div>

      <div className="flex flex-nowrap items-start lg:items-center justify-left lg:justify-center gap-2 lg:gap-4 flex-1 w-full p-2 py-4 rounded-xl overflow-hidden">
        {[
          {
            icon: <FaPinterest className="text-[#E60023] w-5 h-5" />,
            bg: "bg-white",
            id: "pinterest",
          },
          {
            icon: <FaFacebook className="text-[#1877F2] w-5 h-5" />,
            bg: "bg-white",
            id: "facebook",
          },
          {
            icon: <FaInstagram className="text-[#E1306C] w-5 h-5" />,
            bg: "bg-white",
            id: "instagram",
          },
          {
            icon: <FaXTwitter className="text-black w-5 h-5" />,
            bg: "bg-white",
            id: "x",
          },
          {
            icon: <SiBluesky className="text-[#0285FF] w-5 h-5" />,
            bg: "bg-white",
            id: "bluesky",
          },
          {
            icon: <FaTiktok className="text-black w-5 h-5" />,
            bg: "bg-white",
            id: "tiktok",
          },
          {
            icon: <FaYoutube className="text-[#FF0000] w-5 h-5" />,
            bg: "bg-white",
            id: "youtube",
          },
          {
            icon: <FaThreads className="text-black w-5 h-5" />,
            bg: "bg-white",
            id: "threads",
          },
          {
            icon: <FaLinkedin className="text-[#0A66C2] w-5 h-5" />,
            bg: "bg-white",
            id: "linkedin",
          },
          {
            icon: <FaTelegram className="text-[#2AABEE] w-5 h-5" />,
            bg: "bg-white",
            id: "telegram",
          },
        ].map((social) => (
          <div
            key={social.id}
            className="w-[55px] h-[55px] lg:w-[60px] lg:h-[60px] shrink-0 rounded-[18px] bg-white shadow-[0px_8px_16px_-4px_rgba(51,0,128,0.08)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform hover:shadow-md border border-[#3300800F]"
          >
            {social.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialAccountsRow;
