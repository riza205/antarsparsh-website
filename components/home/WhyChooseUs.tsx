"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Heart,
    title: "Compassionate Care",
    text: "Every session is a judgment-free space where you are heard, supported, and respected.",
  },
  {
    icon: Sparkles,
    title: "Creative Healing",
    text: "Therapy goes beyond conversation through art, movement and mindfulness-based practices.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Based",
    text: "Grounded in Acceptance & Commitment Therapy (ACT) alongside creative therapeutic approaches.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
       <Image
  src="/images/decorations/double-branch.png"
  alt=""
  width={180}
  height={180}
  className="pointer-events-none absolute top-10 left-10 opacity-23 select-none"
/>
      <div className="mx-auto max-w-7xl px-8">
        

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 uppercase tracking-[0.3em] text-sm text-[#8C9687]">
            Why Antarsparsh
          </p>

          <h2
            className="text-[52px] text-[#3E5140]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            A Space Where Healing Feels Natural
          </h2>

          <p
            className="mt-6 text-lg leading-8 text-[#667164]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Therapy should feel safe, collaborative and deeply personal.
            Every session is designed around your unique needs and pace.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="rounded-[30px] border border-[#ECE8E1] bg-[#FCFBF8] p-10 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#F3E9E3]">
                  <Icon className="text-[#B36A5E]" size={28} />
                </div>

                <h3
                  className="mb-4 text-3xl text-[#3E5140]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {reason.title}
                </h3>

                <p
                  className="leading-8 text-[#667164]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {reason.text}
                </p>
              </motion.div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}