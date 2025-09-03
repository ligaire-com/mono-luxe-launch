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
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Hero Content - centered in viewport with better mobile spacing */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen text-center px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <h1 className="typography-caption text-luxury-spacing-wide mb-4 text-sm sm:text-base">
            {t('brand_name')}
          </h1>
        </motion.div>
        
        {/* Main Headline - Split for better luxury impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-6xl mx-auto mb-6 sm:mb-8"
        >
          <h2 className="font-neue-haas font-normal leading-[0.95] text-brand-ink text-center">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-4">
              {t('hero_title_1')}
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-4 tracking-wider">
              {t('hero_title_2')}
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-widest opacity-90">
              {t('hero_title_3')}
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-widest opacity-90">
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
          className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12"
        >
          <p className="font-inter font-light text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-ink-70 leading-relaxed text-center tracking-wide">
            <span className="italic font-normal">{t('hero_subtitle_ai')}</span> {t('hero_subtitle_text')}
            <br className="hidden sm:block" />
            <span className="block sm:inline"> </span>
            <span className="font-medium text-brand-ink">{t('hero_subtitle_brand')}</span>.
          </p>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <button className="btn-luxury text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
            {t('hero_cta')}
          </button>
        </motion.div>
        
        {/* Cities List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xs sm:text-sm text-brand-stone leading-relaxed">
            {t('hero_cities')}
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