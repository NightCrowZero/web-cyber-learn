import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationRU from "./locales/ru.json";
import translationEN from "./locales/en.json";
import translationUA from "./locales/ua.json";

const resources = {
  ru: { translation: translationRU },
  en: { translation: translationEN },
  ua: { translation: translationUA }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector) // Определяет язык браузера
  .init({
    resources,
    fallbackLng: "ru", 
    interpolation: { escapeValue: false },
    detection: { order: ["localStorage", "navigator"] } // Запоминает выбор
  });

export default i18n;