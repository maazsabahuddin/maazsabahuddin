import React from 'react';
import { Mail } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 text-center">
      <div className="relative w-48 h-48 mx-auto mb-6">
        <div className="absolute inset-0 bg-yellow-400 rounded-hexagon transform rotate-45"></div>
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
          alt="Profile"
          className="relative z-10 w-full h-full object-cover rounded-hexagon"
        />
      </div>
      <h2 className="text-3xl font-bold text-white mb-2">Maaz Sahab Uddin</h2>
      <p className="text-gray-300 mb-6">
        Software Engineer | Fintech |<br />
        Backend | Data Science Enthusiast
      </p>
      <p className="text-sm text-gray-400 mb-8">
        An experienced Software Engineer with around 3 years of experience in the software industry
        Skilled in a variety of languages, tools, and platforms. Occasional Open-Source Contributor,
        and I always love to learn new technologies and speak at different meetups.
      </p>
      <button className="bg-white text-black px-6 py-2 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-gray-100 transition-colors">
        <Mail size={18} />
        Outlook Email
      </button>
    </div>
  );
};

export default ProfileCard;