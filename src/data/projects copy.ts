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
    description: "Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros.",
    methodology: {
      title: "Agile Development Process",
      description: "We followed an agile methodology with 2-week sprints",
      image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&h=500&fit=crop"
    },
    flowChart: {
      title: "Project Architecture",
      description: "System design and data flow",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop"
    },
    team: [
      {
        name: "Maaz Sahab Uddin",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
      },
      {
        name: "Maaz Sahab Uddin",
        role: "Backend Developer",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
      }
    ],
    difficulties: {
      title: "Technical Challenges",
      description: "Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros."
    },
    achievements: [
      {
        title: "Performance Optimization",
        description: "Improved load time by 60%"
      },
      {
        title: "User Engagement",
        description: "Increased user retention by 40%"
      },
      {
        title: "Code Quality",
        description: "Maintained 90% test coverage"
      }
    ],
    technologies: [
      {
        name: "React",
        icon: "react-icon"
      },
      {
        name: "Node.js",
        icon: "nodejs-icon"
      },
      {
        name: "PostgreSQL",
        icon: "postgresql-icon"
      },
      {
        name: "AWS",
        icon: "aws-icon"
      }
    ]
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
    flowChart: {
      title: "System Architecture",
      description: "Microservices architecture and data flow",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=500&fit=crop"
    },
    team: [
      {
        name: "Maaz Sahab Uddin",
        role: "Tech Lead",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
      }
    ],
    difficulties: {
      title: "Scaling Challenges",
      description: "Handled high concurrent users and real-time inventory updates across multiple regions."
    },
    achievements: [
      {
        title: "Scale",
        description: "Successfully handled 100k concurrent users"
      },
      {
        title: "Performance",
        description: "99.9% uptime maintained"
      }
    ],
    technologies: [
      {
        name: "Next.js",
        icon: "nextjs-icon"
      },
      {
        name: "Python",
        icon: "python-icon"
      },
      {
        name: "MongoDB",
        icon: "mongodb-icon"
      }
    ]
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    category: "Machine Learning",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    companyName: "DataTech Solutions",
    websiteName: "InsightAI",
    duration: "12 Months",
    description: "Developed an advanced analytics platform using machine learning to provide predictive insights and automated reporting for business intelligence.",
    methodology: {
      title: "Data-Driven Development",
      description: "Implemented MLOps practices with continuous model training and deployment",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
    },
    flowChart: {
      title: "ML Pipeline Architecture",
      description: "End-to-end machine learning pipeline",
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&h=500&fit=crop"
    },
    team: [
      {
        name: "Maaz Sahab Uddin",
        role: "ML Engineer",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
      }
    ],
    difficulties: {
      title: "ML Model Optimization",
      description: "Optimizing model performance and reducing inference time while maintaining accuracy."
    },
    achievements: [
      {
        title: "Model Accuracy",
        description: "Achieved 95% prediction accuracy"
      },
      {
        title: "Processing Speed",
        description: "Reduced inference time by 70%"
      }
    ],
    technologies: [
      {
        name: "Python",
        icon: "python-icon"
      },
      {
        name: "TensorFlow",
        icon: "tensorflow-icon"
      },
      {
        name: "Docker",
        icon: "docker-icon"
      }
    ]
  },
  {
    id: 4,
    title: "Fintech Payment Gateway",
    category: "Financial Technology",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    companyName: "FinPay Solutions",
    websiteName: "PaySecure",
    duration: "10 Months",
    description: "Built a secure, scalable payment processing system handling multiple payment methods and currencies with real-time fraud detection.",
    methodology: {
      title: "Security-First Development",
      description: "Followed PCI DSS compliance and security best practices",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop"
    },
    flowChart: {
      title: "Payment Processing Flow",
      description: "Secure payment processing architecture",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop"
    },
    team: [
      {
        name: "Maaz Sahab Uddin",
        role: "Security Engineer",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
      }
    ],
    difficulties: {
      title: "Security Compliance",
      description: "Implementing robust security measures while maintaining system performance."
    },
    achievements: [
      {
        title: "Security",
        description: "Zero security incidents"
      },
      {
        title: "Transaction Volume",
        description: "Processed $1M+ daily transactions"
      }
    ],
    technologies: [
      {
        name: "Go",
        icon: "go-icon"
      },
      {
        name: "Kubernetes",
        icon: "kubernetes-icon"
      },
      {
        name: "Redis",
        icon: "redis-icon"
      }
    ]
  },
  {
    id: 5,
    title: "IoT Smart Home Platform",
    category: "IoT Development",
    thumbnail: "https://images.unsplash.com/photo-1558002038-bb4237b50b11?w=800&h=500&fit=crop",
    companyName: "SmartTech",
    websiteName: "HomeSmart",
    duration: "9 Months",
    description: "Developed an IoT platform for smart home automation, featuring real-time device control, energy monitoring, and predictive maintenance.",
    methodology: {
      title: "IoT-Agile Hybrid",
      description: "Combined IoT-specific development practices with agile methodology",
      image: "https://images.unsplash.com/photo-1558002038-bb4237b50b11?w=800&h=500&fit=crop"
    },
    flowChart: {
      title: "IoT Architecture",
      description: "Device communication and data flow",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop"
    },
    team: [
      {
        name: "Maaz Sahab Uddin",
        role: "IoT Developer",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
      }
    ],
    difficulties: {
      title: "Device Integration",
      description: "Managing diverse IoT devices and protocols while ensuring reliable communication."
    },
    achievements: [
      {
        title: "Device Support",
        description: "Integrated 50+ device types"
      },
      {
        title: "Response Time",
        description: "Sub-second device control"
      }
    ],
    technologies: [
      {
        name: "MQTT",
        icon: "mqtt-icon"
      },
      {
        name: "Node.js",
        icon: "nodejs-icon"
      },
      {
        name: "InfluxDB",
        icon: "influxdb-icon"
      }
    ]
  }
];