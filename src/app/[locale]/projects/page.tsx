import HeaderContent from "@/components/HeaderContent";
import { projects } from "@/projects";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <div>
      <HeaderContent title={t("title")} content={t("title_2")} />

      <div className="w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full h-full flex p-3 border border-stone-800 dark:border-stone-600 justify-center items-start gap-6 rounded-sm cursor-pointer"
          >
            <div className="relative w-1/2">
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={560}
                className="object-cover w-full h-full rounded-sm transform transition-transform duration-300 group-hover:scale-125"
                />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
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
              </div>
            </div>

            <div className="flex flex-col w-1/2">
              <div className="h-full items-start">
                <div className="flex gap-4 justify-start items-center">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.timeline}</p>
                </div>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
