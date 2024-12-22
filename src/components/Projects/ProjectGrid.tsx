import React from 'react';
import { Project } from '../../types/project';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onProjectClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          category={project.category}
          image={project.thumbnail}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;