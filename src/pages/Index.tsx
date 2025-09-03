import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { useFooterVisibility } from '@/hooks/useScrollPosition';

const Index = () => {
  const isFooterVisible = useFooterVisibility();

  console.log('Footer visible:', isFooterVisible); // Debug log

  return (
    <div className="bg-luxury-black text-luxury-white">
      {/* Main Content */}
      <main>
        <HeroSection />
        
        {/* Add extra content to ensure scrolling is possible */}
        <section className="h-screen bg-luxury-black opacity-50">
          <div className="flex items-center justify-center h-full">
            <p className="typography-caption text-luxury-white-30">Scroll content area</p>
          </div>
        </section>
      </main>
      
      {/* Footer - slides up on scroll */}
      <Footer isVisible={isFooterVisible} />
    </div>
  );
};

export default Index;
