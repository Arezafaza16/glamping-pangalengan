export interface PackageItem {
  id: string;
  code: string;
  name: string;
  pricePerPerson: number;
  priceFormatted: string;
  activities: string;
  tagline?: string;
  isPopular?: boolean;
  isPremium?: boolean;
  accentBadge?: string;
  includes: string[];
  imageUrl: string;
  minPersons?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rafting' | 'teambuilding' | 'adventure' | 'glamping' | 'nature';
  categoryLabel: string;
  location: string;
  imageUrl: string;
  aspect?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MissionItem {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  imageUrl: string;
  badge?: string;
}

export interface ContactFormState {
  name: string;
  company: string;
  phone: string;
  participants: string;
  packageId: string;
  date: string;
  message: string;
}

export interface AccommodationItem {
  id: string;
  name: string;
  capacity: string;
  facilities: string[];
  imageUrl: string;
}
