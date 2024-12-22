import React from 'react';
import { skills } from '../data/skills';

const SkillsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-yellow-400 text-sm mb-2">Technical Expertise</p>
          <h1 className="text-4xl font-bold text-white">Skills</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">{category.category}</h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;