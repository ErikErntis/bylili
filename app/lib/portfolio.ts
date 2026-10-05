import type { StaticImageData } from "next/image";
import concepts from "../_assets/portfolio-concepts.png";
import fareglitch from "../_assets/fareglitch-homepage.png";

export type PortfolioProject = {
  id: string;
  name: string;
  category: string;
  isConcept: boolean;
  published: boolean;
  image: StaticImageData | string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  role?: string;
  collaboration?: string;
  /** For the bundled three-panel image. Omit for a normal project image. */
  imagePanel?: 0 | 1 | 2;
  industry: string;
  headline: string;
  problem: string;
  approach: string;
  solution: string;
};

/** Real collaborations and clearly labelled fictional design concepts. */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "fareglitch",
    name: "Fareglitch",
    category: "UI/UX Design Assistance",
    isConcept: false,
    published: true,
    image: fareglitch,
    imageAlt: "Fareglitch homepage with flight discovery messaging and its bird mascot against a blue background",
    imageFit: "contain",
    role: "UI/UX Design Assistant",
    collaboration: "Contributed alongside Fareglitch’s founder and developer, Erik Ernits.",
    industry: "Travel & Technology",
    headline: "Travel discovery, reimagined.",
    problem: "Fareglitch is a travel discovery platform that helps travellers explore trips based on their budget, dates and preferences.",
    approach: "Lili contributed to the project in a supporting UI/UX design role, working alongside its founder and developer.",
    solution: "The screenshot shows the Fareglitch website. Lili’s portfolio credit covers UI/UX design assistance within the wider project, rather than sole responsibility for its design or development.",
  },
  {
    id: "dloka-cafe", name: "D’Loka Café", category: "Website Design & Development",
    isConcept: true, published: true, image: concepts, imagePanel: 0,
    imageAlt: "Warm café interior with wood furniture and brass pendant lights",
    industry: "Hospitality", headline: "A place to slow down.",
    problem: "Concept brief: help a neighbourhood café communicate its atmosphere and make essential visitor information easy to find.",
    approach: "Warm photography, clear menus and a simple mobile-first layout.",
    solution: "A proposed café website with space for the menu, opening hours and a reservation enquiry. This is a fictional concept, not a launched client website.",
  },
  {
    id: "lumiere-skin", name: "Lumière Skin Clinic", category: "Website Design & Development",
    isConcept: true, published: true, image: concepts, imagePanel: 1,
    imageAlt: "Editorial skincare portrait against a warm beige background",
    industry: "Beauty & Wellness", headline: "Natural beauty. Thoughtful care.",
    problem: "Concept brief: make a skincare clinic’s services feel approachable and easy to explore.",
    approach: "Quiet typography, warm neutrals and a clear path from treatment information to a consultation enquiry.",
    solution: "A proposed clinic website with service explanations and a consultation flow. No real clinic, medical claims or client outcomes are represented.",
  },
  {
    id: "villa-satu", name: "Villa Satu", category: "Website Design & Development",
    isConcept: true, published: true, image: concepts, imagePanel: 2,
    imageAlt: "Tropical villa and swimming pool surrounded by palm trees",
    industry: "Travel & Hospitality", headline: "Your private escape in Bali.",
    problem: "Concept brief: introduce a private villa and help potential guests decide whether it suits their stay.",
    approach: "Immersive photography with clear accommodation details and a simple enquiry path.",
    solution: "A proposed villa website with room information, amenities and a stay enquiry. The property and project are fictional.",
  },
];

export const publishedPortfolioProjects = portfolioProjects.filter((project) => project.published);
