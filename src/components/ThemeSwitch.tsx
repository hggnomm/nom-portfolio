// app/components/ThemeSwitch.tsx
"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  if (resolvedTheme === "dark") {
    return (
      <div
        className="bg-white dark:bg-black border border-primary-color rounded-lg cursor-pointer"
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
