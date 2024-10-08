import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import local from "next/font/local";
import "../globals.css";
import Providers from "../providers";

const general = local({
  src: [
    {
      path: "../../../public/fonts/GeneralSans-Extralight.ttf",
      weight: "200",
    },
    {
      path: "../../../public/fonts/GeneralSans-Light.ttf",
      weight: "300",
    },
    {
      path: "../../../public/fonts/GeneralSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/GeneralSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../public/fonts/GeneralSans-Semibold.ttf",
      weight: "600",
    },
    {
      path: "../../../public/fonts/GeneralSans-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-generalSans",
});

export const metadata: Metadata = {
  title: "AstroXtrade",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={` ${general.variable} bg-pc-almost_white dark:bg-primary_darker `}
      >
        <Providers>
          {children}
          {/* <p className=" mt-auto bg-red-50 text-center pb-[24px] pt-[48px] 2xl:mt-[-48px] 2xl:pt-[0px] font-general text-tc-heading_gray dark:text-white ">
            {" "}
            Copyright © 2024 AstroXtrade - All Rights Reserved.{" "}
          </p> */}
        </Providers>
      </body>
    </html>
  );
}
