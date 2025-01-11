"use client";

import { useEffect } from "react";
import Image from "next/image";
import zoom from "medium-zoom";
import { useTranslations } from "next-intl";

const stacks = [
  "TypeScript",
  "React Native",
  "Figma",
  "Expo",
  "Google Maps API",
];

export default function Page() {
  const t = useTranslations("KatenaiShield");

  useEffect(() => {
    zoom(".zoom-image");
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-[2.5rem] font-semibold">Katenai Shield</h1>
      <p className="mt-5">{t("description_1")}</p>
      <p className="mt-5">{t("description_0")}</p>
      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="py-3 text-left text-lg font-semibold">
                  TechStack
                </th>
                <th className="py-3 text-left text-lg font-semibold">Github</th>
                <th className="py-3 text-left text-lg font-semibold">Demo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">
                  <ul className="list-disc pl-5">
                    {stacks.map((stack, index) => (
                      <li key={index}>{stack}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-4 align-top">
                  <a
                    href="https://github.com/duytan177/katenai-shield"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-orange-500 hover:text-blue-800 dark:hover:text-orange-700"
                  >
                    Repository
                  </a>
                </td>
                <td className="py-4 align-top flex flex-col">
                  <a
                    href="https://www.figma.com/design/UPkFlGH4UUjo3R5Iw2gVu7/UX%2FUI-project?node-id=286-1375&t=eUXQsBTrFy2NlbNU-0"
                    className="text-blue-600 dark:text-orange-500 hover:text-blue-800 dark:hover:text-orange-700"
                  >
                    Figma
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5 w-full flex gap-4 justify-center overflow-hidden">
        <div className="relative w-[400px] h-[630px]">
          <Image
            className="zoom-image"
            src={"/images/projects/katenai-shield/img1.jpg"}
            alt="PinCap Project"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative w-[400px] h-[630px]">
          <Image
            className="zoom-image"
            src={"/images/projects/katenai-shield/img2.jpg"}
            alt="PinCap Project"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative w-[400px] h-[630px]">
          <Image
            className="zoom-image"
            src={"/images/projects/katenai-shield/img3.jpg"}
            alt="PinCap Project"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>

      <div className="relative flex py-20 items-center">
        <div className="flex-grow border-t border-stone-600"></div>
      </div>

      <h2 className="text-2xl font-semibold">{t("purpose")}</h2>

      <p className="mt-5">{t("description_2")}</p>
      <p className="mt-5">{t("description_3")}</p>

      <div className="mt-5 w-full flex gap-4 justify-center overflow-hidden">
        <div className="relative w-1/3 h-[630px]">
          <Image
            className="zoom-image"
            src={"/images/projects/katenai-shield/img4.jpg"}
            alt="PinCap Project"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <div className="relative w-1/3 h-[630px]">
          <Image
            className="zoom-image"
            src={"/images/projects/katenai-shield/img5.jpg"}
            alt="PinCap Project"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <div className="relative w-1/3 h-[630px]">
          <Image
            className="zoom-image"
            src={"/images/projects/katenai-shield/img6.jpg"}
            alt="PinCap Project"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
      </div>

      <div className="relative flex py-20 items-center">
        <div className="flex-grow border-t border-stone-600"></div>
      </div>

      <div className="mt-5 w-full flex gap-4 justify-center overflow-hidden">
        <div className="relative w-1/3 h-[630px]">
          <Image
            className="zoom-image"
            src={"/images/projects/katenai-shield/img7.jpg"}
            alt="PinCap Project"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <div className="relative w-1/3 h-[630px]">
          <Image
            className="zoom-image"
            src={"/images/projects/katenai-shield/img10.jpg"}
            alt="PinCap Project"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <div className="relative w-1/3 h-[630px]">
          <Image
            className="zoom-image"
            src={"/images/projects/katenai-shield/img9.jpg"}
            alt="PinCap Project"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
      </div>

      <div className="relative flex py-20 items-center">
        <div className="flex-grow border-t border-stone-600"></div>
      </div>

      <h2 className="text-2xl font-semibold">{t("lesson")}</h2>

      <p className="mt-5">{t("description_4")}</p>
      <p className="mt-5">{t("description_5")}</p>

      <div className="mb-20"></div>
    </div>
  );
}
