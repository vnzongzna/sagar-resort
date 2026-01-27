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
  hero: "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-18%20at%2013.35.12_82143fb9.jpg",
  exterior:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/WhatsApp%20Image%202024-09-19%20at%2016.34.21_fc35a717.jpg",
  pool: "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/pool%203.jpg",
  dining:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/banquet%20hall%20.jpg",
  deluxe_main:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/IMG-20240919-WA0004.jpg",
  executive_main:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-07%20at%2012.57.23_68e9ef35.jpg",
  suite_main:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00167.JPG",
  twin_main:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09913.JPG",
  family_main:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09887.JPG",
  bath: "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00037.JPG",
  view: "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00166.JPG",
  balcony:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00121.JPG",
  seating:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00149.JPG",
  banquet_hero:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/AB_03321.JPG",
  banquet_hall_1:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-30%20at%2012.22.57_b86271a7.jpg",
  banquet_setup:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/AB_03318.JPG",
  wedding_hero:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-30%20at%2012.22.41_0ddabada.jpg",
  wedding_venue:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-30%20at%2012.22.41_0ddabada.jpg",
  wedding_decor:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-25%20at%2019.15.34_ac25a5ed.jpg",
  wedding_couple:
    "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-30%20at%2012.22.41_0ddabada.jpg",
};

export const ROOMS = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 4500,
    size: "250 sq.ft",
    capacity: "2 Adults + 1 Child",
    image: IMAGES.deluxe_main,
    gallery: [
      IMAGES.deluxe_main,
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/IMG-20241006-WA0009.jpg",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/IMG-20241006-WA0006.jpg",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/IMG-20241006-WA0002.jpg",
    ],
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
    gallery: [
      IMAGES.executive_main,
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-07%20at%2012.57.25_6f2da5e0.jpg",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-07%20at%2012.57.24_7f22c582.jpg",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-07%20at%2012.57.23_68e9ef35.jpg",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00166.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00121.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00047.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00037.JPG",
    ],
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
    gallery: [
      IMAGES.suite_main,
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00149%281%29.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00149.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09996.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09989.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09950.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09947.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09945.JPG",
    ],
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
    gallery: [
      IMAGES.twin_main,
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09906.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09920.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09915.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00111.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00084.JPG",
    ],
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
    image: "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09875.JPG",
    gallery: [
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09875.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09881.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09866.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09878.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/queen%20executive.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00058.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00055.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00035.JPG",
    ],
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
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09892.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC09897.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00073.JPG",
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/DSC00069.JPG",
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
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/tiger-safari-in-Sariska-national-park.webp",
    distance: "20 km",
  },
  {
    name: "Bala Quila (Alwar Fort)",
    description:
      "Perched on a steep hill, this massive fort offers panoramic views of the city. Explore its grand ramparts and historic structures.",
    image:
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/bala-quila-alwar.webp",
    distance: "10 km",
  },
  {
    name: "Siliserh Lake Palace",
    description:
      "A serene lake and a stunning royal palace, now a heritage hotel. Perfect for boating and enjoying the tranquil surroundings.",
    image:
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/jaisamand-lake-alwar%20%281%29.jpg",
    distance: "15 km",
  },
  {
    name: "Moosi Maharani Ki Chhatri",
    description:
      "An exquisite cenotaph with striking architecture, featuring a blend of Rajput and Mughal styles. A photographer's delight.",
    image:
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/Sagar%20Jalashay-%20The%20Serene%20Water%20Body%20Around%20Moosi%20Rani%20ki%20Chhatri%20in%20Alwar-3.jpg",
    distance: "8 km",
  },
  {
    name: "City Palace Alwar",
    description:
      "A beautiful palace complex at the base of the fort, housing a museum with a rich collection of manuscripts, armor, and paintings.",
    image:
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/1572374483_cover.jpg",
    distance: "9 km",
  },
  {
    name: "Bhangarh Fort",
    description:
      "Famously known as one of India's most haunted places, this 17th-century fort is an archaeological site with a mysterious aura.",
    image:
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/Bhangarh-Fort-Haunted_-8.jpg",
    distance: "50 km",
  },
  {
    name: "Kankwari Fort",
    description:
      "Located within Sariska Tiger Reserve, this historic fort offers scenic views and a glimpse into the region's royal past.",
    image:
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/Kankwari_Fort_%28Sariska_Tiger_Reserve%29.jpg",
    distance: "25 km",
  },
  {
    name: "Neelkanth Temples",
    description:
      "Ancient temples dedicated to Lord Shiva, featuring intricate carvings and serene surroundings ideal for spiritual seekers.",
    image:
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/naldeshwar-shrine-6025.jpg",
    distance: "12 km",
  },
  {
    name: "Pandupol",
    description:
      "A scenic spot with religious significance, offering natural beauty and panoramic views of the surrounding valleys.",
    image:
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/1716296010_664c994a8daef.jpg",
    distance: "35 km",
  },
  {
    name: "Vijay Mandir Palace",
    description:
      "A beautiful palace built on the banks of Vijay Sagar Lake, surrounded by lush greenery and offering a peaceful retreat.",
    image:
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/v0coi87wsrb9haevwdfa0oqv0l6p_384gal3.webp",
    distance: "10 km",
  },
  {
    name: "Raja Bharthari Temple",
    description:
      "A sacred temple located inside a natural cave, known for its spiritual atmosphere and stunning rock formations.",
    image:
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/Raja-Bharthrihari-Alwar.jpeg",
    distance: "15 km",
  },
  {
    name: "Pratapgarh Farms",
    description:
      "An eco-tourism destination offering farm stays, organic produce, and a chance to experience rural Rajasthan.",
    image:
      "https://zlrqwqei9vlejcwl.public.blob.vercel-storage.com/171525725153.webp",
    distance: "18 km",
  },
];
