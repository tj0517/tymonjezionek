"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface OfertaItem {
  id: number;
  icon: any; // zamiast React.ComponentProps<"svg">
  title: string;
  description: string;
}

interface Props {
  oferta: OfertaItem[];
  icons: Record<string, any>; // każda ikona jako funkcja zwracająca element React
}

export default function OfertaSection({ oferta, icons }: Props) {
  const variants = [
    {
      top: "absolute top-0 right-0 translate-x-1/2  rotate-180 opacity-80 scale-125",
      bottom: "absolute bottom-0 left-0 -translate-x-1/2  opacity-80 scale-120",
    },
    {
      top: "absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rotate-[135deg] opacity-80 scale-85",
      bottom: "absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/2 rotate-[315deg] opacity-80 scale-115",
    },
    {
      top: "absolute top-0 left-0 -translate-x-1/3 -translate-y-1/2 rotate-90 opacity-80 scale-75",
      bottom: "absolute bottom-0 right-0 translate-x-1/2 opacity-180 scale-125",
    },
    {
      top: "absolute top-0 left-10 -translate-x-1/2 -translate-y-1/3 rotate-45 opacity-80 scale-110",
      bottom: "absolute bottom-0 right-0 translate-x-1/2 translate-y-1/3 opacity-80 scale-125",
    },
  ];

  return (
    <section className="w-full relative flex flex-row flex-wrap justify-between mt-20 gap-y-10 lg:gap-y-24">
      {oferta.map(({ id, icon, title, description }) => {
        const Icon = icons[icon];

        const { top: topClass, bottom: bottomClass } = variants[id % 4];

        return (
<motion.div
  key={id}
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }} // wolniejszy wjazd całej karty
  viewport={{ once: true, amount: 0.3 }}
  className="relative mx-auto md:mx-0 sm:w-[75%] md:w-[47.5%] lg:w-[45%] bg-black rounded-4xl py-8 flex flex-col overflow-hidden"
>
  {/* Twoje elipsy */}
  <Image src="/Ellipse_2.png" alt="" width={500} height={500} className={topClass} />
  <Image src="/Ellipse_2.png" alt="" width={500} height={500} className={bottomClass} />

  {/* Kontener elementów z sekwencją */}
  <motion.div
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.5 } } // wolniejszy stagger
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="relative z-10 flex flex-col items-start px-10"
  >
    <motion.div
      variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
    >
      <Icon className="w-20 xl:w-24 h-20 xl:h-24  text-white mb-4"   strokeWidth={2.5}  />
    </motion.div>

    <motion.div
      variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
    >
      <span className="text-xl lg:text-2xl xl:text-3xl font-normal text-white mb-2 ">{title}</span>
    </motion.div>

    <motion.div
      variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
      className="mt-6"
    >
      <div className="w-[85%] text-stone-300 font-light md:text-sm lg:text-[14px] xl:text-[16px]">{description}</div>
    </motion.div>
  </motion.div>
</motion.div>


        );
      })}
    </section>
  );
}
