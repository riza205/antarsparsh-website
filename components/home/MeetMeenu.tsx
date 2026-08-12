"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MeetMeenu() {
  return (
<section className="relative overflow-hidden bg-[#A3B18A] py-32">
    <Image
  src="/images/decorations/leaf-big.png"
  alt=""
  width={170}
  height={140}
  className="pointer-events-none absolute -right-12 top-16 opacity-15 select-none"
 />
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

        {/* LEFT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
<div className="relative mx-auto h-[600px] w-[420px] overflow-hidden rounded-full">
            <Image
              src="/images/meenu/meenu2.jpg"
              alt="Meenu"
              fill
              className="object-cover"
            />

          </div>
        </motion.div>
         

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p
            className="mb-5 uppercase tracking-[0.28em] text-sm text-[#8C9687]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
          </p>

          <h2
            className="text-[56px] leading-tight text-[#3E5140]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Hi, I'm Meenu.
          </h2>

          <p
            className="mt-8 text-[19px] leading-9 text-[#5F695D]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            I created Antarsparsh to offer a compassionate and welcoming
            space where healing begins with being seen, heard and accepted.
          </p>

          <p
            className="mt-6 text-[18px] leading-9 text-[#5F695D]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            My work combines Art Therapy, Movement Therapy and Acceptance &
            Commitment Therapy (ACT) to help individuals reconnect with
            themselves, navigate emotional challenges and build healthier,
            more meaningful lives.
          </p>

          <p
            className="mt-6 text-[18px] leading-9 text-[#5F695D]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Whether you're experiencing stress, anxiety, emotional
            overwhelm or simply seeking personal growth, we'll move at
            your own pace with kindness, creativity and curiosity.
          </p>


        </motion.div>
       

      </div>
    </section>
  );
}