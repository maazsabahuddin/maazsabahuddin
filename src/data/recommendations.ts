export interface Recommendation {
  name: string;
  role: string;
  company: string;
  description: string;
  linkedinUrl: string;
  image: string;
}

export const recommendations: Recommendation[] = [
  {
    name: "John Smith",
    role: "Senior Software Engineer",
    company: "Google",
    description: "I had the pleasure of working with Maaz at TechWorks. His technical skills and problem-solving abilities are exceptional. He consistently delivered high-quality code and was always willing to help team members.",
    linkedinUrl: "https://linkedin.com/in/johnsmith",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Sarah Johnson",
    role: "Tech Lead",
    company: "Microsoft",
    description: "Maaz is an outstanding developer who brings both technical excellence and great teamwork to any project. His work on our data processing pipeline was instrumental in improving our system's efficiency.",
    linkedinUrl: "https://linkedin.com/in/sarahjohnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  }
];