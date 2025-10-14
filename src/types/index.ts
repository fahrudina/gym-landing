export interface GymService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  image: string;
  experience: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  image?: string;
  memberSince: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
}