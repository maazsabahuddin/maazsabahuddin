export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  companyName: string;
  websiteName: string;
  duration: string;
  description: string;
  methodology: {
    title: string;
    description: string;
    image: string;
  };
  flowChart: {
    title: string;
    description: string;
    image: string;
  };
  team: {
    name: string;
    role: string;
    image: string;
  }[];
  difficulties: {
    title: string;
    description: string;
  };
  achievements: {
    title: string;
    description: string;
  }[];
  technologies: {
    name: string;
    icon: string;
  }[];
}