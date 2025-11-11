"use client";
import Image from "next/image";
import Menu from "./components/menu";
import ProjectCard from "./components/projekt";
import portfolio from "../data/portfolio.json";
import { Paintbrush, MonitorSmartphone, Code2, Search } from "lucide-react";
import Calendar from "./components/kalendarz";
import Opinnie from "./components/opinnie";
import KontaktForm from "./components/form";
import Footer from "./components/footer";
import { motion } from "framer-motion";
import OfertaSection from "./components/oferta";

const icons = { MonitorSmartphone, Paintbrush, Code2, Search };
type IconName = keyof typeof icons;

const o_mnie = [
  { id: 1, data: "2+", description: "Lata doświadczenia" },
  { id: 2, data: "3+", description: "Zadowolonych klientów" },
  { id: 3, data: "10+", description: "Wykonanych projektów" },
];

const oferta: { id: number; icon: IconName; title: string; description: string }[] = [
  {
    id: 1,
    icon: "Paintbrush",
    title: "Tworzymy Grafiki",
    description:
      "Projektujemy dopasowane elementy graficzne — od ilustracji po bannery, dzięki którym Twoja marka wyróżni się w sieci.",
  },
  {
    id: 2,
    icon: "MonitorSmartphone",
    title: "Projektujemy Design",
    description:
      "Tworzymy responsywne i funkcjonalne interfejsy. Każdy projekt to połączenie estetyki i użyteczności — UX/UI z myślą o użytkowniku.",
  },
  {
    id: 3,
    icon: "Code2",
    title: "Programujemy",
    description:
      "Kodujemy szybkie, responsywne strony i aplikacje oparte na najnowszych technologiach — Next.js, Tailwind CSS, HTML5.",
  },
  {
    id: 4,
    icon: "Search",
    title: "Optymalizujemy",
    description:
      "Ulepszamy wydajność, SEO i doświadczenie użytkownika, by Twoja strona działała szybciej i była lepiej widoczna w wynikach wyszukiwania.",
  },
];

export default function Home() {
  return (
    <div id="home" className="w-full h-fit relative text-white overflow-x-hidden scroll-smooth">
      <Menu />

      {/* HERO */}
      <div className="bg-black w-full pb-24 md:pb-0 md:h-screen relative overflow-hidden flex flex-row px-0 md:px-36 py-0">
        <Image
          src="/Ellipse_2.png"
          alt="bg"
          width={674}
          height={659}
          className="absolute bottom-0 right-0 translate-x-1/2 z-0  sm:scale-150 2xl:scale-200"
        />
        <Image
          src="/Ellipse_2.png"
          alt="bg"
          width={674}
          height={659}
          className="absolute top-[-20%] left-0 -translate-x-1/2 rotate-180 z-0"
        />
 <motion.div
      initial={{ opacity: 0, y: 50 }}          // początek animacji (lekko niżej, przezroczysty)
      animate={{ opacity: 1, y: 0 }}           // końcowy stan (pełna widoczność, pozycja normalna)
      transition={{ duration: 1, ease: "easeOut" }} // czas i sposób animacji
      className=" flex flex-col z-20 pt-30 lg:pt-42 xl:pt-30 mx-auto md:mx-0 text-center md:text-left"
    >
      {/* Nagłówek główny */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-3xl sm:text-5xl xl:text-6xl  font-bold font-[Playfair_Display]"
      >
        <h1 className="block mb-8 xl:mb-10  leading-tight">
          Nowoczesne aplikacje<br/> webowe dla twojego
        </h1>
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
          className="bg-blue-400 px-8 py-2 rounded-2xl inline-block"
        >
          Biznesu.
        </motion.span>
      </motion.div>

      {/* Podtytuł */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className=" text-2xl sm:text-3xl xl:text-4xl font-light  mt-14 xl:mt-16"
      >
        <strong>Styl</strong>, <strong>technologia</strong>, <strong>SEO</strong> — <br/>wszystko
        czego potrzebujesz.
      </motion.div>

      {/* Przycisk */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #3B82F6" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -140 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="bg-stone-800 px-8 py-3 border-2 border-blue-400 rounded-2xl w-[65%] mx-auto md:mx-0  text-2xl xl:text-3xl mt-14  xl:mt-20 shadow-[-5px_4px_10px_2px_#3B82F6]"
      >
        Darmowa wycena
      </motion.button>
    </motion.div>
      </div>

      {/* KONTENER NA LINIE */}
     <div className="absolute top-[100vh] bottom-0 w-screen overflow-hidden pointer-events-none z-0">

        {/* każda linia większa, przycięta do 100vw */}
        <div className="absolute top-[-5%] left-0 w-full aspect-video opacity-30 ">
          <Image src="/linebg-1.png" alt="bg" fill className="object-contain will-change-transform" />
        </div>
        <div className="absolute top-[10%] left-[-20vw] w-[150vw] aspect-video opacity-50 rotate-20">
          <Image src="/linebg-1.png" alt="bg" fill className="object-contain will-change-transform" />
        </div>
        <div className="absolute top-[45%] left-0 w-full aspect-video opacity-90">
          <Image src="/linebg-1.png" alt="bg" fill className="object-contain will-change-transform" />
        </div>
                <div className="absolute top-[65%] left-0 w-full aspect-video opacity-40">
          <Image src="/linebg-1.png" alt="bg" fill className="object-contain will-change-transform" />
        </div>
 <div className="absolute bottom-[.5%]  left-0 w-screen h-[15%] flex justify-between pointer-events-none">
  <div className="relative w-1/3 h-[80%] mx-auto z-10">

    <div className="absolute inset-0 bg-white/60 blur-[100px] rounded-full"></div>
  </div>
    <div className="absolute w-full h-[140%] -translate-y-1/12  left-1/2 -translate-x-1/2">

    <div className="absolute inset-0 bg-blue-400/60 blur-[80px] rounded-full"></div>
  </div>
</div>
      </div>

      {/* GŁÓWNA TREŚĆ */}
      <div className="relative w-[85%] max-w-[1400px] mx-auto flex flex-col z-10">
      
        {/* PORTFOLIO */}
        <section id="portfolio" className="w-full relative h-auto flex flex-col z-20">
          <div className="w-full px-10 pt-20 xl:pt-30 flex-col justify-between">
 <motion.h2
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-6xl font-bold font-[Playfair_Display] text-center md:text-left"
      >
        Portfolio
      </motion.h2>

      {/* Twój oryginalny blok tekstu */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-[95%] dm:w-3/4 md:w-[60%] mx-auto md:ml-[40%] lg::ml-[45%] flex flex-row text-center md:text-left md:justify-end mt-4 md:mt-0"
      >
        <div className="mt-10 font-extralight text-xl md:text-lg lg:text-xl xl:text-2xl">
          Każdy projekt traktuję <strong>indywidualnie</strong> — słucham, analizuję,
          projektuję, wdrażam.
          <br />
          W portfolio znajdziesz realizacje dla klientów z różnych branż.
          <br />
          Zobacz, jak pomagam zamieniać pomysły w{" "}
          <strong>działające strony.</strong>
        </div>
      </motion.div>
          </div>

          <div className="mt-20 xl:mt-30 w-full flex flex-row flex-wrap justify-between gap-16 md:gap-24 lg:gap-14 xl:gap-20">
            {portfolio.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* O MNIE */}
 <section id="oferta"  className="mt-30 w-full sm:w-3/4 mx-auto md:mx-0 md:w-full bg-stone-800 px-2 xl:px-10 py-12 rounded-4xl flex flex-row flex-wrap justify-between gap-6 md:gap-0 z-20">
      {o_mnie.map((dane, index) => (
        <motion.div
          key={dane.id}
          initial={{ y: 50, opacity: 0 }}             // start: lekko w dół i niewidoczny
          whileInView={{ y: 0, opacity: 1 }}          // koniec: normalna pozycja i pełna widoczność
          transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}      // animacja odpala się przy przewinięciu
          className="w-2/3 md:w-1/2 lg:w-1/3 flex flex-col lg:border-r-2 border-r-blue-400 last:border-r-0 border-0 text-center mx-auto  md:last:mt-10 lg:last:mt-0"
        >
          <div className="text-8xl lg:text-7xl xl:text-8xl font-black bg-[linear-gradient(135deg,#3B82F6_27%,#FAFAFA_100%)] bg-clip-text text-transparent w-full text-center">
            {dane.data}
          </div>
          <div className="text-2xl lg:Ltext-xl xl:text-2xl font-light mt-4 md:mt-6 pb-6">{dane.description}</div>
        </motion.div>
      ))}
    </section>

        {/* OFERTA */}
        <OfertaSection  oferta={oferta} icons={icons}/>
 


{/* Formularz */}
<section id="kontakt" className="mt-20 h-auto lg:h-[750px] xl:h-[850px] w-full sm:w-[90%] md:w-full 2xl:w-[90%] mx-auto flex flex-col lg:flex-row justify-between pb-20 lg:pb-30 xl:pb-40 items-stretch">
  {/* Lewa kolumna */}
  <motion.div
    className="w-full lg:w-[40%] flex flex-col md:flex-row lg:flex-col justify-between h-full" // h-full dopasuje wysokość do sekcji
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* Tekst */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
      className="font-extralight text-xl xl:text-2xl leading-relaxed text-white w-full md:w-[35%] lg:w-full  text-center md:text-left"
    >
      Umów <strong>darmową konsultację</strong> i poznaj, jak możemy pomóc Ci <strong>rozwinąć Twój projekt</strong>.
      <br />
      Wybierz termin w kalendarzu lub zostaw wiadomość w formularzu — <strong>odezwiemy się wkrótce</strong>.
    </motion.div>

    {/* Kalendarz */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full md:w-[60%] lg:w-auto mt-8 sm:mt-16 md:mt-0 "
    >
      <Calendar />
    </motion.div>
  </motion.div>

  {/* Prawa kolumna - formularz */}
  <motion.div
    className="w-full lg:w-[52.55%] lg:h-full mt-12 sm:mt-16 lg:mt-0" // h-full, żeby sekcja narzuciła wysokość
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <KontaktForm />
  </motion.div>
</section>

      </div>
      <Footer/>
    </div>
  );
}
