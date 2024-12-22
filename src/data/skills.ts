export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming & Frameworks",
    skills: ["Python", "JavaScript", "Flask", "Django REST Framework", "FAST", "React", "Pandas", "JavaScript"]
  },
  {
    category: "Development & Integration",
    skills: ["REST APIs", "Microservices", "System Integration", "Git", "Docker", "AWS", "Agile Methodology", "Nginx", "Routing"]
  },
  {
    category: "Test & Automation",
    skills: ["Selenium", "Power Automate", "BOT Framework", "UFT/QTP", "TDD", "Functional Testing", "Debugging", "SDLC", "Logging"]
  },
  {
    category: "Databases & Cloud Services",
    skills: ["MongoDB", "BigQuery", "MySQL", "SQL", "Azure", "AWS", "Redis", "Data Engineering", "Virtualization", "CI/CD", "snowflake"]
  },
  {
    category: "Technologies",
    skills: ["REST/SOAP", "GraphQL", "APIs", "Jython", "API Design & Development", "OWASP", "Design Patterns", "System Integration", "prototyping", "Redis"]
  },
  {
    category: "Monitoring",
    skills: ["Grafana", "ELK Stack", "Elastic search", "Logstash", "Kibana", "Apache Airflow", "Apache Spark"]
  }
];