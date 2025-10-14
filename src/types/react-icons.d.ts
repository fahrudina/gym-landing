declare module 'react-icons/fa' {
  import { ComponentType, SVGProps } from 'react';
  
  interface IconProps extends SVGProps<SVGSVGElement> {
    color?: string;
    size?: string | number;
  }
  
  export const FaBars: ComponentType<IconProps>;
  export const FaTimes: ComponentType<IconProps>;
  export const FaDumbbell: ComponentType<IconProps>;
  export const FaUsers: ComponentType<IconProps>;
  export const FaHeart: ComponentType<IconProps>;
  export const FaClock: ComponentType<IconProps>;
  export const FaPlay: ComponentType<IconProps>;
  export const FaCheck: ComponentType<IconProps>;
  export const FaPhone: ComponentType<IconProps>;
  export const FaEnvelope: ComponentType<IconProps>;
  export const FaMapMarkerAlt: ComponentType<IconProps>;
  export const FaFacebook: ComponentType<IconProps>;
  export const FaTwitter: ComponentType<IconProps>;
  export const FaInstagram: ComponentType<IconProps>;
  export const FaLinkedin: ComponentType<IconProps>;
  export const FaWhatsapp: ComponentType<IconProps>;
}