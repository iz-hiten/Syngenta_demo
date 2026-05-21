import React, { useState } from 'react';
import { SCENARIO_TRIGGERS } from '../constants/data';
import { PestAlertScenario } from '../types';
import { BellRing, ShieldAlert, CheckCircle, Smartphone, UserCheck, SlidersHorizontal, RefreshCw, Send, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SimulatedAlert extends PestAlertScenario {
  sysId: string;
  timestamp: string;
  farmersNotified: number;
  isCustomSimulation?: boolean;
}

export default function AlertTriggerEngine() {
  const [activeAlerts, setActiveAlerts] = useState<SimulatedAlert[]>([
    {
      sysId: 'alert-initial-1',
      id: 'scenario-2',
      state: 'Maharashtra',
      crop: 'Cotton',
      pestName: 'Severe Pink Bollworm Blast Wave',
      severity: 'severe',
      recommendedProduct: 'Syngenta Ampligo 150 ZC',
      estimatedFarmers: 22400,
      channel: 'WhatsApp',
      timestamp: '11:15 AM today',
      farmersNotified: 22400
    },
    {
      sysId: 'alert-initial-2',
      id: 'scenario-3',
      state: 'Tamil Nadu',
      crop: 'Rice',
      pestName: 'Blast Fungus Humidity Alert',
      severity: 'moderate',
      recommendedProduct: 'Syngenta Amistar Top',
      estimatedFarmers: 10500,
      channel: 'WhatsApp',
      timestamp: '08:45 AM today',
      farmersNotified: 10500
    },
    {
      sysId: 'alert-initial-3',
      id: 'scenario-4',
      state: 'Andhra Pradesh',
      crop: 'Tomato',
      pestName: 'Whitefly Leaf Curl Virus Surge',
      severity: 'severe',
      recommendedProduct: 'Syngenta Pegasus 50 WP',
      estimatedFarmers: 11400,
      channel: 'SMS',
      timestamp: '07:30 AM today',
      farmersNotified: 11400
    },
    {
      sysId: 'alert-initial-4',
      id: 'scenario-1',
      state: 'Punjab',
      crop: 'Wheat',
      pestName: 'Yellow Rust Early Warning',
      severity: 'severe',
      recommendedProduct: 'Syngenta Tilt 250 EC',
      estimatedFarmers: 16500,
      channel: 'SMS',
      timestamp: '06:15 AM today',
      farmersNotified: 16500
    }
  ]);

  // Rotation index for simulator
  const [simulationIndex, setSimulationIndex] = useState(0);

  // Filters State
  const [stateFilter, setStateFilter] = useState<string>('All');
  const [cropFilter, setCropFilter] = useState<string>('All');

  // Trigger scenario simulator
  const simulateNewAlert = () => {
    // Select one from the preset scenarios dictionary safely
    const baseScenario = SCENARIO_TRIGGERS[simulationIndex % SCENARIO_TRIGGERS.length];
    
    // Incrementation index
    setSimulationIndex((prev) => prev + 1);

    // Create custom simulated item
    const newSimItem: SimulatedAlert = {
      ...baseScenario,
      sysId: `sim-${Date.now()}`,
      timestamp: 'Just newly fired',
      farmersNotified: Math.floor(baseScenario.estimatedFarmers * (0.95 + Math.random() * 0.08)), // +/- 5% randomness
      isCustomSimulation: true
    };

    // Prepend to list
    setActiveAlerts((prev) => [newSimItem, ...prev]);
  };

  // State / Crop list for helper filters dropdown
  const statesList = ['All', 'Punjab', 'Maharashtra', 'Tamil Nadu', 'Andhra Pradesh', 'Uttar Pradesh', 'Karnataka'];
  const cropsList = ['All', 'Rice', 'Cotton', 'Wheat', 'Tomato', 'Sugarcane', 'Maize'];

  // Apply filters
  const filteredAlerts = activeAlerts.filter((alert) => {
    const passState = stateFilter === 'All' || alert.state === stateFilter;
    const passCrop = cropFilter === 'All' || alert.crop === cropFilter;
    return passState && passCrop;
  });

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <span>Pest Alert Auto-Trigger Engine</span>
            <BellRing className="w-7 h-7 text-amber-gold animate-bounce" />
          </h1>
          <p className="text-gray-500 text-sm">
            Agronomy satellites and field scouts report infestation risks. The instant thresholds fail, FarmCast triggers automatic localized marketing campaigns.
          </p>
        </div>

        {/* Big Simulator Button */}
        <button
          onClick={simulateNewAlert}
          className="flex items-center gap-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-forest active:scale-95 py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer relative overflow-hidden"
        >
          <Radio className="w-4.5 h-4.5 animate-pulse" />
          <span>Simulate Sat Pest Alert</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
        </button>
      </div>

      {/* Filter Toolbar controls */}
      <div className="bg-white border border-sage rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-3xs">
        <div className="flex items-center gap-2 text-forest font-bold text-sm">
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filter Sentinel Alerts:</span>
        </div>

        <div className="grid grid-cols-2 md:flex gap-4 w-full md:w-auto">
          {/* State Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-xs text-gray-400 font-mono">STATE:</span>
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="bg-gray-50 border border-gray-200 focus:border-forest text-xs rounded-xl p-2 font-semibold text-gray-800 outline-none"
            >
              {statesList.map((state) => (
                <option key={state} value={state}>
                  {state === 'All' ? 'All States' : state}
                </option>
              ))}
            </select>
          </div>

          {/* Crop Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-xs text-gray-400 font-mono">CROP:</span>
            <select
              value={cropFilter}
              onChange={(e) => setCropFilter(e.target.value)}
              className="bg-gray-50 border border-gray-200 focus:border-forest text-xs rounded-xl p-2 font-semibold text-gray-800 outline-none"
            >
              {cropsList.map((crop) => (
                <option key={crop} value={crop}>
                  {crop === 'All' ? 'All Crops' : crop}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={() => {
            setStateFilter('All');
            setCropFilter('All');
          }}
          className="text-xs text-gray-500 hover:text-forest hover:font-bold underline cursor-pointer"
        >
          Clear filters
        </button>
      </div>

      {/* Main interactive grid feed */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredAlerts.map((alert) => {
              const severityColor =
                alert.severity === 'severe'
                  ? 'bg-red-50 text-red-700 border-red-300'
                  : 'bg-amber-50 text-amber-800 border-amber-300';
              const isSimulated = alert.isCustomSimulation;

              return (
                <motion.div
                  key={alert.sysId}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -15 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                  className={`bg-white rounded-2xl border p-5 relative flex flex-col justify-between group overflow-hidden ${
                    isSimulated
                      ? 'border-amber-gold ring-1 ring-amber-gold/50 shadow-md'
                      : 'border-sage shadow-3xs hover:border-sage-dark'
                  }`}
                >
                  {/* Neon custom simulation ribbon banner */}
                  {isSimulated && (
                    <span className="absolute top-0 right-0 bg-amber-gold text-forest text-[8.5px] font-mono tracking-widest font-extrabold uppercase px-2 py-1 select-none">
                      SIMULATED RADAR ALERT
                    </span>
                  )}

                  <div>
                    {/* State info & Timestamp */}
                    <div className="flex justify-between items-center text-xs text-gray-500 font-semibold mb-2">
                      <span className="font-mono text-gray-400">STATE: {alert.state.toUpperCase()}</span>
                      <span className="flex items-center gap-1.5 font-bold font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        {alert.timestamp}
                      </span>
                    </div>

                    {/* Crop Label / Severity Badge */}
                    <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-3">
                      <div>
                        <span className="text-[10px] uppercase font-mono text-gray-400 block font-bold">TARGET CROP</span>
                        <h3 className="font-display font-extrabold text-[#1a3c2e] text-sm flex items-center gap-1">
                          <span>{alert.crop} Fields</span>
                        </h3>
                      </div>
                      <span className={`text-[9px] font-mono font-bold uppercase py-0.5 px-2 rounded border-md ${severityColor}`}>
                        {alert.severity} RISK
                      </span>
                    </div>

                    {/* Threat Specific name */}
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] text-gray-400 block uppercase font-mono">Pest Detected</span>
                        <p className="text-gray-900 font-bold text-sm truncate">{alert.pestName}</p>
                      </div>

                      {/* Notified stats */}
                      <div className="grid grid-cols-2 gap-3 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                        <div>
                          <span className="text-[9px] text-gray-400 block uppercase font-mono">Broadcast size</span>
                          <p className="text-xs font-bold text-gray-800 flex items-center gap-1 mt-0.5">
                            <UserCheck className="w-3.5 h-3.5 text-forest" />
                            <span>{alert.farmersNotified.toLocaleString()} farmers</span>
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] text-gray-400 block uppercase font-mono">Delivered channel</span>
                          <p className="text-xs font-bold text-gray-800 flex items-center gap-1 mt-0.5">
                            <Smartphone className="w-3.5 h-3.5 text-forest" />
                            <span>{alert.channel}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-gray-400 block uppercase font-mono">Prescribed treatment</span>
                      <p className="text-[11px] font-bold text-forest">{alert.recommendedProduct}</p>
                    </div>

                    {/* Automated dispatch validation marker */}
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                      <CheckCircle className="w-4 h-4 fill-emerald-100" />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredAlerts.length === 0 && (
          <div className="bg-white rounded-2xl border border-sage p-12 text-center max-w-md mx-auto">
            <BellRing className="w-12 h-12 text-gray-300 mx-auto animate-bounce" />
            <h3 className="font-display font-semibold text-gray-800 mt-4">No active triggers fit filters</h3>
            <p className="text-xs text-gray-500 mt-2">Adjust your state or crop selections, or simulate an automatic radar alert above to fire new alerts.</p>
          </div>
        )}
      </div>

      <div className="bg-forest rounded-2xl p-6 text-white flex flex-col md:flex-row justify-between items-center gap-6 border-l-4 border-amber-gold shadow-xs">
        <div className="space-y-1">
          <span className="text-[10px] bg-[#2e624c] px-2.5 py-1 rounded-md text-amber-gold font-mono font-bold tracking-widest uppercase">
            SYNGENTA AUTOPILOT PROTOCOL
          </span>
          <h4 className="text-lg font-display font-medium text-fafafa">Autonomous Crop Protection dispatching is live.</h4>
          <p className="text-xs text-sage-dark/80 max-w-2xl">
            When satellite radar detects severe blast heatmaps, the Syngenta engine cross-references the **Fatigue CRM Registry** and automatically pushes local voice files + WhatsApp templates without manual approval.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-[#204938] border border-[#2e624c] text-fafafa">
            ⚡ SAT LOCK ON Punjab, AP, TN
          </span>
        </div>
      </div>
    </div>
  );
}
