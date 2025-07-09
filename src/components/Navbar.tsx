"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 md:px-40 py-8 flex justify-between">
      {/* Logo */}
      <div className="flex p-0 w-40 h-16 relative">
        <Image src="/logo_with_text.svg" alt="CareLink Logo" fill />
      </div>

      {/* Contact Us Button */}
      <div className="items-center flex">
      <button className="text-white border border-white rounded-md font-extralight px-6 py-1 duration-300 hover:bg-white hover:text-black transition">
        Contact us
      </button>
      </div>
    </header>
  );
}
