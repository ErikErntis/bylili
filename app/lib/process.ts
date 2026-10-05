export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discovery", description: "We talk about your goals, ideas and what you need." },
  { number: "02", title: "Design", description: "I create a thoughtful design tailored to your brand." },
  { number: "03", title: "Development", description: "Your website comes to life with clean and responsive code." },
  { number: "04", title: "Launch & Support", description: "We go live, with a smooth handover and support to get you started." },
];
