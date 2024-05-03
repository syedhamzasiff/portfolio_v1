"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";

function NavBar() {
  return (
    <header className="z-10 relative">
      <motion.div
        className="fixed flex items-center justify-center top-0 left-1/2 h-[3.5rem] w-full rounded-none border border-customGrey border-opacity-40 bg-customGrey bg-opacity-80 shadow-lg backdrop-blur-[0.5rem] "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 ">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-sm font-medium text- sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                passHref
                className={clsx(
                  "flex items-center justify-center px-3 py-3 hover:text-customTeal transition",
                )}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
