"use-client";
import Button from "@/components/global/Button";
import Icon from "@/components/icons";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import lighImage from "../../public/image/image_light_mode.png";

export default function Home() {
  const handleFormSubmission = () => {
    return;
  };
  return (
    <section className="h-full w-full relative ">
      <Navbar />
      <section className=" max-w-[75rem] mx-auto h-[90%] pt-[1.5rem] px-[1rem] relative ">
        <div className=" w-[40%] absolute right-0 top-[3%] 2xl:top-[10%]  ">
          <Image src={lighImage} alt="world_map" />
        </div>
        <div className=" top-[-50%] translate-y-[10%] 2xl:translate-y-[30%]  ">
          <div className=" ">
            <p className=" px-[22px] py-[8px] max-w-[180px] bg-status-warning-400 rounded-[24px] shadow-[3px_3px_0px_rgba(0,0,0)] ] mb-[24px] font-general font-medium ">
              COMING SOON!!!
            </p>
            <h1 className=" text-[60px] font-general font-bold max-w-[70%] leading-[120%] tracking-tight text-tc-heading_gray">
              Enjoy Seamless & Efficient{" "}
              <span className=" text-primary ">Cross-border</span> Transactions
            </h1>
            <p className=" font-general font-[400] text-[20px] text-tc-heading_gray mt-[16px]  ">
              Stay tuned for a revolutionary payment experience with AstroXtrade{" "}
            </p>
            <p className=" text-[18px] mt-[32px] font-general font-semibold text-tc-heading_gray ">
              Get notified when we launch
            </p>
            <div className=" flex items-center w-[45%] justify-between p-[4px] rounded-[100px] border border-primary mt-[16px]">
              <input
                type="text"
                placeholder="Enter your email"
                className=" h-[100%] w-[55%] outline-none px-2 font-general placeholder:text-[18px] placeholder:font-regular tracking-wide bg-transparent "
              />
              <Button
                type="submit"
                btnText="Get Notified"
                onClickFunction={handleFormSubmission}
              />
            </div>
            <div className=" w-fit justify-center mt-[40px]">
              <p className=" text-center font-general text-[16px] font-semibold mb-[8px] ">
                Social links
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
            {" "}
            Make international transactions across Africa, Eastern Europe and
            Asia{" "}
          </p>
        </div>
      </section>
      <p className=" mt-auto text-center pb-[24px] font-general text-tc-heading_gray ">
        {" "}
        Copyright © 2024 AstroXtrade - All Rights Reserved.{" "}
      </p>
    </section>
  );
}
