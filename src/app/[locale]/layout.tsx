import type { Metadata } from "next";
import "./globals.css";
import { Mali } from "next/font/google";
import { Providers } from "../../providers";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import LayoutContent from "@/components/LayoutContent";

const mali = Mali({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Nam Tran Hoang | Full Stack Developer",
  description:
    "Full Stack Developer with 3 years of experience building web applications. Grounded in core engineering principles and design patterns, making me highly flexible across different programming languages and tech stacks. Young, eager to learn, and ready to tackle complex challenges with cross-functional and international teams.",
  icons: {
    icon: ["/logo.png"],
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "vi")) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} className={mali.className} suppressHydrationWarning>
      <Providers>
        <NextIntlClientProvider messages={messages}>
          <body>
            <LayoutContent>{children}</LayoutContent>
          </body>
        </NextIntlClientProvider>
      </Providers>
    </html>
  );
}