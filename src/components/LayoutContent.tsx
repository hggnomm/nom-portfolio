// components/LayoutContent.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import Siderbar from "@/components/Siderbar";

interface LayoutContentProps {
  children: ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="w-full flex h-screen bg-primary-color dark:bg-secondary-black">
      <div className="w-[100%] lg:w-[65%] flex mx-auto">
        <div className="w-[33%] bg-main-black">
          <Siderbar />
        </div>
        <div className="w-[67%] bg-primary-color dark:bg-secondary-black">
          {children}
        </div>
      </div>
    </div>
  );
}
