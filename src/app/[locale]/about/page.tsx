import HeaderContent from "@/components/HeaderContent";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <div>
      <HeaderContent title={t("title")} />
    </div>
  );
}
