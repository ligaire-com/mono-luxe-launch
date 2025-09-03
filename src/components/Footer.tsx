import { motion } from 'framer-motion';
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
  const languages = [
    'English (US)', 
    'English (UK)', 
    'Italiano', 
    'Deutsch', 
    'Français (FR)', 
    'Español (ES)'
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-luxury-black border-t border-luxury-white-10"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Section - Links & Languages */}
          <div className="space-y-8">
            {/* Legal Links */}
            <div>
              <nav className="flex flex-wrap gap-6 mb-8">
                {['Terms', 'Privacy', 'Your Privacy Choices'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="typography-caption text-luxury-white hover:text-luxury-white-70 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Language Options */}
            <div>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang, index) => (
                  <button
                    key={lang}
                    className={`typography-caption transition-colors duration-300 ${
                      index === 0 
                        ? 'text-luxury-white' 
                        : 'text-luxury-white-50 hover:text-luxury-white-70'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Center Section - App Downloads */}
          <div className="text-center space-y-6">
            <h3 className="typography-caption text-luxury-white">
              Enter a world reserved for you:
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-luxury-minimal border border-luxury-white-30 hover:border-luxury-white">
                <span className="typography-caption">App Store</span>
              </button>
              <button className="btn-luxury-minimal border border-luxury-white-30 hover:border-luxury-white">
                <span className="typography-caption">Google Play</span>
              </button>
            </div>
          </div>
          
          {/* Right Section - Social & Copyright */}
          <div className="space-y-8 lg:text-right">
            {/* Social Media */}
            <div>
              <h3 className="typography-caption text-luxury-white mb-6">
                Discover:
              </h3>
              
              <div className="flex gap-6 lg:justify-end">
                <a
                  href="#"
                  className="text-luxury-white hover:text-luxury-white-70 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-luxury-white hover:text-luxury-white-70 transition-colors duration-300"
                  aria-label="X (Twitter)"
                >
                  <XIcon size={20} />
                </a>
                <a
                  href="#"
                  className="text-luxury-white hover:text-luxury-white-70 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div>
              <p className="typography-caption text-luxury-white-50">
                ©2025 Ligaire. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;