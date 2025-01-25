"use client";
import Link from "next/link";
import { ArrowLeft, HardHat } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute transform -rotate-45 left-0 right-0 h-full">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="h-[100px] border-t border-white/20"
              style={{ marginTop: `${i * 100}px` }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Hard Hat Icon */}
          <div className="inline-block mb-8 animate-bounce">
            <HardHat
              size={80}
              className="text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]"
            />
          </div>

          {/* 404 Text */}
          <div className="animate-fade-in space-y-6">
            <h1 className="text-8xl font-bold mb-4 tracking-tighter">
              4
              <span className="text-amber-500 inline-block animate-pulse">
                0
              </span>
              4
            </h1>

            {/* Message */}
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 text-transparent bg-clip-text">
              Under Construction
            </h2>

            <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
              Looks like this page is still being built. Our team is working
              hard to get it ready for you.
            </p>

            {/* Back to Home Button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] font-medium"
            >
              <ArrowLeft size={20} />
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-500/50 to-orange-600/50" />
    </div>
  );
}
