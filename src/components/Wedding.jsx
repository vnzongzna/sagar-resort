import React, { useState, useEffect } from "react";
import { Heart, Sun, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "../config";

const ImageWithFallback = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyle =
    "px-6 py-3 rounded-md font-medium transition-all duration-300 transform active:scale-95";
  const variants = {
    primary:
      "bg-amber-700 hover:bg-amber-800 text-white shadow-lg hover:shadow-xl",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const WeddingCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[550px] overflow-hidden rounded-lg shadow-2xl group">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Wedding ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const WeddingPage = ({ setActiveTab }) => {
  const weddingImages = [
    IMAGES.wedding_couple,
    IMAGES.wedding_venue,
    IMAGES.wedding_decor,
    IMAGES.wedding_hero,
  ];

  return (
    <div className="min-h-screen animate-in fade-in duration-500">
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/Banner.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src={IMAGES.wedding_hero}
            className="w-full h-full object-cover"
            alt="Beautiful Wedding Setup"
          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
            Dream Weddings in Alwar
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Let the majestic Aravallis witness the beginning of your forever.
          </p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-amber-700 font-medium tracking-wider uppercase mb-2">
                Royal Venues
              </h3>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                A Fairytale Beginning
              </h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Celebrate your love story at Sagar Resort, where timeless
                traditions meet bespoke luxury. Our sprawling lawns and elegant
                banquet halls provide the perfect canvas for your dream wedding.
                We specialize in creating unforgettable experiences, from
                intimate ceremonies to grand receptions.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Sprawling lawns for outdoor ceremonies",
                  "Elegant pillar-less banquet hall",
                  "Dedicated wedding planning team",
                  "Luxurious accommodation for guests",
                  "Customizable catering and decor",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-700">
                    <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={() => setActiveTab("contact")} variant="primary">
                Start Planning
              </Button>
            </div>
            <WeddingCarousel images={weddingImages} />
          </div>
        </div>
      </div>

      <div className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">
              Our Wedding Services
            </h3>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <h4 className="text-xl font-semibold text-stone-900 mb-2">
                Venue Selection
              </h4>
              <p className="text-stone-500">
                Choose between our lush green lawns with mountain views or our
                opulent indoor hall.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <h4 className="text-xl font-semibold text-stone-900 mb-2">
                Gourmet Catering
              </h4>
              <p className="text-stone-500">
                Curated menus featuring local Rajasthani delicacies and
                international cuisines.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <h4 className="text-xl font-semibold text-stone-900 mb-2">
                Event Management
              </h4>
              <p className="text-stone-500">
                Our expert planners will manage every detail, ensuring a
                seamless celebration.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <ImageWithFallback
              src={IMAGES.wedding_venue}
              alt="Wedding Venue"
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square"
            />
            <ImageWithFallback
              src={IMAGES.wedding_decor}
              alt="Wedding Decor"
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square mt-8"
            />
          </div>
          <div className="text-center md:text-left">
            <Sun className="w-12 h-12 text-amber-600 mx-auto md:mx-0 mb-6" />
            <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">
              Plan a Residential Wedding
            </h3>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Host an immersive destination wedding by booking our entire
              resort. With over 60 rooms, we can comfortably accommodate your
              guests, turning your wedding into a mini-vacation for everyone.
            </p>
            <Button onClick={() => setActiveTab("contact")}>
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingPage;
