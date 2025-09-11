import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import luxuryLifestyleBg from '@/assets/luxury-lifestyle-bg.jpg';

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section 
      className="relative w-full overflow-hidden bg-brand-black h-[100dvh] sm:h-screen"
      style={{
        backgroundImage: `url(${luxuryLifestyleBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Hero Content - Positioned according to vertical ratios */}
      <div className="relative z-20 flex flex-col justify-between text-center px-6 pb-[15vh] min-h-[100dvh] sm:min-h-screen">
        {/* Brand Logo - ~10% from top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-[8vh] sm:pt-[10vh]"
        >
          <h1 className="ligaire-logo text-brand-ink uppercase text-center text-[32px] sm:text-[inherit]">
            LIGAIRE
          </h1>
        </motion.div>
        
        {/* Main Quote - ~40-50% from top (centered) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto mt-[18vh] sm:mt-[30vh]"
        >
          <h2 className="font-neue-haas text-brand-ink text-center font-light leading-[1.1] sm:leading-[1.2] tracking-[0] text-[28px] sm:text-[44pt]">
            <div className="whitespace-normal sm:whitespace-nowrap">STEP INTO AN EXCLUSIVE REALM</div>
            <div className="whitespace-normal sm:whitespace-nowrap mb-2 sm:mb-4">WHERE DISTINCTION KNOWS NO BOUNDS.</div>
          </h2>
          
          {/* Subheadline directly under second line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <p className="font-neue-haas text-brand-ink-90 font-extralight leading-[1.3] sm:leading-[36pt] tracking-[0] text-[18px] sm:text-[30pt] text-center whitespace-normal sm:whitespace-nowrap">
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
        
        {/* Launching Soon + Cities - ~70% from top */}
        <div className="space-y-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className=""
          >
            <div className="font-neue-haas text-brand-ink font-light leading-[1.2] sm:leading-[43.2pt] tracking-[0] text-[24px] sm:text-[36pt] uppercase text-center">
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
            <p className="font-neue-haas text-brand-ink font-normal leading-[1.4] sm:leading-[36pt] tracking-[0] text-[14px] sm:text-[18pt] text-center whitespace-normal sm:whitespace-nowrap">
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