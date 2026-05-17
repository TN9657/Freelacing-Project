import naPlot from "@/assets/prop-na-plot.jpg";
import agri from "@/assets/prop-agri.jpg";
import residential from "@/assets/prop-residential.jpg";
import commercial from "@/assets/prop-commercial.jpg";
import villa from "@/assets/prop-villa.jpg";
import farmhouse from "@/assets/prop-farmhouse.jpg";
import apartment from "@/assets/prop-apartment.jpg";
import luxury from "@/assets/prop-luxury.jpg";
import industrial from "@/assets/prop-industrial.jpg";

export type PropertyCategory =
  | "NA Plots"
  | "Agricultural Plots"
  | "Residential Plots"
  | "Commercial Properties"
  | "Villas"
  | "Farm Houses"
  | "Apartments"
  | "Luxury Homes"
  | "Industrial Land";

export interface Property {
  id: number;
  title: string;
  category: PropertyCategory;
  location: string;
  price: string;
  priceValue: number; // in lakhs, for filtering
  area: string;
  image: string;
  description: string;
  contact: string;
  amenities: string[];
  featured: boolean;
}

export const categories: PropertyCategory[] = [
  "NA Plots",
  "Agricultural Plots",
  "Residential Plots",
  "Commercial Properties",
  "Villas",
  "Farm Houses",
  "Apartments",
  "Luxury Homes",
  "Industrial Land",
];

const properties: Property[] = [
  {
    id: 1,
    title: "Premium NA Plot — Hinjewadi",
    category: "NA Plots",
    location: "Pune",
    price: "₹45 Lakhs",
    priceValue: 45,
    area: "2400 Sq.ft",
    image: naPlot,
    description:
      "Premium NA-approved plot in a fast-growing IT corridor with road-touch access and clear title.",
    contact: "+91 98765 43210",
    amenities: ["Road Touch", "Electricity", "Water Supply", "Garden Facing"],
    featured: true,
  },
  {
    id: 2,
    title: "Fertile Agricultural Land",
    category: "Agricultural Plots",
    location: "Nashik",
    price: "₹22 Lakhs",
    priceValue: 22,
    area: "2 Acres",
    image: agri,
    description:
      "Lush 2-acre farmland with year-round water access, ideal for grape and pomegranate cultivation.",
    contact: "+91 98765 43210",
    amenities: ["Water Well", "Road Access", "Fertile Soil", "Electricity"],
    featured: false,
  },
  {
    id: 3,
    title: "Gated Residential Plot",
    category: "Residential Plots",
    location: "Bangalore",
    price: "₹78 Lakhs",
    priceValue: 78,
    area: "1800 Sq.ft",
    image: residential,
    description:
      "Plot in a premium gated township with paved internal roads, street lighting and 24×7 security.",
    contact: "+91 98765 43210",
    amenities: ["Gated Community", "Park", "Clubhouse", "24×7 Security"],
    featured: true,
  },
  {
    id: 4,
    title: "Grade-A Commercial Tower Floor",
    category: "Commercial Properties",
    location: "Mumbai BKC",
    price: "₹6.5 Cr",
    priceValue: 650,
    area: "3200 Sq.ft",
    image: commercial,
    description:
      "Sea-facing Grade-A office floor in the heart of BKC with double-height lobby and valet parking.",
    contact: "+91 98765 43210",
    amenities: ["Power Backup", "Valet Parking", "Lift Access", "HVAC"],
    featured: true,
  },
  {
    id: 5,
    title: "Modern Hillside Villa",
    category: "Villas",
    location: "Lonavala",
    price: "₹3.2 Cr",
    priceValue: 320,
    area: "4500 Sq.ft",
    image: villa,
    description:
      "Architect-designed 4 BHK villa with private infinity pool, valley views and smart-home automation.",
    contact: "+91 98765 43210",
    amenities: ["Private Pool", "Smart Home", "Garden", "Garage"],
    featured: true,
  },
  {
    id: 6,
    title: "Heritage Mango-Orchard Farmhouse",
    category: "Farm Houses",
    location: "Karjat",
    price: "₹1.4 Cr",
    priceValue: 140,
    area: "1 Acre",
    image: farmhouse,
    description:
      "Charming 3 BHK farmhouse set in a mature mango orchard with traditional veranda and warm interiors.",
    contact: "+91 98765 43210",
    amenities: ["Orchard", "Veranda", "Borewell", "Caretaker Quarters"],
    featured: false,
  },
  {
    id: 7,
    title: "Sky Residences — 3 BHK",
    category: "Apartments",
    location: "Mumbai Worli",
    price: "₹4.8 Cr",
    priceValue: 480,
    area: "1850 Sq.ft",
    image: apartment,
    description:
      "High-floor 3 BHK in a landmark tower with sea view, infinity pool, sky lounge and concierge.",
    contact: "+91 98765 43210",
    amenities: ["Sea View", "Infinity Pool", "Gym", "Concierge"],
    featured: true,
  },
  {
    id: 8,
    title: "Royal Estate Mansion",
    category: "Luxury Homes",
    location: "Alibaug",
    price: "₹12 Cr",
    priceValue: 1200,
    area: "9000 Sq.ft",
    image: luxury,
    description:
      "Palatial 6 BHK mansion with grand colonnade, formal gardens, fountain court and private cinema.",
    contact: "+91 98765 43210",
    amenities: ["Private Cinema", "Fountain", "Formal Garden", "Staff Quarters"],
    featured: true,
  },
  {
    id: 9,
    title: "MIDC Industrial Land",
    category: "Industrial Land",
    location: "Pune Chakan",
    price: "₹2.1 Cr",
    priceValue: 210,
    area: "1 Acre",
    image: industrial,
    description:
      "Leveled industrial plot in Chakan MIDC with wide approach road and ready power & water connections.",
    contact: "+91 98765 43210",
    amenities: ["Power Connection", "Water Connection", "Wide Road", "MIDC Approved"],
    featured: false,
  },
  {
    id: 10,
    title: "Riverside NA Plot",
    category: "NA Plots",
    location: "Nashik",
    price: "₹62 Lakhs",
    priceValue: 62,
    area: "3000 Sq.ft",
    image: naPlot,
    description:
      "Tranquil riverside NA plot with mountain backdrop, perfect for a weekend bungalow.",
    contact: "+91 98765 43210",
    amenities: ["River View", "Road Touch", "Electricity"],
    featured: false,
  },
  {
    id: 11,
    title: "Garden Villa — Goa",
    category: "Villas",
    location: "North Goa",
    price: "₹2.6 Cr",
    priceValue: 260,
    area: "3200 Sq.ft",
    image: villa,
    description:
      "Portuguese-inspired 3 BHK villa with private courtyard, pool and walking distance to the beach.",
    contact: "+91 98765 43210",
    amenities: ["Private Pool", "Beach Access", "Courtyard"],
    featured: false,
  },
  {
    id: 12,
    title: "Skyline Penthouse",
    category: "Luxury Homes",
    location: "Bangalore",
    price: "₹8.4 Cr",
    priceValue: 840,
    area: "5200 Sq.ft",
    image: luxury,
    description: "Duplex penthouse with private terrace garden, jacuzzi and 360° skyline views.",
    contact: "+91 98765 43210",
    amenities: ["Terrace Garden", "Jacuzzi", "Private Lift", "Smart Home"],
    featured: true,
  },
];

export default properties;
