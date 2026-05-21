import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ContentGenerator from './components/ContentGenerator';
import FatigueDetector from './components/FatigueDetector';
import AlertTriggerEngine from './components/AlertTriggerEngine';
import VernacularPreview from './components/VernacularPreview';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Parameters to pass to ContentGenerator when triggered from Dashboard quick-links
  const [generatorPreset, setGeneratorPreset] = useState<{
    crop: string;
    state: string;
    severity: string;
  } | null>(null);

  // Quick draft action handler
  const handleQuickGenerate = (crop: string, state: string, severity: string) => {
    // Set custom presets
    setGeneratorPreset({ crop, state, severity });
    // Tab routing jump
    setActiveTab('generator');
  };

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    // If we navigate away from generator, clear presets
    if (newTab !== 'generator') {
      setGeneratorPreset(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex text-gray-800 font-sans">
      {/* Platform Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main Container */}
      <div className="flex-1 pl-64 flex flex-col min-h-screen">
        {/* Fixed Header */}
        <Header />

        {/* Dynamic Content Panel viewports */}
        <main className="flex-1 mt-16 p-8 overflow-y-auto max-w-7xl mx-auto w-full">
          {activeTab === 'dashboard' && (
            <Dashboard
              onQuickGenerate={handleQuickGenerate}
              onNavigateToTab={handleTabChange}
            />
          )}

          {activeTab === 'generator' && (
            <ContentGenerator
              initialCrop={generatorPreset?.crop}
              initialState={generatorPreset?.state}
              initialSeverity={generatorPreset?.severity}
            />
          )}

          {activeTab === 'fatigue' && <FatigueDetector />}

          {activeTab === 'alert-engine' && <AlertTriggerEngine />}

          {activeTab === 'preview' && <VernacularPreview />}
        </main>
      </div>
    </div>
  );
}
