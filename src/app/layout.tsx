import type { Metadata } from "next";
import { Inter as FontSans} from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"], variable:"--font-sans"});

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
    <body className={cn("bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90", fontSans.variable)}>

      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
 
    <div className="relative w-full flex items-center justify-center">
    <NavBar/>
    </div>
    {children}
    </body>
  </html>
  );
}
