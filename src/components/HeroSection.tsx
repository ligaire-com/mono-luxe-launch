import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import luxuryLifestyleBg from '@/assets/luxury-lifestyle-bg.jpg';

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section 
      className="relative w-full overflow-hidden bg-brand-black"
      style={{
        height: 'calc(100vh + 200px)', // Slightly taller than viewport to enable scroll
        backgroundImage: `url(${luxuryLifestyleBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Hero Content - Mobile optimized to match reference */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6 py-20">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 sm:mb-20"
        >
          <h1 className="typography-caption text-luxury-spacing-wide text-sm sm:text-base tracking-[0.3em]">
            {t('brand_name')}
          </h1>
        </motion.div>
        
        {/* Main Headline - Split for better luxury impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-sm sm:max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="font-neue-haas font-normal leading-[0.9] text-brand-ink text-center">
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1">
              {t('hero_title_1')}
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1">
              {t('hero_title_2')}
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1">
              {t('hero_title_3')}
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {t('hero_title_4')}
            </span>
          </h2>
        </motion.div>
        
        {/* Elegant Separator */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "4rem" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="h-px bg-brand-ink-30 mx-auto mb-6 sm:mb-8"
        />
        
        {/* Subheadline - Enhanced luxury styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="max-w-xs sm:max-w-lg mx-auto mb-12 sm:mb-16"
        >
          <p className="text-sm sm:text-base text-brand-ink-90 leading-relaxed text-center">
            {t('hero_subtitle_ai')} {t('hero_subtitle_text')} {t('hero_subtitle_brand')}.
          </p>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mb-8 sm:mb-12"
        >
          <div className="text-sm sm:text-base text-brand-ink font-normal tracking-wide">
            {t('hero_cta')}
          </div>
        </motion.div>
        
        {/* Cities List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="max-w-xs sm:max-w-lg mx-auto"
        >
          <p className="text-sm sm:text-base text-brand-ink leading-relaxed font-normal">
            [ {t('hero_cities')} ]
          </p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-16 bg-brand-ink-30 relative">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-brand-ink to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;