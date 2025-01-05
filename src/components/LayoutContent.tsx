"use client";

import { ReactNode, useEffect, useState } from "react";
import Siderbar from "@/components/Siderbar";
import Image from "next/image";
import LinkAccountButton from "./LinkAccountButton";

interface LayoutContentProps {
  children: ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="relative w-full flex h-screen bg-primary-color dark:bg-secondary-black">
      <div className="absolute lg:flex flex-col hidden justify-center items-center top-1/2 transform -translate-y-1/2 w-[16%]">
        <Image
          src={"/images/vietnam-flag-icon.svg"}
          alt="Vietnam"
          width={40}
          height={40}
          className="hover:scale-110 transition-all mb-3"
        />
        <p className="text-center text-sm md:text-xl font-medium text-secondary-black dark:text-primary-color">
          H
          <br />
          O
          <br />
          À
          <br />
          N
          <br />
          G
          <br />
          .<br />
          N
          <br />
          A
          <br />
          M
          <br />
          ...
          <br />
        </p>
        <div className="flex flex-col gap-2 my-4">
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
            url="https://www.facebook.com/hggnomm"
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
      </div>
      <div className="w-[100%] lg:w-[68%] flex flex-col md:flex-row mx-auto z-10">
        <div className="w-[100%] md:w-[28%] bg-main-black">
          <Siderbar />
        </div>
        <div className="w-[100%] md:w-[72%] bg-primary-color dark:bg-secondary-black">
          {children}
        </div>
      </div>
    </div>
  );
}
