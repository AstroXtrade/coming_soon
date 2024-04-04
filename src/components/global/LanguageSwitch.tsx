import React, { useState } from "react";
import Icon from "../icons";

type Language = {
  id: string;
  code: string;
  value: string;
};

const LanguageSwitch = () => {
  const [displayLanguage, setDisplayLanguage] = useState<string>("en");
  const availableLanguages: Language[] = [
    {
      id: "en",
      code: "EN",
      value: "English",
    },
    {
      id: "fr",
      code: "FR",
      value: "French",
    },
    {
      id: "ru",
      code: "RU",
      value: "Russian",
    },
  ];
  return (
    <div>
      <Icon.DropdownBlack />
      <p> {} </p>
    </div>
  );
};

export default LanguageSwitch;
