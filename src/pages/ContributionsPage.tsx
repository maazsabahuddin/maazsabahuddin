import React from 'react';
import { Github } from 'lucide-react';

const ContributionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-yellow-400 text-sm mb-2">Open Source</p>
          <h1 className="text-4xl font-bold text-white">GitHub Contributions</h1>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <Github className="w-8 h-8 text-white" />
            <h2 className="text-2xl font-bold text-white">My GitHub Activity</h2>
          </div>
          
          <img
            src="https://ghchart.rshah.org/maaz-sahab"
            alt="GitHub Contributions Graph"
            className="w-full rounded-lg bg-white/5 p-4"
          />

          <div className="mt-6 text-center">
            <a
              href="https://github.com/maaz-sahab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionsPage;
