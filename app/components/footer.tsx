"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const navItems = ["Home", "Portfolio", "Oferta", "Kontakt"];

  return (
    <footer className="relative w-full text-white z-30">
      {/* Światło (tło) */}
      <div className="absolute top-0 left-[-10vw] w-[120vw] h-full overflow-hidden">
        <Image
          src="/Rectangle 1.png"
          alt="light background"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Zawartość stopki */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-32">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl font-extralight mb-2"
        >
          Tymon Jezionek
        </motion.h2>

        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-6xl font-bold text-blue-400 mb-10 font-[Playfair_Display]"
        >
          Websites
        </motion.h3>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="w-[42.5%] border-t border-stone-300 mb-10 origin-left"
        />

        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="flex flex-row gap-10 text-sm font-medium text-white"
        >
          {navItems.map((item) => (
            <motion.div
              key={item}
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className="px-6 py-2 flex items-center justify-center rounded-full font-white border-l-2 border-r-2 border-blue-400 hover:bg-blue-400 transition-all"
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
