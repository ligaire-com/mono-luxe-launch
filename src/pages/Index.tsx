import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { useFooterVisibility } from '@/hooks/useScrollPosition';

const Index = () => {
  const isFooterVisible = useFooterVisibility();

  return (
    <div className="bg-luxury-black text-luxury-white">
      {/* Only Hero Section */}
      <main>
        <HeroSection />
      </main>
      
      {/* Footer slides up on scroll */}
      {isFooterVisible && <Footer isVisible={true} />}
    </div>
  );
};

export default Index;
