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
          className={`px-[12px] py-[2px] border rounded ${
            locale === currentLocale
              ? "bg-blue-600 border-b-4 border-blue-300 text-white" // Dấu gạch dưới cho nút hiện tại
              : "bg-primary-color dark:bg-secondary-black dark:text-white"
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
