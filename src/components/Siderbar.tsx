"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Sidebar() {
  const [activeButtons, setActiveButtons] = useState(Array(13).fill(false));
  const t = useTranslations("SiderBar");

  const handleClick = (index: any) => {
    const newActiveButtons = [...activeButtons];
    newActiveButtons[index] = true;
    setActiveButtons(newActiveButtons);

    setTimeout(() => {
      newActiveButtons[index] = false;
      setActiveButtons([...newActiveButtons]);
    }, 150);
  };

  return (
    <div className="flex flex-col items-center mx-auto mt-16">
      {/* Hggnomm */}
      <div className="h-20"></div>

      {/* Layout nav bar */}
      <div className="w-full">
        {/* Button 1 */}
        <div className="relative w-full">
          <div
            onClick={() => handleClick(0)}
            className={`button ${activeButtons[0] ? "button-active" : ""}`}
          ></div>
        </div>

        {/* Button 2 + Black Button 1 */}
        <div className="relative w-full">
          <div
            onClick={() => handleClick(1)}
            className={`button ${activeButtons[1] ? "button-active" : ""}`}
          ></div>
          <Link
            href="/about"
            className={`button-black absolute top-[-37%] right-0 active:bg-black`}
          >
            <p className="text-base lg:text-lg font-semibold">{t("about")}</p>
          </Link>
        </div>

        {/* Button 3 + Black Button 2 */}
        <div className="relative w-full">
          <div
            onClick={() => handleClick(2)}
            className={`button ${activeButtons[2] ? "button-active" : ""}`}
          ></div>
          <Link
            href="/experiences"
            className={`button-black absolute top-[-37%] right-0 active:bg-black`}
          >
            <p className="text-base lg:text-lg font-semibold">{t("experiences")}</p>
          </Link>
        </div>

        {/* Button 4  */}
        <div className="relative w-full">
          <div
            onClick={() => handleClick(3)}
            className={`button ${activeButtons[3] ? "button-active" : ""}`}
          ></div>
        </div>

        {/* Button 5 + Black Button 3 */}
        <div className="relative w-full">
          <div
            onClick={() => handleClick(4)}
            className={`button ${activeButtons[4] ? "button-active" : ""}`}
          ></div>
          <Link
            href="/blogs"
            className={`button-black absolute top-[-37%] right-0 active:bg-black`}
          >
            <p className="text-base lg:text-lg font-semibold">{t("blogs")}</p>
          </Link>
        </div>

        {/* Button 6 + Black Button 4 */}
        <div className="relative w-full">
          <div
            onClick={() => handleClick(5)}
            className={`button ${activeButtons[5] ? "button-active" : ""}`}
          ></div>
          <Link
            href="/projects"
            className={`button-black absolute top-[-37%] right-0 active:bg-black`}
          >
            <p className="text-base lg:text-lg font-semibold">{t("projects")}</p>
          </Link>
        </div>

        {/* Button 7 + Black Button 5  */}
        <div className="relative w-full">
          <div
            onClick={() => handleClick(6)}
            className={`button ${activeButtons[6] ? "button-active" : ""}`}
          ></div>
          <Link
            href="/contact"
            className={`button-black absolute top-[-37%] right-0 active:bg-black`}
          >
            <p className="text-base lg:text-lg font-semibold">{t("contact")}</p>
          </Link>
        </div>

        {/* Button 8  */}
        <div className="relative w-full">
          <div
            onClick={() => handleClick(7)}
            className={`button ${activeButtons[7] ? "button-active" : ""}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
