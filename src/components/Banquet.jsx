import React from "react";
import { ChefHat, Users, Maximize2, CheckCircle } from "lucide-react";
import { IMAGES } from "../config";

const ImageWithFallback = ({ src, alt, className }) => {
  // For simplicity, assuming images always load. In a real app, reuse the App.jsx component.
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyle =
    "px-6 py-3 rounded-md font-medium transition-all duration-300 transform active:scale-95";
  const variants = {
    primary:
      "bg-amber-700 hover:bg-amber-800 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-amber-700 text-amber-700 hover:bg-amber-50",
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

const BanquetPage = ({ setActiveTab }) => {
  return (
    <div className="min-h-screen animate-in fade-in duration-500">
      <div className="relative h-[60vh]">
        <ImageWithFallback
          src={IMAGES.banquet_hero}
          className="w-full h-full object-cover"
          alt="Grand Banquet Hall"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h2 className="text-5xl font-serif font-bold mb-4">
              Banquets & Events
            </h2>
            <p className="text-xl font-light tracking-wide">
              Host memorable events in our elegant spaces.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-amber-700 font-medium tracking-wider uppercase mb-2">
                Flexible Venues
              </h3>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                Perfect for Every Occasion
              </h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Whether you are planning a corporate conference, a social
                gathering, or a grand celebration, Sagar Resort offers versatile
                banquet facilities. Our dedicated team ensures every detail is
                flawlessly executed, from decor to catering.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Corporate Meetings & Seminars",
                  "Social Functions & Parties",
                  "Engagement Ceremonies",
                  "Birthday & Anniversary Celebrations",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-700">
                    <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={() => setActiveTab("contact")} variant="primary">
                Enquire Now
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <ImageWithFallback
                src={IMAGES.banquet_hall_1}
                alt="Elegant Banquet Setup"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">
              Our Venues
            </h3>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <ImageWithFallback
                src={IMAGES.banquet_setup}
                alt="Regal Hall"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                  Regal Hall
                </h4>
                <p className="text-stone-600 mb-6">
                  A grand, pillar-less hall perfect for large gatherings and
                  conferences. Its classic decor provides a sophisticated
                  backdrop for any event.
                </p>
                <div className="flex items-center space-x-6 text-sm text-stone-500 mb-6">
                  <div className="flex items-center">
                    <Users size={18} className="mr-2 text-amber-600" /> Up to
                    500 Guests
                  </div>
                  <div className="flex items-center">
                    <Maximize2 size={18} className="mr-2 text-amber-600" /> 4500
                    sq.ft
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <ImageWithFallback
                src={IMAGES.banquet_hall_1}
                alt="The Courtyard"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                  The Courtyard
                </h4>
                <p className="text-stone-600 mb-6">
                  An open-air venue surrounded by lush greenery, ideal for
                  evening functions, receptions, and social get-togethers under
                  the stars.
                </p>
                <div className="flex items-center space-x-6 text-sm text-stone-500 mb-6">
                  <div className="flex items-center">
                    <Users size={18} className="mr-2 text-amber-600" /> Up to
                    200 Guests
                  </div>
                  <div className="flex items-center">
                    <Maximize2 size={18} className="mr-2 text-amber-600" /> 3000
                    sq.ft
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ChefHat className="w-12 h-12 text-amber-600 mx-auto mb-6" />
          <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">
            Customized Catering
          </h3>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            Our culinary team excels in creating bespoke menus to suit your
            event's theme and your guests' palates. From traditional Rajasthani
            feasts to international cuisines, we cater to all your needs.
          </p>
          <Button onClick={() => setActiveTab("contact")} variant="outline">
            Plan Your Menu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BanquetPage;
