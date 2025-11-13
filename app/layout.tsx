import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Manrope } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });
const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Tymon Jezionek",
  description: "Portfolio i projekty webowe",
  other: {
    // 👇 tylko stringi
    "link:preconnect": "https://www.tymonjezionek.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-clip">
       <Head>
        {/* 👇 Dodaj swoje wskazówki optymalizacji */}
        <link rel="preconnect" href="https://www.tymonjezionek.pl" crossOrigin="" />
        <link
          rel="preload"
          href="/_next/static/css/app/globals.css"
          as="style"
        />
      </Head>
      <body
        className={`${manrope.className} overflow-x-clip`}>
        {children}
             <SpeedInsights />
      </body>
    </html>
  );
}
