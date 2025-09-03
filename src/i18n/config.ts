import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enUS from './locales/en-US.json';
import enGB from './locales/en-GB.json';
import it from './locales/it.json';
import de from './locales/de.json';
import frFR from './locales/fr-FR.json';
import esES from './locales/es-ES.json';

const resources = {
  'en-US': { translation: enUS },
  'en-GB': { translation: enGB },
  'it': { translation: it },
  'de': { translation: de },
  'fr-FR': { translation: frFR },
  'es-ES': { translation: esES },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en-US', // default language
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;