import React from 'react';
import { recommendations } from '../data/recommendations';
import { Linkedin } from 'lucide-react';

const RecommendationsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-yellow-400 text-sm mb-2">What People Say</p>
          <h1 className="text-4xl font-bold text-white">Recommendations</h1>
        </div>

        <div className="space-y-6">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-start gap-6">
                <img
                  src={rec.image}
                  alt={rec.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold text-white">{rec.name}</h2>
                      <p className="text-yellow-400">{rec.role}</p>
                      <p className="text-gray-400 text-sm">{rec.company}</p>
                    </div>
                    <a
                      href={rec.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="mt-4 text-gray-300">{rec.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;
