import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import CertificationsPage from './pages/CertificationsPage';
import RecommendationsPage from './pages/RecommendationsPage';
import ContributionsPage from './pages/ContributionsPage';

function App() {
  return (
    <BrowserRouter basename="/maazsabahuddin">
      <div className="min-h-screen bg-[#121212]">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contributions" element={<ContributionsPage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
          <Route path="/licenses" element={<CertificationsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;