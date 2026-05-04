"use client";

import { motion } from "framer-motion";
import "@/app/css/head.css"

export default function Hero() {
  return (
    <section className="hero">

      <motion.p
        className="hero-tag"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Front-End & .NET Developer
      </motion.p>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Carlos <span>Delgado</span>
      </motion.h1>
    </section>
  );
}