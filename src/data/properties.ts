
export interface Property {
  id: number;
  title: string;
  description: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  type: PropertyType;
  beds: number;
  baths: number;
  guests: number;
  amenities: string[];
  superhost: boolean;
}

export type PropertyType = 'house' | 'apartment' | 'cabin' | 'villa' | 'boat' | 'treehouse';

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Oceanfront Villa",
    description: "Stunning oceanfront villa with panoramic views, private pool, and direct beach access.",
    location: "Malibu, California",
    price: 750,
    rating: 4.98,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
    type: "villa",
    beds: 5,
    baths: 4,
    guests: 10,
    amenities: ["Pool", "Beach access", "Wifi", "Full kitchen", "Hot tub"],
    superhost: true
  },
  {
    id: 2,
    title: "Cozy Mountain Cabin",
    description: "Nestled in the pines, this cabin features a wood-burning fireplace and scenic mountain views.",
    location: "Aspen, Colorado",
    price: 250,
    rating: 4.92,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop",
    type: "cabin",
    beds: 2,
    baths: 1,
    guests: 4,
    amenities: ["Fireplace", "Mountain view", "Wifi", "Kitchen", "Parking"],
    superhost: false
  },
  {
    id: 3,
    title: "Downtown Luxury Loft",
    description: "Stylish loft in the heart of downtown with high ceilings and modern furnishings.",
    location: "New York, NY",
    price: 320,
    rating: 4.85,
    reviews: 152,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
    type: "apartment",
    beds: 1,
    baths: 1,
    guests: 2,
    amenities: ["Gym", "Doorman", "Wifi", "Full kitchen", "City view"],
    superhost: true
  },
  {
    id: 4,
    title: "Desert Retreat with Pool",
    description: "Serene desert oasis with private pool, spa, and stunning mountain views.",
    location: "Palm Springs, California",
    price: 280,
    rating: 4.9,
    reviews: 108,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop",
    type: "house",
    beds: 3,
    baths: 2,
    guests: 6,
    amenities: ["Pool", "Hot tub", "Wifi", "Fire pit", "BBQ grill"],
    superhost: false
  },
  {
    id: 5,
    title: "Lakefront Cottage",
    description: "Charming cottage with private dock, kayaks, and beautiful lake views.",
    location: "Lake Tahoe, California",
    price: 195,
    rating: 4.88,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=800&auto=format&fit=crop",
    type: "house",
    beds: 3,
    baths: 2,
    guests: 8,
    amenities: ["Lake access", "Kayaks", "Wifi", "Full kitchen", "Fireplace"],
    superhost: false
  },
  {
    id: 6,
    title: "Secluded Treehouse Getaway",
    description: "Unique treehouse experience with stunning forest views and luxury amenities.",
    location: "Portland, Oregon",
    price: 310,
    rating: 4.97,
    reviews: 63,
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&auto=format&fit=crop",
    type: "treehouse",
    beds: 1,
    baths: 1,
    guests: 2,
    amenities: ["Forest view", "Outdoor shower", "Wifi", "Kitchenette", "Deck"],
    superhost: true
  },
  {
    id: 7,
    title: "Beachfront Bungalow",
    description: "Steps from the sand, this bungalow offers the perfect beach vacation.",
    location: "San Diego, California",
    price: 220,
    rating: 4.82,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&auto=format&fit=crop",
    type: "house",
    beds: 2,
    baths: 1,
    guests: 4,
    amenities: ["Beach access", "Patio", "Wifi", "BBQ", "Outdoor shower"],
    superhost: false
  },
  {
    id: 8,
    title: "Luxury Yacht Experience",
    description: "Stay aboard a beautiful yacht in the harbor with all the comforts of home.",
    location: "Miami, Florida",
    price: 550,
    rating: 4.95,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1542397284385-6010376c5337?w=800&auto=format&fit=crop",
    type: "boat",
    beds: 3,
    baths: 2,
    guests: 6,
    amenities: ["Water view", "Deck", "Wifi", "Kitchen", "Air conditioning"],
    superhost: true
  }
];

export const propertyTypes = [
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'cabin', label: 'Cabin' },
  { value: 'villa', label: 'Villa' },
  { value: 'boat', label: 'Boat' },
  { value: 'treehouse', label: 'Treehouse' }
];
