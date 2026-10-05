export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Optional local public path, e.g. /images/client.jpg. */
  avatar?: string;
  /** Add a rating only when the client actually provided one. */
  rating?: 1 | 2 | 3 | 4 | 5;
  published: boolean;
};

export const testimonialsContent = {
  eyebrow: "Kind words",
  title: "What clients say.",
  previewNotice: "Layout preview — these cards are placeholders, not client testimonials.",
};

/** Add genuine client feedback with permission to publish. */
export const testimonials: Testimonial[] = [];

/** Layout placeholders only; never represented as actual reviews. */
export const testimonialPlaceholders: Testimonial[] = [
  { id: "preview-1", quote: "A client’s feedback about the collaboration will appear here.", name: "Client name", role: "Role", company: "Company", published: true },
  { id: "preview-2", quote: "A client’s thoughts on the design process will appear here.", name: "Client name", role: "Role", company: "Company", published: true },
  { id: "preview-3", quote: "A client’s experience with their finished website will appear here.", name: "Client name", role: "Role", company: "Company", published: true },
];
