import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './LanguageSwitcher/Languages/en.json';
import fr from './LanguageSwitcher/Languages/fr.json';
import ar from './LanguageSwitcher/Languages/ar.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: {translation: ar}
    },
    lng: 'en', //bdl hadi l dik lukhra d lkhra
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;