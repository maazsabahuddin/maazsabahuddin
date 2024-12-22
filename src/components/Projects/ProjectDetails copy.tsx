import React from 'react';
import { X } from 'lucide-react';

interface ProjectDetailsProps {
  project: {
    title: string;
    companyName: string;
    websiteName: string;
    duration: string;
    description: string;
    methodologyImage?: string;
    flowChartImage?: string;
  };
  onClose: () => void;
}

const ProjectDetails = ({ project, onClose }: ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-[#121212] rounded-lg max-w-4xl w-full p-8 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
          
          <h1 className="text-4xl font-bold text-white mb-8">{project.title}</h1>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-yellow-400 text-sm mb-1">Company Name</p>
              <p className="text-white text-xl">{project.companyName}</p>
            </div>
            <div>
              <p className="text-yellow-400 text-sm mb-1">Website Name</p>
              <p className="text-white text-xl">{project.websiteName}</p>
            </div>
            <div>
              <p className="text-yellow-400 text-sm mb-1">Duration</p>
              <p className="text-white text-xl">{project.duration}</p>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-yellow-400 text-sm mb-2">Description</p>
            <p className="text-gray-300">{project.description}</p>
          </div>

          {project.methodologyImage && (
            <div className="mb-8">
              <p className="text-yellow-400 text-sm mb-2">Project Management Methodologies</p>
              <img
                src={project.methodologyImage}
                alt="Project Methodology"
                className="w-full rounded-lg"
              />
            </div>
          )}

          {project.flowChartImage && (
            <div>
              <p className="text-yellow-400 text-sm mb-2">Flow Chart</p>
              <img
                src={project.flowChartImage}
                alt="Flow Chart"
                className="w-full rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
