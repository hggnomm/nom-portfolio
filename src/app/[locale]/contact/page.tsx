import HeaderContent from "@/components/HeaderContent";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <div>
      <HeaderContent title={t("title")} content={t("title_2")} />

      <p className="text-xl mb-2">{t("anyQuestion")}</p>
      <a
        href="mailto:hggnomm.dev@gmail.com"
        className="text-blue-600 dark:text-orange-500 underline tracking-wide hover:text-blue-800 dark:hover:text-orange-700"
      >
        hggnomm.dev@gmail.com
      </a>
      <div className="mt-5">
        {t("message")}
        <div className="flex flex-wrap items-center mt-2 space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61571633777853"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-orange-500 hover:text-blue-800 dark:hover:text-orange-700"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/hggnomm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-orange-500 hover:text-blue-800 dark:hover:text-orange-700"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/hggnomm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-orange-500 hover:text-blue-800 dark:hover:text-orange-700"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/hggnomm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-orange-500 hover:text-blue-800 dark:hover:text-orange-700"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
