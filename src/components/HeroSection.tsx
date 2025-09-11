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
          <h1 className="text-lg sm:text-xl md:text-2xl text-brand-ink tracking-[0.4em] font-normal uppercase">
            {t('brand_name')}
          </h1>
        </motion.div>
        
        {/* Main Headline - Split for better luxury impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl sm:max-w-4xl mx-auto mb-8 sm:mb-12"
        >
          <h2 className="font-neue-haas font-normal leading-[1.1] text-brand-ink text-center">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-1">
              {t('hero_title_1')}
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {t('hero_title_2')}
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
          className="max-w-lg sm:max-w-xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-base sm:text-lg text-brand-ink-90 leading-tight text-center">
            {t('hero_subtitle_ai')} {t('hero_subtitle_text')} {t('hero_subtitle_brand')}.
          </p>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <div className="text-base sm:text-lg text-brand-ink font-normal tracking-wide uppercase">
            {t('hero_cta')}
          </div>
        </motion.div>
        
        {/* Cities List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="max-w-lg sm:max-w-xl mx-auto"
        >
          <p className="text-base sm:text-lg text-brand-ink leading-relaxed font-normal">
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