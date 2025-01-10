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

      <div className="w-full select-none">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative flex p-3 border border-stone-400 dark:border-stone-600 justify-center items-start gap-6 rounded-sm cursor-pointer hover:bg-white dark:hover:bg-stone-900 hover:bg-opacity-20"
          >
            <div className="relative w-1/2 overflow-hidden">
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
                  className="object-cover w-full h-full rounded-sm transform transition-transform duration-500"
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

            <div className="flex flex-col w-1/2 ">
              <div>
                <div className="flex gap-4 justify-start items-center">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    {project.timeline}
                  </p>
                </div>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            </div>

            <Link
              href={`/projects/${project.id}`}
              className="absolute bottom-2 right-2 underline uppercase text-stone-300 dark:text-stone-30 hover:text-blue-600 dark:hover:text-orange-500"
            >
              Xem dự án
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
