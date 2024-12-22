export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  pdfUrl: string;
}

export const certifications: Certification[] = [
  {
    title: "Cybersecurity Certification (Networking, Ethical Hacking, App Testing, Security Issues Linux & System Applications)",
    issuer: "Lambton University",
    pdfUrl: "/certifications/cybersecurity.pdf"
  },
  {
    title: "Business Analytics Certification (Data Analysis and Visualization, Data Communication, Database, Business Development)",
    issuer: "Lambton University",
    pdfUrl: "/certifications/business-analytics.pdf"
  }
];