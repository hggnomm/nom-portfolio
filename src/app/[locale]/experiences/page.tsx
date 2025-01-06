import HeaderContent from "@/components/HeaderContent";
import { experiences } from "@/exp";
import { useTranslations } from "next-intl";
import { MdWorkHistory } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";

export default function Experiences() {
  const t = useTranslations("Exp");

  return (
    <div className="mx-10">
      <HeaderContent title={t("title")} content={t("title_2")} />

      {/* Exp */}
      <div className="flex items-center gap-4 mb-6">
        <MdWorkHistory size={40} />
        <p className="text-xs md:text-base">Work timeline</p>
      </div>

      <div>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 flex flex-wrap">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{exp.timePeriod}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {exp.position} -{" "}
                <span className="text-sm text-stone-500">{exp.company}</span>
              </h3>
              {/* Description */}
              <ul className="mb-4 list-disc pl-5 text-stone-400">
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="mr-2 mt-2 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
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
      <div className="flex items-center gap-4 mb-4">
        <IoMdSchool size={40} />
        <p className="text-xs md:text-base">Education</p>
      </div>
    </div>
  );
}
