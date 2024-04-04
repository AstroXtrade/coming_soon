import Button from "@/components/global/Button";
import Icon from "@/components/icons";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import lighImage from "../../../public/image/image_light_mode.png";

import { useTranslations } from "next-intl";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const handleFormSubmission = () => {
    return;
  };
  const t = useTranslations("Index");
  return (
    <section className="h-full w-full relative ">
      <Navbar />
      <section className=" max-w-[75rem] mx-auto h-[90%] pt-[1.5rem] px-[1rem] relative ">
        <div className=" w-[40%] absolute right-0 top-[3%] 2xl:top-[10%]  ">
          <Image src={lighImage} alt="world_map" />
        </div>
        <div className=" top-[-50%] translate-y-[5%] 2xl:translate-y-[20%]  ">
          <div className=" ">
            <p className=" px-[22px] py-[8px] w-fit  bg-status-warning-400 rounded-[24px] shadow-[3px_3px_0px_rgba(0,0,0)] ] mb-[24px] font-general font-medium uppercase ">
              {`${t("comingSoon")}!!!`}
            </p>
            <h1
              className={` ${
                locale === "ru"
                  ? "text-[48px] leading-[110%]"
                  : "text-[60px] leading-[120%]"
              }  font-general font-bold max-w-[70%] tracking-tight text-tc-heading_gray`}
            >
              {t("heroTitle1")}{" "}
              <span className=" text-primary ">{t("spanText")}</span>
              <span> {t("heroTitle2")} </span>
            </h1>
            <p className=" font-general font-[400] text-[20px] text-tc-heading_gray mt-[16px]  ">
              {t("stayTuned")}
            </p>
            <p className=" text-[18px] mt-[32px] font-general font-semibold text-tc-heading_gray ">
              {t("getNotified")}
            </p>
            <div className=" flex items-center w-[45%] justify-between p-[4px] rounded-[100px] border border-primary mt-[16px]">
              <input
                type="text"
                placeholder={t("enterEmail")}
                className={` h-[100%] w-[55%] outline-none px-2 font-general  placeholder:font-regular tracking-wide bg-transparent ${
                  locale === "ru"
                    ? " placeholder:text-[14px] "
                    : "placeholder:text-[16px]"
                } `}
              />
              <Button
                type="submit"
                btnText={t("subscribe")}
                onClickFunction={handleFormSubmission}
              />
            </div>
            <div className=" w-fit justify-center mt-[40px] pb-[2rem]">
              <p className=" text-center font-general text-[16px] font-semibold mb-[8px] ">
                {t("socialLinks")}
              </p>
              <div className="flex gap-[16px]">
                <div className=" p-[8px] bg-white rounded-[100%]">
                  <Icon.X />
                </div>
                <div className=" p-[8px] bg-white rounded-[100%]">
                  <Icon.Instagram />
                </div>
                <div className=" p-[8px] bg-white rounded-[100%]">
                  <Icon.Vk />
                </div>
              </div>
            </div>
          </div>
          <p className=" max-w-[320px] bg-white p-[8px] font-general rounded-[12px] font-medium text-[14px] shadow-[3px_3px_0px_rgba(0,0,0)] ] border border-[#000] absolute right-[-16px] top-[18%] ">
            {t("blockText")}
          </p>
        </div>
      </section>
      {/* <p className=" mt-auto text-center pb-[24px] font-general text-tc-heading_gray ">
        {" "}
        Copyright © 2024 AstroXtrade - All Rights Reserved.{" "}
      </p> */}
    </section>
  );
}
