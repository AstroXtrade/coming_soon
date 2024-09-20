import Button from "@/components/global/Button";
import Icon from "@/components/icons";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import lighImage from "../../../public/image/image_light_mode.png";

import { useTranslations } from "next-intl";
import Link from "next/link";

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
    <section className="min-h-full w-full relative ">
      <Navbar />
      <section className=" max-w-[75rem] mx-auto min-h-[85vh] pt-[1.5rem] px-[1rem] relative flex max-[480px]:flex-col-reverse max-[480px]:gap-y-[3.8rem] ">
        <div className=" flex flex-col justify-center  ">
          <p className=" px-[22px] py-[8px] w-fit  bg-status-warning-400 rounded-[24px] shadow-[3px_3px_0px_rgba(0,0,0)] ] dark:shadow-[3px_3px_0px_rgba(255,255,255)] ] mb-[24px] font-general font-medium uppercase text-primary_darker  ">
            {`${t("comingSoon")}!!!`}
          </p>
          <h1
            className={` ${
              locale === "ru"
                ? "lg:text-[48px] leading-[110%] md:text-[32px] md:leading-[120%] max-[480px]:text-[2rem] max-[480px]:leading-[130%] "
                : "lg:text-[60px] leading-[120%] md:text-[42px] w-[100%] max-[480px]:text-[2.5rem] max-[480px]:leading-[125%] "
            }  font-general font-bold  tracking-tight text-tc-heading_gray dark:text-white`}
          >
            {t("heroTitle1")}{" "}
            <span className=" text-primary dark:text-status-warning-400 ">
              {t("spanText")}
            </span>
            <span> {t("heroTitle2")} </span>
          </h1>
          <p
            className={` font-general font-[400] text-[20px] text-tc-heading_gray mt-[16px] dark:text-white md:text-[1rem] max-[480px]:text-[1rem] max-[480px]:leading-normal ${
              locale === "ru" && " md:w-[70%] "
            } `}
          >
            {t("stayTuned")}
          </p>
          <p className=" text-[18px] mt-[32px] font-general font-semibold text-tc-heading_gray dark:text-white md:text-[1rem] max-[480px]:text-[1rem] ">
            {t("getNotified")}
          </p>
          <div className=" flex items-center lg:w-[60%] md:w-[90%] justify-between p-[4px] rounded-[100px] border border-primary dark:border-white mt-[16px] max-[480px]:mt-[8px]">
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
              // onClickFunction={handleFormSubmission}
            />
          </div>
          <div className=" w-fit justify-center mt-[40px] pb-[2rem]">
            <p className=" text-center font-general text-[16px] font-semibold mb-[8px] ">
              {t("socialLinks")}
            </p>
            <div className="flex gap-[16px]">
              <Link href="" className=" p-[8px] bg-white rounded-[100%]">
                <Icon.X />
              </Link>
              <Link
                href="https://www.instagram.com/astro_xtrade?igsh=MTRlcGFzZWo3Zzhlag%3D%3D&utm_source=qr"
                className=" p-[8px] bg-white rounded-[100%]"
              >
                <Icon.Instagram />
              </Link>
              <Link
                href="https://vk.com/astroxtrade"
                target="_blank"
                className=" p-[8px] bg-white rounded-[100%]"
              >
                <Icon.Vk />
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-[100%]  relative flex items-center justify-center ">
          <Image
            src={lighImage}
            alt="world_map"
            priority={true}
            className=" w-[100%] "
          />
          <p
            className={` max-w-[320px] bg-white p-[8px] font-general rounded-[12px] font-medium text-[14px] shadow-[3px_3px_0px_rgba(0,0,0)] ] dark:shadow-[3px_3px_0px_rgba(76,55,244)] ] border border-[#000] absolute right-[0] top-[34%] dark:text-black md:text-[12px] md:p-[4px] max-[480px]:p-[6px] max-[480px]:top-[27%] `}
          >
            {t("blockText")}
          </p>
        </div>
      </section>
      <p className=" mt-auto  text-center pb-[24px] pt-[48px] font-general text-tc-heading_gray text-[0.75rem] dark:text-white ">
        {" "}
        Copyright © 2024 AstroXtrade - All Rights Reserved.{" "}
      </p>
    </section>
  );
}
