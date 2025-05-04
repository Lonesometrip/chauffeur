import {
  sklasse,
  bmw7,
  vklasse,
  // gklasse removed
  // Tech icons removed
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "services",
    title: "Services",
    hasDropdown: true,
    dropdownItems: [
      { id: "chauffeur-service", title: "Chauffeur Service", href: "#services" },
      { id: "flughafen-transfer", title: "Flughafen Transfer", href: "#services" },
      { id: "vip-service", title: "VIP Service", href: "#services" }
    ]
  },
  {
    id: "tourismus",
    title: "Tourismus",
    hasDropdown: true,
    dropdownItems: [
      { id: "shopping-touren", title: "Shopping-Touren", href: "#tourismus" },
      { id: "freizeitparks", title: "Freizeitparks", href: "#tourismus" },
      { id: "staedtereisen", title: "Städtereisen", href: "#tourismus" },
      { id: "landurlaub", title: "Landurlaub", href: "#tourismus" },
      { id: "medizinische-reisen", title: "Medizinische Reisen", href: "#tourismus" },
      { id: "wellness-spa", title: "Wellness & Spa", href: "#tourismus" }
    ]
  },
  {
    id: "fuhrpark",
    title: "Fuhrpark",
    hasDropdown: true,
    dropdownItems: [
      { id: "s-klasse", title: "Mercedes-Benz S-Klasse", href: "#fuhrpark" },
      { id: "bmw-7er", title: "BMW 7er Serie", href: "#fuhrpark" },
      { id: "v-klasse", title: "Mercedes-Benz V-Klasse", href: "#fuhrpark" }
    ]
  },
  {
    id: "contact",
    title: "Contact",
    hasDropdown: false
  },
];

export const services = [
  {
    title: "Mercedes-Benz S-Klasse",
    icon: sklasse,
    description: "Luxuriöse Limousine mit erstklassigem Komfort und modernster Technologie für anspruchsvolle Geschäftsreisen."
  },
  {
    title: "BMW 7er Serie",
    icon: bmw7,
    description: "Elegante Sportlimousine mit dynamischem Fahrerlebnis und exklusiver Innenausstattung für höchste Ansprüche."
  },
  {
    title: "Mercedes-Benz V-Klasse",
    icon: vklasse,
    description: "Geräumiger Premium-Van mit flexiblem Innenraum für Gruppenfahrten und komfortables Reisen mit viel Gepäck."
  },
];

// Technologies section removed

export const experiences = [
  {
    title: "Chauffeur Service",
    company_name: "Geschäftsreisen & Limousinenservice",
    icon: eduskill,
    iconBg: "#D4AF37",
    date: "24/7 Service",
    points: [
      "Professioneller Chauffeurservice für Geschäftsreisen mit diskreten und zuverlässigen Fahrern.",
      "Komfortable Fahrzeuge mit WLAN, Erfrischungen und Zeitungen für produktive Reisezeit.",
      "Maßgeschneiderte Lösungen für Ihre individuellen Mobilitätsbedürfnisse mit höchstem Komfort.",
    ],
  },
  {
    title: "Flughafen Transfer",
    company_name: "Zuverlässige Flughafentransfers",
    icon: mathwork,
    iconBg: "#D4AF37",
    date: "Pünktlichkeitsgarantie",
    points: [
      "Pünktliche Flughafentransfers mit Gepäckservice und Flugverfolgung für stressfreies Reisen.",
      "Persönlicher Empfang am Flughafen mit Namensschild und Unterstützung beim Gepäck.",
      "Flexible Buchungsoptionen für Einzel- und Gruppenreisen zu allen Flughäfen.",
    ],
  },
  {
    title: "VIP Service",
    company_name: "Exklusive Betreuung & Events",
    icon: edunet,
    iconBg: "#D4AF37",
    date: "Höchste Diskretion",
    points: [
      "Exklusiver VIP-Service für Prominente, Künstler und besondere Gäste mit höchster Diskretion.",
      "Professionelle Betreuung bei Veranstaltungen, Konzerten und Festivals mit individueller Planung.",
      "Koordination mehrerer Fahrzeuge für Gruppenfahrten und Events mit nahtloser Logistik.",
    ],
  },
];

export const projects = [
  {
    name: "Shopping-Touren",
    description:
      "Exklusive Shopping-Erlebnisse in den besten Einkaufsmetropolen. Vom Kurfürstendamm in Berlin bis zur Königsallee in Düsseldorf - wir bringen Sie zu den angesagtesten Boutiquen und Outlets.",
    tags: [
      { name: "Luxus", color: "blue-text-gradient" },
      { name: "Mode", color: "green-text-gradient" },
      { name: "VIP-Service", color: "pink-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "#fuhrpark",
  },
  {
    name: "Freizeitparks",
    description:
      "Familienausflüge zu den beliebtesten Freizeitparks Deutschlands und Europas. Europa-Park, Phantasialand, Legoland und mehr - stressfrei und komfortabel mit unserem Chauffeurservice.",
    tags: [
      { name: "Familie", color: "blue-text-gradient" },
      { name: "Unterhaltung", color: "green-text-gradient" },
      { name: "Tagesausflug", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "#fuhrpark",
  },
  {
    name: "Beliebte Städte Europas",
    description:
      "Entdecken Sie die schönsten Metropolen Europas. Paris, Amsterdam, Wien, Prag oder Mailand - wir organisieren Ihre Städtereise mit erstklassigem Chauffeurservice vor Ort.",
    tags: [
      { name: "International", color: "blue-text-gradient" },
      { name: "Städtereise", color: "green-text-gradient" },
      { name: "Kultur", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link: "#fuhrpark",
  },
  {
    name: "Bauernhöfe & Landurlaub",
    description:
      "Authentische Erlebnisse auf traditionellen Bauernhöfen. Erleben Sie ländliche Idylle, regionale Produkte und Aktivitäten für die ganze Familie in malerischen Landschaften.",
    tags: [
      { name: "Natur", color: "blue-text-gradient" },
      { name: "Familie", color: "green-text-gradient" },
      { name: "Tradition", color: "pink-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "#fuhrpark",
  },
  {
    name: "Medizinische Reisen",
    description:
      "Diskrete und komfortable Beförderung zu medizinischen Einrichtungen. Wir bieten spezialisierten Service für Patienten mit besonderen Anforderungen und sorgen für eine stressfreie An- und Abreise.",
    tags: [
      { name: "Gesundheit", color: "blue-text-gradient" },
      { name: "Diskretion", color: "green-text-gradient" },
      { name: "Komfort", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "#fuhrpark",
  },
  {
    name: "Wellness & Spa",
    description:
      "Entspannende Ausflüge zu den exklusivsten Wellness-Resorts und Thermen. Genießen Sie Ihre Auszeit in vollen Zügen, während wir uns um den Transport kümmern.",
    tags: [
      { name: "Entspannung", color: "blue-text-gradient" },
      { name: "Luxus", color: "green-text-gradient" },
      { name: "Wohlbefinden", color: "pink-text-gradient" },
    ],
    image: sketcher,
    source_code_link: "#fuhrpark",
  },
];
