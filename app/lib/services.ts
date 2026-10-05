export type ServiceId = "design" | "development" | "seo" | "support";
export type Service = { id: ServiceId; title: string; description: string; detail: string; includes: string[]; href?: string };

export const services: Service[] = [
  { id: "design", title: "Website Design & Development", description: "From business websites to booking systems and customer portals, designed and built around your needs.", detail: "From the first idea to a website you’re proud to share.", includes: ["Custom design", "Responsive development", "Launch and handover"], href: "/services/website-design-development" },
  { id: "development", title: "E-commerce Design & Development", description: "An online store that makes browsing, choosing and buying feel simple.", detail: "A considered shopping experience, from your first product page to checkout.", includes: ["Store design and product pages", "Payment and delivery setup", "Store management handover"], href: "/services/ecommerce-design-development" },
  { id: "seo", title: "SEO Basics", description: "Clear structure and search essentials for your existing website.", detail: "A practical review and tidy-up of the foundations that help search engines understand your pages.", includes: ["Titles, descriptions and headings", "Sitemap and indexing checks", "Search Console setup"], href: "/services/seo-basics" },
  { id: "support", title: "Ongoing Support", description: "Updates, improvements and a helping hand as your business grows.", detail: "One-off help or regular support, with the scope agreed together.", includes: ["Content and image updates", "Small improvements", "Technical help"] },
];

export const websiteService = {
  eyebrow: "Website design & development",
  title: "A website that feels like you.",
  accent: "And works for your business.",
  intro: "From a clear, welcoming business website to bookings and customer portals, I bring design and development together to help your business connect with customers and simplify everyday tasks.",
  benefits: ["Designed around your brand", "Made for mobile", "Ready for your next chapter"],
  solutions: {
    eyebrow: "What we can build",
    title: "Your business. Your way of working.",
    intro: "Start with what you need your website to do. We can connect existing tools or build tailored features, with scope and integrations agreed for your project.",
    items: [
      { title: "Business websites & landing pages", text: "Introduce your brand, explain your services and turn interest into enquiries with a complete website or a focused campaign page." },
      { title: "Booking & appointment systems", text: "Let customers choose a service and an available time, with booking management, confirmations and reminders tailored to your workflow." },
      { title: "Customer portals & member areas", text: "Give customers a place to sign in, view their bookings or requests and access the information or documents they need." },
      { title: "Custom business tools", text: "Bring enquiries, applications or day-to-day tasks into one place with tailored forms, simple dashboards and integrations with the tools you already use." },
    ],
  },
  included: [
    { title: "A clear direction", text: "We shape your page structure, priorities and visitor journey before moving into design." },
    { title: "Design that feels like you", text: "Colours, typography and layouts come together around your brand and the people you want to reach." },
    { title: "Responsive development", text: "Your agreed pages and features are built to work comfortably across phones, tablets and desktop screens." },
    { title: "A simple way to connect", text: "Clear calls to action and agreed contact options help visitors enquire, book or start a conversation." },
    { title: "SEO foundations", text: "Page titles, descriptions, heading structure and a sitemap are included as part of your new website." },
    { title: "Launch & handover", text: "We check the key journeys, connect your domain and walk through how to look after your website." },
  ],
  audiences: [
    { title: "Starting something new?", text: "Give your business a considered first home online, with the essentials in the right places." },
    { title: "Outgrown your current website?", text: "Bring your online presence up to date with who you are and what you offer now." },
    { title: "One idea. One focused page.", text: "Introduce a service, campaign or personal brand with a landing page built around a clear next step." },
  ],
  steps: [
    { title: "Let’s understand your business", text: "We talk about your goals, audience and content, then agree on the pages, scope and quote." },
    { title: "Find the right look", text: "I put together the visual direction and page designs. We review them together before development." },
    { title: "Bring it to life", text: "The approved design becomes a responsive website, with your content and agreed features in place." },
    { title: "Check, launch & hand over", text: "We review the website together, test the main journeys and get everything ready to go live." },
  ],
  faqs: [
    { question: "Can you build booking systems or other custom features?", answer: "Yes. Booking and appointment systems, customer portals, tailored forms and simple business dashboards can be included in a project. We first map out how the system should work, then decide whether to connect an existing service or build a custom solution. Features, integrations, any third-party fees and ongoing maintenance are agreed separately in the scope." },
    { question: "How much will my website cost?", answer: "Every project starts with a conversation. Your quote depends on the number of pages, content and features you need. The scope and price are agreed before work begins." },
    { question: "How long does a project take?", answer: "The timeline depends on the size of the website and how ready your content is. We agree on a schedule at the start, including time for your feedback." },
    { question: "Do I need to provide the text and images?", answer: "You provide your business information, logo and any existing brand materials. I can help you organise the content and identify what is missing. Any extra copywriting or image sourcing is agreed separately." },
    { question: "Can I update the website myself?", answer: "If you need to manage content yourself, we can include an editing setup in the scope. We choose what suits your needs and cover it during handover." },
    { question: "Are domain and hosting included?", answer: "Domain and hosting costs are outlined separately in your quote. I can help with setup and connection, with ownership and access agreed from the start." },
    { question: "What happens after launch?", answer: "You receive a handover, and we agree on any post-launch support before the project starts. Ongoing updates and improvements can be arranged separately when you need them." },
    { question: "Can you build an online store too?", answer: "Yes. E-commerce is a separate service because product management, payments and delivery need their own planning. Mention your store when we talk and we can work out the right scope." },
  ],
};
