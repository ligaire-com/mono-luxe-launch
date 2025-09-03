import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Inline translations to avoid import issues
const resources = {
  'en-US': {
    translation: {
      "hero": {
        "title": "LIGAIRE",
        "headline1": "STEP INTO AN",
        "headline2": "EXCLUSIVE REALM",
        "headline3": "WHERE DISTINCTION",
        "headline4": "KNOWS NO BOUNDS.",
        "subheadline": "{{aiPowered}} lifestyle and luxury services powered by {{connectedVip}}.",
        "aiPowered": "AI-powered",
        "connectedVip": "Connected VIP",
        "cta": "BEGIN YOUR JOURNEY",
        "description": "Experience a curated world of luxury where every detail is tailored to your desires. From exclusive events to personalized services, discover what it means to live without limits."
      },
      "footer": {
        "legal": {
          "terms": "Terms",
          "privacy": "Privacy",
          "privacyChoices": "Your Privacy Choices"
        },
        "languages": {
          "english-us": "English (US)",
          "english-uk": "English (UK)",
          "italian": "Italiano",
          "german": "Deutsch",
          "french-fr": "Français (FR)",
          "spanish-es": "Español (ES)"
        },
        "appDownload": {
          "title": "Enter a world reserved for you:",
          "appStore": "App Store",
          "googlePlay": "Google Play"
        },
        "social": {
          "title": "Discover:",
          "instagram": "Instagram",
          "twitter": "X (Twitter)",
          "facebook": "Facebook"
        },
        "copyright": "©2025 Ligaire. All Rights Reserved."
      }
    }
  },
  'it': {
    translation: {
      "hero": {
        "title": "LIGAIRE",
        "headline1": "ENTRA IN UN",
        "headline2": "REGNO ESCLUSIVO",
        "headline3": "DOVE LA DISTINZIONE",
        "headline4": "NON CONOSCE CONFINI.",
        "subheadline": "Servizi di lifestyle e lusso {{aiPowered}} alimentati da {{connectedVip}}.",
        "aiPowered": "potenziati dall'IA",
        "connectedVip": "Connected VIP",
        "cta": "INIZIA IL TUO VIAGGIO",
        "description": "Vivi un mondo curato di lusso dove ogni dettaglio è personalizzato secondo i tuoi desideri. Dagli eventi esclusivi ai servizi personalizzati, scopri cosa significa vivere senza limiti."
      },
      "footer": {
        "legal": {
          "terms": "Termini",
          "privacy": "Privacy",
          "privacyChoices": "Le Tue Scelte sulla Privacy"
        },
        "languages": {
          "english-us": "English (US)",
          "english-uk": "English (UK)",
          "italian": "Italiano",
          "german": "Deutsch",
          "french-fr": "Français (FR)",
          "spanish-es": "Español (ES)"
        },
        "appDownload": {
          "title": "Entra in un mondo riservato a te:",
          "appStore": "App Store",
          "googlePlay": "Google Play"
        },
        "social": {
          "title": "Scopri:",
          "instagram": "Instagram",
          "twitter": "X (Twitter)",
          "facebook": "Facebook"
        },
        "copyright": "©2025 Ligaire. Tutti i Diritti Riservati."
      }
    }
  }
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