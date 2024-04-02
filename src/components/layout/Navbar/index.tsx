"use-client";
import React from "react";
import Icon from "@/components/icons";
import Button from "@/components/global/Button";
import ModeToggle from "@/components/global/ModeToggle";

const Navbar = () => {
  const redirectToContactPage = () => {};
  return (
    <section className=" flex items-center justify-between bg-transparent max-w-[1200px] mx-auto py-[24px] ">
      <div className=" flex items-center gap-2 ">
        <div className=" h-[41px] w-[41px] ">
          <Icon.LogoMark />
        </div>
        <div className=" w-[196px] h-[24px] ">
          <Icon.LogoTextBlack />
        </div>
      </div>
      <div className=" flex items-center gap-[24px]   ">
        <ModeToggle />
        <Button
          btnText="Contact Us"
          onClickFunction={redirectToContactPage}
          type="submit"
          withDropShadow={true}
        />
      </div>
    </section>
  );
};

export default Navbar;
