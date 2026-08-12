"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GentleReminder() {
  return (
    <section className="relative overflow-hidden bg-[#F6ECE7] py-40">

      {/* Animated Background Glow */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EEF4EF] blur-[150px]"
      />

      {/* Floating Dots */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[18%] top-24 h-2 w-2 rounded-full bg-[#D8B7A8]"
      />

      <motion.div
        animate={{
          y: [0, 14, 0],
          opacity: [0.15, 0.45, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[20%] bottom-28 h-3 w-3 rounded-full bg-[#CFCFC3]"
      />

      <div className="mx-auto max-w-5xl px-8 text-center">

        {/* Eyebrow */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mb-6 uppercase tracking-[0.35em] text-sm text-[#9B978F]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          A Gentle Reminder
        </motion.p>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -3,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="mx-auto max-w-4xl text-[62px] leading-[1.15] text-[#3E5140]"
          style={{
            fontFamily: "var(--font-serif)",
          }}
        >
          Healing isn't about becoming
          <br />
          someone else.
          <br />
          It's about returning to yourself.
        </motion.h2>

        {/* Animated Divider */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.35,
            duration: 0.9,
            ease: "easeOut",
          }}
          style={{
            transformOrigin: "center",
          }}
          className="mx-auto my-14 h-px w-28 bg-[#D7CCC3]"
        />

        {/* Quote */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.55,
            duration: 0.8,
          }}
          className="mx-auto max-w-2xl text-[22px] leading-[2] text-[#647063]"
          style={{
            fontFamily: "var(--font-sans)",
          }}
        >
          Every emotion deserves compassion.
          <br />
          Every journey deserves patience.
          <br />
          Every person deserves to feel seen.
        </motion.p>

        {/* Signature */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.9,
            duration: 0.6,
          }}
          className="mt-16 text-lg italic text-[#9D8B7F]"
          style={{
            fontFamily: "var(--font-serif)",
          }}
        >
          — Antarsparsh by Meenu
        </motion.p>

      </div>
    </section>
  );
}