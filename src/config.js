// --- ASSETS / DATA ---

// Please replace the placeholder image paths with the actual paths to your images
// after uploading them to Vercel Blob.
//
// To upload your images, you can use the Vercel CLI:
// 1. Navigate to your project's root directory in your terminal.
// 2. Run the following command for each image:
//    vercel blob put <image-name>.jpg --file <path-to-your-image>.jpg --token <your-vercel-token>
// 3. Replace the placeholder paths below with the URLs returned by the Vercel CLI.

export const IMAGES = {
  hero: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/hero-Dk5z4v2pU3bY3F2y2g0T2yY2c2x1w1.jpg",
  exterior:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/exterior-j1B1c2v1W1y1C2z1X1C1B1A1z1.jpg",
  pool: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/pool-x1v1y1B1C1A1z1X1y1C1B1A1.jpg",
  dining:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/dining-A1z1X1y1C1B1A1z1X1y1C1.jpg",
  deluxe_main:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/deluxe_main-C1B1A1z1X1y1C1B1A1z1X.jpg",
  executive_main:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/executive_main-y1C1B1A1z1X1y1C1B1A1.jpg",
  suite_main:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/suite_main-z1X1y1C1B1A1z1X1y1C1.jpg",
  twin_main:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/twin_main-X1y1C1B1A1z1X1y1C1B1.jpg",
  family_main:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/family_main-y1C1B1A1z1X1y1C1B1A.jpg",
  bath: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/bath-C1B1A1z1X1y1C1B1A1z.jpg",
  view: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/view-B1A1z1X1y1C1B1A1z1X.jpg",
  balcony:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/balcony-A1z1X1y1C1B1A1z1X1.jpg",
  seating:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/seating-z1X1y1C1B1A1z1X1y.jpg",
  banquet_hero:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/banquet_hero-X1y1C1B1A1z1X1y1.jpg",
  banquet_hall_1:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/banquet_hall_1-y1C1B1A1z1X1y1C.jpg",
  banquet_setup:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/banquet_setup-C1B1A1z1X1y1C1B.jpg",
  wedding_hero:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/wedding_hero-B1A1z1X1y1C1B1A.jpg",
  wedding_venue:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/wedding_venue-A1z1X1y1C1B1A1.jpg",
  wedding_decor:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/wedding_decor-z1X1y1C1B1A1z.jpg",
  wedding_couple:
    "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/wedding_couple-X1y1C1B1A1z1.jpg",
};

export const ROOMS = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 4500,
    size: "250 sq.ft",
    capacity: "2 Adults + 1 Child",
    image: IMAGES.deluxe_main,
    gallery: [IMAGES.deluxe_main, IMAGES.bath, IMAGES.seating],
    description:
      "Fully air-conditioned lavish bedroom designed to counter any luxury property in Alwar. Stay connected with free WiFi and enjoy a fresh brew with your in-room tea/coffee maker.",
    amenities: [
      "King Size Bed",
      "Work Desk",
      "Tea/Coffee Maker",
      "Free WiFi",
      "Air Conditioning",
    ],
  },
  {
    id: "executive",
    name: "Executive Room",
    price: 5800,
    size: "378 sq.ft",
    capacity: "2 Adults + 1 Child",
    image: IMAGES.executive_main,
    gallery: [IMAGES.executive_main, IMAGES.view, IMAGES.balcony, IMAGES.bath],
    description:
      "Enjoy the comfort of a king-sized bed with a view of the Aravalli Hills and Sariska Tiger Reserve buffer zone. Features a private balcony to kick back and soak in the Rajasthani vibe.",
    amenities: [
      "Mountain View",
      "Private Balcony",
      "Mini Fridge",
      "Premium Toiletries",
      "LED TV",
    ],
  },
  {
    id: "junior-suite",
    name: "Junior Suite",
    price: 6500,
    size: "450 sq.ft",
    capacity: "2 Adults + 1 Child",
    image: IMAGES.suite_main,
    gallery: [IMAGES.suite_main, IMAGES.seating, IMAGES.bath],
    description:
      "A lavish suite offering premium amenities. Perfect for small families, accommodating up to two adults and one child comfortably with distinct luxury touches.",
    amenities: [
      "Sitting Area",
      "Luxury Bath",
      "Welcome Drink",
      "Room Service",
      "WiFi",
    ],
  },
  {
    id: "junior-twin",
    name: "Junior Twin Bed",
    price: 6500,
    size: "450 sq.ft",
    capacity: "2 Adults + 1 Child",
    image: IMAGES.twin_main,
    gallery: [IMAGES.twin_main, IMAGES.view, IMAGES.bath],
    description:
      "Perfect for friends or colleagues, offering the same luxury as our suites but with twin bed configurations. Includes all premium amenities and spacious interiors.",
    amenities: [
      "Twin Beds",
      "Work Station",
      "Garden View",
      "Air Conditioning",
      "Safe",
    ],
  },
  {
    id: "royal-suite",
    name: "Royal Suite",
    price: 8500,
    size: "550 sq.ft",
    capacity: "2 Adults + 1 Child",
    image: IMAGES.suite_main,
    gallery: [IMAGES.suite_main, IMAGES.balcony, IMAGES.view, IMAGES.bath],
    description:
      "Indulge in elegance with Satellite TV, large writing desks, and well-appointed bathrooms. These newly refurbished rooms offer a multi-media hub and wired internet.",
    amenities: [
      "Bathtub",
      "Large Work Desk",
      "Multi-media Hub",
      "Satellite TV",
      "Mini Bar",
    ],
  },
  {
    id: "family-suite",
    name: "Family Suite",
    price: 10500,
    size: "700 sq.ft",
    capacity: "4 Adults + 2 Children",
    image: IMAGES.family_main,
    gallery: [
      IMAGES.family_main,
      IMAGES.seating,
      IMAGES.balcony,
      IMAGES.bath,
      IMAGES.view,
    ],
    description:
      "The ultimate choice for larger groups. Features spacious layouts ensuring privacy and comfort for the whole family, with separate living areas and premium entertainment.",
    amenities: [
      "2 Bedrooms",
      "Large Living Area",
      "Dining Space",
      "2 Bathrooms",
      "Panoramic View",
    ],
  },
];

export const GALLERY_IMAGES = [
  {
    id: "resort",
    src: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/gallery_resort-C1B1A1z1X1y1C1B1A.jpg",
    title: "Resort Exterior",
  },
  {
    id: "pool",
    src: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/gallery_pool-B1A1z1X1y1C1B1A1.jpg",
    title: "Poolside View",
  },
  {
    id: "dining",
    src: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/gallery_dining-A1z1X1y1C1B1A1z.jpg",
    title: "The Clove Restaurant",
  },
  {
    id: "wedding",
    src: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/gallery_wedding-z1X1y1C1B1A1z1.jpg",
    title: "Wedding Setup",
  },
  {
    id: "room_deluxe",
    src: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/gallery_deluxe-X1y1C1B1A1z1X.jpg",
    title: "Deluxe Room",
  },
  {
    id: "room_suite",
    src: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/gallery_suite-y1C1B1A1z1X1y.jpg",
    title: "Junior Suite",
  },
  {
    id: "event",
    src: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/gallery_event-C1B1A1z1X1y1C.jpg",
    title: "Banquet Hall",
  },
  {
    id: "exterior_night",
    src: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/gallery_exterior_night-B1A1z1X1y1C1B1A.jpg",
    title: "Resort at Night",
  },
  {
    id: "room_executive",
    src: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/gallery_executive-A1z1X1y1C1B1A1.jpg",
    title: "Executive Room",
  },
  {
    id: "garden",
    src: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/gallery_garden-z1X1y1C1B1A1z.jpg",
    title: "Lush Gardens",
  },
  {
    id: "local_sight",
    src: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/gallery_local_sight-X1y1C1B1A1z1.jpg",
    title: "Nearby Cenotaphs",
  },
  {
    id: "food",
    src: "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/gallery_food-y1C1B1A1z1X1.jpg",
    title: "Gourmet Cuisine",
  },
];

export const EXPLORE_PLACES = [
  {
    name: "Sariska Tiger Reserve",
    description:
      "A sprawling wildlife sanctuary, home to majestic tigers, leopards, and numerous other species. A must-visit for nature and wildlife enthusiasts.",
    image:
      "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/explore_sariska-C1B1A1z1X1y.jpg",
    distance: "20 km",
  },
  {
    name: "Bala Quila (Alwar Fort)",
    description:
      "Perched on a steep hill, this massive fort offers panoramic views of the city. Explore its grand ramparts and historic structures.",
    image:
      "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/explore_bala_quila-B1A1z1X1y1C.jpg",
    distance: "10 km",
  },
  {
    name: "Siliserh Lake Palace",
    description:
      "A serene lake and a stunning royal palace, now a heritage hotel. Perfect for boating and enjoying the tranquil surroundings.",
    image:
      "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/explore_siliserh-A1z1X1y1C1B.jpg",
    distance: "15 km",
  },
  {
    name: "Moosi Maharani Ki Chhatri",
    description:
      "An exquisite cenotaph with striking architecture, featuring a blend of Rajput and Mughal styles. A photographer's delight.",
    image:
      "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/explore_chhatri-z1X1y1C1B1.jpg",
    distance: "8 km",
  },
  {
    name: "City Palace Alwar",
    description:
      "A beautiful palace complex at the base of the fort, housing a museum with a rich collection of manuscripts, armor, and paintings.",
    image:
      "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/explore_city_palace-X1y1C1B1A.jpg",
    distance: "9 km",
  },
  {
    name: "Bhangarh Fort",
    description:
      "Famously known as one of India's most haunted places, this 17th-century fort is an archaeological site with a mysterious aura.",
    image:
      "https://7b2h66h2k89z24v9.public.blob.vercel-storage.com/explore_bhangarh-y1C1B1A1z.jpg",
    distance: "50 km",
  },
];
