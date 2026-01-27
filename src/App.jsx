import React, { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Star,
  Coffee,
  Wifi,
  Wind,
  Tv,
  ChefHat,
  Droplets,
  CheckCircle,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  ChevronLeft,
  Eye,
  Maximize2,
} from "lucide-react";
import DOMPurify from "dompurify";

import BanquetPage from "./components/Banquet";
import WeddingPage from "./components/Wedding";
import GalleryPage from "./components/Gallery";
import AlwarExplorePage from "./components/AlwarExplore";
import { IMAGES, ROOMS } from "./config";
import { supabase } from "./supabaseClient";

const ImageWithFallback = ({ src, alt, className, onClick }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-stone-200 flex items-center justify-center text-stone-400 ${className}`}
        onClick={onClick}
      >
        <span className="text-sm">Image Unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
      onClick={onClick}
    />
  );
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "px-6 py-3 rounded-md font-medium transition-all duration-300 transform active:scale-95";
  const variants = {
    primary:
      "bg-amber-700 hover:bg-amber-800 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-stone-800 hover:bg-stone-900 text-white shadow-md",
    outline: "border-2 border-amber-700 text-amber-700 hover:bg-amber-50",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const RoomModal = ({ room, onClose, onBook }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!room) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row z-10 animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full md:hidden"
        >
          <X size={20} />
        </button>

        <div className="w-full md:w-1/2 bg-stone-100 flex flex-col h-[40vh] md:h-auto">
          <div className="flex-1 overflow-hidden relative group">
            <ImageWithFallback
              src={room.gallery[selectedImageIndex]}
              className="w-full h-full object-cover"
              alt={room.name}
            />
            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
              {selectedImageIndex + 1} / {room.gallery.length}
            </div>
            {selectedImageIndex > 0 && (
              <button
                onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            {selectedImageIndex < room.gallery.length - 1 && (
              <button
                onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          <div className="h-24 bg-stone-900 p-2 flex space-x-2 overflow-x-auto scrollbar-hide">
            {room.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImageIndex(i)}
                className={`h-full w-32 object-cover rounded-md cursor-pointer transition-all border-2 ${
                  selectedImageIndex === i
                    ? 'opacity-100 border-amber-500'
                    : 'opacity-70 hover:opacity-100 border-stone-700'
                }`}
                alt={`${room.name} view ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-white flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h5 className="text-amber-700 font-medium tracking-wider text-sm uppercase mb-1">
                Accommodation
              </h5>
              <h2 className="text-3xl font-serif font-bold text-stone-900">
                {room.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="hidden md:block text-stone-400 hover:text-stone-900"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex items-center space-x-6 text-sm text-stone-500 mb-8 border-b border-stone-100 pb-6">
            <div className="flex items-center">
              <Users size={18} className="mr-2 text-amber-600" />
              {room.capacity}
            </div>
            <div className="flex items-center">
              <Maximize2 size={18} className="mr-2 text-amber-600" />
              {room.size}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-stone-900 mb-3">Overview</h4>
            <p className="text-stone-600 leading-relaxed">{room.description}</p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold text-stone-900 mb-3">
              Room Highlights
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {room.amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-stone-600 text-sm"
                >
                  <CheckCircle
                    size={14}
                    className="text-green-600 mr-2 flex-shrink-0"
                  />
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
            <div>
              <span className="block text-sm text-stone-400">
                Price per night
              </span>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-amber-700">
                  ₹{room.price}
                </span>
                <span className="text-stone-500 ml-1 text-sm">+ taxes</span>
              </div>
            </div>
            <Button onClick={() => onBook(room.id)}>Book This Room</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingData, setBookingData] = useState({
    check_in: "",
    check_out: "",
    number_of_rooms: "1",
    room_type: "deluxe",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [bookingStatus, setBookingStatus] = useState("idle");

  // --- Handlers ---
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setBookingStatus("submitting");

    try {
      const sanitizedNotes = DOMPurify.sanitize(bookingData.notes);
      const { data, error } = await supabase
        .from("bookings")
        .insert([{ ...bookingData, notes: sanitizedNotes }])
        .select();

      if (error) {
        throw error;
      }

      const { data: emailData, error: emailError } =
        await supabase.functions.invoke("send-booking-email", {
          body: { booking: data[0] },
        });

      if (emailError) {
        throw emailError;
      }

      setBookingStatus("success");
      setTimeout(() => {
        setBookingStatus("idle");
        setBookingData((prev) => ({
          ...prev,
          check_in: "",
          check_out: "",
          number_of_rooms: "1",
          room_type: "deluxe",
          name: "",
          email: "",
          phone: "",
          notes: "",
        }));
      }, 5000);
    } catch (err) {
      console.error("Booking failed:", err);
      setBookingStatus("error");
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "rooms", label: "Rooms" },
    { id: "banquet", label: "Banquets" },
    { id: "wedding", label: "Weddings" },
    { id: "gallery", label: "Gallery" },
    { id: "alwar", label: "Explore Alwar" },
    { id: "contact", label: "Contact" },
    { id: "book", label: "Book Now", isCta: true },
  ];

  const renderHeader = () => (
    <nav className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md text-white border-b border-stone-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer space-x-2"
            onClick={() => setActiveTab("home")}
          >
            <img
              src="/logo/sagar_symbol.png"
              alt="Sagar Resort Logo"
              className="h-16 w-auto object-contain"
            />
            <div>
              <h1 className="text-xl font-serif tracking-widest uppercase">
                Sagar Resort
              </h1>
              <p className="text-xs text-amber-500 tracking-wider">
                ALWAR • RAJASTHAN
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  item.isCta
                    ? "bg-amber-700 hover:bg-amber-600 px-5 py-2 rounded text-white shadow-lg"
                    : activeTab === item.id
                      ? "text-amber-500"
                      : "text-stone-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-300 hover:text-white"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-stone-900 border-t border-stone-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  item.isCta
                    ? "bg-amber-700 text-white"
                    : activeTab === item.id
                      ? "text-amber-500 bg-stone-800"
                      : "text-stone-300 hover:text-white hover:bg-stone-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const renderHome = () => (
    <div className="animate-in fade-in duration-700">
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={IMAGES.hero}
            className="w-full h-full object-cover"
            alt="Sagar Resort View"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 border border-amber-500/50 rounded-full bg-black/30 backdrop-blur-sm">
            <span className="text-amber-400 text-sm tracking-widest uppercase font-medium">
              Welcome to Paradise
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            A Royal Escape in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              The Heart of Alwar
            </span>
          </h2>
          <p className="text-lg md:text-xl text-stone-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Nestled in the Aravali foothills, Sagar Resort offers a perfect
            blend of Rajasthani heritage and modern luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setActiveTab("book")}
              variant="primary"
              className="text-lg px-8"
            >
              Book Your Stay
            </Button>
            <Button
              onClick={() => setActiveTab("rooms")}
              variant="secondary"
              className="text-lg px-8 bg-white/10 backdrop-blur-md hover:bg-white/20"
            >
              Explore Rooms
            </Button>
          </div>
        </div>
      </div>
      <div className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4">
              Why Choose Sagar Resort?
            </h3>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: "Prime Location",
                desc: "Near Sariska Tiger Reserve",
              },
              {
                icon: Droplets,
                title: "Swimming Pool",
                desc: "Outdoor pool with mountain view",
              },
              {
                icon: ChefHat,
                title: "The Clove",
                desc: "Multi-cuisine fine dining",
              },
              {
                icon: Wifi,
                title: "Free WiFi",
                desc: "High-speed connectivity",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-100 transition-colors">
                  <feature.icon className="text-amber-700 w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold text-stone-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-stone-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-tl-3xl -z-10" />
              <ImageWithFallback
                src={IMAGES.exterior}
                alt="Resort Grounds"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 bg-stone-900 p-6 rounded-lg shadow-xl text-white hidden md:block">
                <p className="text-4xl font-serif font-bold text-amber-500 mb-1">
                  20+
                </p>
                <p className="text-sm tracking-wider uppercase">
                  Years of Hospitality
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-amber-700 font-medium tracking-wider uppercase mb-2">
                About Us
              </h3>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
                Experience the Royal Heritage
              </h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Sagar Resort is more than just a stay; it's an immersion into
                the culture and lifestyle of Rajasthan. Located at the "Singh
                Dwar" of Rajasthan, Alwar, we provide a sanctuary where you can
                feel at home while enjoying world-class luxury.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Lush green gardens perfect for weddings",
                  "View of the Aravali mountains",
                  "60+ tastefully furnished rooms",
                  "24/7 Room Service & Concierge",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-700">
                    <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={() => setActiveTab("rooms")} variant="outline">
                View Accommodation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRooms = () => (
    <div className="py-12 bg-stone-50 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
            Accommodations
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Choose from our range of luxurious rooms, each designed to provide
            maximum comfort and a touch of Rajasthani royalty.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group relative"
            >
              <div
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => setSelectedRoom(room)}
              >
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur text-stone-900 px-4 py-2 rounded-full flex items-center font-medium shadow-lg">
                    <Eye size={18} className="mr-2" /> Quick View
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-400">
                  {room.size}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className="text-2xl font-serif font-bold text-stone-900 hover:text-amber-700 cursor-pointer"
                    onClick={() => setSelectedRoom(room)}
                  >
                    {room.name}
                  </h3>
                </div>
                <p className="text-stone-600 text-sm mb-6 line-clamp-2">
                  {room.description}
                </p>
                <div className="space-y-3 mb-8 flex-1">
                  {room.amenities.slice(0, 3).map((amenity, i) => (
                    <div
                      key={i}
                      className="flex items-center text-stone-500 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                      {amenity}
                    </div>
                  ))}
                  <div
                    className="text-amber-700 text-xs font-semibold cursor-pointer"
                    onClick={() => setSelectedRoom(room)}
                  >
                    + View all amenities
                  </div>
                </div>
                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 uppercase tracking-wide block">
                      Starting form
                    </span>
                    <span className="text-2xl font-bold text-amber-700">
                      ₹{room.price}
                    </span>
                  </div>
                  <Button
                    onClick={() => {
                      setBookingData((prev) => ({
                        ...prev,
                        room_type: room.id,
                      }));
                      setActiveTab("book");
                      window.scrollTo(0, 0);
                    }}
                    className="text-sm px-4 py-2"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDining = () => (
    <div className="min-h-screen animate-in fade-in duration-500">
      <div className="relative h-[60vh]">
        <ImageWithFallback
          src={IMAGES.dining}
          className="w-full h-full object-cover"
          alt="Dining at Sagar Resort"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h2 className="text-5xl font-serif font-bold mb-4">The Clove</h2>
            <p className="text-xl font-light tracking-wide">
              Multi-Cuisine Fine Dining
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <ChefHat className="w-12 h-12 text-amber-600 mx-auto mb-6" />
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            "The Clove" offers a spacious and inviting atmosphere. Savor
            delectable meals highlighting regional Rajasthani cuisine like{" "}
            <span className="italic text-amber-700 font-serif">
              Dal Baati Churma
            </span>{" "}
            and{" "}
            <span className="italic text-amber-700 font-serif">Laal Maas</span>,
            as well as global favorites.
          </p>
          <div className="flex justify-center">
            <a
              href="/assets/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-stone-800 hover:bg-stone-900 text-white px-8 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-xl"
              onClick={(e) => {
                if (
                  e.currentTarget.getAttribute("href") === "/assets/menu.pdf"
                ) {
                  e.preventDefault();
                  alert("This will open your PDF menu file.");
                }
              }}
            >
              <Menu className="w-5 h-5" />
              <span>View Full Menu</span>
            </a>
          </div>
          <p className="text-sm text-stone-400 mt-4 italic">
            * Menu items and specialties subject to seasonal availability.
          </p>
        </div>
        <div className="text-center border-t border-stone-200 pt-12 mt-12">
          <p className="text-sm text-stone-500 uppercase tracking-widest mb-2">
            Timings
          </p>
          <p className="text-stone-900 font-medium">
            7:00 AM - 10:30 PM (Daily)
          </p>
        </div>
      </div>
    </div>
  );

  const renderBooking = () => {
    const today = new Date().toISOString().split("T")[0];
    const checkInDate = bookingData.check_in
      ? new Date(bookingData.check_in)
      : null;
    if (checkInDate) {
      checkInDate.setDate(checkInDate.getDate() + 1);
    }
    const minCheckOutDate = checkInDate
      ? checkInDate.toISOString().split("T")[0]
      : "";

    return (
      <div className="min-h-screen bg-stone-100 py-12 px-4 animate-in zoom-in-95 duration-500">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-stone-900 p-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-2">
              Book Your Stay
            </h2>
            <p className="text-stone-400">
              Best rates guaranteed when booking direct.
            </p>
          </div>
          {bookingStatus === "success" ? (
            <div className="p-16 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">
                Request Sent!
              </h3>
              <p className="text-stone-600 mb-8">
                Thank you {bookingData.name}. We have received your booking
                request for the{" "}
                {ROOMS.find((r) => r.id === bookingData.room_type)?.name}. Our
                reservation team will contact you shortly to confirm details.
              </p>
              <Button onClick={() => setActiveTab("home")} variant="outline">
                Back to Home
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleBookingSubmit}
              className="p-8 md:p-12 space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    Room Type
                  </label>
                  <select
                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                    value={bookingData.room_type}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        room_type: e.target.value,
                      })
                    }
                  >
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} (₹{r.price}/night)
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    Number of Rooms
                  </label>
                  <select
                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                    value={bookingData.number_of_rooms}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        number_of_rooms: e.target.value,
                      })
                    }
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    Check In
                  </label>
                  <input
                    type="date"
                    required
                    min={today}
                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    value={bookingData.check_in}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        check_in: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    Check Out
                  </label>
                  <input
                    type="date"
                    required
                    min={minCheckOutDate}
                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    value={bookingData.check_out}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        check_out: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="space-y-6 pt-6 border-t border-stone-200">
                <h3 className="text-lg font-semibold text-stone-900">
                  Guest Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      value={bookingData.name}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      value={bookingData.phone}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    value={bookingData.email}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-700">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    value={bookingData.notes}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, notes: e.target.value })
                    }
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full text-lg py-4"
                disabled={bookingStatus === "submitting"}
              >
                {bookingStatus === "submitting"
                  ? "Processing..."
                  : "Confirm Request"}
              </Button>
              {bookingStatus === "error" && (
                <p className="text-red-500 text-center text-sm">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    );
  };

  const renderContact = () => (
    <div className="min-h-screen bg-stone-50 py-12 px-4 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">
            Contact Us
          </h2>
          <p className="text-stone-600">
            We are here to help you plan your perfect getaway.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg h-fit">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8">
              Get in Touch
            </h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-stone-900">
                    Address
                  </h4>
                  <a
                    href="https://maps.app.goo.gl/sYPwhTLPRKh8D7Zb8"
                    className="text-stone-600 mt-1"
                  >
                    Dhai Pedi, Ahinsa Circle Old Jaipur Road, Alwar Rajasthan
                    (India)
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-amber-700" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-stone-900">
                    Phone
                  </h4>
                  <a href="tel:+919119115185" className="text-stone-600 mt-1">
                    +91 9119115185
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-amber-700" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-stone-900">
                    Email
                  </h4>
                  <a
                    href="mailto:thesagarresort@gmail.com"
                    className="text-stone-600 mt-1"
                  >
                    thesagarresort@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-stone-100">
              <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/sagarresortalwar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 hover:bg-amber-600 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/people/Sagar-Resort-Alwar/100079692443377/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 hover:bg-amber-600 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-stone-200 rounded-xl overflow-hidden shadow-lg h-[500px] relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.533856501332!2d76.58159617518793!3d27.514868933955103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39729baf8d82fa2b%3A0x5b123418a4d64a70!2sSagar%20Resorts!5e0!3m2!1sen!2sin!4v1723109867713!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-amber-200 selection:text-amber-900">
      {renderHeader()}
      <main>
        {activeTab === "home" && renderHome()}
        {activeTab === "rooms" && renderRooms()}
        {activeTab === "dining" && renderDining()}
        {activeTab === "banquet" && <BanquetPage setActiveTab={setActiveTab} />}
        {activeTab === "wedding" && <WeddingPage setActiveTab={setActiveTab} />}
        {activeTab === "gallery" && <GalleryPage />}
        {activeTab === "alwar" && (
          <AlwarExplorePage setActiveTab={setActiveTab} />
        )}
        {activeTab === "contact" && renderContact()}
        {activeTab === "book" && renderBooking()}
      </main>
      <footer className="bg-stone-900 text-stone-400 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-white font-serif font-bold text-lg mb-4">
              Sagar Resort
            </h5>
            <p className="text-sm leading-relaxed mb-4">
              A luxury retreat in Alwar offering the perfect blend of Rajasthani
              tradition and modern comfort.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setActiveTab("home")}
                  className="hover:text-amber-500"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("rooms")}
                  className="hover:text-amber-500"
                >
                  Rooms
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("banquet")}
                  className="hover:text-amber-500"
                >
                  Banquets
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("wedding")}
                  className="hover:text-amber-500"
                >
                  Weddings
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("gallery")}
                  className="hover:text-amber-500"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("alwar")}
                  className="hover:text-amber-500"
                >
                  Explore Alwar
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("contact")}
                  className="hover:text-amber-500"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Facilities</h5>
            <ul className="space-y-2 text-sm">
              <li>Swimming Pool</li>
              <li>Banquet Hall</li>
              <li>The Clove Restaurant</li>
              <li>Kids Play Area</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Newsletter</h5>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-stone-800 border-none rounded-l-md px-4 py-2 w-full focus:ring-1 focus:ring-amber-500"
              />
              <button className="bg-amber-700 text-white px-4 py-2 rounded-r-md hover:bg-amber-600">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-stone-800 text-center text-sm">
          &copy; {new Date().getFullYear()} Sagar Resort Alwar. All rights
          reserved.
        </div>
      </footer>
      <RoomModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onBook={(roomId) => {
          setSelectedRoom(null);
          setBookingData((prev) => ({ ...prev, room_type: roomId }));
          setActiveTab("book");
          window.scrollTo(0, 0);
        }}
      />
    </div>
  );
}
