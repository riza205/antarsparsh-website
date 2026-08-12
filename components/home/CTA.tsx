"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
        <Image
  src="/images/decorations/blob-peach.png"
  alt=""
  width={220}
  height={220}
  className="pointer-events-none absolute left-6 top-6 opacity-23 select-none"
/>
      <div className="mx-auto max-w-5xl px-8 text-center">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 uppercase tracking-[0.3em] text-sm text-[#8B9487]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Begin Your Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-3xl text-[58px] leading-tight text-[#3E5140]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Healing doesn't require perfection.
          <br />
          It only requires a first step.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#657164]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Whether you're navigating stress, anxiety, life transitions,
          or simply seeking a deeper connection with yourself,
          I'm here to support you with warmth, creativity and compassion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
            <Link href="/contact">
          <button className="rounded-full bg-[#B36A5E] px-9 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            Book Your First Session
          </button>
          </Link>

        <Link href="/contact">
          <button className="flex items-center gap-2 rounded-full border border-[#B36A5E] px-9 py-4 text-[#B36A5E] transition-all duration-300 hover:bg-[#B36A5E] hover:text-white">
            Contact Me
            <ArrowRight size={18} />
          </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}