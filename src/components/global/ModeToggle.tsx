import React, { useState } from "react";

const ModeToggle = () => {
  //   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleModeButton = () => {
    // setIsDarkMode(!isDarkMode);
  };
  return (
    <div className=" w-[80px] h-[40px] bg-primary rounded-[129px]  px-[4px] py-[3px] ">
      <div className=" h-[34px] w-[34px] bg-status-warning-400 rounded-[100%] "></div>
    </div>
  );
};

export default ModeToggle;
