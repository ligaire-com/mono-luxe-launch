import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { useFooterVisibility } from '@/hooks/useScrollPosition';

const Index = () => {
  const isFooterVisible = useFooterVisibility(50);

  return (
    <div className="min-h-screen bg-luxury-black text-luxury-white overflow-x-hidden">
      {/* Main Content */}
      <main>
        <HeroSection />
        
        {/* Add spacing so footer can slide up smoothly */}
        <div className="h-screen bg-luxury-black" />
      </main>
      
      {/* Footer - slides up on scroll */}
      <Footer isVisible={isFooterVisible} />
    </div>
  );
};

export default Index;
