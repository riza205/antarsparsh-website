"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import FloatingLeaf from "./FloatingLeaf";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FCFBF8]">
        <div
  className="absolute inset-0 opacity-[0.04]"
  style={{
    backgroundImage:
      "radial-gradient(circle at 1px 1px, #3E5140 1px, transparent 0)",
    backgroundSize: "40px 40px",
  }}
/>

      {/* Background blobs */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute -left-56 top-0 h-[520px] w-[520px] rounded-full bg-[#F6ECE5] blur-[180px]" />

<div className="absolute right-[-160px] top-[140px] h-[420px] w-[420px] rounded-full bg-[#EAF2E7] blur-[180px]" />

<div className="absolute left-[40%] top-[28%] h-[180px] w-[180px] rounded-full bg-white blur-[120px]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-[1320px] items-center justify-between px-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
  duration: 1,
  ease: "easeOut",
}}
          className="max-w-[520px] translate-y-4"
        >

          <motion.p
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:.1 }}
            className="mb-8 uppercase tracking-[0.32em] text-[13px] text-[#74806F]"
          >
            Healing Through Art, Movement & ACT
          </motion.p>

          <motion.h1
            initial={{ opacity:0, y:25 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:.2 }}
            className="leading-[0.88] text-[#3E5140]"
            style={{
              fontFamily:"var(--font-serif)",
              fontSize:"74px"
            }}
          >
            Express.
           
            Heal.
           
            Grow.
          </motion.h1>

          <motion.p
            initial={{ opacity:0, y:25 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:.3 }}
            className="mt-9 max-w-[460px] text-[16px] leading-8 text-[#5D695E]"
            style={{
              fontFamily:"var(--font-sans)"
            }}
          >
            A safe, compassionate space where adults and teenagers
            can improve emotional well-being through Art Therapy,
            Movement Therapy and Acceptance & Commitment Therapy (ACT).
          </motion.p>

          <motion.div
            initial={{ opacity:0, y:25 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:.45 }}
            className="mt-12 flex flex-wrap gap-5"
          >

  <Link href="/contact">
    <Button>
      Book Your First Session
    </Button>
  </Link>

<Link href="/contact">
    <Button variant="secondary">
      Schedule a Discovery Call
    </Button>
  </Link>

          </motion.div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity:0, x:70 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:.9 }}
          className="relative flex justify-end pt-10"
        >
                      {/* Decorative botanical accent */}

          {/* Hero Image */}
          <motion.div
            whileHover={{
              scale: 1.03,
              rotate: 0.4,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative h-[560px] w-[445px] overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,.12)]"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/10 via-transparent to-[#FFF4E8]/30 pointer-events-none" />
            <Image
              src="/images/hero/hero.jpg"
              alt="Art Therapy Session"
              fill
              priority
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute -bottom-10 left-1/2 -z-10 h-28 w-72 -translate-x-1/2 rounded-full bg-[#DDE8D8] blur-3xl" />
          </motion.div>
        </motion.div>
<img
  src="/images/decorations/blob-peach.png"
  alt=""
  className="absolute -left-20 top-10 w-72 opacity-20 pointer-events-none"
/>
      </div>
    </section>
  );
}