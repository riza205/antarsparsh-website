"use client";

import { motion } from "framer-motion";
import { CalendarDays, MessageCircleHeart, Sparkles } from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    title: "Book a Session",
    description:
      "Choose a time that works for you and schedule your first consultation with ease.",
  },
  {
    icon: MessageCircleHeart,
    title: "Connect & Explore",
    description:
      "Together we'll understand your goals, challenges and the support that best fits your journey.",
  },
  {
    icon: Sparkles,
    title: "Grow at Your Pace",
    description:
      "Through compassionate guidance and creative therapies, you'll build resilience and emotional wellbeing.",
  },
];

export default function Journey() {
  return (
    <section className="bg-[#F3EEE7] py-32">
      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <p
            className="mb-4 uppercase tracking-[0.3em] text-sm text-[#8B9487]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Your Journey
          </p>

          <h2
            className="text-[52px] text-[#3E5140]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Healing Begins One Step at a Time
          </h2>

          <p
            className="mt-6 text-lg leading-8 text-[#657164]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Beginning therapy doesn't have to feel overwhelming.
            Here's what you can expect.
          </p>
        </motion.div>

        <div className="relative grid gap-10 md:grid-cols-3">

          {/* connecting line */}

          <div className="absolute left-0 right-0 top-14 hidden h-[2px] bg-[#E8E1DA] md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg">

                  <Icon
                    size={36}
                    className="text-[#B36A5E]"
                  />

                </div>

                <div className="mt-10">

                  <div
                    className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#B36A5E]"
                  >
                    0{index + 1}
                  </div>

                  <h3
                    className="mb-4 text-3xl text-[#3E5140]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="mx-auto max-w-sm leading-8 text-[#657164]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {step.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}