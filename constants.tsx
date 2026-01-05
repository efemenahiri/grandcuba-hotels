
import { Page, Room, NavItem } from './types';

export const HOTEL_NAME = "Grand Cuba Hotel & Suites";
export const HOTEL_ADDRESS = "Omena Close, opposite Omena Hostel, off Agbor - Eku Road, Abraka 330105, Delta State, Nigeria";
export const HOTEL_PHONE = "0707 235 0040";
export const LOCATION_CODE = "Q3JR+Q9 Abraka";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: Page.HOME },
  { label: 'Rooms', page: Page.ROOMS },
  { label: 'About', page: Page.ABOUT },
  { label: 'Location', page: Page.LOCATION },
  { label: 'Contact', page: Page.CONTACT },
];

export const ROOMS: Room[] = [
  {
    id: 'standard-deluxe',
    name: 'Standard Deluxe',
    description: 'Elegant and comfortable, perfect for business travelers or couples seeking a cozy retreat.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
    amenities: ['King-sized Bed', 'High-speed Wi-Fi', 'Smart TV', 'Mini Fridge']
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    description: 'Spacious and luxurious, featuring a separate living area and premium city views.',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2026&auto=format&fit=crop',
    amenities: ['Living Lounge', 'Nespresso Machine', 'Premium Toiletries', '24/7 Room Service']
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    description: 'The pinnacle of luxury. A massive suite with panoramic views, private bar, and master bath.',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
    amenities: ['Jacuzzi', 'Private Balcony', 'Personal Concierge', 'Welcome Champagne']
  },
  {
    id: 'grand-cuba-villa',
    name: 'Grand Cuba Villa',
    description: 'Experience true privacy in our detached villa, featuring a private entrance and pool access.',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
    amenities: ['Private Entrance', 'Mini Kitchenette', 'Garden Access', 'Dual Vanities']
  }
];
