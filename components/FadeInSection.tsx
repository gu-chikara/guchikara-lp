"use client";

import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
  style?: CSSProperties;
}

export default function FadeInSection({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
}: Props) {
  const yVal = direction === "up" ? 40 : 0;
  const xVal = direction === "left" ? -30 : direction === "right" ? 30 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yVal, x: xVal }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
