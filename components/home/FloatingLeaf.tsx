"use client";

import { motion } from "framer-motion";

export default function FloatingLeaf() {
  return (
    <motion.svg
      width="140"
      height="180"
      viewBox="0 0 140 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        y: [0, -12, 0],
        rotate: [0, 3, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d="M71 7C98 44 103 98 70 170C36 98 43 45 71 7Z"
        fill="#B8C7AF"
        opacity=".45"
      />

      <path
        d="M70 18V160"
        stroke="#6B7E67"
        strokeWidth="2"
      />

      <path
        d="M70 70C53 61 46 49 39 32"
        stroke="#6B7E67"
        strokeWidth="2"
      />

      <path
        d="M70 95C87 86 94 73 101 55"
        stroke="#6B7E67"
        strokeWidth="2"
      />
    </motion.svg>
  );
}