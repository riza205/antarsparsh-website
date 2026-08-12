"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const packages = [
  {
    title: "2-Week Reset",
    subtitle: "A gentle introduction to emotional wellness.",
    features: [
      "Stress management",
      "Creative self-expression",
      "Mindfulness practices",
    ],
    color: "#DAD7CD",
  },
  {
    title: "4-Week Wellness",
    subtitle: "Build healthier emotional habits.",
    features: [
      "Emotional awareness",
      "Healthy coping skills",
      "Confidence building",
    ],
    color: "#A3B18A",
  },
  {
    title: "6-Week Healing",
    subtitle: "Strengthen resilience and emotional wellbeing.",
    features: [
      "Anxiety management",
      "Self-esteem",
      "Personal growth",
    ],
    color: "#FFFFFF",
  },
  {
    title: "8-Week Transformation",
    subtitle: "Our complete signature healing experience.",
    features: [
      "Art Therapy",
      "Movement Therapy",
      "Acceptance & Commitment Therapy",
      "Personal growth roadmap",
    ],
    color: "#FADCD9",
  },
];

export default function Packages() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
        <Image
  src="/images/decorations/branch.png"
  alt=""
  width={170}
  height={170}
  className="pointer-events-none absolute right-[12%] top-20 opacity-16 select-none"
 />
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <p className="mb-4 uppercase tracking-[0.3em] text-sm text-[#8B9487]">
            Therapy Packages
          </p>

          <h2
            className="text-[52px] text-[#3E5140]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Choose Your Journey
          </h2>

          <p
            className="mt-6 text-[17px] leading-8 text-[#657164]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Flexible programs designed to support you at every stage of your
            healing journey.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              style={{
                backgroundColor: pkg.color,
              }}
              className="rounded-[32px] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
            >
              <h3
                className="mb-3 text-[30px] text-[#3E5140]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {pkg.title}
              </h3>

              <p className="mb-8 leading-7 text-[#5F6D60]">
                {pkg.subtitle}
              </p>

              <div className="space-y-4">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="mt-1 text-[#3E5140]"
                    />

                    <span className="text-[#3E5140]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
<Link href="/contact">
  <button className="mt-10 rounded-full border border-[#3E5140] px-7 py-3 text-[#3E5140] transition hover:bg-[#3E5140] hover:text-white">
    Learn More
  </button>
</Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}