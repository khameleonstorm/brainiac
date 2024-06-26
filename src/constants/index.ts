import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  linkedin,
  whatsapp,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Who We Are",
    url: "#who we are",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Enhance productivity with smart automation & top-notch security, the perfect solution for Micro - Large businesses.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: "Hassle free AI integration for all business software using third-party APIs.",
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Static Web-pages, Suitable for small business owners",
    price: "100",
    features: [
      "Free Domain, Not Personalized",
      "Superb User Experience",
      "No database, Server, Custom Email and Hosting.",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Full Stack Services for medium business owners",
    price: "500",
    features: [
      "Custom Domain and Email Valid for 1yr",
      "Hosting Services and Database Services if needed",
      "Continous Project Management.",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "For all business classification, Ideas and Collaboration.",
    price: null,
    features: [
      "Custom Domain, Email and Hosting, Valid for 1yr",
      "Personalized Software with Cross-platform Compatibility.",
      "Robust Technology Services and Branding.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Scalability",
    text: "Design scalable software with robust infrastructure and flexible architecture to handle growing data volumes and user loads seamlessly.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Analytics",
    text: "Empower clients with data tools like analytics dashboards, reporting, predictive analytics for informed decision-making.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Integration",
    text: "Facilitate seamless integration, streamlining operations and becoming an integral part of their tech stack for enhanced productivity.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Support",
    text: "Offer comprehensive support, including onboarding, documentation, tutorials, and responsive customer service for all growth stages.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Innovation",
    text: "Continuously innovate with updates and enhancements, meeting client needs and maintaining competitiveness in evolving markets.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Adaptability",
    text: "Tailor software with modular designs and white-labeling, ensuring long-term relevance and customer satisfaction through customization.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Whatsapp",
    iconUrl: whatsapp,
    url: "https://wa.me/2348086941101",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/beyndtech",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/beyndtech",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "http://t.me/beyndtech",
  },
  {
    id: "4",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/beyndtech",
  },
];
