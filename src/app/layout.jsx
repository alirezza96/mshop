import "./styles/globals.css";
import { dana, morabba } from "@/app/styles/fonts"
import Navbar from "@/app/components/templates/layout/Navbar";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${dana.variable, morabba.variable} md:container  flex justify-between min-h-screen`}>
        <Navbar />
        <div className="mt-14 md:mt-16 mb-12 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
