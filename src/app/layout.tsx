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
    <body className={cn("bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90", fontSans.variable)}>
    <div className="relative w-full flex items-center justify-center">
      <NavBar/>
      </div>
      {children}
    </body>
  </html>
  );
}
