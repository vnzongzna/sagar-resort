import { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-resort.jpg';
import luxuryRoom from '@/assets/luxury-room.jpg';
import poolArea from '@/assets/pool-area.jpg';
import weddingCeremony from '@/assets/wedding-ceremony.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [
    {
      src: heroImage,
      title: "Mountain Resort View",
      category: "Exterior"
    },
    {
      src: luxuryRoom,
      title: "Luxury Suite",
      category: "Accommodation"
    },
    {
      src: poolArea,
      title: "Swimming Pool",
      category: "Facilities"
    },
    {
      src: weddingCeremony,
      title: "Wedding Ceremony",
      category: "Events"
    },
    {
      src: heroImage,
      title: "Resort Entrance",
      category: "Exterior"
    },
    {
      src: luxuryRoom,
      title: "Deluxe Room",
      category: "Accommodation"
    }
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Explore our stunning resort through our curated collection of images showcasing 
            the beauty and luxury of Sagar Resort.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative mb-8">
          <Card className="luxury-card overflow-hidden">
            <div className="relative h-[500px] overflow-hidden">
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-overlay/50 to-transparent" />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm text-luxury-cream p-2 rounded-full hover:bg-background/40 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm text-luxury-cream p-2 rounded-full hover:bg-background/40 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/20 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-luxury-cream mb-1">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-luxury-cream/80 text-sm">
                    {galleryImages[selectedImage].category}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className={`luxury-card cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 ${
                selectedImage === index ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative h-24 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-luxury-overlay/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <ZoomIn className="h-5 w-5 text-luxury-cream" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="luxury-card text-center p-6">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Photos</div>
            </CardContent>
          </Card>
          <Card className="luxury-card text-center p-6">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Rooms</div>
            </CardContent>
          </Card>
          <Card className="luxury-card text-center p-6">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Facilities</div>
            </CardContent>
          </Card>
          <Card className="luxury-card text-center p-6">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Star Rating</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;