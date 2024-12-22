export interface Experience {
  company: string;
  role: string;
  duration: string;
  date: string;
  responsibilities: string[];
}

export const experiences = [
  {
    company: "PACE",
    role: "Backend Python Developer",
    duration: "3 months",
    date: "01/2024 - Present",
    responsibilities: [
      "Developed a reporting tool to monitor app usability metrics and user adoption rates, enabling data-driven insights into 50% for better product decisions",
      "Developed and executed over 15 unit test cases for critical product features, including reporting services, achieved early detection of bugs which reduced production issues by 40%",
      "Implemented a logging mechanism to track user activities with 100% coverage, logged interface calls and changes, reduced lab time by 35%",
      "Refactored existing services by applying OOP principles and design patterns, enhancing code structure which led to a 30% increase in maintainability",
      "Collaborated with stakeholders for feature requirements gathering and implementation"
    ]
  },
  {
    company: "TechWorks",
    role: "Software Developer",
    duration: "8 months",
    date: "04/2023 - 04/2024",
    responsibilities: [
      "Developed a solution to automate Study file processing in ETL workflows, ensuring data updates every few minutes which reduced manual intervention by over 90%",
      "Implemented several services for monitoring data usage, reducing query times by 50% and enabling rapid access to insights for decision-making",
      "Improved application performance by integrating GitHub Actions into the CI/CD pipeline, automating code builds with testing to ensure infrastructure provisioning. This increased deployment reliability by 25% and minimized manual testing during releases",
      "Migrated data from two databases to new data platform while ensuring zero downtime, resulting in an increase in successful client uploads from approximately 70% to a consistent 99% success rate"
    ]
  },
  {
    company: "TechWorks",
    role: "Software Developer",
    duration: "11 months",
    date: "08/2021 - 08/2022",
    responsibilities: [
      "Engineered a cloud web scraping tools with integrated crawlers leveraging 10+ Python BOT frameworks, this initiative improved transaction speeds by 35% optimizing customer experience during online purchases",
      "Developed and maintained scalable web scraping solutions utilizing Selenium and Beautiful Soup libraries facilitating extraction of flow features that minimized system accuracy and integrity across all user transactions",
      "Developed an innovative solution utilizing advanced algorithms to generate unique browser fingerprints for each session, enabling seamless VPN integration and proxy rotation",
      "Integrated Rest Api for Virtual Card transactions, enabling seamless VPN switches, enhanced security and performance across 5+ platforms",
      "Developed browser infrastructure for Raw Based Access Control List, ensuring 100% of access to sensitive resources is controlled users"
    ]
  },
  {
    company: "Forex",
    role: "Software Developer",
    duration: "7 months",
    date: "12/2020 - 07/2021",
    responsibilities: [
      "Developed and deployed automated trading solutions with Forex Codebase, enhancing user experience resulting in a 25% increase in transaction completion rates within the first quarter",
      "Streamlined query logic processes to minimize database load, implementing a significant improvement in statement efficiency and enhancing overall system performance by 40%",
      "Integrated tools into the Forex platform, delivering real-time updates on FPIs like latest trades and transactions, notably tracking improved operational efficiency by automating report monitoring by 35%"
    ]
  }
];