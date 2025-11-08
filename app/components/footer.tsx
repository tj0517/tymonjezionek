"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const navItems = ["Home", "Portfolio", "Oferta", "Kontakt"];

  return (
    <footer className="relative w-full text-white z-30 overflow-hidden">
      {/* Tło */}
      <div className="absolute top-0 left-[-10vw] w-[120vw] h-full">
        <Image
          src="/Rectangle 1.png"
          alt="light background"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Zawartość stopki */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 md:py-32 px-4">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extralight mb-2"
        >
          Tymon Jezionek
        </motion.h2>

        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-blue-400 mb-8 md:mb-10 font-[Playfair_Display]"
        >
          Websites
        </motion.h3>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="w-[60%] md:w-[45%] border-t border-stone-300 mb-8 md:mb-10 origin-left"
        />

        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="flex flex-row flex-wrap gap-4 md:gap-10 text-sm md:text-base font-medium text-white justify-center" 
        >
          {navItems.map((item) => (
            <motion.div
              key={item}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
              }}
              className="w-[40%] sm:w-auto"
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className="px-6 py-2 flex items-center justify-center rounded-full border-l-2 border-r-2 border-blue-400 hover:bg-blue-400 hover:text-black transition-all"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </footer>
  );
}
