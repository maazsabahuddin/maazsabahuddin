import React from 'react';
import { experiences } from '../data/experience';

const ExperiencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-yellow-400 text-sm mb-2">Professional Journey</p>
          <h1 className="text-4xl font-bold text-white">Experience</h1>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-lg p-8">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{exp.role}</h2>
                  <p className="text-yellow-400">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">{exp.date}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;