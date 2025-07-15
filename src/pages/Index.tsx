
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import WeddingSection from '@/components/WeddingSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MapSection from '@/components/MapSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <FacilitiesSection />
      <WeddingSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
