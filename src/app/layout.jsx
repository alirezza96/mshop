import "../styles/globals.css";
import "swiper/css"
import {Almarai, El_Messiri} from "next/font/google"
const primaryFont = Almarai({subsets:["arabic"], weight: ["400","700"], display: "swap", variable:"--font-primary", fallback: ["san-serif"]})
const secondaryFont = El_Messiri({subsets:["arabic"], display: "swap", variable:"--font-secondary", fallback: ["san-serif"]})

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`scroll-smooth ${primaryFont.variable} ${secondaryFont.variable}`}>
      <body className={`font-primary  bg-light-gray flex flex-col justify-end md:justify-start min-h-dvh `}>
        {children}
      </body>
    </html>
  );
}


