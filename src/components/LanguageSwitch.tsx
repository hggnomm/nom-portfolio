"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentLocale =
    routing.locales.find((locale) => pathname.startsWith(`/${locale}`)) ||
    routing.defaultLocale;

  const changeLanguage = (locale: string) => {
    if (locale === currentLocale) return;

    // Tạo URL mới với locale được chọn
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(`${newPathname}?${searchParams.toString()}`);
  };

  return (
    <div className="flex gap-2">
      {routing.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => changeLanguage(locale)}
          className={`px-3 py-1 border rounded ${
            locale === currentLocale
              ? "bg-amber-300"
              : "bg-primary-color dark:bg-secondary-black dark:text-white"
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
