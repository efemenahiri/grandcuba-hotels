
export enum Page {
  HOME = 'home',
  ROOMS = 'rooms',
  ABOUT = 'about',
  LOCATION = 'location',
  CONTACT = 'contact'
}

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
}

export interface NavItem {
  label: string;
  page: Page;
}
