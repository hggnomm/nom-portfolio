// app/components/ThemeSwitch.tsx
"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={22}
        height={22}
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
        className="bg-transparent"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <div
        className="bg-white dark:bg-black border border-primary-color rounded-lg cursor-pointer        <LanguageSwitch />
"
        onClick={() => setTheme("light")}
      >
        <FiSun size={22} />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div
        className="bg-white dark:bg-black border border-primary-color rounded-lg cursor-pointer"
        onClick={() => setTheme("dark")}
      >
        <FiMoon size={22} />
      </div>
    );
  }
}
