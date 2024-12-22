import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  onClick: () => void;
}

const ProjectCard = ({ title, category, image, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="absolute bottom-0 p-6 w-full">
          <p className="text-yellow-400 text-sm mb-2">{category}</p>
          <div className="flex items-center justify-between">
            <h3 className="text-white text-2xl font-bold">{title}</h3>
            <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;