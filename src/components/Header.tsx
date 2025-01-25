"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white dark:bg-black border-b border-black/[.1] dark:border-white/[.1]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left - Logo */}
        <Link
          href="/"
          className={`font-semibold text-xl ${
            !isScrolled ? "text-white" : "text-black dark:text-white"
          }`}
        >
          BUILDCO
        </Link>

        {/* Center - Navigation Links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-8">
          <Link
            href="/about"
            className={`transition-colors font-medium ${
              isScrolled
                ? "text-black dark:text-white hover:text-black/60 dark:hover:text-white/60"
                : "text-white hover:text-white/70"
            }`}
          >
            ABOUT
          </Link>
          <Link
            href="/services"
            className={`transition-colors font-medium ${
              isScrolled
                ? "text-black dark:text-white hover:text-black/60 dark:hover:text-white/60"
                : "text-white hover:text-white/70"
            }`}
          >
            SERVICES
          </Link>
          <Link
            href="/portfolio"
            className={`transition-colors font-medium ${
              isScrolled
                ? "text-black dark:text-white hover:text-black/60 dark:hover:text-white/60"
                : "text-white hover:text-white/70"
            }`}
          >
            PORTFOLIO
          </Link>
          <Link
            href="/contact"
            className={`transition-colors font-medium ${
              isScrolled
                ? "text-black dark:text-white hover:text-black/60 dark:hover:text-white/60"
                : "text-white hover:text-white/70"
            }`}
          >
            CONTACT US
          </Link>
        </div>

        {/* Right - Dark Button */}
        <button
          className={`px-4 py-2 transition-colors font-medium ${
            isScrolled
              ? "bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
              : "bg-black/20 text-white hover:bg-black/30"
          }`}
        >
          DIRECT MESSAGE
        </button>
      </nav>
    </header>
  );
}
