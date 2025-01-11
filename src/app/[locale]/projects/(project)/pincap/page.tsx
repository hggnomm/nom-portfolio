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
                    href=""
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

      <h2 className="text-xl font-semibold">Purpose of the project</h2>
    </div>
  );
}
