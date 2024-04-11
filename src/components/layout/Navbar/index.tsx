"use client";
import React, { MouseEventHandler, useEffect, useState } from "react";
import Icon from "@/components/icons";
import Button from "@/components/global/Button";
import ModeToggle from "@/components/global/ModeToggle";
import LanguageSwitch from "@/components/global/LanguageSwitch";
import { useTheme } from "next-themes";

const Navbar = () => {
  const contactFunction = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = "mailto:contact@astroxtrade.com";
  };
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section className=" flex items-center justify-between bg-transparent max-w-[1200px] mx-auto py-[24px] ">
      <div className=" flex items-center gap-2 ">
        <div className=" h-[41px] w-[41px] ">
          <Icon.LogoMark />
        </div>
        {isMounted && (
          <div className=" w-[196px] h-[24px] ">
            {resolvedTheme === "light" ? (
              <Icon.LogoTextBlack />
            ) : resolvedTheme === "dark" ? (
              <Icon.LogoTextWhite />
            ) : (
              ""
            )}
          </div>
        )}
      </div>
      <div className=" flex items-center gap-[24px]   ">
        <LanguageSwitch />
        <ModeToggle />
        <Button
          btnText="Contact Us"
          onClickFunction={contactFunction}
          type="submit"
          withDropShadow={true}
        />
      </div>
    </section>
  );
};

export default Navbar;
