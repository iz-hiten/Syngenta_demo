import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Header() {
  const [timeState, setTimeState] = useState('11:41:03 UTC');

  useEffect(() => {
    // Keep exact system date time initialized
    const interval = setInterval(() => {
      const now = new Date();
      const stringTime = now.toISOString().replace('T', ' ').substring(11, 19) + ' UTC';
      setTimeState(stringTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-sage shadow-xs flex items-center justify-between px-8 z-10">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold tracking-tight text-forest">FarmCast Platform</h2>
          <span className="text-[10px] bg-forest-cream text-forest px-2 py-0.5 rounded-full font-mono font-semibold border border-sage">
            PRO ENGINGE v4
          </span>
        </div>
        <p className="text-[11px] text-gray-500 font-medium">
          Automated Pest triggers, CRM fatigue guardrails, and automated agronomics previewer.
        </p>
      </div>

      <div className="flex items-center gap-6">
        {/* Live Status indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-forest/5 border border-sage">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-forest">
            SYNGENTA-LIVE
          </span>
        </div>

        {/* DateTime Display */}
        <div className="flex items-center gap-4 text-xs text-gray-600 font-mono">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-forest" />
            <span>2026-05-21</span>
          </div>
          <div className="flex items-center gap-1.5 border-l border-sage pl-4">
            <Clock className="w-3.5 h-3.5 text-forest" />
            <span>{timeState}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
