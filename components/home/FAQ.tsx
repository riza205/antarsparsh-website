"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "Who can benefit from therapy?",
    answer:
      "Therapy is for anyone seeking emotional support, personal growth, or help navigating life's challenges. Adults and teenagers are welcome.",
  },
  {
    question: "Do I need any artistic experience for Art Therapy?",
    answer:
      "Not at all. Art Therapy focuses on expression rather than artistic skill. No previous experience is needed.",
  },
  {
    question: "How long is each therapy session?",
    answer:
      "Sessions typically last between 50 and 60 minutes, depending on the therapeutic approach and your individual needs.",
  },
  {
    question: "Are sessions conducted online or in person?",
    answer:
      "Depending on availability and your preference, sessions may be offered online or in person. Please get in touch to discuss the best option.",
  },
  {
    question: "How do I book my first appointment?",
    answer:
      "You can contact Meenu directly through the Contact page to schedule your first session.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-28">
   <Image
  src="/images/decorations/small-leaf.png"
  alt=""
  width={140}
  height={140}
  className="pointer-events-none absolute right-[13%] top-11 opacity-24 select-none"
/>
      <div className="mx-auto max-w-4xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p
            className="mb-4 uppercase tracking-[0.3em] text-sm text-[#8B9487]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Frequently Asked Questions
          </p>

          <h2
            className="text-[52px] text-[#3E5140]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Your Questions, Answered
          </h2>

          <p
            className="mt-6 text-lg leading-8 text-[#657164]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            If you have any other questions, feel free to reach out.
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-[#ECE8E1] bg-[#FCFBF8]"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span
                  className="text-xl text-[#3E5140]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: open === index ? 180 : 0,
                  }}
                >
                  <ChevronDown className="text-[#B36A5E]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <p
                      className="px-8 pb-8 leading-8 text-[#657164]"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}