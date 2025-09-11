import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import luxuryLifestyleBg from '@/assets/luxury-lifestyle-bg.jpg';

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section 
      className="relative w-full overflow-hidden bg-brand-black"
      style={{
        height: '100vh', // Exactly one screen height
        backgroundImage: `url(${luxuryLifestyleBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Hero Content - Positioned according to vertical ratios */}
      <div className="relative z-20 flex flex-col justify-between h-screen text-center px-4 sm:px-6">
        {/* Brand Logo - ~10% from top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-[8vh] sm:pt-[10vh] flex-shrink-0"
        >
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-ink tracking-[0.3em] sm:tracking-[0.4em] font-normal uppercase">
            {t('brand_name')}
          </h1>
        </motion.div>
        
        {/* Main Quote - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center max-w-6xl mx-auto px-2"
        >
          <h2 className="font-neue-haas text-brand-ink text-center font-light leading-[1.1] sm:leading-[1.2]" 
              style={{ 
                fontSize: 'clamp(20px, 5.5vw, 48px)', 
                letterSpacing: 'clamp(0.01em, 0.02em, 0.02em)',
                marginBottom: 'clamp(16px, 4vw, 32px)'
              }}>
            <div className="sm:whitespace-nowrap">STEP INTO AN EXCLUSIVE REALM</div>
            <div className="sm:whitespace-nowrap">WHERE DISTINCTION KNOWS NO BOUNDS.</div>
          </h2>
          
          {/* Subheadline directly under second line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-center mt-4 sm:mt-6"
          >
            <p className="text-sm sm:text-base md:text-lg text-brand-ink-90 leading-tight sm:whitespace-nowrap px-2">
              {t('hero_subtitle_ai')} {t('hero_subtitle_text')} {t('hero_subtitle_brand')}.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Elegant Separator */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "4rem" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="h-px bg-brand-ink-30 mx-auto mb-6"
        />
        
        {/* Launching Soon + Cities - Bottom section */}
        <div className="pb-[12vh] sm:pb-[10vh] flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mb-3 sm:mb-4"
          >
            <div className="text-sm sm:text-base md:text-lg text-brand-ink font-normal tracking-wide uppercase">
              {t('hero_cta')}
            </div>
          </motion.div>
          
          {/* Cities List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="max-w-sm sm:max-w-lg md:max-w-xl mx-auto px-2"
          >
            <p className="text-sm sm:text-base md:text-lg text-brand-ink leading-relaxed font-normal">
              [ {t('hero_cities')} ]
            </p>
          </motion.div>
        </div>
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