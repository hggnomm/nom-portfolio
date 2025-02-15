"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSwitch from "./LanguageSwitch";
import { useState, useEffect } from "react";
import LinkAccountButton from "./LinkAccountButton";
import * as Tone from "tone";

export default function Sidebar() {
  const [activeButtons, setActiveButtons] = useState(Array(8).fill(false));
  const [buttonClicked, setButtonClicked] = useState(0); 
  const [completedInTime, setCompletedInTime] = useState(false); 
  const [startTime, setStartTime] = useState<number | null>(null); 
  const [isReset, setIsReset] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("SiderBar");

  const handleClick = (index: number) => {
    if (index === 0 && !completedInTime) {
      setActiveButtons(Array(8).fill(false));
      setButtonClicked(0);
      setCompletedInTime(false);
      setStartTime(Date.now()); 
      setIsReset(true); 
    } else {
      setIsReset(false); // Not reset anymore after user starts
    }

    if (startTime === null) {
      setStartTime(Date.now());
    }

    const newActiveButtons = [...activeButtons];
    newActiveButtons[index] = true;
    setActiveButtons(newActiveButtons);

    // Increment the clicked button count
    setButtonClicked((prev) => prev + 1);

    // Timeout for button state reset after 250ms
    setTimeout(() => {
      newActiveButtons[index] = false;
      setActiveButtons([...newActiveButtons]);
    }, 250);

    const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(notes[index], "8n");

    if (buttonClicked === 7) {
      // If all 8 buttons are clicked, check if it's within 10 seconds
      const timeTaken = Date.now() - startTime!;
      if (timeTaken <= 10000) {
        setCompletedInTime(true);
      }
    }
  };

  // Remove '/en' from the pathname
  const normalizedPathname = pathname.replace(/\/(en|vi)\b/g, "");

  useEffect(() => {
    // If all buttons are clicked within 10 seconds, set completedInTime to true
    if (buttonClicked === 8 && !completedInTime && !isReset) {
      const timeTaken = Date.now() - startTime!;
      if (timeTaken <= 10000) {
        setCompletedInTime(true);
      }
    }
  }, [buttonClicked, startTime, completedInTime, isReset]);

  return (
    <div className="flex flex-col items-center mx-auto relative h-full">
      {/* User Profile Section */}
      <div className="flex mt-6">
        <Link
          href={"/"}
          className="flex flex-col md:flex-row w-full justify-center items-center py-6 gap-3 md:gap-6 lg:gap-7 relative"
        >
          <div className="relative border-2 lg:border-4 border-primary-color rounded-full w-20 h-20 lg:w-24 lg:h-24 bg-[#A0A0A0] overflow-hidden">
            <Image
              src="/images/avatartion.png"
              alt="Hggnomm"
              objectFit="cover"
              layout="fill"
              className="hover:scale-105 transition-transform"
            />
          </div>
          {/* <Image
            src="/curved-arrow.svg"
            alt="Curved Arrow"
            className=" md:absolute top-4 w-8 h-8 lg:w-12 lg:h-12 transform md:rotate-[-135deg]  
            hover:scale-105 hover:rotate-[-145deg] 
            transition-transform duration-500 ease-in-out"
            width={40}
            height={40}
          /> */}
          <p className="text-primary-color text-base md:text-lg xl:text-2xl font-semibold hover:scale-105 transition-transform text-center">
            Nam. Tran
          </p>
        </Link>
      </div>
      <div className="md:hidden flex flex-row gap-2 mb-4">
        <LinkAccountButton
          url="https://www.linkedin.com/in/hggnomm/"
          iconSrc="/images/linkedin.svg"
          iconSrcHover="/images/linkedin-color.svg"
          altText="LinkedIn"
        />
        <LinkAccountButton
          url="https://github.com/hggnomm"
          iconSrc="/images/github.svg"
          iconSrcHover="/images/github-color.svg"
          altText="Github"
        />
        <LinkAccountButton
          url="https://www.facebook.com/profile.php?id=61571633777853"
          iconSrc="/images/facebook.svg"
          iconSrcHover="/images/facebook-color.svg"
          altText="Facebook"
        />
        <LinkAccountButton
          url="https://www.instagram.com/hggnomm"
          iconSrc="/images/instagram.svg"
          iconSrcHover="/images/instagram-color.svg"
          altText="Instagram"
        />
      </div>
      {/* ThemeSwitch and LanguageSwitch */}
      <div className="absolute top-5 right-5 flex gap-[10px]">
        <ThemeSwitch />
      </div>
      <LanguageSwitch />

      {/* Layout Navigation Bar */}
      <div className="w-full mt-4 flex-grow">
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
            className={`${
              normalizedPathname === "/about"
                ? "button-black-active"
                : "button-black"
            } absolute top-[-37%] right-0 active:bg-black`}
          >
            <p className="text-xs lg:text-lg font-semibold">{t("about")}</p>
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
            className={`${
              normalizedPathname === "/experiences"
                ? "button-black-active"
                : "button-black"
            } absolute top-[-37%] right-0 active:bg-black`}
          >
            <p className="text-xs lg:text-lg font-semibold">
              {t("experiences")}
            </p>
          </Link>
        </div>

        {/* Button 4 */}
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
            href="/projects"
            className={`${
              normalizedPathname === "/projects"
                ? "button-black-active"
                : "button-black"
            } absolute top-[-37%] right-0 active:bg-black`}
          >
            <p className="text-xs lg:text-lg font-semibold">{t("projects")}</p>
          </Link>
        </div>

        {/* Button 6 + Black Button 4 */}
        <div className="relative w-full">
          <div
            onClick={() => handleClick(5)}
            className={`button ${activeButtons[5] ? "button-active" : ""}`}
          ></div>
          <Link
            href="/contact"
            className={`${
              normalizedPathname === "/contact"
                ? "button-black-active"
                : "button-black"
            } absolute top-[-37%] right-0 active:bg-black`}
          >
            <p className="text-xs lg:text-lg font-semibold">{t("contact")}</p>
          </Link>
        </div>

        {/* Button 7 + Black Button 5 */}
        <div className="relative w-full">
          <div
            onClick={() => handleClick(6)}
            className={`button ${activeButtons[6] ? "button-active" : ""}`}
          ></div>
          <div
            // href="/blogs"
            className={`${
              normalizedPathname === "/blogs"
                ? "button-black-active"
                : "button-black"
            } absolute top-[-37%] right-0 active:bg-black`}
          >
            <p className="text-xs lg:text-lg font-semibold"></p>
          </div>
        </div>

        {/* Button 8 */}
        <div className="relative w-full">
          <div
            onClick={() => handleClick(7)}
            className={`button ${activeButtons[7] ? "button-active" : ""}`}
          ></div>
        </div>
      </div>

      {/* Figma */}
      <div className="my-12 text-center text-xs text-primary-color">
        <p className="mb-1">{t("design_1")}</p>
        <p>
          {t("design_2")}
          <a
            href="https://www.figma.com/design/73TveLt3ND7RQ4p62NQaPX/Nom.-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-orange-500 hover:text-blue-800 dark:hover:text-orange-700"
          >
            Figma
          </a>
        </p>
      </div>

      {/* Display completion status */}
      {/* {completedInTime && (
        <p className="text-green-500 mt-4">
          You completed all buttons within 10 seconds!
        </p>
      )} */}
    </div>
  );
}
