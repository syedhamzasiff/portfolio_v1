import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";

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
    <body className="bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 !scroll-smooth">
    <div className="relative w-full flex items-center justify-center">
      <NavBar/>
      </div>
      {children}
    </body>
  </html>
  );
}
