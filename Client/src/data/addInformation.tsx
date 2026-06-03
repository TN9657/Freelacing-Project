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
  titleMr?: string;
  category: PropertyCategory;
  location: string;
  locationMr?: string;
  price: string;
  priceValue: number; // in lakhs, for filtering
  area: string;
  image: string;
  description: string;
  descriptionMr?: string;
  contact: string;
  amenities: string[];
  amenitiesMr?: string[];
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
    titleMr: "प्रीमियम एन.ए. प्लॉट — हिंजवडी",
    category: "NA Plots",
    location: "Pune",
    locationMr: "पुणे",
    price: "₹45 Lakhs",
    priceValue: 45,
    area: "2400 Sq.ft",
    image: naPlot,
    description:
      "Premium NA-approved plot in a fast-growing IT corridor with road-touch access and clear title.",
    descriptionMr:
      "वेगाने वाढणाऱ्या आयटी कॉरिडॉरमध्ये रोड-टच ॲक्सेस आणि स्पष्ट शीर्षकासह प्रीमियम एन.ए.-मंजूर प्लॉट.",
    contact: "+91 98765 43210",
    amenities: ["Road Touch", "Electricity", "Water Supply", "Garden Facing"],
    amenitiesMr: ["रोड टच", "वीज", "पाणी पुरवठा", "बाग समोर"],
    featured: true,
  },
  {
    id: 2,
    title: "Fertile Agricultural Land",
    titleMr: "सुपीक कृषी जमीन",
    category: "Agricultural Plots",
    location: "Nashik",
    locationMr: "नाशिक",
    price: "₹22 Lakhs",
    priceValue: 22,
    area: "2 Acres",
    image: agri,
    description:
      "Lush 2-acre farmland with year-round water access, ideal for grape and pomegranate cultivation.",
    descriptionMr:
      "द्राक्ष आणि डाळिंब लागवडीसाठी आदर्श, वर्षभर पाण्याच्या उपलब्धतेसह 2 एकर हिरवीगार शेतजमीन.",
    contact: "+91 98765 43210",
    amenities: ["Water Well", "Road Access", "Fertile Soil", "Electricity"],
    amenitiesMr: ["विहीर", "रस्ता प्रवेश", "सुपीक माती", "वीज"],
    featured: false,
  },
  {
    id: 3,
    title: "Gated Residential Plot",
    titleMr: "गेटेड निवासी भूखंड",
    category: "Residential Plots",
    location: "Bangalore",
    locationMr: "बेंगलुरू",
    price: "₹78 Lakhs",
    priceValue: 78,
    area: "1800 Sq.ft",
    image: residential,
    description:
      "Plot in a premium gated township with paved internal roads, street lighting and 24×7 security.",
    descriptionMr:
      "पक्के अंतर्गत रस्ते, रस्त्यावरील दिवे आणि 24×7 सुरक्षासह प्रीमियम गेटेड टाउनशिपमधील भूखंड.",
    contact: "+91 98765 43210",
    amenities: ["Gated Community", "Park", "Clubhouse", "24×7 Security"],
    amenitiesMr: ["गेटेड समुदाय", "पार्क", "क्लबहाउस", "24×7 सुरक्षा"],
    featured: true,
  },
  {
    id: 4,
    title: "Grade-A Commercial Tower Floor",
    titleMr: "ग्रेड-ए व्यावसायिक टॉवर फ्लोर",
    category: "Commercial Properties",
    location: "Mumbai BKC",
    locationMr: "मुंबई बीकेसी",
    price: "₹6.5 Cr",
    priceValue: 650,
    area: "3200 Sq.ft",
    image: commercial,
    description:
      "Sea-facing Grade-A office floor in the heart of BKC with double-height lobby and valet parking.",
    descriptionMr:
      "डबल-हाईट लॉबी आणि व्हॅलेट पार्किंगसह बीकेसीच्या केंद्रस्थानी समुद्रासमोरील ग्रेड-ए ऑफिस फ्लोर.",
    contact: "+91 98765 43210",
    amenities: ["Power Backup", "Valet Parking", "Lift Access", "HVAC"],
    amenitiesMr: ["पॉवर बॅकअप", "व्हॅलेट पार्किंग", "लिफ्ट ॲक्सेस", "एचव्हीएसी"],
    featured: true,
  },
  {
    id: 5,
    title: "Modern Hillside Villa",
    titleMr: "आधुनिक टेकडी विला",
    category: "Villas",
    location: "Lonavala",
    locationMr: "लोणावळा",
    price: "₹3.2 Cr",
    priceValue: 320,
    area: "4500 Sq.ft",
    image: villa,
    description:
      "Architect-designed 4 BHK villa with private infinity pool, valley views and smart-home automation.",
    descriptionMr:
      "खाजगी इन्फिनिटी पूल, दरी दृश्ये आणि स्मार्ट-होम ऑटोमेशनसह वास्तुविशारदाने डिझाइन केलेला 4 बीएचके विला.",
    contact: "+91 98765 43210",
    amenities: ["Private Pool", "Smart Home", "Garden", "Garage"],
    amenitiesMr: ["खाजगी तलाव", "स्मार्ट होम", "बाग", "गॅरेज"],
    featured: true,
  },
  {
    id: 6,
    title: "Heritage Mango-Orchard Farmhouse",
    titleMr: "हेरिटेज आंबा बाग फार्महाउस",
    category: "Farm Houses",
    location: "Karjat",
    locationMr: "कर्जत",
    price: "₹1.4 Cr",
    priceValue: 140,
    area: "1 Acre",
    image: farmhouse,
    description:
      "Charming 3 BHK farmhouse set in a mature mango orchard with traditional veranda and warm interiors.",
    descriptionMr:
      "पारंपरिक व्हरांडा आणि उबदार आतील भागासह परिपक्व आंबा बागेत वसलेला आकर्षक 3 बीएचके फार्महाउस.",
    contact: "+91 98765 43210",
    amenities: ["Orchard", "Veranda", "Borewell", "Caretaker Quarters"],
    amenitiesMr: ["बाग", "व्हरांडा", "बोअरवेल", "केअरटेकर क्वार्टर"],
    featured: false,
  },
  {
    id: 7,
    title: "Sky Residences — 3 BHK",
    titleMr: "स्काय रेसिडेन्सेस — 3 बीएचके",
    category: "Apartments",
    location: "Mumbai Worli",
    locationMr: "मुंबई वर्ली",
    price: "₹4.8 Cr",
    priceValue: 480,
    area: "1850 Sq.ft",
    image: apartment,
    description:
      "High-floor 3 BHK in a landmark tower with sea view, infinity pool, sky lounge and concierge.",
    descriptionMr:
      "समुद्र दृश्य, इन्फिनिटी पूल, स्काय लाउंज आणि कन्सिर्जसह एका प्रतिष्ठित टॉवरमधील उंच मजल्यावरील 3 बीएचके.",
    contact: "+91 98765 43210",
    amenities: ["Sea View", "Infinity Pool", "Gym", "Concierge"],
    amenitiesMr: ["समुद्र दृश्य", "इन्फिनिटी पूल", "जिम", "कन्सिर्ज"],
    featured: true,
  },
  {
    id: 8,
    title: "Royal Estate Mansion",
    titleMr: "रॉयल एस्टेट मॅन्शन",
    category: "Luxury Homes",
    location: "Alibaug",
    locationMr: "अलिबाग",
    price: "₹12 Cr",
    priceValue: 1200,
    area: "9000 Sq.ft",
    image: luxury,
    description:
      "Palatial 6 BHK mansion with grand colonnade, formal gardens, fountain court and private cinema.",
    descriptionMr:
      "भव्य कोलोनेड, औपचारिक बाग, फाउंटन कोर्ट आणि खाजगी सिनेमासह राजेशाही 6 बीएचके हवेली.",
    contact: "+91 98765 43210",
    amenities: ["Private Cinema", "Fountain", "Formal Garden", "Staff Quarters"],
    amenitiesMr: ["खाजगी सिनेमा", "कारंजे", "औपचारिक बाग", "कर्मचारी क्वार्टर"],
    featured: true,
  },
  {
    id: 9,
    title: "MIDC Industrial Land",
    titleMr: "एमआयडीसी औद्योगिक जमीन",
    category: "Industrial Land",
    location: "Pune Chakan",
    locationMr: "पुणे चाकण",
    price: "₹2.1 Cr",
    priceValue: 210,
    area: "1 Acre",
    image: industrial,
    description:
      "Leveled industrial plot in Chakan MIDC with wide approach road and ready power & water connections.",
    descriptionMr:
      "रुंद प्रवेश रस्ता आणि तयार वीज व पाणी जोडणीसह चाकण एमआयडीसीमधील सपाट औद्योगिक भूखंड.",
    contact: "+91 98765 43210",
    amenities: ["Power Connection", "Water Connection", "Wide Road", "MIDC Approved"],
    amenitiesMr: ["वीज जोडणी", "पाणी जोडणी", "रुंद रस्ता", "एमआयडीसी मंजूर"],
    featured: false,
  },
  {
    id: 10,
    title: "Riverside NA Plot",
    titleMr: "नदीकाठी एन.ए. प्लॉट",
    category: "NA Plots",
    location: "Nashik",
    locationMr: "नाशिक",
    price: "₹62 Lakhs",
    priceValue: 62,
    area: "3000 Sq.ft",
    image: naPlot,
    description:
      "Tranquil riverside NA plot with mountain backdrop, perfect for a weekend bungalow.",
    descriptionMr:
      "डोंगराच्या पार्श्वभूमीसह शांत नदीकाठी एन.ए. प्लॉट, वीकेंड बंगल्यासाठी योग्य.",
    contact: "+91 98765 43210",
    amenities: ["River View", "Road Touch", "Electricity"],
    amenitiesMr: ["नदी दृश्य", "रोड टच", "वीज"],
    featured: false,
  },
  {
    id: 11,
    title: "Garden Villa — Goa",
    titleMr: "गार्डन विला — गोवा",
    category: "Villas",
    location: "North Goa",
    locationMr: "उत्तर गोवा",
    price: "₹2.6 Cr",
    priceValue: 260,
    area: "3200 Sq.ft",
    image: villa,
    description:
      "Portuguese-inspired 3 BHK villa with private courtyard, pool and walking distance to the beach.",
    descriptionMr:
      "खाजगी अंगण, तलाव आणि समुद्रकिनाऱ्यापर्यंत चालत जाण्याच्या अंतरासह पोर्तुगीज-प्रेरित 3 बीएचके विला.",
    contact: "+91 98765 43210",
    amenities: ["Private Pool", "Beach Access", "Courtyard"],
    amenitiesMr: ["खाजगी तलाव", "समुद्रकिनारा प्रवेश", "अंगण"],
    featured: false,
  },
  {
    id: 12,
    title: "Skyline Penthouse",
    titleMr: "स्कायलाइन पेंटहाउस",
    category: "Luxury Homes",
    location: "Bangalore",
    locationMr: "बेंगलुरू",
    price: "₹8.4 Cr",
    priceValue: 840,
    area: "5200 Sq.ft",
    image: luxury,
    description: "Duplex penthouse with private terrace garden, jacuzzi and 360° skyline views.",
    descriptionMr: "खाजगी टेरेस बाग, जकूझी आणि 360° स्कायलाइन दृश्यांसह डुप्लेक्स पेंटहाउस.",
    contact: "+91 98765 43210",
    amenities: ["Terrace Garden", "Jacuzzi", "Private Lift", "Smart Home"],
    amenitiesMr: ["टेरेस बाग", "जकूझी", "खाजगी लिफ्ट", "स्मार्ट होम"],
    featured: true,
  },
  {
    id: 13,
    title: "Skyline Penthouse",
    titleMr: "स्कायलाइन पेंटहाउस",
    category: "Luxury Homes",
    location: "Bangalore",
    locationMr: "बेंगलुरू",
    price: "₹8.4 Cr",
    priceValue: 840,
    area: "5200 Sq.ft",
    image: residential,
    description: "Duplex penthouse with private terrace garden, jacuzzi and 360° skyline views.",
    descriptionMr: "खाजगी टेरेस बाग, जकूझी आणि 360° स्कायलाइन दृश्यांसह डुप्लेक्स पेंटहाउस.",
    contact: "+91 98765 43210",
    amenities: ["Terrace Garden", "Jacuzzi", "Private Lift", "Smart Home"],
    amenitiesMr: ["टेरेस बाग", "जकूझी", "खाजगी लिफ्ट", "स्मार्ट होम"],
    featured: true,
  },
];

export default properties;
