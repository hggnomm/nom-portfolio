"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSwitch from "./LanguageSwitch";

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
    }, 250);
  };

  return (
    <div className="flex flex-col items-center mx-auto">
      {/* Hggnomm */}
      <div className="flex mt-6">
        <Link
          href={"/"}
          className="flex w-full justify-center items-center py-6  gap-3 md:gap-6 lg:gap-7 relative"
        >
          <div className="relative border-2 lg:border-4 border-primary-color rounded-full w-20 h-20 lg:w-24 lg:h-24 bg-[#A0A0A0] overflow-hidden">
            <Image
              src="/images/avatartion.png"
              alt="Hggnomm"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <img
            src="/curved-arrow.svg"
            alt="Curved Arrow"
            className="absolute top-4 w-8 h-8 lg:w-12 lg:h-12 transform rotate-[-135deg] fill-white"
          />
          <p className="text-primary-color text-base md:text-lg xl:text-2xl font-semibold">
            Đây là Nam
          </p>
        </Link>
      </div>

      <div className="flex gap-[10px]">
        <ThemeSwitch />
        <LanguageSwitch />
      </div>

      {/* Layout nav bar */}
      <div className="w-full mt-4">
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
            <p className="text-base lg:text-lg font-semibold">
              {t("experiences")}
            </p>
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
            <p className="text-base lg:text-lg font-semibold">
              {t("projects")}
            </p>
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
