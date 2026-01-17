import React, { useState } from "react";
import { X } from "lucide-react";
import { GALLERY_IMAGES } from "../config";

const CATEGORIES = ["All", "Resort", "Rooms", "Dining", "Events"];

const ImageWithFallback = ({ src, alt, className, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onClick={onClick}
    />
  );
};

const Lightbox = ({ image, onClose }) => {
  if (!image) return null;
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 text-white hover:text-amber-300"
      >
        <X size={32} />
      </button>
      <div className="relative z-10 w-full max-w-5xl max-h-[90vh]">
        <img
          src={image.src.replace("w=800", "w=1600")}
          alt={image.title}
          className="w-full h-full object-contain rounded-lg"
        />
        <p className="text-center text-white mt-4 text-lg">{image.title}</p>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) =>
          activeCategory === "Resort"
            ? ["resort", "pool", "exterior_night", "garden"].includes(
                img.id.split("_")[0],
              )
            : activeCategory === "Rooms"
              ? img.id.startsWith("room")
              : activeCategory === "Dining"
                ? ["dining", "food"].includes(img.id)
                : activeCategory === "Events"
                  ? ["wedding", "event"].includes(img.id)
                  : false,
        );

  return (
    <div className="min-h-screen animate-in fade-in duration-500 py-12 bg-stone-50">
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            A glimpse into the Sagar Resort experience.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-medium rounded-full transition-all duration-300 transform active:scale-95 ${
                activeCategory === cat
                  ? "bg-amber-700 text-white shadow-md"
                  : "bg-white text-stone-700 hover:bg-stone-100 shadow-sm border border-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer animate-in fade-in zoom-in-95 duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out w-full bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white font-semibold text-sm md:text-base">
                  {image.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
