import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import {Inter} from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Hamza | Personal Portfolio",
  //TODO: fix the description
  //TODO: Favicon / logo
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`bg-customDarkGrey text-customWhite relative !scroll-smooth ${inter.className}`}>
    <div className="relative w-full flex items-center justify-center">
      <NavBar/>
      </div>
      {children}
    </body>
  </html>
  );
}
