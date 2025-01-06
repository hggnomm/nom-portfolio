import HeaderContent from "@/components/HeaderContent";
import { experiences } from "@/exp";
import { useTranslations } from "next-intl";
import { MdWorkHistory } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import Image from "next/image";

export default function Experiences() {
  const t = useTranslations("Exp");

  return (
    <div className="ml-10">
      <HeaderContent title={t("title")} content={t("title_2")} />

      {/* Exp */}
      <div className="flex items-center gap-4 mb-6">
        <MdWorkHistory size={40} />
        <p className="text-xs md:text-base">{t("work_time")}</p>
      </div>

      <div>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 flex flex-wrap">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-600 dark:text-stone-400">{exp.timePeriod}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {exp.position} -{" "}
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-orange-500 underline tracking-wide hover:text-blue-800 dark:hover:text-orange-700"
                >
                  {exp.company}
                </a>
              </h3>
              {/* Description */}
              <ul className="mb-4 list-disc pl-5 text-stone-600 dark:text-stone-400">
                {exp.description.map((desc, descIndex) => (
                  <li className="mb-2" key={descIndex}>
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="mr-2 mt-2 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="flex items-center gap-4 mb-6">
        <IoMdSchool size={40} />
        <p className="text-xs md:text-base">{t("education")}</p>
      </div>

      <div className="mb-12 flex flex-wrap">
        <div className="w-full lg:w-1/4">
          <p className="mb-2 text-sm text-stone-400">2021 - 2025</p>
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
          <div className="flex items-center gap-x-2 md:gap-x-4">
            <a
              href="https://vku.udn.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-black overflow-hidden"
            >
              <Image
                src="/images/vku.png"
                alt="Productive Image"
                width={120}
                height={120}
                layout="intrinsic"
                quality={100}
                className="hover:scale-105"
              />
            </a>

            <div>
              <p className="mb-1 text-xs font-bold md:text-base pb-2 border-b-2 border-stone-500 dark:border-primary-color uppercase">
                {t("it")}
              </p>
              <p className="text-xs font-medium md:text-base">{t("school")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
