import React from "react";
import { useTranslation } from "react-i18next";

import { Select } from "antd";

const languageOptions = [
  { value: "en", label: "English" },
  { value: "ru", label: "Russian" },
  { value: "uz", label: "Uzbek" },
  // Add more language options as needed
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select value={currentLanguage} onChange={handleLanguageChange}>
      {languageOptions.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default LanguageSelector;
