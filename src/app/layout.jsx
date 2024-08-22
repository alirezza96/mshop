import "../styles/globals.css";
import "swiper/css"
import { dana, morabba } from "@/styles/fonts"
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className={`${dana.variable, morabba.variable} bg-light-gray flex flex-col justify-end md:justify-start min-h-dvh `}>
        {children}
      </body>
    </html>
  );
}


