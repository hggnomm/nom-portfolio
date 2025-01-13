import HeaderContent from "@/components/HeaderContent";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");

  return (
    <div>
      <HeaderContent title={t("title")} content={t("title_2")} />

      <div className="w-full h-full flex gap-9 justify-start items-center mb-14">
        <div className="w-[35%] flex justify-start">
          <Image
            src="/images/447.Productive.png"
            alt="Productive Image"
            width={260}
            height={260}
            layout="intrinsic"
            quality={100}
          />
        </div>
        <div className="w-[65%] text-xs md:text-base">
          <ul className="list-disc space-y-4 pl-6">
            <li>{t("content_1")}</li>
            <li>{t("content_2")} </li>
            <li>{t("content_3")}</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-full flex gap-6 justify-end items-center flex-row-reverse mb-14">
        <div className="w-[35%] flex justify-start">
          <Image
            src="/images/262.Hard-Worker.png"
            alt="Productive Image"
            width={260}
            height={260}
            layout="intrinsic"
            quality={100}
          />
        </div>
        <div className="w-[65%] text-xs md:text-base">
          <ul className="list-disc space-y-4 pl-6">
            <li>{t("content_4")}</li>
            <li>{t("content_5")}</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-full flex gap-9 justify-start items-center mb-14">
        <div className="w-[35%] flex justify-start">
          <Image
            src="/images/205.OK_.png"
            alt="Productive Image"
            width={260}
            height={260}
            layout="intrinsic"
            quality={100}
          />
        </div>
        <div className="w-[65%] text-xs md:text-base">
          <ul className="list-disc space-y-4 pl-6">
            <li>{t("content_6")}</li>
            <li>{t("content_7")} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
