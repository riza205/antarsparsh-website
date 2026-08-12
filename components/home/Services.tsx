"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Art Therapy",
    image: "/images/services/art.jpg",
    duration: "1 hr",
  },
  {
    title: "ACT Therapy",
    image: "/images/services/act.jpg",
    duration: "1 hr",
  },
  {
    title: "Movement Therapy",
    image: "/images/services/yoga.jpg",
    duration: "1 hr 30 min",
  },
];

export default function ServicesSection() {
  return (
    <section 
    id="services"
    className="bg-[#F8F5F1] py-28">
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center text-[62px] font-light leading-none tracking-[-0.02em] text-[#3E5140]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Therapeutic Offerings
        </motion.h2>
        <img
  src="/images/decorations/blob-green.png"
  alt=""
  className="absolute left-1/2 top-8 w-64 -translate-x-1/2 opacity-20 pointer-events-none"
 />

        {/* Cards */}
        <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="w-full max-w-[350px] overflow-hidden rounded-[32px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            >
              {/* Image */}
              <div className="relative h-[430px] overflow-hidden rounded-t-[32px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-10 py-9">
                <h3
                  className="text-[26px] font-light text-[#3E5140]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {service.title}
                </h3>

                <div className="my-7 h-px bg-[#E5DED6]" />

                <div className="space-y-1">
                  <p className="text-[16px] text-[#7A7A7A]">
                    {service.duration}
                  </p>

                  <p className="text-[20px] font-medium text-[#3E5140]">
                    ₹500
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}