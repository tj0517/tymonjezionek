"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type MenuItem = { href: string; label: string };

export default function Menu({
  items = [
    { href: "/", label: "Home" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#oferta", label: "Oferta" },
    { href: "#kontakt", label: "Kontakt" },
  ],
}: {
  items?: MenuItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Main menu"
      className="w-full px-4 py-3 absolute top-0 left-0 z-30"
    >
      <div className="w-full mx-auto flex items-center justify-between pt-6 pr-6">
        {/* Desktop menu */}
        <div className="hidden lg:flex ml-auto items-center space-x-10 xl:text-lg font-medium text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="flex items-center space-x-10"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                variants={{
                  hidden: { y: -20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <Link
                  href={item.href}
                  
                  className={`px-6 py-2 flex items-center justify-center rounded-full border-l-2 border-r-2 border-blue-400 hover:bg-blue-400 hover:text-black transition-all ${
                    index === items.length - 1
                      ? "bg-blue-400 hover:bg-white"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hamburger button mobile */}
        <div className="lg:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 text-white"
          >
            <span
              className={`block w-8 h-1 bg-white mb-1 rounded transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-white mb-1 rounded transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-white rounded transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center space-y-6 z-40"
          >
            {items.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-6 py-3 text-lg font-medium flex items-center justify-center rounded-full border-l-2 border-r-2 border-blue-400 hover:bg-blue-400 hover:text-black transition-all ${
                  index === items.length - 1
                    ? "bg-blue-400 hover:bg-white"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
