import React, { useState, useEffect } from 'react';
import { CROP_TEMPLATES } from '../constants/data';
import { CropType, LanguageType, GrowthStage, SeverityLevel, RegionType, ChannelType } from '../types';
import { Wand2, Sparkles, AlertTriangle, PlayCircle, Clipboard, Check, CalendarDays, Star, MessageSquareCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContentGeneratorProps {
  initialCrop?: string;
  initialState?: string;
  initialSeverity?: string;
}

export default function ContentGenerator({ initialCrop, initialState, initialSeverity }: ContentGeneratorProps) {
  // Input states
  const [selectedCrop, setSelectedCrop] = useState<CropType>((initialCrop as CropType) || 'Rice');
  const [selectedRegion, setSelectedRegion] = useState<RegionType>((initialState as RegionType) || 'Maharashtra');
  const [growthStage, setGrowthStage] = useState<GrowthStage>('Vegetative');
  const [threatLevel, setThreatLevel] = useState<SeverityLevel>((initialSeverity as SeverityLevel) || 'moderate');
  const [selectedChannel, setSelectedChannel] = useState<ChannelType>('WhatsApp');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>('English');

  // Trigger values from quick links
  useEffect(() => {
    if (initialCrop) setSelectedCrop(initialCrop as CropType);
    if (initialState) setSelectedRegion(initialState as RegionType);
    if (initialSeverity) setThreatLevel(initialSeverity as SeverityLevel);
  }, [initialCrop, initialState, initialSeverity]);

  // Loading States
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);

  // Result Format Tabs
  const [formatTab, setFormatTab] = useState<'whatsapp' | 'sms' | 'voice'>('whatsapp');
  const [copied, setCopied] = useState(false);

  // Loading scenarios ticker
  const loadingMessages = [
    'Parsing agro-climatic conditions...',
    'Consulting Syngenta product application guidelines...',
    'Evaluating regional user fatigue constraints...',
    'Drafting translation models in vernacular scripts...',
    'Optimizing localized engagement parameters...'
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setShowResult(false);
    setLoadingStep(0);

    // Ticker timer sequence
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
      setIsGenerating(false);
      setShowResult(true);
    }, 1500);
  };

  // Extract selected templates with robust fallbacks
  const cropData = CROP_TEMPLATES[selectedCrop] || CROP_TEMPLATES['Rice'];
  const severityTemplate = cropData[threatLevel] || cropData['none'];
  const languageSet = severityTemplate.languages[selectedLanguage] || severityTemplate.languages['English'];

  // Smart truncation & logic override based on selections
  let processedFullMsg = languageSet.fullMessage;
  let processedSmsMsg = languageSet.smsVersion;
  let processedVoiceMsg = languageSet.voiceScript;

  // Let's implement copy to clipboard function
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="font-display text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
          <span>AI Vernacular Campaign Generator</span>
          <Wand2 className="w-6 h-6 text-amber-gold" />
        </h1>
        <p className="text-gray-500 text-sm">
          Select target farmer characteristics to synthesize agronomically correct message variants in regional languages automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form panel */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-sage shadow-xs p-6">
          <div className="flex items-center gap-2 mb-4 border-b border-sage pb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-forest animate-pulse"></div>
            <h3 className="font-display font-bold text-forest text-sm uppercase tracking-wide">
              Audience Demographics & Parameters
            </h3>
          </div>

          <div className="space-y-4">
            {/* Crop Selector */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Primary Target Crop
              </label>
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value as CropType)}
                className="w-full bg-gray-50 border border-gray-200 focus:border-forest text-sm rounded-xl p-3 outline-none transition-colors text-gray-800 font-medium"
              >
                <option value="Rice">Rice (Paddy) 🌾</option>
                <option value="Cotton">Cotton ☁️</option>
                <option value="Wheat">Wheat 🌾</option>
                <option value="Tomato">Tomato 🍅</option>
                <option value="Sugarcane">Sugarcane 🎋</option>
                <option value="Maize">Maize 🌽</option>
              </select>
            </div>

            {/* Region Selector */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Target Region
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value as RegionType)}
                className="w-full bg-gray-50 border border-gray-200 focus:border-forest text-sm rounded-xl p-3 outline-none transition-colors text-gray-800 font-medium"
              >
                <option value="Punjab">Punjab (North)</option>
                <option value="Maharashtra">Maharashtra (West)</option>
                <option value="Tamil Nadu">Tamil Nadu (South)</option>
                <option value="Andhra Pradesh">Andhra Pradesh (East-South)</option>
                <option value="Uttar Pradesh">Uttar Pradesh (Central)</option>
                <option value="Karnataka">Karnataka (Southwest)</option>
              </select>
            </div>

            {/* Growth Stage */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Crop Growth Stage
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['Sowing', 'Vegetative', 'Flowering', 'Harvest'] as GrowthStage[]).map((stage) => {
                  const isActive = growthStage === stage;
                  return (
                    <button
                      key={stage}
                      type="button"
                      onClick={() => setGrowthStage(stage)}
                      className={`py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-forest text-amber-gold border-forest shadow-xs'
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {stage}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pest Threat level */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Pest / disease severity threat
              </label>
              <select
                value={threatLevel}
                onChange={(e) => setThreatLevel(e.target.value as SeverityLevel)}
                className="w-full bg-gray-50 border border-gray-200 focus:border-forest text-sm rounded-xl p-3 outline-none transition-colors text-gray-800 font-medium"
              >
                <option value="none">None (Routine maintenance Advisory)</option>
                <option value="moderate">Moderate Threat (Early Vector spotted)</option>
                <option value="severe">Severe Threat Outbreak (Fungal/Larvae Infestation)</option>
              </select>
            </div>

            {/* Channel and Language Section */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Default Channel
                </label>
                <select
                  value={selectedChannel}
                  onChange={(e) => setSelectedChannel(e.target.value as ChannelType)}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-forest text-sm rounded-xl p-3 outline-none transition-colors text-gray-800 font-medium"
                >
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="SMS">Short SMS</option>
                  <option value="Voice Call">Voice Note Broadcast</option>
                  <option value="Social Media">Social Media</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Primary Vernacular
                </label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value as LanguageType)}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-forest text-sm rounded-xl p-3 outline-none transition-colors text-gray-800 font-medium animate-pulse-once"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi (हिंदी)</option>
                  <option value="Telugu">Telugu (తెలుగు)</option>
                  <option value="Tamil">Tamil (தமிழ்)</option>
                  <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
                  <option value="Marathi">Marathi (मराठी)</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full mt-2 bg-amber-gold text-forest py-3.5 px-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:bg-amber-gold/90 active:scale-99 flex items-center justify-center gap-2 cursor-pointer disabled:grayscale disabled:cursor-not-allowed"
            >
              <Sparkles className="w-5 h-5 fill-forest/10" />
              <span>{isGenerating ? 'Synthesizing...' : 'Generate Campaign Content'}</span>
            </button>
          </div>
        </div>

        {/* Output Panel with dynamic animation */}
        <div className="lg:col-span-7 space-y-4">
          <AnimatePresence mode="wait">
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white rounded-2xl border border-sage p-12 flex flex-col items-center justify-center space-y-6 h-[460px]"
              >
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-sage border-t-amber-gold rounded-full animate-spin"></div>
                  <Wand2 className="w-6 h-6 text-forest absolute animate-bounce" />
                </div>
                <div className="text-center">
                  <span className="text-xs font-mono font-bold text-[#f59e0b] tracking-widest uppercase">
                    Syngenta AI Core Processing
                  </span>
                  <p className="text-sm font-semibold text-gray-700 mt-2 h-6 transition-all">
                    {loadingMessages[loadingStep]}
                  </p>
                </div>
                <div className="w-64 bg-gray-100 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-forest h-full transition-all duration-300"
                    style={{ width: `${((loadingStep + 1) / loadingMessages.length) * 100}%` }}
                  ></div>
                </div>
              </motion.div>
            )}

            {showResult && !isGenerating && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-sage shadow-xs p-6 space-y-6"
              >
                {/* Result header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sage pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      OPTIMAL DRAFT READY
                    </span>
                    <h3 className="font-display font-bold text-gray-950 text-xl mt-1.5">
                      {selectedLanguage} Script • {selectedCrop}
                    </h3>
                  </div>

                  {/* Micro telemetry indices */}
                  <div className="flex gap-4">
                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 font-mono uppercase block">Estimated reach</span>
                      <span className="font-display font-extrabold text-[#1a3c2e] text-sm md:text-base">
                        {severityTemplate.reach.toLocaleString()} Farmers
                      </span>
                    </div>
                    <div className="text-right border-l border-sage pl-4">
                      <span className="text-[10px] text-gray-400 font-mono uppercase block">Predictive CTR</span>
                      <span className="font-display font-extrabold text-amber-gold text-sm md:text-base flex items-center justify-end gap-1">
                        <Star className="w-4 h-4 fill-amber-gold" />
                        <span>{severityTemplate.score}%</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Formats Variants Tabs selectors */}
                <div className="bg-gray-100 p-1 rounded-xl grid grid-cols-3 gap-1">
                  <button
                    onClick={() => setFormatTab('whatsapp')}
                    className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      formatTab === 'whatsapp' ? 'bg-white text-forest shadow-xs' : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    🚀 WhatsApp Layout
                  </button>
                  <button
                    onClick={() => setFormatTab('sms')}
                    className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      formatTab === 'sms' ? 'bg-white text-forest shadow-xs' : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    ✉️ Short SMS (160 Chars)
                  </button>
                  <button
                    onClick={() => setFormatTab('voice')}
                    className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      formatTab === 'voice' ? 'bg-white text-forest shadow-xs' : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    🎙️ Voice Call Script
                  </button>
                </div>

                {/* Main Script Text Box */}
                <div className="bg-slate-50 border border-gray-200 rounded-xl p-5 relative overflow-hidden group min-h-36">
                  <span className="absolute top-0 right-0 py-1 px-2 text-[8.5px] font-mono text-gray-400 border-l border-b border-gray-200 bg-white rounded-bl-lg">
                    {formatTab.toUpperCase()} PREVIEW
                  </span>

                  <p className="text-gray-800 leading-relaxed text-sm md:text-base font-semibold whitespace-pre-wrap pr-4 pt-1 mb-2">
                    {formatTab === 'whatsapp'
                      ? processedFullMsg
                      : formatTab === 'sms'
                      ? processedSmsMsg
                      : processedVoiceMsg}
                  </p>

                  <div className="mt-4 flex justify-between items-center pt-3 border-t border-gray-200/60 text-xs">
                    <span className="text-gray-500 font-mono text-[11px]">
                      {formatTab === 'sms'
                        ? `Character Count: ${processedSmsMsg.length} / 160 Limits`
                        : formatTab === 'voice'
                        ? 'Estimated Read Time: ~45 seconds'
                        : 'Interactive Rich WhatsApp Link included'}
                    </span>
                    <button
                      onClick={() =>
                        handleCopy(
                          formatTab === 'whatsapp'
                            ? processedFullMsg
                            : formatTab === 'sms'
                            ? processedSmsMsg
                            : processedVoiceMsg
                        )
                      }
                      className="text-forest hover:text-forest/80 font-bold flex items-center gap-1.5 cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-3xs"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Clipboard className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy Script'}</span>
                    </button>
                  </div>
                </div>

                {/* Telemetry info and recommended trigger specs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-forest-cream rounded-xl p-4 border border-sage">
                    <div className="flex items-center gap-2 text-forest font-bold text-xs">
                      <CalendarDays className="w-4 h-4 text-amber-gold fill-amber-gold/10" />
                      <span>RECOMMENDED SEND WINDOW</span>
                    </div>
                    <p className="text-sm font-semibold text-forest mt-1.5">
                      Tomorrow 07:30 AM
                    </p>
                    <p className="text-[11px] text-forest/75 mt-0.5 leading-snug">
                      Farmers actively check mobile phones for daily advisories immediately following early morning farm irrigation routines.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <div className="flex items-center gap-2 text-amber-800 font-bold text-xs">
                      <MessageSquareCode className="w-4 h-4 text-emerald-600" />
                      <span>INTELLIGENT PRESCRIPTION</span>
                    </div>
                    <p className="text-sm font-semibold text-amber-900 mt-1.5">
                      Prescribed Action: {severityTemplate.recommendedProduct}
                    </p>
                    <p className="text-[11px] text-amber-800 mt-0.5 leading-snug">
                      Automated Syngenta dynamic routing identifies active stock levels of {severityTemplate.recommendedProduct} in nearest dealer networks.
                    </p>
                  </div>
                </div>

                {/* Simulation deployment container */}
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex flex-col md:flex-row justify-between items-center gap-3">
                  <div className="text-xs text-gray-500">
                    Would you like to auto-queue this template into live CRM streams for {selectedRegion} {selectedCrop} farmers?
                  </div>
                  <button
                    onClick={() => {
                      alert(`Successfully enqueued the ${selectedLanguage} campaign for ${severityTemplate.reach.toLocaleString()} and queued delivery schedules!`);
                    }}
                    className="bg-forest text-white hover:bg-forest/90 py-2 px-5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
                  >
                    Enqueue Broadcast
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
