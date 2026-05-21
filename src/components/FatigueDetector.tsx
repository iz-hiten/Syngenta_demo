import React, { useState } from 'react';
import { INITIAL_FARMER_SEGMENTS } from '../constants/data';
import { FarmerSegment } from '../types';
import { ShieldCheck, AlertCircle, PlayCircle, ToggleLeft, ToggleRight, ArrowUpRight, Ban, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function FatigueDetector() {
  const [segments, setSegments] = useState<FarmerSegment[]>(INITIAL_FARMER_SEGMENTS);
  const [selectedSegId, setSelectedSegId] = useState<string>(INITIAL_FARMER_SEGMENTS[0].id);

  // Find currently active segment
  const activeSegment = segments.find((s) => s.id === selectedSegId) || segments[0];

  // Manual Override Toggle handler
  const handleToggleOverride = (id: string) => {
    setSegments((prev) =>
      prev.map((seg) => {
        if (seg.id === id) {
          const updatedOverride = !seg.manualOverride;
          // Dynamically adjust status or visual look
          let newStatus = seg.status;
          if (updatedOverride) {
            // Safe or warning
          } else {
            // Re-eval original status
          }
          return {
            ...seg,
            manualOverride: updatedOverride,
          };
        }
        return seg;
      })
    );
  };

  // Helper values for line chart plots
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const maxMsgVal = 8; // to calibrate svg height

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="font-display text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
          <span>Campaign Fatigue Dashboard</span>
          <ShieldCheck className="text-forest w-7 h-7" />
        </h1>
        <p className="text-gray-500 text-sm">
          Prevent campaign blindness. Track regional broadcast volumes, automate suppression protocols, and configure high-priority overrides.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Farmer Segments Table block */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-sage shadow-xs overflow-hidden">
          <div className="p-5 border-b border-sage flex justify-between items-center bg-forest-cream">
            <div>
              <h3 className="font-display font-bold text-forest text-base">Regional Audience Fatigue Registry</h3>
              <p className="text-xs text-[#204938]/70">Table displays current 7-day cumulative broadcast metrics</p>
            </div>
            <div className="flex gap-2">
              <span className="text-[10px] bg-red-100 text-red-800 border border-red-200 px-2.5 py-1 rounded-md font-mono font-bold uppercase">
                Suppressed: Msg Count ≥ 6
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100/70 border-b border-sage text-gray-400 text-[11px] font-mono font-bold uppercase tracking-wider">
                  <th className="py-4 px-5">Segment details</th>
                  <th className="py-4 px-4 text-center">Messages Sent (this week)</th>
                  <th className="py-4 px-4 text-center">Fatigue Score</th>
                  <th className="py-4 px-4 text-center">Status Badge</th>
                  <th className="py-4 px-5 text-right">Emergency Override</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {segments.map((seg) => {
                  const isSelected = selectedSegId === seg.id;
                  
                  // Compute dynamic display based on override status
                  const isOverheated = seg.messagesThisWeek >= 6;
                  let currentStatusLabel = seg.status;
                  let badgeStyling = '';

                  if (seg.manualOverride) {
                    badgeStyling = 'bg-blue-100 text-blue-800 border-blue-400 font-bold';
                    currentStatusLabel = 'Bypassed' as any;
                  } else if (isOverheated || seg.status === 'suppressed') {
                    badgeStyling = 'bg-red-50 text-red-700 border-red-200 font-bold';
                    currentStatusLabel = 'suppressed';
                  } else if (seg.status === 'warning') {
                    badgeStyling = 'bg-amber-100 text-amber-800 border-amber-300 font-semibold';
                  } else {
                    badgeStyling = 'bg-emerald-100 text-emerald-800 border-emerald-300 font-semibold';
                  }

                  return (
                    <tr
                      key={seg.id}
                      onClick={() => setSelectedSegId(seg.id)}
                      className={`hover:bg-forest-cream/40 transition-colors cursor-pointer ${
                        isSelected ? 'bg-forest-cream/80 border-l-4 border-[#1a3c2e]' : ''
                      }`}
                    >
                      {/* Regional Crop */}
                      <td className="py-4 px-5">
                        <div className="font-semibold text-gray-950 text-sm">
                          {seg.region} Regional Hub
                        </div>
                        <div className="text-xs text-forest font-bold font-mono">
                          {seg.crop} Farmers Group
                        </div>
                      </td>

                      {/* MSG count */}
                      <td className="py-4 px-4 text-center">
                        <span className="font-mono text-base font-extrabold text-gray-900">
                          {seg.messagesThisWeek}
                        </span>
                        <span className="text-xs text-gray-400"> / week</span>
                      </td>

                      {/* Fatigue score rating */}
                      <td className="py-4 px-4 text-center">
                        <div className="flex flex-col items-center">
                          <span className="font-display font-bold text-xs text-gray-800">
                            {seg.fatigueScore}%
                          </span>
                          <div className="w-16 bg-gray-200 h-1.5 rounded-full overflow-hidden mt-1">
                            <div
                              className={`h-full rounded-full ${
                                seg.fatigueScore > 75
                                  ? 'bg-red-500'
                                  : seg.fatigueScore > 40
                                  ? 'bg-amber-gold'
                                  : 'bg-emerald-500'
                              }`}
                              style={{ width: `${seg.fatigueScore}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>

                      {/* Status indicator */}
                      <td className="py-4 px-4 text-center">
                        <span className={`text-[10px] font-mono tracking-wide uppercase py-1 px-2.5 rounded-md border inline-block ${badgeStyling}`}>
                          {currentStatusLabel === 'suppressed' ? '⛔ Suppressed (Auto-paused)' : currentStatusLabel.toUpperCase()}
                        </span>
                      </td>

                      {/* Manual Override control action */}
                      <td className="py-4 px-5 text-right" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => handleToggleOverride(seg.id)}
                          className={`inline-flex items-center gap-1 text-xs py-1.5 px-3 rounded-lg border font-semibold tracking-wide transition-all uppercase outline-none active:scale-95 cursor-pointer ${
                            seg.manualOverride
                              ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 shadow-3xs'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {seg.manualOverride ? (
                            <>
                              <span>SYSTEM LOCKED BYPASS</span>
                            </>
                          ) : (
                            <>
                              <span>Allow Forced Msg</span>
                            </>
                          )}
                        </button>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Segment detail chart block */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-sage shadow-xs p-5">
            <span className="text-[9px] bg-forest text-amber-gold font-mono font-bold uppercase py-0.5 px-2 rounded-md">
              Acoustic Trendline
            </span>
            <h3 className="font-display font-extrabold text-gray-950 text-lg mt-1.5">
              {activeSegment.region} • {activeSegment.crop}
            </h3>
            <p className="text-xs text-gray-500">
              Analysis of message frequencies over the last 7 days. High frequency blocks represent active pest triggers.
            </p>

            {/* Custom SVG Line Chart */}
            <div className="mt-6 p-4 bg-gray-50 border border-gray-100 rounded-xl">
              <svg viewBox="0 0 320 180" className="w-full h-auto overflow-visible">
                {/* Y-axis coordinates */}
                <line x1="30" y1="15" x2="30" y2="150" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="30" y1="150" x2="300" y2="150" stroke="#cbd5e1" strokeWidth="1" />

                {/* Gridlines */}
                {[0, 2, 4, 6, 8].map((v) => {
                  const yVal = 150 - (v / maxMsgVal) * 135;
                  return (
                    <g key={v}>
                      <line x1="30" y1={yVal} x2="300" y2={yVal} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
                      <text x="10" y={yVal + 3} fill="#94a3b8" fontSize="8" fontFamily="monospace">
                        {v}m
                      </text>
                    </g>
                  );
                })}

                {/* Constructing Line points coordinates */}
                {(() => {
                  const points = activeSegment.historyData.map((d, i) => {
                    const x = 40 + i * 40;
                    const y = 150 - (d / maxMsgVal) * 135;
                    return { x, y, value: d };
                  });

                  // Construct line drawing string
                  const dString = points.reduce((acc, p, i) => {
                    return acc + `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`;
                  }, '');

                  return (
                    <g>
                      {/* Smooth shadow under line */}
                      <path
                        d={`${dString} L ${points[points.length - 1].x} 150 L ${points[0].x} 150 Z`}
                        fill="rgba(26, 60, 46, 0.08)"
                      />

                      {/* Line */}
                      <path d={dString} fill="none" stroke="#1a3c2e" strokeWidth="3" strokeLinecap="round" />

                      {/* Nodes points circles */}
                      {points.map((p, index) => (
                        <g key={index} className="group/node">
                          <circle cx={p.x} cy={p.y} r="4" fill="#fafafa" stroke="#1a3c2e" strokeWidth="2.5" />
                          <text x={p.x} y={p.y - 8} textAnchor="middle" fill="#1d2939" fontSize="8" fontWeight="bold">
                            {p.value}
                          </text>
                        </g>
                      ))}
                    </g>
                  );
                })()}

                {/* X axis coordinate labels */}
                {daysOfWeek.map((day, i) => (
                  <text key={day} x={40 + i * 40} y="165" textAnchor="middle" fill="#64748b" fontSize="8">
                    {day}
                  </text>
                ))}
              </svg>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-1 text-[11px] text-gray-500 font-medium">
                <AlertCircle className="w-3.5 h-3.5 text-amber-gold fill-amber-gold/10" />
                <span>Override active status :</span>
              </div>
              <span className={`text-xs font-bold font-mono ${activeSegment.manualOverride ? 'text-blue-600' : 'text-gray-500'}`}>
                {activeSegment.manualOverride ? 'FORCE PERMITTED' : 'STANDBY LOCK'}
              </span>
            </div>
          </div>

          <div className="bg-[#e8f0eb] border border-[#cadfd2] rounded-2xl p-5 text-forest">
            <span className="text-[10px] font-bold tracking-widest font-mono block uppercase">
              PREVENTATIVE CRITERIA GUIDE
            </span>
            <p className="text-xs mt-2 font-medium leading-relaxed">
              Syngenta’s proprietary **Ag-Fatigue Score** algorithm continuously polls farmer engagement responses on SMS and voice blasts.
            </p>
            <p className="text-xs mt-1.5 leading-relaxed font-medium">
              If an audience in a specific state is messaged more than **5 times** in a week, delivery signals are auto-buffered to safeguard opt-out margins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
