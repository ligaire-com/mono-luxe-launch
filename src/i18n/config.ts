import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'en-US': {
    translation: {
      // Hero Section
      brand_name: 'LIGAIRE',
      hero_title_1: 'STEP INTO AN',
      hero_title_2: 'EXCLUSIVE REALM',
      hero_title_3: 'WHERE DISTINCTION',
      hero_title_4: 'KNOWS NO BOUNDS.',
      hero_subtitle_ai: 'AI-powered',
      hero_subtitle_text: 'lifestyle and luxury services, powered by',
      hero_subtitle_brand: 'Connected VIP',
      hero_cta: 'LAUNCHING SOON',
      hero_cities: 'Monaco - London - Dubai - El Gouna - North Coast - Cairo',
      
      // Footer
      footer_legal_terms: 'Terms',
      footer_legal_privacy: 'Privacy',
      footer_legal_choices: 'Your Privacy Choices',
      footer_app_intro: 'Enter a world reserved for you:',
      footer_app_store: 'App Store',
      footer_google_play: 'Google Play',
      footer_discover: 'Discover:',
      footer_copyright: '©2025 Ligaire. All Rights Reserved.',
      
      // Languages
      language_en_us: 'English (US)',
      language_en_gb: 'English (UK)',
      language_it: 'Italiano',
      language_de: 'Deutsch',
      language_fr: 'Français (FR)',
      language_es: 'Español (ES)'
    }
  },
  'en-GB': {
    translation: {
      brand_name: 'LIGAIRE',
      hero_title_1: 'STEP INTO AN',
      hero_title_2: 'EXCLUSIVE REALM',
      hero_title_3: 'WHERE DISTINCTION',
      hero_title_4: 'KNOWS NO BOUNDS.',
      hero_subtitle_ai: 'Exclusive',
      hero_subtitle_text: 'lifestyle and luxury services powered by',
      hero_subtitle_brand: 'Connected VIP',
      hero_cta: 'LAUNCHING SOON',
      hero_cities: '[ Monaco - London - Dubai - El Gouna - North Coast - Cairo ]',
      
      footer_legal_terms: 'Terms',
      footer_legal_privacy: 'Privacy',
      footer_legal_choices: 'Your Privacy Choices',
      footer_app_intro: 'Enter a world reserved for you:',
      footer_app_store: 'App Store',
      footer_google_play: 'Google Play',
      footer_discover: 'Discover:',
      footer_copyright: '©2025 Ligaire. All Rights Reserved.',
      
      language_en_us: 'English (US)',
      language_en_gb: 'English (UK)',
      language_it: 'Italiano',
      language_de: 'Deutsch',
      language_fr: 'Français (FR)',
      language_es: 'Español (ES)'
    }
  },
  'it': {
    translation: {
      brand_name: 'LIGAIRE',
      hero_title_1: 'ENTRA IN UN',
      hero_title_2: 'REGNO ESCLUSIVO',
      hero_title_3: 'DOVE LA DISTINZIONE',
      hero_title_4: 'NON CONOSCE LIMITI.',
      hero_subtitle_ai: 'Esclusivi',
      hero_subtitle_text: 'servizi di lifestyle e lusso alimentati da',
      hero_subtitle_brand: 'Connected VIP',
      hero_cta: 'LANCIO IMMINENTE',
      hero_cities: '[ Monaco - Londra - Dubai - El Gouna - North Coast - Cairo ]',
      
      footer_legal_terms: 'Termini',
      footer_legal_privacy: 'Privacy',
      footer_legal_choices: 'Le Tue Scelte Privacy',
      footer_app_intro: 'Entra in un mondo riservato a te:',
      footer_app_store: 'App Store',
      footer_google_play: 'Google Play',
      footer_discover: 'Scopri:',
      footer_copyright: '©2025 Ligaire. Tutti i Diritti Riservati.',
      
      language_en_us: 'English (US)',
      language_en_gb: 'English (UK)',
      language_it: 'Italiano',
      language_de: 'Deutsch',
      language_fr: 'Français (FR)',
      language_es: 'Español (ES)'
    }
  },
  'de': {
    translation: {
      brand_name: 'LIGAIRE',
      hero_title_1: 'BETRETEN SIE EIN',
      hero_title_2: 'EXKLUSIVES REICH',
      hero_title_3: 'WO UNTERSCHEIDUNG',
      hero_title_4: 'KEINE GRENZEN KENNT.',
      hero_subtitle_ai: 'Exklusive',
      hero_subtitle_text: 'Lifestyle- und Luxusdienstleistungen von',
      hero_subtitle_brand: 'Connected VIP',
      hero_cta: 'BALD VERFÜGBAR',
      hero_cities: '[ Monaco - London - Dubai - El Gouna - North Coast - Kairo ]',
      
      footer_legal_terms: 'Bedingungen',
      footer_legal_privacy: 'Datenschutz',
      footer_legal_choices: 'Ihre Datenschutz-Optionen',
      footer_app_intro: 'Betreten Sie eine Welt, die für Sie reserviert ist:',
      footer_app_store: 'App Store',
      footer_google_play: 'Google Play',
      footer_discover: 'Entdecken:',
      footer_copyright: '©2025 Ligaire. Alle Rechte vorbehalten.',
      
      language_en_us: 'English (US)',
      language_en_gb: 'English (UK)',
      language_it: 'Italiano',
      language_de: 'Deutsch',
      language_fr: 'Français (FR)',
      language_es: 'Español (ES)'
    }
  },
  'fr-FR': {
    translation: {
      brand_name: 'LIGAIRE',
      hero_title_1: 'ENTREZ DANS UN',
      hero_title_2: 'ROYAUME EXCLUSIF',
      hero_title_3: 'OÙ LA DISTINCTION',
      hero_title_4: 'NE CONNAÎT PAS DE LIMITES.',
      hero_subtitle_ai: 'Exclusifs',
      hero_subtitle_text: 'services de style de vie et de luxe par',
      hero_subtitle_brand: 'Connected VIP',
      hero_cta: 'LANCEMENT IMMINENT',
      hero_cities: '[ Monaco - Londres - Dubaï - El Gouna - North Coast - Le Caire ]',
      
      footer_legal_terms: 'Conditions',
      footer_legal_privacy: 'Confidentialité',
      footer_legal_choices: 'Vos Choix de Confidentialité',
      footer_app_intro: 'Entrez dans un monde qui vous est réservé :',
      footer_app_store: 'App Store',
      footer_google_play: 'Google Play',
      footer_discover: 'Découvrir :',
      footer_copyright: '©2025 Ligaire. Tous Droits Réservés.',
      
      language_en_us: 'English (US)',
      language_en_gb: 'English (UK)',
      language_it: 'Italiano',
      language_de: 'Deutsch',
      language_fr: 'Français (FR)',
      language_es: 'Español (ES)'
    }
  },
  'es-ES': {
    translation: {
      brand_name: 'LIGAIRE',
      hero_title_1: 'ENTRA EN UN',
      hero_title_2: 'REINO EXCLUSIVO',
      hero_title_3: 'DONDE LA DISTINCIÓN',
      hero_title_4: 'NO CONOCE LÍMITES.',
      hero_subtitle_ai: 'Exclusivos',
      hero_subtitle_text: 'servicios de estilo de vida y lujo por',
      hero_subtitle_brand: 'Connected VIP',
      hero_cta: 'PRÓXIMO LANZAMIENTO',
      hero_cities: '[ Mónaco - Londres - Dubái - El Gouna - North Coast - El Cairo ]',
      
      footer_legal_terms: 'Términos',
      footer_legal_privacy: 'Privacidad',
      footer_legal_choices: 'Sus Opciones de Privacidad',
      footer_app_intro: 'Entra en un mundo reservado para ti:',
      footer_app_store: 'App Store',
      footer_google_play: 'Google Play',
      footer_discover: 'Descubrir:',
      footer_copyright: '©2025 Ligaire. Todos los Derechos Reservados.',
      
      language_en_us: 'English (US)',
      language_en_gb: 'English (UK)',
      language_it: 'Italiano',
      language_de: 'Deutsch',
      language_fr: 'Français (FR)',
      language_es: 'Español (ES)'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en-US',
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;