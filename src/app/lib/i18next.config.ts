import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { az, en, ar } from "../../data/translate";
import LanguageDetector from "i18next-browser-languagedetector";

export const languageResource = {
  az: {
    translation: az,
    code: "az",
    country_code: "az",
    name: "Azərbaycan",
    dir: "ltr",
  },
  en: {
    translation: en,
    code: "en",
    country_code: "gb",
    name: "English",
    dir: "ltr",
  },
  ar: {
    translation: ar,
    code: "ar",
    country_code: "sa",
    name: "العربية",
    dir: "rtl",
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: languageResource,
    fallbackLng: "en",
    detection: {
      order: ["cookie", "*/path", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie", "localStorage"],
    },
  });

export default i18n;
