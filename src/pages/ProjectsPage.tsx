import React, { useState } from 'react';
import ProfileCard from '../components/Profile/ProfileCard';
import ProjectGrid from '../components/Projects/ProjectGrid';
import ProjectDetails from '../components/Projects/ProjectDetails';
import ProjectHeader from '../components/Projects/ProjectHeader';
import { projects } from '../data/projects';
import { Project } from '../types/project';

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#121212] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        <div className="lg:sticky lg:top-24 h-fit">
          <ProfileCard />
        </div>
        
        <div>
          <ProjectHeader />
          <ProjectGrid 
            projects={projects}
            onProjectClick={setSelectedProject}
          />
        </div>
      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectsPage;