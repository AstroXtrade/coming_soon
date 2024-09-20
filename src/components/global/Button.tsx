"use client";
import React from "react";
import Icon from "../icons";

type BtnProps = {
  btnText: string;
  withDropShadow?: boolean;
  onClickFunction?: (e: React.MouseEvent<HTMLElement>) => void;
  type: "submit" | "button" | "reset";
  outlined?: boolean;
};

const Button = ({
  btnText,
  withDropShadow,
  onClickFunction,
  type,
}: BtnProps) => {
  return (
    <button
      type={type}
      onClick={onClickFunction}
      className={` bg-primary text-white py-[10px] px-[18px] rounded-[100px]  flex items-center gap-x-[8px] border border-[#000] font-general font-semibold ${
        withDropShadow
          ? "shadow-[4px_4px_0px_rgba(0,0,0)] dark:shadow-[4px_4px_0px_rgba(255,255,255)]"
          : ""
      } `}
    >
      {btnText}{" "}
      <span>
        {" "}
        <Icon.Arrow />{" "}
      </span>
    </button>
  );
};

export default Button;
