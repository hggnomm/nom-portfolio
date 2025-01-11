"use client";

import HeaderContent from "@/components/HeaderContent";
import { projects } from "@/projects";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <div>
      <HeaderContent title={t("title")} content={t("title_2")} />

      <div className="w-full flex flex-col gap-5 mb-5 select-none">
        {projects.map((project) => (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 1 }}
          >
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="flex p-3 border border-stone-300 dark:border-stone-600 justify-center items-start gap-6 rounded-sm cursor-pointer hover:bg-white dark:hover:bg-stone-900 hover:bg-opacity-20"
            >
              <div className="relative md:w-[65%] lg:w-1/2 w-1/2 overflow-hidden">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={560}
                    objectFit="cover"
                    className="h-[173px] rounded-sm transform transition-transform duration-500 border border-stone-200"
                  />
                </motion.div>
                <motion.div
                  className="p-4 absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 opacity-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <ul className="flex flex-wrap justify-center items-center gap-2">
                    {project.stacks.map((stack, index) => (
                      <li
                        key={index}
                        className="rounded bg-stone-900 px-2 py-1 text-xs font-medium text-stone-300 hover:scale-105"
                      >
                        {stack}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="flex flex-col md:w-[35%] lg:w-1/2 w-1/2">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 mt-2">
                  {project.timeline}
                </p>
                <p className="text-xs lg:text-sm mt-2">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
