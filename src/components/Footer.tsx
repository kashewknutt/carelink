"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show "back to top" button only after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f4f4f4] text-[#3E3F7D] py-6 px-8 md:px-40 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
        {/* Privacy Policy */}
        <a
          href="/privacy-policy"
          className="hover:underline text-center"
        >
          Privacy Policy
        </a>

        {/* Back to Top Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="bg-[#3E3F7D] text-white px-5 py-2 rounded-md hover:bg-[#2c2d5c] duration-300 shadow-sm"
          >
            Back to Top
          </button>
        )}
      </div>
    </footer>
  );
}
