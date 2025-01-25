"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "lucide-react";

const navigationLinks = [
  { name: "ABOUT US", href: "/about" },
  { name: "OUR SERVICES", href: "/services" },
  { name: "OUR TEAM", href: "/team" },
  { name: "CONTACT US", href: "/contact" },
  { name: "CAREERS", href: "/careers" },
];

const socialLinks = [
  { Icon: FacebookIcon, href: "#" },
  { Icon: TwitterIcon, href: "#" },
  { Icon: YoutubeIcon, href: "#" },
  { Icon: LinkedinIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/footer.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Let&apos;s Build Something
                <br />
                Great Together!
              </h2>
              <div className="flex gap-4 mt-6">
                <Link
                  href="/get-started"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition-colors"
                >
                  GET STARTED
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/20 text-white px-6 py-3 rounded hover:bg-white/10 transition-colors"
                >
                  CONTACT US
                </Link>
              </div>
            </motion.div>

            {/* Address Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h3 className="text-xl font-bold mb-6">Address</h3>
              <p className="mb-2">123 Business Avenue</p>
              <p className="mb-2">Suite 200, Tech District</p>
              <p className="mb-6">San Francisco, CA 94105</p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-400 mb-2">contact@solution.com</p>
              <p className="text-white text-xl mb-8">+1 (415) 555-0123</p>

              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href }, index) => (
                  <Link
                    key={index}
                    href={href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-white/60 text-sm">
              © 2025 BUILDCO. All Right Reserved by{" "}
              <Link href="#" className="text-orange-500 hover:text-orange-400">
                Shihab Hashib
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
