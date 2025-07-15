import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-resort.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="hero-text text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to Sagar Resort
        </h1>
        <p className="hero-text text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          A luxury mountain retreat where comfort meets adventure. Experience the perfect blend of elegance and natural beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" className="luxury-button text-lg px-8 py-4">
            Book Your Stay
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-background/10 border-luxury-cream/30 text-luxury-cream hover:bg-luxury-cream hover:text-luxury-dark backdrop-blur-sm text-lg px-8 py-4"
          >
            Explore More
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-luxury-cream opacity-70" />
      </div>
    </section>
  );
};

export default Hero;