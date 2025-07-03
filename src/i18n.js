import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import translationEN from './locales/en/translation.json';
import translationPL from './locales/pl/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  }
};

i18n
  .use(reactI18nextModule)
  .init({
    debug: true,
    resources,
    lng: "pl",
    fallbackLng: "pl",
    supportedLngs: ["pl", "en"],
    nonExplicitSupportedLngs: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  console.log('Język zmieniony na:', lng);
});

export default i18n;