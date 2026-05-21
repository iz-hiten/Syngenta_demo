import React, { useState } from 'react';
import { INDIAN_STATES_PEST_DATA, INITIAL_RECENT_CAMPAIGNS, INITIAL_FARMER_SEGMENTS } from '../constants/data';
import { StatePestData, CampaignRecord, FarmerSegment } from '../types';
import { TrendingUp, AlertOctagon, Users, Send, ShoppingBag, ShieldAlert, ArrowRight, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DashboardProps {
  onQuickGenerate: (crop: string, state: string, severity: string) => void;
  onNavigateToTab: (tab: string) => void;
}

export default function Dashboard({ onQuickGenerate, onNavigateToTab }: DashboardProps) {
  const [selectedState, setSelectedState] = useState<StatePestData>(INDIAN_STATES_PEST_DATA[1]); // Default Maharashtra
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  // Active metrics
  const activeCampaigns = INITIAL_RECENT_CAMPAIGNS.filter(c => c.status === 'Active' || c.status === 'Triggered').length;
  const farmersReachedToday = 124350;
  const avgEngagement = 81.6;
  const activePestAlerts = INDIAN_STATES_PEST_DATA.filter(s => s.pestPressure === 'high').length;

  return (
    <div className="space-y-8 pb-12">
      {/* Overview Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-gray-900 tracking-tight">
            Agricultural Intelligence Dashboard
          </h1>
          <p className="text-gray-500 text-sm">
            Real-time visual monitoring of regional pest pressure outbreaks, trigger alerts, and marketing fatigue scores.
          </p>
        </div>
        <button
          onClick={() => onNavigateToTab('generator')}
          className="flex items-center gap-2 bg-forest text-white hover:bg-forest/90 active:scale-95 px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-all cursor-pointer"
        >
          <span>Craft Campaign</span>
          <ArrowRight className="w-4 h-4 text-amber-gold" />
        </button>
      </div>

      {/* Top Telemetry Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white border-l-4 border-emerald-500 rounded-2xl shadow-xs p-5 flex items-center justify-between group hover:shadow-md transition-all duration-300">
          <div>
            <span className="text-[11px] font-semibold text-gray-400 font-mono tracking-wider uppercase">
              Total Campaigns Active
            </span>
            <p className="text-3xl font-display font-bold text-gray-900 mt-1">{activeCampaigns}</p>
            <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+12.4% vs last week</span>
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Send className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white border-l-4 border-[#204938] rounded-2xl shadow-xs p-5 flex items-center justify-between group hover:shadow-md transition-all duration-300">
          <div>
            <span className="text-[11px] font-semibold text-gray-400 font-mono tracking-wider uppercase">
              Farmers Reached Today
            </span>
            <p className="text-3xl font-display font-bold text-gray-900 mt-1">
              {farmersReachedToday.toLocaleString()}
            </p>
            <p className="text-xs text-forest font-semibold flex items-center gap-1 mt-1">
              <span>94.2% delivery success</span>
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-forest/5 text-forest flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white border-l-4 border-amber-gold rounded-2xl shadow-xs p-5 flex items-center justify-between group hover:shadow-md transition-all duration-300">
          <div>
            <span className="text-[11px] font-semibold text-gray-400 font-mono tracking-wider uppercase">
              Avg Engagement Rate
            </span>
            <p className="text-3xl font-display font-bold text-gray-900 mt-1">{avgEngagement}%</p>
            <p className="text-xs text-amber-gold font-bold flex items-center gap-1 mt-1">
              <span>High SMS & Audio CTR</span>
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white border-l-4 border-red-500 rounded-2xl shadow-xs p-5 flex items-center justify-between group hover:shadow-md transition-all duration-300">
          <div>
            <span className="text-[11px] font-semibold text-gray-400 font-mono tracking-wider uppercase">
              Pest Outbreaks Active
            </span>
            <p className="text-3xl font-display font-bold text-gray-950 mt-1">{activePestAlerts}</p>
            <p className="text-xs text-red-600 font-bold flex items-center gap-1 mt-1">
              <AlertOctagon className="w-3.5 h-3.5 animate-bounce" />
              <span>5 Urgent states</span>
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-700 flex items-center justify-center">
            <AlertOctagon className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Main Core Section: Interactive Grid Heatmap + Detail Recommendation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* State Heatmap Block */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-sage shadow-xs p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-display text-lg font-bold text-gray-950 flex items-center gap-2">
                  <span>Pest Status & Regional Heatmap</span>
                  <span className="text-xs bg-[#e8f0eb] text-forest font-mono px-2 py-0.5 rounded-md font-bold">India Core</span>
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Click a state below to view active pest infestation warnings, estimated farmers impacted, and direct product prescription advice.
                </p>
              </div>
            </div>

            {/* Quick map legend */}
            <div className="flex gap-4 my-3 text-xs bg-gray-50 p-2.5 rounded-xl border border-gray-100">
              <span className="font-semibold text-gray-500">Pressure Level:</span>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="text-red-700 text-[11px]">High Outbreak</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-gold"></span>
                <span className="text-amber-700 text-[11px]">Medium Strain</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-emerald-700 text-[11px]">Stable & Low</span>
              </div>
            </div>

            {/* Visual Heatmap Grid - Represented as a gorgeous high fidelity graphic map grid with rich badges etc */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4">
              {INDIAN_STATES_PEST_DATA.map((state) => {
                const isSelected = selectedState.id === state.id;
                const pressureColor =
                  state.pestPressure === 'high'
                    ? 'border-red-400 bg-red-50 text-red-950'
                    : state.pestPressure === 'medium'
                    ? 'border-amber-400 bg-amber-50 text-amber-950'
                    : 'border-emerald-300 bg-emerald-50 text-emerald-950';

                const badgeColor =
                  state.pestPressure === 'high'
                    ? 'bg-red-500 text-white'
                    : state.pestPressure === 'medium'
                    ? 'bg-amber-gold text-forest font-bold'
                    : 'bg-emerald-500 text-white';

                return (
                  <button
                    key={state.id}
                    onClick={() => setSelectedState(state)}
                    onMouseEnter={() => setHoveredState(state.id)}
                    onMouseLeave={() => setHoveredState(null)}
                    className={`p-3 rounded-xl border text-left transition-all relative cursor-pointer flex flex-col justify-between h-28 group ${pressureColor} ${
                      isSelected
                        ? 'ring-2 ring-forest scale-[1.03] shadow-md z-10'
                        : 'hover:scale-[1.01] hover:shadow-xs'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <span className="font-display font-bold text-xs line-clamp-1 group-hover:text-forest">
                          {state.name}
                        </span>
                        <span className={`text-[9px] font-mono font-bold uppercase py-0.5 px-1.5 rounded-full ${badgeColor}`}>
                          {state.pestPressure}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-500 font-semibold mt-1.5 line-clamp-2 leading-tight">
                        {state.pestName}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[9px] opacity-90 pt-1 border-t border-gray-100/30">
                      <span className="font-mono">{state.crop}</span>
                      <span className="font-bold font-mono">{(state.farmersImpactedCount / 1000).toFixed(1)}k Farmers</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 bg-forest-cream p-3 rounded-xl border border-sage text-[11px] text-forest/70 font-mono">
            💡 **Pro Tip**: Areas shown in **High Outbreak** alerts automatically benefit from Campaign Suppression Override limits on our Fatigue engine.
          </div>
        </div>

        {/* Selected State Recommendation Details Column */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-sage shadow-xs p-6 flex flex-col justify-between">
          <div>
            <div className="border-b border-sage pb-4 mb-4">
              <span className="text-[10px] bg-amber-light text-amber-700 font-mono font-bold tracking-widest uppercase px-2 py-1 rounded-md">
                AAG-INTELLIGENCE REPORT
              </span>
              <h3 className="font-display text-2xl font-bold text-gray-900 mt-2">
                {selectedState.name} Diagnosis
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-gray-400 font-mono uppercase font-bold">Threat Scope</span>
                <div className="flex justify-between items-center bg-gray-50 p-2.5 rounded-xl border border-gray-100 mt-1">
                  <div>
                    <p className="text-xs font-bold text-gray-700">Target Crop :</p>
                    <p className="text-sm font-semibold text-forest">{selectedState.crop}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-700 text-right">Primary Vector/Pest :</p>
                    <p className="text-sm font-semibold text-red-600 text-right">{selectedState.pestName}</p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-gray-400 font-mono uppercase font-bold">Active Risk Segment</span>
                <p className="text-xl font-display font-extrabold text-gray-900 mt-1">
                  {selectedState.farmersImpactedCount.toLocaleString()} Farmers
                </p>
                <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      selectedState.pestPressure === 'high' ? 'bg-red-500 w-4/5' : 'bg-amber-gold w-1/2'
                    }`}
                  ></div>
                </div>
              </div>

              <div className="bg-[#e8f0eb]/60 rounded-xl p-4 border border-[#cadfd2]">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-forest text-amber-gold mt-0.5">
                    <ShoppingBag className="w-4 h-4 fill-amber-gold/20" />
                  </div>
                  <div>
                    <span className="text-[10px] text-forest/70 font-mono font-bold uppercase">
                      Recommended Syngenta Product
                    </span>
                    <h4 className="font-semibold text-forest text-sm mt-0.5">
                      {selectedState.recommendedProduct}
                    </h4>
                    <p className="text-xs text-forest/85 italic leading-tight mt-1">
                      "{selectedState.productDescription}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 mt-6">
            <button
              onClick={() => onQuickGenerate(selectedState.crop, selectedState.name, selectedState.pestPressure)}
              className="w-full bg-forest text-white hover:bg-forest/95 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors outline-none cursor-pointer flex items-center justify-center gap-2 shadow-xs active:scale-99"
            >
              <span>Auto-Draft {selectedState.crop} Campaign</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-gray-500 text-center">
              Generate SMS, Voice advisory & WhatsApp scripts aligned with language and custom agronomics.
            </p>
          </div>
        </div>
      </div>

      {/* Grid: Fatigue Monitor + Recent Campaign Feeds */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Simple Campaign Fatigue Monitor Custom SVG Bar Chart */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-sage p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-display font-bold text-gray-900 text-md">Campaign Fatigue Monitor</h3>
              <p className="text-xs text-gray-500">Messages sent this week per farmer segment vs fatigue safety threshold</p>
            </div>
            <span className="text-[10px] bg-red-100 text-red-700 px-2.5 py-1 rounded-lg font-mono font-bold">
              THRESHOLD LIMIT: 5
            </span>
          </div>

          {/* Inline SVG Chart for perfect render */}
          <div className="relative mt-2 p-2 bg-slate-50 rounded-xl border border-gray-100">
            <svg viewBox="0 0 420 200" className="w-full h-auto">
              {/* Threshold indicator dotted line */}
              <line x1="40" y1="75" x2="400" y2="75" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" />
              <text x="365" y="70" fill="#ef4444" fontSize="8" fontWeight="bold">LIMIT EXCEEDED</text>

              {/* Grid Lines */}
              <line x1="40" y1="175" x2="400" y2="175" stroke="#e2e8f0" strokeWidth="1" />
              <line x1="40" y1="125" x2="400" y2="125" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="40" y1="75" x2="400" y2="75" stroke="#fca5a5" strokeWidth="0.5" />
              <line x1="40" y1="25" x2="400" y2="25" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2 2" />

              {/* Left axis values */}
              <text x="15" y="178" fill="#64748b" fontSize="8" fontFamily="monospace">0 msgs</text>
              <text x="15" y="128" fill="#64748b" fontSize="8" fontFamily="monospace">3 msgs</text>
              <text x="15" y="78" fill="#ef4444" fontSize="8" fontFamily="monospace">5 msgs</text>
              <text x="15" y="28" fill="#64748b" fontSize="8" fontFamily="monospace">8 msgs</text>

              {/* Individual Bars mapping segments */}
              {INITIAL_FARMER_SEGMENTS.slice(0, 6).map((item, index) => {
                const xPos = 60 + index * 55;
                const limit = 5;
                const value = item.messagesThisWeek;
                const barHeight = (value / 8) * 150; // max value scaling
                const yDraw = 175 - barHeight;
                const isOver = value > limit;
                const barColor = isOver ? '#ef4444' : '#1a3c2e';

                return (
                  <g key={item.id} className="cursor-pointer group">
                    {/* Background Bar track */}
                    <rect x={xPos} y="25" width="20" height="150" fill="#f1f5f9" rx="3" opacity="0.3" />
                    {/* Solid Bar */}
                    <rect x={xPos} y={yDraw} width="20" height={barHeight} fill={barColor} rx="3" className="transition-all duration-300 hover:opacity-85" />
                    {/* Label */}
                    <text x={xPos + 10} y="190" textAnchor="middle" fill="#1e293b" fontSize="7" fontWeight="bold">
                      {item.region.substring(0, 5)}
                    </text>
                    <text x={xPos + 10} y="198" textAnchor="middle" fill="#64748b" fontSize="7">
                      {item.crop}
                    </text>
                    {/* Tooltip value */}
                    <text x={xPos + 10} y={yDraw - 5} textAnchor="middle" fill={barColor} fontSize="8" fontWeight="bold">
                      {value}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex justify-between items-center mt-3 text-xs">
            <p className="text-gray-500 font-medium">Click segments on the <span className="font-semibold text-forest">Fatigue Monitor</span> tab to manage manual push overrides.</p>
            <button
              onClick={() => onNavigateToTab('fatigue')}
              className="text-[#1a3c2e] hover:underline font-bold text-[11px] uppercase tracking-wider flex items-center gap-1"
            >
              <span>Manage Safe Zones</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Recent Campaign Feed */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-sage p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-display font-bold text-gray-900 text-md">Recent Campaign Feed</h3>
                <p className="text-xs text-gray-500">Live monitoring of the last 5 triggered agronomic campaigns</p>
              </div>
              <span className="text-[10px] font-mono bg-forest-cream text-forest border border-sage py-0.5 px-2 rounded-full font-bold">
                Auto CRM Lock active
              </span>
            </div>

            <div className="space-y-3">
              {INITIAL_RECENT_CAMPAIGNS.slice(0, 5).map((campaign) => {
                const statusColors = {
                  Active: 'bg-emerald-100 text-emerald-800 border-emerald-400',
                  Triggered: 'bg-amber-100 text-amber-800 border-amber-300',
                  Snoozed: 'bg-gray-100 text-gray-700 border-gray-300',
                  Delivered: 'bg-blue-100 text-blue-800 border-blue-400',
                  'Auto-paused': 'bg-red-100 text-red-800 border-red-300',
                };

                return (
                  <div
                    key={campaign.id}
                    className="flex justify-between items-center p-3 rounded-xl border border-sage/65 hover:border-forest-cream hover:bg-forest-cream/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center font-mono text-xs font-bold text-gray-500 text-ash-700">
                        {campaign.channel === 'WhatsApp' ? '💬' : campaign.channel === 'SMS' ? '✉️' : campaign.channel === 'Voice Call' ? '📞' : '🌐'}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-800">{campaign.title}</h4>
                        <div className="flex items-center gap-2 mt-0.5 text-[10px] text-gray-500 font-semibold">
                          <span>{campaign.state}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span className="text-forest">{campaign.crop}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span>{campaign.farmersReached.toLocaleString()} reach</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-gray-700">{campaign.engagementRate}% CTR</span>
                        <p className="text-[8px] text-gray-400 mt-0.5">Engaged</p>
                      </div>
                      <span className={`text-[9px] font-mono font-extrabold uppercase py-0.5 px-2 rounded-md border ${statusColors[campaign.status] || ''}`}>
                        {campaign.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 text-xs flex justify-between items-center">
            <span className="text-gray-500 font-mono text-[10px]">Real-time synchronization active</span>
            <button
              onClick={() => onNavigateToTab('alert-engine')}
              className="text-forest hover:underline font-bold text-[11px] flex items-center gap-1 uppercase"
            >
              <span>See Alert triggers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
