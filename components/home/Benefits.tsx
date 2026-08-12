"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Palette,
  Heart,
  Sparkles,
  BatteryLow,
  Flower2,
  ArrowUp,
  Sun,
} from "lucide-react";

const benefits = [
  {
    title: "Stress",
    text: "Feeling overwhelmed by work, studies or everyday responsibilities.",
    icon: Sparkles,
    color: "#FFFFFF",
    iconColor: "#8FA26C",
  },
  {
    title: "Anxiety",
    text: "Develop practical tools to manage anxious thoughts and emotions.",
    icon: Brain,
    color: "#A3B18A",
    iconColor: "#8FA26C",
  },
  {
    title: "Emotional\nExpression",
    text: "Discover healthier ways to understand and express your feelings.",
    icon: Palette,
    color: "#FADCD9",
    iconColor: "#B36A5E",
  },
  {
    title: "Self-Esteem",
    text: "Build confidence and reconnect with your strengths.",
    icon: ArrowUp,
    color: "#DAD7CD",
    iconColor: "#8FA26C",
  },
  {
    title: "Burnout",
    text: "Restore balance, reduce exhaustion, and recharge emotionally.",
    icon: BatteryLow,
    color: "#FADCD9",
    iconColor: "#B36A5E",
  },
  {
    title: "Personal Growth",
    text: "Increase self-awareness and create meaningful life changes.",
    icon: Brain,
    color: "#DAD7CD",
    iconColor: "#8FA26C",
  },
  {
    title: "Life Transitions",
    text: "Navigate change with resilience and confidence.",
    icon: Flower2,
    color: "#A3B18A",
    iconColor: "#8FA26C",
  },
  {
    title: "Emotional Well-being",
    text: "Strengthen healthy habits that support lasting emotional wellness.",
    icon: Heart,
    color: "#FFFFFF",
    iconColor: "#8FA26C",
  },
];

export default function WhoCanBenefit() {
  return (
    <section className="bg-[#FCFBF8] py-32">
      <div className="mx-auto max-w-[1320px] px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2
            className="text-[64px] text-[#3E5140]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Who Can Benefit
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[20px] leading-9 text-[#5D695E]">
            We create a safe, compassionate space for adults and teens to
            reconnect with their inner strength and emotional well-being.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-9 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                style={{
                  background: item.color,
                }}
                className="flex h-[295px] flex-col items-center justify-center rounded-[34px] p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,.04)] transition-all duration-300"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center bg-white shadow-sm">
                  <Icon
                    size={28}
                    color={item.iconColor}
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="whitespace-pre-line text-[28px] font-semibold text-[#3E5140]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[17px] leading-8 text-[#4F5C50]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}