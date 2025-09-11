import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook } from 'lucide-react';

// Custom X (Twitter) icon component since Lucide doesn't have the new X logo
const XIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

interface FooterProps {
  isVisible: boolean;
}

const Footer = ({ isVisible }: FooterProps) => {
  const { t, i18n } = useTranslation();
  
  const languages = [
    { code: 'en-US', name: t('language_en_us') }, 
    { code: 'en-GB', name: t('language_en_gb') }, 
    { code: 'it', name: t('language_it') }, 
    { code: 'de', name: t('language_de') }, 
    { code: 'fr-FR', name: t('language_fr') }, 
    { code: 'es-ES', name: t('language_es') }
  ];
  
  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative footer-gradient-foundation border-t border-brand-ink-10 overflow-hidden"
    >
      {/* Layer 1: Foundation Gradient */}
      <div className="absolute inset-0 footer-foundation-gradient" />
      
      {/* Layer 2: Horizontal Sweep */}
      <div className="absolute inset-0 footer-horizontal-sweep" />
      
      {/* Layer 3: Edge Vignetting */}
      <div className="absolute inset-0 footer-edge-vignette" />
      
      {/* Layer 4: Noise Texture Overlay */}
      <div className="absolute inset-0 footer-noise-overlay" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          
          {/* Left Section - Links & Languages */}
          <div className="space-y-8 footer-section-hover">
            {/* Legal Links */}
            <div>
              <nav className="flex flex-wrap gap-6 mb-8 justify-center md:justify-start">
                {[
                  { key: 'footer_legal_terms', href: '#' },
                  { key: 'footer_legal_privacy', href: '#' },
                  { key: 'footer_legal_choices', href: '#' }
                ].map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className="typography-caption text-brand-ink hover:text-brand-stone transition-colors duration-300"
                  >
                    {t(link.key)}
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Language Options */}
            <div>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`typography-caption transition-colors duration-300 ${
                      i18n.language === lang.code 
                        ? 'text-brand-ink' 
                        : 'text-brand-stone hover:text-brand-ink-70'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Center Section - App Downloads */}
          <div className="text-center space-y-6 footer-section-hover">
            <h3 className="typography-caption text-brand-ink">
              {t('footer_app_intro')}
            </h3>
            
            <div className="flex flex-col gap-3 justify-center">
              <a 
                href="https://apps.apple.com/us/app/ligaire/id6746082197?uo=2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-minimal border border-brand-ink-30 hover:border-brand-ink text-sm py-2 px-4"
              >
                <span className="typography-caption">{t('footer_app_store')}</span>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.ligaire.app&hl=ar&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-minimal border border-brand-ink-30 hover:border-brand-ink text-sm py-2 px-4"
              >
                <span className="typography-caption">{t('footer_google_play')}</span>
              </a>
            </div>
          </div>
          
          {/* Right Section - Social & Copyright */}
          <div className="space-y-6 sm:space-y-8 text-center md:text-left lg:text-right footer-section-hover">
            {/* Social Media */}
            <div>
              <h3 className="typography-caption text-brand-ink mb-6">
                {t('footer_discover')}
              </h3>
              
              <div className="flex gap-6 justify-center md:justify-start lg:justify-end">
                <a
                  href="https://www.instagram.com/ligaire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-ink hover:text-brand-stone transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://twitter.com/ligaire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-ink hover:text-brand-stone transition-colors duration-300"
                  aria-label="X (Twitter)"
                >
                  <XIcon size={20} />
                </a>
                <a
                  href="https://facebook.com/ligaire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-ink hover:text-brand-stone transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div>
              <p className="typography-caption text-brand-stone">
                {t('footer_copyright')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;