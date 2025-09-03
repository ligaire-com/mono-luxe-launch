import { motion } from 'framer-motion';
import luxuryLifestyleBg from '@/assets/luxury-lifestyle-bg.jpg';

const HeroSection = () => {
  return (
    <section 
      className="relative w-full overflow-hidden bg-luxury-black"
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
            LIGAIRE
          </h1>
        </motion.div>
        
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-center text-luxury-white">
            STEP INTO AN EXCLUSIVE REALM WHERE DISTINCTION KNOWS NO BOUNDS.
          </h2>
        </motion.div>
        
        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-base sm:text-lg md:text-xl text-luxury-white-70 leading-relaxed">
            AI-powered lifestyle and luxury services powered by Connected VIP.
          </p>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <button className="btn-luxury text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
            LAUNCHING SOON
          </button>
        </motion.div>
        
        {/* Cities List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xs sm:text-sm text-luxury-white-50 leading-relaxed">
            [ Monaco - London - Dubai - El Gouna - North Coast - Cairo ]
          </p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-16 bg-luxury-white-30 relative">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-luxury-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;