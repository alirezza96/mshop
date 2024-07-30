import "./styles/globals.css";
import "swiper/css"

import { dana, morabba } from "@/app/styles/fonts"


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className={`${dana.variable, morabba.variable} bg-light-gray`}>
        {children}
      </body>
    </html>
  );
}
