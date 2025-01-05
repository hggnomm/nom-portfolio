import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomePage() {
  // server request async stuff ==> below code
  // const t = await getTranslations("Homepage")

  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
