/** Add real contact details. Empty values are not rendered as links. */
export const contactDetails = {
  email: "",
  /** International digits only, e.g. country code followed by phone number. */
  whatsapp: "",
  instagramUrl: "",
  linkedinUrl: "",
  privacyUrl: "",
  termsUrl: "",
};

export const contactContent = {
  eyebrow: "Let’s work together",
  title: ["Ready to bring your", "ideas to life?"],
  description: "Let’s create a website that represents your brand, connects with your audience and helps your business grow.",
  button: "Get a free consultation",
  tagline: "Websites with purpose.",
  location: "Based in Indonesia. Creating everywhere.",
  socialHeading: "Follow me",
};

export function getContactHref(): string | undefined {
  const phone = contactDetails.whatsapp.replace(/\D/g, "");
  if (phone) return `https://wa.me/${phone}?text=${encodeURIComponent("Hi Lili! I’d love to discuss a website project.")}`;
  if (contactDetails.email.trim()) return `mailto:${contactDetails.email.trim()}`;
  return undefined;
}
