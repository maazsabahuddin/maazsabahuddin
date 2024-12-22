import React from 'react';
import { certifications } from '../data/certifications';
import { Award, FileText } from 'lucide-react';

const CertificationsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-yellow-400 text-sm mb-2">Professional Development</p>
          <h1 className="text-4xl font-bold text-white">Licenses & Certifications</h1>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-400/10 rounded-lg">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-bold text-white mb-2">{cert.title}</h2>
                  <p className="text-gray-400">{cert.issuer}</p>
                  {cert.date && <p className="text-sm text-gray-500 mt-1">{cert.date}</p>}
                </div>
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-400/10 rounded-lg text-yellow-400 hover:bg-yellow-400/20 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>View PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
