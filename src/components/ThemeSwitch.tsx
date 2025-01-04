// app/components/ThemeSwitch.tsx
"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="bg-white dark:bg-black border border-primary-color rounded-lg cursor-pointer py-2 px-[12.5px]"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? <FiSun size={22} /> : <FiMoon size={22} />}
    </div>
  );
}
