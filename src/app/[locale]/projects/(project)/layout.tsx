"use client";

import ThemeSwitch from "@/components/ThemeSwitch";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-between">
        <button
          className="uppercase flex items-center gap-2 text-xl hover:scale-105"
          onClick={() => router.back()}
        >
          <AiOutlineArrowLeft size={20} />
          Back
        </button>
        <div className="flex">
          <Link
            href={"/"}
            className="relative border-2 lg:border-4 border-primary-color rounded-full w-20 h-20 lg:w-24 lg:h-24 bg-[#A0A0A0] overflow-hidden cursor-pointer"
          >
            <Image
              src="/images/avatartion.png"
              alt="Hggnomm"
              objectFit="cover"
              layout="fill"
              className="hover:scale-105 transition-transform"
            />
          </Link>
          <div className="absolute top-2 left-4 md:top-6 md:left-6 flex">
            <ThemeSwitch />
          </div>
        </div>
      </div>

      <div className="mt-20">{children}</div>
    </div>
  );
}
