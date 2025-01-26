"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-black z-[100] flex items-center justify-center">
      <div className="relative">
        {/* Construction Logo/Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="text-3xl font-bold text-orange-500">BUILDCO</span>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-gray-200 dark:bg-gray-800 overflow-hidden">
          <motion.div
            className="h-full bg-orange-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Construction Elements */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-6 h-6 border-4 border-orange-500 border-t-transparent rounded-full"
          />
        </div>
        <div className="absolute -right-12 top-1/2 -translate-y-1/2">
          <motion.div
            initial={{ rotate: 360 }}
            animate={{ rotate: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-6 h-6 border-4 border-orange-500 border-t-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
