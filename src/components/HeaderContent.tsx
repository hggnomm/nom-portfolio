"use client";
import { motion } from "framer-motion";

interface HeaderContentProps {
  title: string;
  content?: string;
}

export default function HeaderContent({ title, content }: HeaderContentProps) {
  return (
    <div className="my-10 w-2/3 min-h-24">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-4 text-gray-600 dark:text-gray-500"
      >
        {content}
      </motion.h2>
    </div>
  );
}
