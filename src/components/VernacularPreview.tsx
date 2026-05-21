import React, { useState, useRef, useEffect } from 'react';
import { CROP_TEMPLATES, MOCK_BADGE_TEMPLATES } from '../constants/data';
import { CropType, LanguageType, RegionType } from '../types';
import { Play, Square, Sparkles, Volume2, Upload, MessageCircle, User, Download, Leaf, Check, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function VernacularPreview() {
  const [selectedCrop, setSelectedCrop] = useState<CropType>('Wheat');
  const [selectedLang, setSelectedLang] = useState<LanguageType>('Hindi');
  const [selectedRegion, setSelectedRegion] = useState<RegionType>('Punjab');

  // Voice player states
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSeconds, setAudioSeconds] = useState(0);
  const playTimerRef = useRef<any>(null);

  // Audio waveform animation bar arrays
  const waveformBars = [
    30, 45, 20, 60, 80, 50, 40, 65, 85, 30, 20, 40, 70, 90, 55, 35, 60, 45, 30, 75, 40, 25, 60, 80, 50, 30
  ];

  // Badge Generator states
  const [selectedFarmerAvatar, setSelectedFarmerAvatar] = useState(MOCK_BADGE_TEMPLATES[0]);
  const [badgeCrop, setBadgeCrop] = useState<CropType>('Wheat');
  const [customImageSrc, setCustomImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [savingBadge, setSavingBadge] = useState(false);
  const [badgeSavedSuccessfully, setBadgeSavedSuccessfully] = useState(false);

  // Playback timer effects
  useEffect(() => {
    if (isPlaying) {
      playTimerRef.current = setInterval(() => {
        setAudioSeconds((prev) => {
          if (prev >= 45) {
            setIsPlaying(false);
            clearInterval(playTimerRef.current);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(playTimerRef.current);
    }
    return () => clearInterval(playTimerRef.current);
  }, [isPlaying]);

  // Reset audio timer on criteria changes
  useEffect(() => {
    setIsPlaying(false);
    setAudioSeconds(0);
  }, [selectedCrop, selectedLang, selectedRegion]);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Farmer avatar file upload handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomImageSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Save/Generate badge action mockup
  const handleSaveBadge = () => {
    setSavingBadge(true);
    setTimeout(() => {
      setSavingBadge(false);
      setBadgeSavedSuccessfully(true);
      setTimeout(() => setBadgeSavedSuccessfully(false), 3000);
    }, 1500);
  };

  // Dynamic template text resolver
  const activeCropData = CROP_TEMPLATES[selectedCrop] || CROP_TEMPLATES['Wheat'];
  const activeSeverityDict = activeCropData['severe'] || activeCropData['none'];
  const activeLangSet = activeSeverityDict.languages[selectedLang] || activeSeverityDict.languages['English'];

  // Format audio seconds to HH:MM format
  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remaining = sec % 60;
    return `0${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="font-display text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
          <span>Vernacular Media & Custom Badging</span>
          <Award className="w-7 h-7 text-forest" />
        </h1>
        <p className="text-gray-500 text-sm flex-1">
          Perform high-fidelity proofing of synthetic voice recordings, visualize WhatsApp messaging UI cards, and layout custom Agrarian branded badges.
        </p>
      </div>

      {/* Primary Proofing selections widgets */}
      <div className="bg-white border border-sage rounded-2xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 shadow-3xs">
        <div>
          <label className="block text-[11px] font-mono text-gray-400 font-bold uppercase mb-1">
            Proofing Language
          </label>
          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value as LanguageType)}
            className="w-full bg-slate-50 border border-gray-200 rounded-xl p-2.5 text-sm font-semibold text-gray-800 focus:border-forest outline-none"
          >
            <option value="English">English Script</option>
            <option value="Hindi">Hindi (हिंदी)</option>
            <option value="Telugu">Telugu (తెలుగు)</option>
            <option value="Tamil">Tamil (தமிழ்)</option>
            <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
            <option value="Marathi">Marathi (मराठी)</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-mono text-gray-400 font-bold uppercase mb-1">
            Target Crop Context
          </label>
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value as CropType)}
            className="w-full bg-slate-50 border border-gray-200 rounded-xl p-2.5 text-sm font-semibold text-gray-800 focus:border-forest outline-none"
          >
            <option value="Wheat">Wheat (Rabi Premium) 🌾</option>
            <option value="Rice">Rice (Paddy Monsoon) 🌾</option>
            <option value="Cotton">Cotton (Kharif Cash) ☁️</option>
            <option value="Tomato">Tomato (Horticultural) 🍅</option>
            <option value="Sugarcane">Sugarcane (High Sugar) 🎋</option>
            <option value="Maize">Maize (Hybrid Grain) 🌽</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-mono text-gray-400 font-bold uppercase mb-1">
            Proofing State
          </label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value as RegionType)}
            className="w-full bg-slate-50 border border-gray-200 rounded-xl p-2.5 text-sm font-semibold text-gray-800 focus:border-forest outline-none"
          >
            <option value="Punjab">Punjab</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Karnataka">Karnataka</option>
          </select>
        </div>
      </div>

      {/* Main Grid split: Left Voice card & WhatsApp phone Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left column: Voice simulation & Script box */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-sage p-6 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[9px] bg-forest text-amber-gold font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
              Acoustic Voice Note Previewer
            </span>
            <h3 className="font-display font-bold text-gray-950 text-xl mt-2">
              Robotic Speech Synthesis Engine
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Test the speech duration, dynamic waveforms, and acoustic flow generated for automated voice alerts.
            </p>

            {/* WA voice bubble simulator mockup card */}
            <div className="bg-[#e8f0eb]/50 border border-[#b4d2bd] rounded-2xl p-4 mt-5 flex items-center gap-4">
              <button
                onClick={handlePlayToggle}
                className="w-12 h-12 rounded-full bg-forest text-amber-gold hover:bg-forest/90 transition-all flex items-center justify-center cursor-pointer shadow-sm active:scale-95 text-xl flex-shrink-0"
              >
                {isPlaying ? <Square className="w-5 h-5 fill-amber-gold" /> : <Play className="w-5 h-5 fill-amber-gold ml-1" />}
              </button>

              <div className="flex-grow space-y-1">
                {/* Simulated waveforms bar block */}
                <div className="flex items-end gap-1 h-10 w-full bg-white/40 p-1.5 rounded-lg border border-sage/60">
                  {waveformBars.map((mag, i) => {
                    const isPassed = (i / waveformBars.length) < (audioSeconds / 45);
                    const dynamicHeight = isPlaying ? Math.max(10, mag * (0.6 + Math.random() * 0.5)) : mag;

                    return (
                      <span
                        key={i}
                        className={`w-1 rounded-t-full transition-all duration-300 ${
                          isPassed ? 'bg-forest' : 'bg-gray-300'
                        }`}
                        style={{ height: `${dynamicHeight}%` }}
                      ></span>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono">
                  <span className="text-forest font-bold">Duration: {formatSeconds(audioSeconds)} / 00:45</span>
                  <span>Audio synthesis quality high</span>
                </div>
              </div>
            </div>

            {/* Speaking voice script transcript box */}
            <div className="mt-5 space-y-1.5">
              <span className="text-[10px] text-gray-400 font-mono uppercase font-bold block">Spoken Word Script</span>
              <div className="bg-slate-50 border border-gray-200 rounded-xl p-4 text-gray-800 font-semibold leading-relaxed text-sm md:text-base min-h-24">
                {activeLangSet.voiceScript}
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-800 font-medium">
            🗣️ **Acoustic Note**: In India, agrarian segments achieve up to **3x higher click-through-rates** on Voice Calls than standard written content because of high vernacular familiarity.
          </div>
        </div>

        {/* Right column: Phone Mockup Frame containing WhatsApp card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-[320px] h-[580px] bg-gray-950 rounded-[40px] border-[12px] border-zinc-900 shadow-xl relative overflow-hidden flex flex-col">
            
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-[18px] bg-zinc-950 rounded-b-2xl z-30 flex items-center justify-center">
              <div className="w-10 h-1 bg-zinc-800 rounded-full"></div>
            </div>

            {/* WA Header info */}
            <div className="bg-[#075e54] text-white pt-6 pb-2 px-4 flex items-center gap-2.5 relative z-10 flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center font-bold text-xs text-teal-300">
                S
              </div>
              <div>
                <span className="text-xs font-bold font-sans block">Syngenta Advisory</span>
                <span className="text-[9px] text-[#cfdfdb] block -mt-0.5 font-mono">Online • Verified</span>
              </div>
              <span className="absolute right-4 top-7 text-[8.5px] font-mono text-[#76dfcf] border border-[#278d80] px-1.5 py-0.5 rounded-full select-none">
                AI BOT
              </span>
            </div>

            {/* WA Chat body background wallpaper pattern */}
            <div className="flex-grow bg-[#efe9e4] p-3 overflow-y-auto space-y-3 relative">
              
              {/* Automated verified advisory disclaimer */}
              <div className="mx-auto w-4/5 text-center bg-[#fcf9ee] text-[9px] text-gray-500 font-medium p-2 rounded-lg shadow-3xs border border-[#eae0c5]">
                🛡️ Messages in this channel are certified by agricultural research teams.
              </div>

              {/* Dynamic message layout bubble */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-2.5 max-w-[85%] shadow-3xs ml-1 relative border-l-4 border-amber-gold"
              >
                {/* Display crop header decoration inside WhatsApp bubble */}
                <span className="text-[8px] font-mono font-extrabold text-amber-gold uppercase block tracking-wider">
                  SYNGENTA PLATINUM ADVISORY
                </span>

                <p className="text-[11px] text-gray-800 font-semibold leading-relaxed mt-1 whitespace-pre-wrap">
                  {activeLangSet.fullMessage}
                </p>

                <div className="flex justify-end items-center gap-1 text-[8.5px] text-gray-400 font-mono mt-2">
                  <span>11:41 AM</span>
                  <span className="text-blue-500 font-bold font-sans">✓✓</span>
                </div>
              </motion.div>
            </div>

            {/* Bottom screen footer */}
            <div className="bg-zinc-900 border-t border-zinc-800 p-2 text-center text-[10px] text-gray-500 font-mono font-bold select-none flex-shrink-0">
              MOCK PHONE WINDOW • PREVIEW
            </div>
          </div>
        </div>

      </div>

      {/* Branded Farmer Pride Badge Generator Overlay Section */}
      <div className="bg-white rounded-2xl border border-sage p-6 shadow-xs">
        <div>
          <span className="text-[10px] bg-[#f59e0b] text-forest font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
            Interactive Loyalty Creator
          </span>
          <h3 className="font-display font-medium text-gray-950 text-xl tracking-tight mt-1.5">
            Farmer Pride Badge Overlay Generator
          </h3>
          <p className="text-xs text-gray-500">
            Select a progressive farmer avatar, pick their flagship crop, and export a branded Syngenta commemorative graphic to amplify community pride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-6">
          
          {/* Avatar selector card */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="text-xs font-bold text-gray-700 uppercase block mb-1.5 pointer-events-none">
                1. Choose Progressive Farmer Profile
              </span>
              <div className="grid grid-cols-2 gap-3">
                {MOCK_BADGE_TEMPLATES.map((farmer) => {
                  const isSelected = selectedFarmerAvatar.id === farmer.id && !customImageSrc;
                  return (
                    <button
                      key={farmer.id}
                      onClick={() => {
                        setSelectedFarmerAvatar(farmer);
                        setCustomImageSrc(null);
                      }}
                      className={`p-2 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                        isSelected ? 'border-forest bg-forest-cream ring-1 ring-forest' : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                      }`}
                    >
                      <img
                        src={farmer.img}
                        alt={farmer.name}
                        className="w-10 h-10 object-cover rounded-lg flex-shrink-0 shadow-3xs"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="text-[11px] font-bold text-gray-800 line-clamp-1">{farmer.name}</p>
                        <p className="text-[9px] text-gray-500 font-mono capitalize">{farmer.crop} Specialist</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-gray-700 uppercase block mb-2">
                Or Upload Customized Farmer Photo
              </span>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={handleFileUploadClick}
                className="w-full py-2.5 px-3 border border-dashed border-gray-300 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <Upload className="w-4 h-4 text-forest" />
                <span>Upload Custom Jpeg / Png</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-xs font-bold text-gray-700 uppercase block mb-1">
                  2. Select Pride Crop
                </span>
                <select
                  value={badgeCrop}
                  onChange={(e) => setBadgeCrop(e.target.value as CropType)}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-2.5 text-xs font-semibold text-gray-800 outline-none"
                >
                  <option value="Rice">Rice (धान)</option>
                  <option value="Cotton">Cotton (कपास)</option>
                  <option value="Wheat">Wheat (गेहूं)</option>
                  <option value="Tomato">Tomato (टमाटर)</option>
                  <option value="Sugarcane">Sugarcane (गन्ना)</option>
                  <option value="Maize">Maize (मक्का)</option>
                </select>
              </div>

              <div>
                <span className="text-xs font-bold text-gray-700 uppercase block mb-1">
                  Active Commemorative Year
                </span>
                <input
                  type="text"
                  readOnly
                  value="2026 Season"
                  className="w-full bg-gray-100 border border-gray-200 text-xs rounded-xl p-2.5 font-bold text-gray-600 outline-none select-none"
                />
              </div>
            </div>
          </div>

          {/* Badge Display Canvas Mockup */}
          <div className="md:col-span-7 flex flex-col items-center justify-center space-y-4">
            
            {/* Overlay render container */}
            <div className="relative w-72 h-96 bg-[#1a3c2e] rounded-2xl overflow-hidden border-8 border-forest shadow-lg flex flex-col justify-between p-4 group">
              
              {/* Syngenta style gold branding overlay ribbons */}
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#1a3c2e]/90 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1a3c2e] via-[#1a3c2e]/90 to-transparent z-10 pointer-events-none"></div>

              {/* Top Branded border text labels */}
              <div className="relative z-20 flex justify-between items-center text-[10px] text-amber-gold font-mono font-bold tracking-widest leading-none">
                <span>PROGRESSIVE LEADERSHIP</span>
                <span>2026</span>
              </div>

              {/* Main Avatar background image frame */}
              <div className="absolute inset-0">
                <img
                  src={customImageSrc ? customImageSrc : selectedFarmerAvatar.img}
                  alt="Farmer Master Portrait"
                  className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bottom solid card overlay details */}
              <div className="relative z-20 text-center space-y-3 mt-auto">
                <div className="inline-flex py-1 px-3 rounded-full bg-[#fafafa]/95 border border-forest font-semibold text-xs text-[#1a3c2e] gap-1 items-center shadow-md">
                  <Leaf className="w-3.5 h-3.5 text-[#f59e0b] fill-[#f59e0b]/10" />
                  <span>MASTER {badgeCrop.toUpperCase()} GROWER</span>
                </div>

                <div className="bg-[#1a3c2e]/95 py-3 p-2 rounded-xl border border-[#2e624c] shadow-lg">
                  <span className="text-[10px] text-amber-gold uppercase font-semibold font-mono tracking-widest leading-none">
                    Syngenta Certified Champion
                  </span>
                  <h4 className="font-display font-bold text-fafafa text-lg mt-1 truncate">
                    {customImageSrc ? 'Farmer Champion' : selectedFarmerAvatar.name}
                  </h4>
                  <p className="text-[9px] text-sage-dark/80 mt-1 uppercase font-mono tracking-tight leading-none">
                    Certified Progressive Partner • India Agro Division
                  </p>
                </div>
              </div>

            </div>

            {/* Controls */}
            <div className="flex gap-4 w-72">
              <button
                onClick={handleSaveBadge}
                disabled={savingBadge}
                className="flex-grow bg-[#1a3c2e] hover:bg-[#11271e] text-white active:scale-95 text-xs py-3 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {savingBadge ? 'Compiling High-res badge...' : 'Export Branded Badge'}
              </button>
            </div>

            {badgeSavedSuccessfully && (
              <p className="text-emerald-700 font-semibold text-xs animate-pulse">
                ✓ Branded overlay successfully generated & buffered for social CRM sharing!
              </p>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
