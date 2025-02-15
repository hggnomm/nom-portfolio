"use client";

import { useEffect } from "react";
import Image from "next/image";
import zoom from "medium-zoom";
import { useTranslations } from "next-intl";

const stacks = [
  "TypeScript",
  "React.js",
  "Laravel",
  "OAuth2",
  "Python",
  "CNNs",
  "Ant Design",
  "Notion Framer",
  "mySQL",
  "AWS",
  "Docker",
  "Nginx",
  "Github Action",
];

export default function Page() {
  const t = useTranslations("PinCap");

  useEffect(() => {
    zoom(".zoom-image");
  }, []);

  return (
    <div>
      <h1 className="text-[2.5rem] font-semibold">PinCap</h1>
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
                    href="https://github.com/hggnomm/PinCap_FE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-orange-500 hover:text-blue-800 dark:hover:text-orange-700"
                  >
                    Repository
                  </a>
                </td>
                <td className="py-4 align-top flex flex-col">
                  <a
                    href="http://3.105.157.150/"
                    className="text-blue-600 dark:text-orange-500 hover:text-blue-800 dark:hover:text-orange-700"
                  >
                    View site
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5">
        <div className="w-full">
          <Image
            className="zoom-image"
            src={"/images/projects/pincap/img4.png"}
            alt="PinCap Project"
            width={1200}
            height={800}
            layout="responsive"
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
      <p className="mt-5">{t("description_4")}</p>
      <div className="w-full mt-5">
        <Image
          className="zoom-image"
          src={"/images/projects/pincap/img3.png"}
          alt="PinCap Project"
          width={1200}
          height={800}
          layout="responsive"
          quality={100}
        />
      </div>
      <div className="relative flex py-20 items-center">
        <div className="flex-grow border-t border-stone-600"></div>
      </div>

      <h2 className="text-2xl font-semibold">{t("process")}</h2>

      <div className=" md:flex gap-10 justify-center items-center">
        <div className="md:w-1/2">
          <p className="mt-5">{t("process_1")}</p>
        </div>
        <div className="md:w-1/2 mt-5">
          <Image
            className="zoom-image"
            src={"/images/projects/pincap/img2.png"}
            alt="PinCap Project"
            width={1200}
            height={800}
            layout="responsive"
            quality={100}
          />
        </div>
      </div>

      <div className=" md:flex flex-row-reverse gap-10 justify-center items-center">
        <div className="md:w-1/2">
          <p className="mt-5">{t("process_2")}</p>
        </div>
        <div className="md:w-1/2 mt-5">
          <Image
            className="zoom-image"
            src={"/images/projects/pincap/img5.png"}
            alt="PinCap Project"
            width={1200}
            height={800}
            layout="responsive"
            quality={100}
          />
        </div>
      </div>

      <div className=" md:flex gap-10 justify-center items-center ">
        <div className="md:w-1/2">
          <p className="mt-5">{t("process_3")}</p>
        </div>
        <div className="md:w-1/2 mt-5">
          <Image
            className="zoom-image"
            src={"/images/projects/pincap/img6.png"}
            alt="PinCap Project"
            width={1200}
            height={800}
            layout="responsive"
            quality={100}
          />
        </div>
      </div>

      <p className="mt-10">{t("process_4")}</p>

      <div className="relative flex py-20 items-center">
        <div className="flex-grow border-t border-stone-600"></div>
      </div>

      <div className=" md:flex flex-row-reverse gap-10 justify-center items-start">
        <div className="md:w-1/2">
          <p className="mt-5">{t("process_5_1")}</p>
          <ul className="list-decimal pl-5 mt-5">
            <li>{t("process_5_2")}</li>
            <li>{t("process_5_3")}</li>
          </ul>
          <p className="mt-5">{t("process_5_4")}</p>
        </div>
        <div className="md:w-1/2 mt-5">
          <Image
            className="zoom-image"
            src={"/images/projects/pincap/img7.png"}
            alt="PinCap Project"
            width={1200}
            height={800}
            layout="responsive"
            quality={100}
          />
        </div>
      </div>

      <div className="relative flex py-20 items-center">
        <div className="flex-grow border-t border-stone-600"></div>
      </div>

      <h2 className="text-2xl font-semibold">{t("lesson")}</h2>

      <p className="mt-5">{t("lesson_1")}</p>
      <p className="mt-5">{t("lesson_2")}</p>
      <p className="mt-5">{t("lesson_3")}</p>

      <div className="mb-20"></div>
    </div>
  );
}
