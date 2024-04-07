"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Icon from "../icons";

const ModeToggle = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  console.log(resolvedTheme);

  const toggleModeButton = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else if (resolvedTheme === "dark") {
      setTheme("light");
    }
  };
  return (
    <div className=" w-[80px] h-[40px] bg-primary rounded-[129px] relative  px-[4px] py-[3px] ">
      <div
        onClick={toggleModeButton}
        className={`h-[34px] w-[34px] rounded-[100%] absolute cursor-pointer ${
          resolvedTheme === "dark" ? "bg-white" : "bg-status-warning-400"
        } ${
          resolvedTheme === "dark"
            ? "transform translate-x-[2.4rem] "
            : " transform translate-x-[0rem] "
        }  transition-transform duration-700`}
      ></div>

      <div
        className={` ${
          resolvedTheme === "dark" ? " hidden " : "block"
        } absolute top-[50%] translate-y-[-50%] right-1 transition-all`}
      >
        {" "}
        <Icon.Moon />{" "}
      </div>

      <div
        className={` ${
          resolvedTheme === "light" ? "hidden" : "block"
        } absolute top-[50%] translate-y-[-50%] transition-all `}
      >
        {" "}
        <Icon.Sun />{" "}
      </div>
    </div>
  );
};

export default ModeToggle;
