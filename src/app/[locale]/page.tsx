"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Typewriter from "typewriter-effect";

export default function HomePage() {
  const t = useTranslations("HomePage");

  function getStyledTitle() {
    return `<span class="text-black dark:text-primary-color ${"text-2xl md:text-3xl font-semibold"}">
      ${t("title_1")}<br/>
      ${t("title_2")}
    </span>`;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full h-full flex flex-col-reverse md:flex-row gap-x-4 lg:gap-x-10 justify-center items-center lg:mx-10">
      <motion.div
        className="w-3/5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="min-h-14 md:min-h-20 mt-5 md:mt-0">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1500) 
                .typeString(getStyledTitle())
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

        <div className="text-gray-700 dark:text-gray-300 min-h-[200px] tracking-normal md:tracking-wide mt-4 md:mt-8">
          <motion.p
            variants={childVariants}
            className="mb-4 text-xs md:text-base"
          >
            {t("content_1")}
          </motion.p>
          <motion.p
            variants={childVariants}
            className="mb-4 text-xs md:text-base"
          >
            {t("content_2")}{" "}
            <span className="font-semibold text-main-black dark:text-primary-color">
              {t("content_fe")}
            </span>
          </motion.p>
          <motion.p
            variants={childVariants}
            className="mb-4 text-xs md:text-base"
          >
            {t("content_3")}
          </motion.p>
        </div>

        <motion.a
          href="/resume/namtran_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline tracking-wide float-right text-lg"
          variants={childVariants}
        >
          Get My Resumse
        </motion.a>
      </motion.div>

      <div className="w-2/5 flex justify-center">
        <motion.img
          src="/images/IMG_0903.JPG"
          alt="Productive Image"
          width={700}
          height={1050}
          className="border border-stone-800 dark:border-stone-400 rounded-3xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
    </div>
  );
}
