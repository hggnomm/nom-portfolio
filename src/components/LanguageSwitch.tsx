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

  const changeLanguage = () => {
    const nextLocale = routing.locales.find(
      (locale) => locale !== currentLocale
    );

    // Tạo URL mới với locale được chọn
    const newPathname = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
    router.push(`${newPathname}?${searchParams.toString()}`);
  };

  return (
    <button
      onClick={changeLanguage}
      className="bg-white dark:bg-black px-3 py-1 min-w-12 border rounded-lg select-none"
    >
      {currentLocale.toUpperCase()}
    </button>
  );
}
