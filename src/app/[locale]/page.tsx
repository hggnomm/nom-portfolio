"use client";

import { useTranslations } from "next-intl";
import Typewriter from "typewriter-effect";

export default function HomePage() {
  const t = useTranslations("HomePage");

  // Hàm helper để trả về chuỗi HTML với các lớp Tailwind
  function getStyledTitle() {
    return `<span class="text-black dark:text-primary-color ${"text-3xl font-semibold"}">
      ${t("title_1")}<br/>
      ${t("title_2")}
    </span>`;
  }

  return (
    <div className="w-full h-full flex gap-6 justify-center items-center mx-10">
      <div className="w-1/2">
        <div className="min-h-20">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(getStyledTitle()) // Sử dụng HTML với Tailwind classes
                .pauseFor(3500)
                .deleteAll()
                .pauseFor(500)
                .start();
            }}
            options={{
              loop: true,
              delay: 75,
            }}
          />
        </div>

        <div className="text-gray-700 dark:text-gray-300 min-h-[200px] tracking-wide mt-4">
          <p className="mb-4">{t("content_1")}</p>
          <p className="mb-4">
            {t("content_2")}{" "}
            <span className="font-semibold text-main-black dark:text-primary-color">
              {t("content_fe")}
            </span>
          </p>
          <p className="mb-4
          ">{t("content_3")}</p>
        </div>

        <a
          href="/resume/namtran_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline tracking-wide float-right"
        >
          Get My Resumse
        </a>
      </div>
      <div className="w-1/2 h-full"></div>
    </div>
  );
}
