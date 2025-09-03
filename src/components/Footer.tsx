import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
    { code: 'en-US', label: t('footer.languages.english-us') }, 
    { code: 'it', label: t('footer.languages.italian') }
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-luxury-black border-t border-luxury-white-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          
          {/* Left Section - Links & Languages */}
          <div className="space-y-8">
            {/* Legal Links */}
            <div>
              <nav className="flex flex-wrap gap-6 mb-8">
                {[
                  { key: 'terms', label: t('footer.legal.terms') },
                  { key: 'privacy', label: t('footer.legal.privacy') },
                  { key: 'privacyChoices', label: t('footer.legal.privacyChoices') }
                ].map((link) => (
                  <a
                    key={link.key}
                    href="#"
                    className="typography-caption text-luxury-white hover:text-luxury-white-70 transition-colors duration-300"
                  >
                    {link.label}
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
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`typography-caption transition-colors duration-300 ${
                      i18n.language === lang.code 
                        ? 'text-luxury-white' 
                        : 'text-luxury-white-50 hover:text-luxury-white-70'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Center Section - App Downloads */}
          <div className="text-center space-y-6">
            <h3 className="typography-caption text-luxury-white">
              {t('footer.appDownload.title')}
            </h3>
            
            <div className="flex flex-col gap-3 justify-center">
              <a 
                href="https://apps.apple.com/us/app/ligaire/id6746082197?uo=2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-minimal border border-luxury-white-30 hover:border-luxury-white text-sm py-2 px-4"
              >
                <span className="typography-caption">{t('footer.appDownload.appStore')}</span>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.ligaire.app&hl=ar&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-minimal border border-luxury-white-30 hover:border-luxury-white text-sm py-2 px-4"
              >
                <span className="typography-caption">{t('footer.appDownload.googlePlay')}</span>
              </a>
            </div>
          </div>
          
          {/* Right Section - Social & Copyright */}
          <div className="space-y-6 sm:space-y-8 text-center md:text-left lg:text-right">
            {/* Social Media */}
            <div>
              <h3 className="typography-caption text-luxury-white mb-6">
                {t('footer.social.title')}
              </h3>
              
              <div className="flex gap-6 justify-center md:justify-start lg:justify-end">
                <a
                  href="https://www.instagram.com/ligaire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxury-white hover:text-luxury-white-70 transition-colors duration-300"
                  aria-label={t('footer.social.instagram')}
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://x.com/ligaire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxury-white hover:text-luxury-white-70 transition-colors duration-300"
                  aria-label={t('footer.social.twitter')}
                >
                  <XIcon size={20} />
                </a>
                <a
                  href="https://www.facebook.com/ligaire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxury-white hover:text-luxury-white-70 transition-colors duration-300"
                  aria-label={t('footer.social.facebook')}
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div>
              <p className="typography-caption text-luxury-white-50">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;