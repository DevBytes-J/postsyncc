"use client";
import Image from "next/image";

export default function Curve() {
  return (
    <div className="relative h-[100px] z-50 mx-[5px] ">
      <Image
        src="/under2.png"
        alt="Bottom curve mobile"
        fill
        className="object-fill md:hidden rounded-[14px]"
      />
      <Image
        src="/under.png"
        alt="Bottom curve desktop"
        fill
        className="object-fill hidden md:block"
      />
    </div>
  );
}
