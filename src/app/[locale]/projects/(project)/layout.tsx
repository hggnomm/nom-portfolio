import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-between">
        <Link
          href={"/projects"}
          className="uppercase flex items-center gap-2 text-xl hover:scale-105"
        >
          <AiOutlineArrowLeft size={20} />
          Back
        </Link>
        <div className="flex flex-col justify-center items-center gap-5">
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
          <LanguageSwitch />
          <div className="fixed top-2 left-4 md:top-6 md:left-6 flex">
            <ThemeSwitch />
          </div>
        </div>
      </div>

      <div className="mt-20">{children}</div>
    </div>
  );
}
