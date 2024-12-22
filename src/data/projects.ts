import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: "MVP",
    category: "Website Development",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    companyName: "Embedded Comma",
    websiteName: "MVP",
    duration: "6 Months",
    description: `
      <p><strong>Affiliate marketing cookies</strong> are small text files that track a user's activity on a website and determine if they make a purchase.</p>
      <br><p><strong>How they work:</strong></p>
      <ul>
        <li>When a user clicks an affiliate link, a cookie is stored on their device that contains information about the affiliate.</li>
        <li>This allows the affiliate to track the user's activity and receive a commission if the user makes a purchase.</li>
      </ul>
      <br><p><strong>Why they're important:</strong></p>
      <ul>
        <li>Measure their performance</li>
        <li>Track user activity over time</li>
        <li>Measure clicks, conversions, and sales</li>
      </ul>
      <br><p><strong>Challenge:</strong></p>
      <p>Third-party cookies are being phased out in favor of more privacy-centric alternatives. <strong>Google plans to deprecate third-party cookies in early 2025</strong>. This means that affiliate networks and vendors will no longer be able to attribute conversions from affiliates after 2024.</p>
      <br><p>To address this challenge, the project involved designing a <strong>privacy-centric tracking mechanism</strong> that maintains accurate performance measurement while adhering to evolving data privacy standards.</p>
    `,
    methodology: {
      title: "Agile Development Process",
      description: "We followed an agile methodology with 2-week sprints",
      image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&h=500&fit=crop"
    },
    architecture: {
      title: "System Architecture",
      description: "Designed a robust and scalable system architecture for the MVP.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop"
    },
    technologies: [
      { name: "React", icon: "react-icon" },
      { name: "Node.js", icon: "nodejs-icon" },
      { name: "PostgreSQL", icon: "postgresql-icon" },
      { name: "AWS", icon: "aws-icon" }
    ],
    challenges: [
      {
        title: "Evolving Requirements",
        description: "Adapting to frequent changes in project requirements during the development lifecycle."
      },
      {
        title: "Tight Deadlines",
        description: "Delivering the MVP within a constrained timeline while ensuring high quality."
      }
    ],
    keyAchievements: [
      {
        title: "Scalable Architecture",
        description: "Implemented a scalable architecture that handles over 10,000 concurrent users."
      },
      {
        title: "Rapid Prototyping",
        description: "Delivered a fully functional prototype within the first three months."
      }
    ],
    userJourney: "Enabled users to create accounts, access personalized dashboards, and track project progress seamlessly."
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop",
    companyName: "Tech Stack",
    websiteName: "ShopHub",
    duration: "8 Months",
    description: "Built a scalable e-commerce platform with advanced features including real-time inventory management, payment processing, and analytics dashboard.",
    methodology: {
      title: "Scrum Framework",
      description: "Implemented Scrum with daily standups and sprint planning",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop"
    },
    architecture: {
      title: "Microservices Architecture",
      description: "Implemented a microservices architecture to handle scalability and resilience.",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=500&fit=crop"
    },
    technologies: [
      { name: "Next.js", icon: "nextjs-icon" },
      { name: "Python", icon: "python-icon" },
      { name: "MongoDB", icon: "mongodb-icon" }
    ],
    challenges: [
      {
        title: "Scalability",
        description: "Handling high concurrent users during peak hours while maintaining system performance."
      },
      {
        title: "Real-Time Updates",
        description: "Ensuring accurate and consistent inventory updates in real time."
      }
    ],
    keyAchievements: [
      {
        title: "Seamless Payment Integration",
        description: "Integrated multiple payment gateways, enhancing user checkout experience."
      },
      {
        title: "Real-Time Analytics",
        description: "Built a dashboard for real-time inventory and sales analytics."
      }
    ],
    userJourney: "Simplified user flows for product discovery, checkout, and order tracking."
  }
  // Repeat similar updates for other projects...
];
