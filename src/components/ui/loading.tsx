"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/logo.png";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-700">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <Image
          src={logo}
          alt="Loading Logo"
          width={120}
          height={120}
          className="drop-shadow-lg"
        />
      </motion.div>
      <motion.p
        className="text-white text-lg mt-4 font-semibold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading Statewide Chimney Services...
      </motion.p>
    </div>
  );
}
