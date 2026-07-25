import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const WhatsappIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const MapPinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const CityIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-4h6v4" />
    <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
  </svg>
);

export const RoadIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 22 8 2h8l4 20" />
    <path d="M12 6v2M12 11v2M12 16v2" />
  </svg>
);

export const BatteryIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2" y="7" width="16" height="10" rx="2" />
    <path d="M22 11v2" />
    <path d="M6 10v4M6 12h.01M10 12h1M10.5 11.5v1" />
  </svg>
);

export const TruckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M10 17h4V5H2v12h3" />
    <path d="M20 17h1a1 1 0 0 0 1-1v-3.34a1 1 0 0 0-.29-.7l-2.67-2.66A1 1 0 0 0 18.34 9H14v8h1" />
    <circle cx="7.5" cy="17.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const WrenchIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.3-.6-.6-2.3 2-2.2Z" />
  </svg>
);

export const FuelIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 22V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v18" />
    <path d="M3 12h10" />
    <path d="M13 8h2.5a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V9l-3-3" />
  </svg>
);

export const MotorcycleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="5" cy="17" r="3" />
    <circle cx="19" cy="17" r="3" />
    <path d="M8 17h6l3-5h-3l-2-3H8" />
    <path d="M14 9h3" />
  </svg>
);

export const ICONS = {
  city: CityIcon,
  road: RoadIcon,
  battery: BatteryIcon,
  shield: ShieldIcon,
  truck: TruckIcon,
  wrench: WrenchIcon,
  fuel: FuelIcon,
  motorcycle: MotorcycleIcon,
} as const;

export type IconKey = keyof typeof ICONS;
