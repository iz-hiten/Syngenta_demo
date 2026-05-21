import React from 'react';
import { Leaf, LayoutDashboard, Wand2, ShieldAlert, BellRing, Mic, Sparkles } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Monitor Dashboard', icon: LayoutDashboard },
    { id: 'generator', label: 'AI Msg Generator', icon: Wand2 },
    { id: 'fatigue', label: 'Fatigue Monitor', icon: ShieldAlert },
    { id: 'alert-engine', label: 'Pest Alert Engine', icon: BellRing },
    { id: 'preview', label: 'Voice & Badging', icon: Mic },
  ];

  return (
    <aside className="w-64 bg-forest text-white h-screen flex flex-col justify-between border-r border-[#265340] fixed left-0 top-0 z-20">
      <div className="flex flex-col">
        {/* Logo Compartment */}
        <div className="p-6 border-b border-[#265340] flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-gold flex items-center justify-center shadow-lg">
            <Leaf className="w-6 h-6 text-forest fill-forest" />
          </div>
          <div>
            <span className="font-display text-xl font-bold tracking-tight text-fafafa">FarmCast</span>
            <p className="text-[10px] text-sage-dark/80 tracking-widest uppercase font-mono font-medium -mt-1">
              Syngenta Intel
            </p>
          </div>
        </div>

        {/* Navigation Linkage */}
        <nav className="p-4 space-y-2 mt-4">
          <p className="text-[10px] text-sage-dark/50 font-mono font-bold tracking-widest uppercase px-3 mb-2">
            Workspace
          </p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300 group ${
                  isActive
                    ? 'bg-amber-gold text-forest shadow-md font-semibold'
                    : 'text-sage-dark/80 hover:bg-[#204938] hover:text-white'
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-transform duration-300 group-hover:scale-105 ${
                    isActive ? 'text-forest' : 'text-sage-dark/60 group-hover:text-white'
                  }`}
                />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Powered by AI Badge */}
      <div className="p-4 border-t border-[#265340]">
        <div className="bg-[#204938] rounded-xl p-3 border border-[#2e624c] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-gold animate-pulse fill-amber-gold/20 flex-shrink-0" />
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-gold font-bold">
              Cognitive Core
            </span>
            <p className="text-[10px] text-sage-dark text-slate-300">
              Syngenta Agronomy AI v3.5
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
