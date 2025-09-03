import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { useFooterVisibility } from '@/hooks/useScrollPosition';

const Index = () => {
  const isFooterVisible = useFooterVisibility();

  return (
    <div className="bg-luxury-black text-luxury-white overflow-x-hidden">
      {/* Main Content */}
      <main>
        <HeroSection />
        
        {/* Minimal content section to enable scroll */}
        <section className="h-32 bg-luxury-black" />
      </main>
      
      {/* Footer - slides up on scroll */}
      <Footer isVisible={isFooterVisible} />
    </div>
  );
};

export default Index;
