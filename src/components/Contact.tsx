"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { sendEmail } from "../actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {

  return (
    
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28 object-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-neutral-400 gap2">
        Please contact me directly at{" "}
        <a className="text-customTeal" href="mailto:syedhamzasiff@gmail.com">
          syedhamzasiff@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-2 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all bg-customGrey text-customWhite"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 transition-all bg-customGrey"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}