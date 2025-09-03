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
        
        {/* Content section to enable footer scroll trigger */}
        <section className="h-96 bg-luxury-black" />
      </main>
      
      {/* Footer - slides up on scroll */}
      <Footer isVisible={isFooterVisible} />
    </div>
  );
};

export default Index;
