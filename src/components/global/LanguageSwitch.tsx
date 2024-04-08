import React, { MouseEventHandler, useEffect, useState } from "react";
import Icon from "../icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { StaticImageData } from "next/image";
import { useTheme } from "next-themes";

type Language = {
  id: string;
  code: string;
  value: string;
  icon: React.ReactNode;
};

const LanguageSwitch = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();
  const [displayLanguage, setDisplayLanguage] = useState<string>("");
  const [optionFlag, setOptionFlag] = useState<React.ReactNode>();
  const [showLangOptions, setShowLangOptions] = useState<boolean>(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsMounted(true);
    switch (pathName) {
      case "/en":
        setDisplayLanguage("EN");
        setOptionFlag(<Icon.en />);
        break;
      case "/fr":
        setDisplayLanguage("FR");
        setOptionFlag(<Icon.fr />);
        break;
      case "/ru":
        setDisplayLanguage("RU");
        setOptionFlag(<Icon.ru />);
        break;
      default:
        setDisplayLanguage("EN");
        break;
    }
  }, []);
  const availableLanguages: Language[] = [
    {
      id: "en",
      code: "EN",
      value: "English",
      icon: <Icon.en />,
    },
    {
      id: "fr",
      code: "FR",
      value: "French",
      icon: <Icon.fr />,
    },
    {
      id: "ru",
      code: "RU",
      value: "Russian",
      icon: <Icon.ru />,
    },
  ];

  return (
    <>
      {isMounted && (
        <div
          className="flex items-center gap-x-[8px] relative cursor-pointer "
          onClick={() => setShowLangOptions(!showLangOptions)}
        >
          <div
            className={`${
              showLangOptions ? "rotate-180" : "rotate-0"
            } transition-all`}
          >
            <Icon.DropdownBlack
              stroke={resolvedTheme === "light" ? "#393939" : "#ffffff"}
            />
          </div>
          <div className="w-[24px] h-[24px] flex items-center justify-center">
            {optionFlag}
          </div>
          <p className=" font-general font-medium text-tc-text_dark leading-[150%] dark:text-white ">
            {displayLanguage}
          </p>
        </div>
      )}
      {showLangOptions && (
        <div className="absolute top-[4.5rem] transition-all delay-75 bg-white z-30 py-[16px] px-[8px] flex flex-col gap-y-[16px] items-center border border-tc-text_gray rounded-md ">
          {availableLanguages.map((lang) => {
            return (
              <Link
                href={`/${lang.id}`}
                key={lang.id}
                onClick={() => {
                  setShowLangOptions(false);
                  //   router.push(`/${lang.id}`);
                }}
                className=" flex items-center gap-x-[8px] cursor-pointer "
              >
                <div className="w-[24px] h-[24px] flex items-center justify-center ">
                  {lang.icon}
                </div>
                <p className="font-general font-medium text-tc-text_dark leading-[150%]">
                  {" "}
                  {lang.code}{" "}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default LanguageSwitch;
