import React from "react";
import { Compass, MapPin } from "lucide-react";
import { EXPLORE_PLACES } from "../config";

const ImageWithFallback = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

const Button = ({ children, onClick, className = "" }) => {
  const style =
    "inline-flex items-center space-x-2 bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-xl transform active:scale-95";
  return (
    <button onClick={onClick} className={`${style} ${className}`}>
      {children}
    </button>
  );
};

const AlwarExplorePage = ({ setActiveTab }) => {
  return (
    <div className="min-h-screen animate-in fade-in duration-500 bg-stone-50">
      <div className="relative h-[60vh]">
        <ImageWithFallback
          src={EXPLORE_PLACES[1].image}
          className="w-full h-full object-cover"
          alt="Alwar Fort"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <Compass className="w-16 h-16 text-amber-300 mx-auto mb-4" />
            <h2 className="text-5xl font-serif font-bold mb-4">
              Explore Alwar
            </h2>
            <p className="text-xl font-light tracking-wide">
              Discover the rich history and natural beauty surrounding Sagar
              Resort.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Alwar, the "Tiger Gate of Rajasthan," is a city steeped in history
              and adorned with architectural marvels. From majestic forts and
              serene lakes to abundant wildlife, there's a wealth of experiences
              awaiting you just a short drive from the resort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPLORE_PLACES.map((place) => (
              <div
                key={place.name}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-60 overflow-hidden">
                  <ImageWithFallback
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-400">
                    Approx. {place.distance} away
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                    {place.name}
                  </h3>
                  <p className="text-stone-600 text-sm mb-4 flex-1">
                    {place.description}
                  </p>
                  <div className="text-amber-700 text-sm font-semibold flex items-center">
                    <MapPin size={14} className="mr-2" /> Directions on Map
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-xl font-medium text-stone-800 mb-6">
              Our concierge will be happy to help you plan your excursions.
            </p>
            <Button onClick={() => setActiveTab("contact")}>
              <span>Contact Concierge</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlwarExplorePage;
