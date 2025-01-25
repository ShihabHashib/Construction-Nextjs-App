"use client";
import { motion } from "framer-motion";

export default function TrustedSection() {
  return (
    <section
      className="bg-black text-white py-20 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url("/ren3.jpg")',
      }}
    >
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/80" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Your Trusted Renovation Partner
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 mb-8"
            >
              With over 25 years of excellence in home renovations, we&apos;ve
              transformed countless spaces into dream homes. Our commitment to
              quality craftsmanship and customer satisfaction has made us the
              preferred choice for homeowners across the region.
            </motion.p>
          </div>

          {/* Right Content - Experience Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-right"
          >
            <div className="inline-flex flex-col items-end">
              <div className="text-8xl font-bold mb-2">
                25<span className="text-orange-500">+</span>
              </div>
              <div className="text-sm tracking-widest uppercase">
                YEARS OF EXPERIENCE
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
