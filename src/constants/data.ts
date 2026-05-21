import { StatePestData, FarmerSegment, CampaignRecord, PestAlertScenario, CropType, LanguageType, GrowthStage, SeverityLevel, RegionType, ChannelType } from '../types';

export const INDIAN_STATES_PEST_DATA: StatePestData[] = [
  {
    id: 'punjab',
    name: 'Punjab',
    pestPressure: 'high',
    pestName: 'Yellow Rust',
    crop: 'Wheat',
    recommendedProduct: 'Syngenta Tilt 250 EC',
    productDescription: 'Broad-spectrum systemic fungicide featuring premium triazole action, providing robust preventive and curative control against leaf rusts.',
    farmersImpactedCount: 14200
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    pestPressure: 'high',
    pestName: 'Pink Bollworm',
    crop: 'Cotton',
    recommendedProduct: 'Syngenta Ampligo 150 ZC',
    productDescription: 'Dual-action insecticide combining fast knockdown and long-lasting residual control through micro-encapsulated technology.',
    farmersImpactedCount: 23500
  },
  {
    id: 'tamilnadu',
    name: 'Tamil Nadu',
    pestPressure: 'medium',
    pestName: 'Blast Disease (Pyricularia)',
    crop: 'Rice',
    recommendedProduct: 'Syngenta Amistar Top',
    productDescription: 'Defensive fungicide utilizing preventative dual chemistry to protect early crop canopy and secure bumper panicle weight.',
    farmersImpactedCount: 11800
  },
  {
    id: 'andhrapradesh',
    name: 'Andhra Pradesh',
    pestPressure: 'high',
    pestName: 'Whitefly Infestation',
    crop: 'Tomato',
    recommendedProduct: 'Syngenta Pegasus 50 WP',
    productDescription: 'Targeted acaricide/insecticide inhibiting pest respiration, ideal for mitigating whitefly vectors of leaf curl virus.',
    farmersImpactedCount: 9400
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    pestPressure: 'medium',
    pestName: 'Fall Armyworm (FAW)',
    crop: 'Maize',
    recommendedProduct: 'Syngenta Ampligo 150 ZC',
    productDescription: 'Powerful ovicidal and larvicide action to suppress foliage feeding and preserve plant health during late vegetative stages.',
    farmersImpactedCount: 15200
  },
  {
    id: 'uttarpradesh',
    name: 'Uttar Pradesh',
    pestPressure: 'high',
    pestName: 'Stem Borer & Red Rot',
    crop: 'Sugarcane',
    recommendedProduct: 'Syngenta Virtako 0.6 GR',
    productDescription: 'Granular systemic insecticide engineered to eliminate inner stem borers and bolster stalk thickness from deep root uptake.',
    farmersImpactedCount: 28100
  },
  {
    id: 'haryana',
    name: 'Haryana',
    pestPressure: 'low',
    pestName: 'Aphid Invasion',
    crop: 'Wheat',
    recommendedProduct: 'Syngenta Actara 25 WG',
    productDescription: 'Unmatched systemic thiamethoxam control delivering rapid sap-feeder knockdown within hours of light field spraying.',
    farmersImpactedCount: 8200
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    pestPressure: 'medium',
    pestName: 'Sucking Pests',
    crop: 'Cotton',
    recommendedProduct: 'Syngenta Alika 247 ZC',
    productDescription: 'Mixture of systemic and contact active ingredients to eradicate leafhoppers, aphids, and early-season whiteflies.',
    farmersImpactedCount: 16400
  },
  {
    id: 'telangana',
    name: 'Telangana',
    pestPressure: 'high',
    pestName: 'Pink Bollworm & Jassids',
    crop: 'Cotton',
    recommendedProduct: 'Syngenta Ampligo 150 ZC',
    productDescription: 'Next-gen crop defense combining chlorantraniliprole and lambda-cyhalothrin for high-intensity chewing pest management.',
    farmersImpactedCount: 19300
  },
  {
    id: 'westbengal',
    name: 'West Bengal',
    pestPressure: 'low',
    pestName: 'Brown Planthopper',
    crop: 'Rice',
    recommendedProduct: 'Syngenta Chess 50 WG',
    productDescription: 'Unique feeding inhibitor mechanism ensuring target planthoppers instantly cease feeding, minimizing virus transmission risks.',
    farmersImpactedCount: 13900
  }
];

export const INITIAL_RECENT_CAMPAIGNS: CampaignRecord[] = [
  {
    id: 'camp-101',
    title: 'Amistar Paddy Blast Warning',
    state: 'Tamil Nadu',
    crop: 'Rice',
    channel: 'WhatsApp',
    status: 'Active',
    farmersReached: 12400,
    engagementRate: 85.4,
    timestamp: '2026-05-21T08:00:00Z'
  },
  {
    id: 'camp-102',
    title: 'Ampligo Bollworm Blitz Campaign',
    state: 'Maharashtra',
    crop: 'Cotton',
    channel: 'SMS',
    status: 'Triggered',
    farmersReached: 24500,
    engagementRate: 72.1,
    timestamp: '2026-05-21T06:15:00Z'
  },
  {
    id: 'camp-103',
    title: 'Wheat Rust Prevention Advisory',
    state: 'Punjab',
    crop: 'Wheat',
    channel: 'Voice Call',
    status: 'Delivered',
    farmersReached: 15100,
    engagementRate: 91.8,
    timestamp: '2026-05-20T14:30:00Z'
  },
  {
    id: 'camp-104',
    title: 'Tomato Pegasus Pest Defense alert',
    state: 'Andhra Pradesh',
    crop: 'Tomato',
    channel: 'WhatsApp',
    status: 'Active',
    farmersReached: 9800,
    engagementRate: 79.3,
    timestamp: '2026-05-20T10:00:00Z'
  },
  {
    id: 'camp-105',
    title: 'Virtako Sugarcane Stalk Optimizer',
    state: 'Uttar Pradesh',
    crop: 'Sugarcane',
    channel: 'Social Media',
    status: 'Snoozed',
    farmersReached: 31200,
    engagementRate: 64.2,
    timestamp: '2026-05-19T09:00:00Z'
  },
  {
    id: 'camp-106',
    title: 'FAW Maize Ampligo Special Advisory',
    state: 'Karnataka',
    crop: 'Maize',
    channel: 'Voice Call',
    status: 'Auto-paused',
    farmersReached: 8400,
    engagementRate: 38.5,
    timestamp: '2026-05-18T11:45:00Z'
  }
];

export const INITIAL_FARMER_SEGMENTS: FarmerSegment[] = [
  {
    id: 'seg-1',
    region: 'Maharashtra',
    crop: 'Cotton',
    messagesThisWeek: 6,
    fatigueScore: 88,
    status: 'suppressed',
    manualOverride: false,
    historyData: [3, 4, 3, 5, 2, 5, 6]
  },
  {
    id: 'seg-2',
    region: 'Punjab',
    crop: 'Wheat',
    messagesThisWeek: 2,
    fatigueScore: 18,
    status: 'safe',
    manualOverride: false,
    historyData: [1, 0, 1, 2, 1, 0, 2]
  },
  {
    id: 'seg-3',
    region: 'Tamil Nadu',
    crop: 'Rice',
    messagesThisWeek: 4,
    fatigueScore: 45,
    status: 'safe',
    manualOverride: false,
    historyData: [2, 1, 3, 2, 4, 2, 4]
  },
  {
    id: 'seg-4',
    region: 'Andhra Pradesh',
    crop: 'Tomato',
    messagesThisWeek: 5,
    fatigueScore: 72,
    status: 'warning',
    manualOverride: false,
    historyData: [2, 3, 4, 3, 3, 5, 5]
  },
  {
    id: 'seg-5',
    region: 'Uttar Pradesh',
    crop: 'Sugarcane',
    messagesThisWeek: 3,
    fatigueScore: 31,
    status: 'safe',
    manualOverride: false,
    historyData: [1, 1, 2, 2, 1, 3, 3]
  },
  {
    id: 'seg-6',
    region: 'Karnataka',
    crop: 'Maize',
    messagesThisWeek: 4,
    fatigueScore: 54,
    status: 'warning',
    manualOverride: false,
    historyData: [2, 2, 1, 4, 3, 3, 4]
  },
  {
    id: 'seg-7',
    region: 'Punjab',
    crop: 'Rice',
    messagesThisWeek: 7,
    fatigueScore: 94,
    status: 'suppressed',
    manualOverride: false,
    historyData: [5, 4, 6, 4, 5, 7, 7]
  },
  {
    id: 'seg-8',
    region: 'Maharashtra',
    crop: 'Tomato',
    messagesThisWeek: 1,
    fatigueScore: 12,
    status: 'safe',
    manualOverride: false,
    historyData: [0, 1, 0, 0, 1, 1, 1]
  }
];

export const SCENARIO_TRIGGERS: PestAlertScenario[] = [
  {
    id: 'scenario-1',
    state: 'Punjab',
    crop: 'Wheat',
    pestName: 'Yellow Rust Epidemic Alert',
    severity: 'severe',
    recommendedProduct: 'Syngenta Tilt 250 EC',
    estimatedFarmers: 16500,
    channel: 'SMS'
  },
  {
    id: 'scenario-2',
    state: 'Maharashtra',
    crop: 'Cotton',
    pestName: 'Bollworm Pest Infestation',
    severity: 'severe',
    recommendedProduct: 'Syngenta Ampligo 150 ZC',
    estimatedFarmers: 22400,
    channel: 'WhatsApp'
  },
  {
    id: 'scenario-3',
    state: 'Tamil Nadu',
    crop: 'Rice',
    pestName: 'Blast Disease (Pyricalaria Oryzae)',
    severity: 'moderate',
    recommendedProduct: 'Syngenta Amistar Top',
    estimatedFarmers: 10500,
    channel: 'WhatsApp'
  },
  {
    id: 'scenario-4',
    state: 'Andhra Pradesh',
    crop: 'Tomato',
    pestName: 'Whitefly Viral Sucking Attack',
    severity: 'severe',
    recommendedProduct: 'Syngenta Pegasus 50 WP',
    estimatedFarmers: 11400,
    channel: 'SMS'
  },
  {
    id: 'scenario-5',
    state: 'Karnataka',
    crop: 'Maize',
    pestName: 'Fall Armyworm Outbreak',
    severity: 'severe',
    recommendedProduct: 'Syngenta Elestal Neo',
    estimatedFarmers: 13900,
    channel: 'Voice Call'
  },
  {
    id: 'scenario-6',
    state: 'Uttar Pradesh',
    crop: 'Sugarcane',
    pestName: 'Top Stem Borer Damage Complex',
    severity: 'moderate',
    recommendedProduct: 'Syngenta Virtako 0.6 GR',
    estimatedFarmers: 25800,
    channel: 'Voice Call'
  }
];

// Rich, domain-accurate generated messages mapped by crop and severity
export const CROP_TEMPLATES: Record<CropType, Record<SeverityLevel, {
  recommendedProduct: string;
  reach: number;
  score: number;
  languages: Record<LanguageType, {
    fullMessage: string;
    smsVersion: string;
    voiceScript: string;
  }>;
}>> = {
  Rice: {
    none: {
      recommendedProduct: 'Syngenta Amistar Top',
      reach: 12000,
      score: 74,
      languages: {
        English: {
          fullMessage: '🌾 Syngenta Advisory: Maintain your paddy health during this vegetative phase. Ensure balanced nitrogen application and shallow standing water. For premium defense against latent fungal attacks, consider a preventive spray of Amistar Top. Grow green, yield high!',
          smsVersion: '🌾Syngenta: Keep Rice paddy green! Avoid excess urea. Apply defensive preventive Amistar Top for panicle protection. Contact your Syngenta distributor.',
          voiceScript: 'Namaskar Farmer Brother! This is Syngenta Agron-Advisor. To protect your Rice during the current growth stage, keep standing water clean and apply Amistar Top as a protective measure. Visit our near dealer today for detailed advice.'
        },
        Hindi: {
          fullMessage: '🌾 सिंजेंटा परामर्श: इस वानस्पतिक अवस्था के दौरान अपने धान के स्वास्थ्य को सुरक्षित रखें। संतुलित नाइट्रोजन का ही उपयोग करें। फंगस के हमले से पहले रोकथाम के लिए "Amistar Top" का सुरक्षात्मक स्प्रे करें। स्वस्थ फसल, भरपूर मुनाफा!',
          smsVersion: '🌾सिंजेंटा: धान को हरा-भरा रखें! यूरिया का संतुलित उपयोग करें। उन्नत सुरक्षा के लिए एमिस्टार टॉप का इस्तेमाल करें। अधिक जानकारी हेतु संपर्क करें।',
          voiceScript: 'नमस्कार किसान भाइयों! सिंजेंटा फसल सुरक्षा विशेषज्ञ की तरफ से। धान के पौधों को फंगस से बचाने और शानदार बालियां पाने के लिए समय पर एमिस्टार टॉप का छिड़काव अवश्य करें। धन्यवाद।'
        },
        Telugu: {
          fullMessage: '🌾 సింజెంటా సలహా: మీ వరి పొలం ఎదుగుదల దశలో ఉన్నప్పుడు పిలకలు బలంగా రావడానికి సమతుల్య నత్రజని వాడండి. శిలీంధ్ర వ్యాధుల ముందస్తు నివారణకు అమిస్టార్ టాప్ స్ప్రే చేయండి. అధిక దిగుబడి సాధించండి!',
          smsVersion: '🌾సింజెంటా: వరిలో చీడపీడల నివారణకు, అధిక పిలకల కోసం అమిస్టార్ టాప్ వాడండి. మీ సమీప డీలర్‌ను సంప్రదించండి.',
          voiceScript: 'నమస్కారం రైతు సోదరులారా! వరి పంటను ముందస్తు తెగుళ్ళ నుండి కాపాడుకోవడానికి ఎమిస్టార్ టాప్ ఒక అద్భుతమైన మార్గం. మీ సమీప డీలర్ వద్ద ఈరోజే పొందండి.'
        },
        Tamil: {
          fullMessage: '🌾 சின்ஜெண்டா ஆலோசனை: நெல் பயிரின் தூர் கட்டும் பருவத்தில் சமச்சீர் உரமிடுதல் அவசியம். பூஞ்சை தாக்குதலை தடுக்க அமிஸ்டார் டாப் சிறந்த தடுப்பு மருந்து ஆகும். அமோக விளைச்சல் மற்றும் ஆரோக்கியமான கதிர்கள் பெற உகந்தது!',
          smsVersion: '🌾சின்ஜெண்டா நெல் ஆலோசனை: நோய் தாக்குதலை தவிர்க்க அமிஸ்டார் டாப் தெளிக்கவும். உங்கள் அருகில் உள்ள டீலரை அணுகவும்.',
          voiceScript: 'மதிப்பிற்குரிய விவசாய பெருமக்களே! சின்ஜெண்டாவின் நெல் பயிர் பாதுகாப்பு ஆலோசனையை கேளுங்கள். அமிஸ்டார் டாப் தெளித்து கதிர்களை செழுமையாக வளரச் செய்யுங்கள்.'
        },
        Kannada: {
          fullMessage: '🌾 ಸಿಂಜೆಂಟಾ ಸಲಹೆ: ನಿಮ್ಮ ಭತ್ತದ ಬೆಳೆಯು ಸಸಿ ಹಂತದಲ್ಲಿದ್ದಾಗ ಸರಿಯಾದ ರಸಗೊಬ್ಬರ ನಿರ್ವಹಣೆ ಮಾಡಿ. ರೋಗಗಳು ಬಾರದಂತೆ ತಡೆಯಲು ಅಮಿಸ್ಟಾರ್ ಟಾಪ್ ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಬಂಪರ್ ಇಳುವರಿ ನಿಮ್ಮದಾಗಿಸಿ.',
          smsVersion: '🌾ಸಿಂಜೆಂಟಾ ಭತ್ತದ ಸಲಹೆ: ರೋಗ ರಕ್ಷಣೆಗಾಗಿ ಮತ್ತು ಉತ್ತಮ ಇಳುವರಿ ಪಡೆಯಲು ಅಮಿಸ್ಟಾರ್ ಟಾಪ್ ಸಿಂಪಡಿಸಿ. ನಿಮ್ಮ ಸಿಂಜೆಂಟಾ ಡೀಲರ್ ಸಂಪರ್ಕಿಸಿ.',
          voiceScript: 'ನಮಸ್ಕಾರ ರೈತ ಬಾಂಧವರೇ, ಸಿಂಜೆಂಟಾ ಭತ್ತ ತಜ್ಞರ ಮಾತನಾಡುತ್ತಿರುವುದು. ಈಗಲೇ ನಿಮ್ಮ ಬೆಳೆಗೆ ಅಮಿಸ್ಟಾರ್ ಟಾಪ್ ಸಿಂಪಡಿಸಿ ರೋಗ ಮುಕ್ತವಾಗಿಸಿ.'
        },
        Marathi: {
          fullMessage: '🌾 सिंजेंटा सल्ला: भात पिकाच्या शाकीय वाढीच्या टप्प्यात नत्राचा संतुलित वापर करा. बुरशीजन्य रोगांच्या प्रतिबंधात्मक नियंत्रणासाठी "Amistar Top" ची फवारणी करा. निरोगी पीक, उत्तम नफा!',
          smsVersion: '🌾सिंंजेंटा सल्ला: भात पीक बुरशीपासून वाचवण्यासाठी अमिसार टॉप वापरा. अधिक माहितीसाठी आपल्या जवळच्या डिलरशी संपर्क साधा.',
          voiceScript: 'नमस्कार शेतकरी बंधूंनो! भात पिकाला तांबेरा आणि करपा रोगापासून वाचवण्यासाठी अमिसार टॉपचा प्रतिबंधात्मक वापर नक्की करा. धन्यवाद!'
        }
      }
    },
    moderate: {
      recommendedProduct: 'Syngenta Virtako 0.6 GR',
      reach: 14500,
      score: 83,
      languages: {
        English: {
          fullMessage: '🌾 Syngenta Advisory: Moderate Stem Borer warning detected in Rice fields. Ensure proper pesticide application before insect damages the growing shoot core. Apply "Virtako 0.6 GR" at 4kg/acre together with urea to clear internal borers. Act now!',
          smsVersion: '🌾Syngenta Alert: Stem Borer active in area! Use Virtako 0.6 GR (4kg/acre) with fertilizer for deep systemic defense. Save paddy shoots now.',
          voiceScript: 'Attention Farmer! Stem Borer larvae are active in Rice crops. Protect your vegetative shoots immediately by applying four kilograms of Virtako 0.6 GR per acre. Consult your store specialist now.'
        },
        Hindi: {
          fullMessage: '🌾 सिंजेंटा चेतावनी: आपके धान में "तना छेदक" (Stem Borer) का प्रकोप देखा गया है। पौधे के तने को सूखने (Dead Heart) से बचाने के लिए खाद के साथ "Virtako 0.6 GR" (4 किलो प्रति एकड़) मिट्टी में मिलाएं। कीटों का तुरंत सफाया!',
          smsVersion: '🌾धान अलर्ट: तना छेदक का हमला शुरू! फसल की सुरक्षा के लिए विरताको 0.6 GR (4 किलो/एकड़) का यूरिया के साथ तुरंत इस्तेमाल करें।',
          voiceScript: 'किसान भाइयों ध्यान दें! धान में तना छेदक सुंडी का हमला बढ़ सकता है। अपनी फसल को सुरक्षित रखने के लिए खाद के साथ चार किलो विरताको प्रति एकड़ डालें।'
        },
        Telugu: {
          fullMessage: '🌾 సింజెంటా హెచ్చరిక: వరి పంటలో కాండం తొలుచు పురుగు (మొవ్వు కుళ్ళు) మోస్తరు తీవ్రత ఉంది. దీని నివారణకు ఎకరానికి 4 కిలోల "Virtako 0.6 GR" ను ఎరువులలో కలిపి పొలంలో చల్లండి. తెగుళ్ళను అరికట్టండి!',
          smsVersion: '🌾వరి కాండం తొలిచే పురుగు నివారణకు సింజెంటా విర్టాకో 0.6 GR (ఎకరానికి 4 కేజీలు) వాడండి. మొవ్వును త్వరగా రక్షించండి.',
          voiceScript: 'ప్రియమైన రైతు సోదర, వరి పొలంలో కాండం తొలుచు పురుగు కనిపిస్తోంది. దీని నివారణకు వెంటనే విర్టాకో చల్లవలసిందిగా కోరుతున్నాము.'
        },
        Tamil: {
          fullMessage: '🌾 சின்ஜெண்டா எச்சரிக்கை: நெற்பயிரில் குருத்துப்பூச்சி தாக்குதல் ஆரம்பமாகியுள்ளது. குருத்து காய்வதை தடுக்க, எக்டருக்கு தகுந்த உரம் மற்றும் "Virtako 0.6 GR" (ஏக்கருக்கு 4 கிலோ) கலந்து இடவும். வேர் மூலம் உறிஞ்சப்பட்டு முழு பாதுகாப்பு அளிக்கும்!',
          smsVersion: '🌾நெல் குருത്തുப்பூச்சி அலர்ட்: தாக்குதலைத் தடுக்க சின்ஜெண்டா விர்டாகோ (ஏக்கருக்கு 4 கிலோ) பயன்படுத்தவும். பயிரை உடனடியாக காக்கவும்.',
          voiceScript: 'அன்பான விவசாயிகளே, உங்கள் நெல் பயிரில் குருத்துப்பூச்சி அதிகமாக பரவி வருகிறது. இதனை உடனே கட்டுப்படுத்த ஏக்கருக்கு 4 கிலோ விர்டாகோ இடவும்.'
        },
        Kannada: {
          fullMessage: '🌾 ಸಿಂಜೆಂಟಾ ಎಚ್ಚರಿಕೆ: ಭತ್ತದಲ್ಲಿ ಕಾಂಡಕೊರಕ ಕೀಟದ ಹಾವಳಿ ಕಂಡು ಬಂದಿದೆ. ತೆನೆಗಳು ಒಣಗದಂತೆ ತಡೆಯಲು ಯೂರಿಯಾ ಜೊತೆಗೆ ತಪ್ಪದೇ "Virtako 0.6 GR" (ಎಕರೆಗೆ 4 ಕೆಜಿ) ಬೆರೆಸಿ ಒದಗಿಸಿ.',
          smsVersion: '🌾ಭತ್ತದ ಕೀಟ ಎಚ್ಚರಿಕೆ: ಕಾಂಡಕೋರಕ ಹತೋಟಿಗೆ ಸಿಂಜೆಂಟಾ ವಿರ್ಟಾಕೊ 0.6 GR ಬಳಸಿ. ವಿವರಗಳಿಗಾಗಿ ಈಗಲೇ ಉತ್ತರಿಸಿ.',
          voiceScript: 'ಕೃಷಿಕ ಮಿತ್ರರೇ ಗಮನಿಸಿ, ಭತ್ತದಲ್ಲಿ ಕಾಂಡಕೋರಕದ ತಡೆಗೆ ವಿರ್ಟಾಕೊ ಅತ್ಯಂತ ಪರಿಣಾಮಕಾರಿ ಔಷಧಿಯಾಗಿದೆ, ಇಂದೇ ಉಪಯೋಗಿಸಿ.'
        },
        Marathi: {
          fullMessage: '🌾 सिंजेंटा इशारा: तुमच्या भात पिकावर खोडकिडीचा (Stem Borer) प्रादुर्भाव आढळला आहे. पीक सुकण्यापासून वाचवण्यासाठी खतासोबत "Virtako 0.6 GR" (४ किलो प्रति एकर) जमिनीतून द्या. पीक सुरक्षित ठेवा!',
          smsVersion: '🌾भात खोडकीड अलर्ट: खोडकिडीच्या नियंत्रणासाठी व्हिरटाको ०.६ GR (४ किलो/एकर) खतासोबत शेतात त्वरित टाका.',
          voiceScript: 'शेतकरी बंधूहो, भात पिकात खोडकिडा पडला असल्यास जास्त वेळ वाया न घालवता व्हिरटाको ४ किलो प्रति एकरी टाकून नियंत्रण मिळवा.'
        }
      }
    },
    severe: {
      recommendedProduct: 'Syngenta Amistar Top',
      reach: 11800,
      score: 93,
      languages: {
        English: {
          fullMessage: '🚨 CRITICAL ADVISORY: Rice Blast Disease spreading fast due to humid conditions. Failure to treat now will cause complete panicle rot and up to 50% loss. Spray "Amistar Top" (1ml/litre) immediately for complete eradication. Save your yield!',
          smsVersion: '🚨URGENT RICE BLAST ALERT: Humidity causing Blast spread. Complete yield risk. Spray Amistar Top immediately (200ml/acre). Contact Dealer today.',
          voiceScript: 'Urgent notice from Syngenta! Rice Blast disease is spreading rapidly in your pocket. Do not delay! Instantly spray Amistar Top at one ml per liter of water to arrest the spread and safeguard your hard-earned harvest.'
        },
        Hindi: {
          fullMessage: '🚨 अत्यंत महत्वपूर्ण: मौसम में उमस के कारण "धान का झोंका" (Rice Blast) रोग तेजी से फैल रहा है। इसे नजरअंदाज करने पर बालियां पूरी तरह काली होकर टूट सकती हैं। तुरंत "Amistar Top" (200 मिली प्रति एकड़) का छिड़काव करें और पूरी फसल बचाएं!',
          smsVersion: '🚨अति आवश्यक: धान में झोंका (Blast) रोग का भारी प्रकोप! फसल बर्बादी से बचने के लिए एमिस्टार टॉप का तुरंत स्प्रे करें। समय कम है!',
          voiceScript: 'अति आवश्यक चेतावनी! किसान भाइयों, आपके क्षेत्र में धान का झोंका रोग बढ़ गया है। तत्काल अपनी धान की फसल पर एमिस्टार टॉप का छिड़काव करें और भारी नुकसान से बचें।'
        },
        Telugu: {
          fullMessage: '🚨 అత్యవసర హెచ్చరిక: వరి వెన్నుపోటు / అగ్గితెగుళ్లు (Rice Blast) అతి తీవ్రంగా వ్యాపిస్తున్నది. వెంటనే స్ప్రే చేయకపోతే వెన్నులు తాలుగా మారి నష్టం వస్తుంది. నివారణకు వెంటనే "Amistar Top" (ఎకరానికి 200 ఎంఎల్) స్ప్రే చేయండి!',
          smsVersion: '🚨వరి అగ్గితెగులు అత్యవసరం: పంట నష్టం జరిగే ప్రమాదం ఉంది. వెంటనే అమిస్టార్ టాప్ (ఎకరానికి 200 ఎం.ఎల్) పిచికారీ చేయండి.',
          voiceScript: 'అత్యవసర సమాచారం! వరి పంటలో అగ్గితెగులు ఉధృతి ఎక్కువగా ఉంది. మీ చేతికందే పంటను రక్షించుకోవడానికి వెంటనే అమిస్టార్ టాప్ పిచಿಕారీ చేయండి.'
        },
        Tamil: {
          fullMessage: '🚨 மிக முக்கிய எச்சரிக்கை: காற்றில் ஈரப்பதம் காரணமாக நெல்லில் "குலை நோய்" (Rice Blast) படுவேகமாக பரவுகிறது. உடனடியாக தீர்வு செய்யாவிடில் கதிர்கள் அழுகி 50% நஷ்டம் ஏற்படும். உடனடியாக "Amistar Top" மூலம் தெளித்து கதிர்களை பாதுகாக்கவும்!',
          smsVersion: '🚨நெல் குலைநோய் அவசர அலர்ட்: நெல் சேதமாவதை தடுக்க அமிஸ்டார் டாப் (ஏக்கருக்கு 200 மி.லி) உடனே தெளிக்கவும். தாமதிக்காதீர்கள்!',
          voiceScript: 'அவசர செய்தி! நெல் குலை நோய் தீவிரமாக பரவி பயிரை பாழாக்குகிறது. உடனே சின்ஜெண்டாவின் அமிஸ்டார் டாப் தெளித்து நெல் விளைச்சலை காப்பாற்றுங்கள்.'
        },
        Kannada: {
          fullMessage: '🚨 ತುರ್ತು ಸಲಹೆ: ಆರ್ದ್ರ ವಾತಾವರಣದಿಂದ ಭತ್ತದ ಬೆಂಕಿರೋಗ (Rice Blast) ತೀವ್ರವಾಗಿ ಹರಡುತ್ತಿದೆ. ಈಗಲೇ ಮುನ್ನೆಚ್ಚರಿಕೆ ವಹಿಸದಿದ್ದರೆ ತೆನೆ ಕೆಡುತ್ತದೆ. ತಕ್ಷಣ "Amistar Top" ಸಿಂಪಡಿಸಿ ನಿಮ್ಮ ಇಳುವರಿ ಉಳಿಸಿಕೊಳ್ಳಿ!',
          smsVersion: '🚨ಭತ್ತದ ಬೆಂಕಿರೋಗ ತಕ್ಷಣದ ಎಚ್ಚರಿಕೆ: ಭಾರಿ ಹಾನಿ ತಪ್ಪಿಸಲು ತಕ್ಷಣ ಅಮಿಸ್ಟಾರ್ ಟಾಪ್ ಸಿಂಪಡಿಸಿ. ಹೆಚ್ಚಿನ ಸಹಾಯ ಪಡೆಯಲು ಕರೆ ಮಾಡಿ.',
          voiceScript: 'ತುರ್ತು ಎಚ್ಚರಿಕೆ! ನಿಮ್ಮ ಭಾಗದಲ್ಲಿ ಭತ್ತದ ಬೆಂಕಿರೋಗ ಕಾಣಿಸಿಕೊಂಡಿದೆ. ತಕ್ಷಣ ಅಮಿಸ್ಟಾರ್ ಟಾಪ್ ಬಳಸಿ ನಿಮ್ಮ ಭತ್ತವನ್ನು ಕಪ್ಪಾಗದಂತೆ ಕಾಪಾಡಿ.'
        },
        Marathi: {
          fullMessage: '🚨 अत्यंत गंभीर: दमट हवामानामुळे भातावर "करपा रोग" (Blast) वेगाने पसरत आहे. वेळीच नियंत्रण न केल्यास लोंब्या सडून ५०% पर्यंत नुकसान संभवते. तातडीने "Amistar Top" (२०० मिली प्रति एकर) फवारा व अलोट नुकसान टाळा!',
          smsVersion: '🚨अतिशय महत्त्वाचे: भात पिकावर करपा रोगाचा तीव्र अटॅक! पूर्ण नुकसान टाळण्यासाठी तातडीने अमिसार टॉप फवारणी करा.',
          voiceScript: 'अतिशय महत्त्वाची सूचना! भातातील करपा रोगाचा नायनाट करण्यासाठी उशीर न करता त्वरित अमिसार टॉपची फवारणी करा आणि आपले पीक वाचवा.'
        }
      }
    }
  },
  Cotton: {
    none: {
      recommendedProduct: 'Syngenta Alika 247 ZC',
      reach: 19800,
      score: 71,
      languages: {
        English: {
          fullMessage: '🌱 Syngenta Cotton Guide: Manage cotton sap suckers in early vegetative phase. Protect your square formation using systemic defense. Alika prevents foliage crinkling and boosts structural vigor.',
          smsVersion: '🌱Syngenta: Keep cotton clean from initial sucking pests. Apply Alika for a clean leaves set and robust vegetative height.',
          voiceScript: 'Namaskar. Keep your cotton leaves spread and free from aphids/jassids with a protective spray of Alika. Buy from your closest authorized Syngenta distributor.'
        },
        Hindi: {
          fullMessage: '🌱 सिंजेंटा कपास सलाह: वानस्पतिक चरण के दौरान शुरुआती चूसक कीटों से रक्षा करें। पत्तों के सिकुड़ने से बचाव और कपास के स्वस्थ विकास के लिए सुरक्षात्मक उपाय अपनाएं। फसल की सुरक्षा, आपकी समृद्धि!',
          smsVersion: '🌱कपास मित्र: शुरुआती चूसक श्वेतमक्खी कीटों से फसल बचाएं। स्वस्थ पत्तों और जोरदार बढ़त के लिए उचित देखभाल करें।',
          voiceScript: 'नमस्कार कॉटन उत्पादक भाइयों! कपास की स्वस्थ शुरुआत के लिए और कोमल पत्तों को रस चूसने वाले कीटों से सुरक्षित रखने के लिए आज ही सिंजेंटा अलीका का परामर्श लें।'
        },
        Telugu: {
          fullMessage: '🌱 సింజెంటా పత్తి సలహా: పత్తి ఎదుగుదల దశలో రసం పీల్చే పురుగుల నుంచి రక్షించండి. ఆకులు ముడతలు పడకుండా ఉండటానికి ముందస్తు చర్యలు తీసుకోండి. మెరుగైన ఆకులకు తగిన క్రమపద్ధతి పాటించండి.',
          smsVersion: '🌱పత్తి రైతులు గమనించండి: రసం పీల్చే పురుగుల నుండి కాపాడుకుంటూ పత్తి చేనుని నిత్యం గమనించండి.',
          voiceScript: 'నమస్కారం! పత్తి లేత ఆకులలో రసం పీల్చే పురుగుల నివారణ మరియు మొక్క పుష్టిగా పెరగడం కొరకు అలీకా వాడాల్సిందిగా మా నిపుణుల సలహా.'
        },
        Tamil: {
          fullMessage: '🌱 சின்ஜெண்டா பருத்தி ஆலோசனை: பருத்தி பயிரின் ஆரம்ப வளர்ச்சிப் பருவத்தில் சாறு உறிஞ்சும் பூச்சிகள் தாக்கக்கூடும். இலைகள் சுருங்குவதைத் தடுத்து, சிறந்த கிளைப்புத் திறனைப் பெற அலிஹா பாதுகாப்பு வழங்கிடும்.',
          smsVersion: '🌱பருத்தி விவசாயி: சாறு உறிஞ்சும் பூச்சியிலிருந்து பருத்தியைக் காக்கவும். அலிஹா தெளித்து தரத்தை உயர்த்தவும்.',
          voiceScript: 'வணக்கம் பருத்தி விவசாயிகளே! செடிகளின் இலை நுனிகள் கருகாமல் இருக்கவும் பூச்சி தாக்குதலை ஆரம்பத்திலேயே தடுக்கவும் அலிஹா பயன்படுத்த சிபாரிசு செய்யப்படுகிறது.'
        },
        Kannada: {
          fullMessage: '🌱 ಸಿಂಜೆಂಟಾ ಹತ್ತಿ ಸಲಹೆ: ಹತ್ತಿಯ ಆರಂಭಿಕ ಬೆಳವಣಿಗೆಯ ಹಂತದಲ್ಲಿ ರಸಹೀರುವ ಕೀಟಗಳಿಂದ ರಕ್ಷಿಸಲು ಕಾಳಜಿವಹಿಸಿ. ಅಲಿಹಾ ಸಿಂಪರಣೆಯು ಹಳದಿ ಎಲೆ ರೋಗ ತಡೆಯುತ್ತದೆ.',
          smsVersion: '🌱ಹತ್ತಿ ಎಚ್ಚರಿಕೆ: ಆರಂಭಿಕ ರಸಹೀರುವ ಕೀಟಗಳ ಚಿಕಿತ್ಸೆಗೆ ಸಿಂಜೆಂಟಾ ಅಲಿಹಾ ಅತ್ಯುತ್ತಮ ಪರಿಹಾರ. ಇಂದು ಸಂಪರ್ಕಿಸಿ.',
          voiceScript: 'ಹತ್ತಿ ಬೆಳೆಗಾರರೇ ನಮಸ್ಕಾರ, ಗಿಡದ ಎಲೆಗಳು ಮುದುರಿಕೊಳ್ಳದಂತೆ ತಡೆಯಲು ಮುಂಜಾಗ್ರತೆಯಾಗಿ ಅಲಿಹಾ ಔಷಧಿಯನ್ನು ತಪ್ಪದೆ ಬಳಸಿ.'
        },
        Marathi: {
          fullMessage: '🌱 सिंजेंटा कापूस सल्ला: कापूस पिकाच्या सुरुवातीच्या वाढीच्या अवस्थेत रसशोषक किडींचे योग्य व्यवस्थापन करा. पानांचे आकुंचन रोखण्यासाठी आणि कापसाच्या जोमदार वाढीसाठी योग्य काळजी घ्या.',
          smsVersion: '🌱कापूस उत्पादकांनो: सुरुवातीच्या रसशोषक किडींच्या निर्मूलनासाठी अलीकाचा प्रतिबंधात्मक वापर करा.',
          voiceScript: 'नमस्कार शेतकरी मित्रांनो! कापसाची पाने आकसणे आणि पिवळे पडणे टाळण्यासाठी योग्य पावले उचला आणि सिंजेंटा अलीकाचा वापर करा.'
        }
      }
    },
    moderate: {
      recommendedProduct: 'Syngenta Alika 247 ZC',
      reach: 22000,
      score: 80,
      languages: {
        English: {
          fullMessage: '🐛 Syngenta Alert: Sucking pests (Whiteflies and Jassids) crossing moderate threshold in Cotton. This can stunt terminal buds and yellow internal bolls. Spray Alika (80ml/acre) to establish systemic leaf protection immediately.',
          smsVersion: '🐛Cotton Sucking Pest Alert: Whitefly/Jassid spotted in vicinity. Block leaf yellowing immediately. Apply Syngenta Alika (80ml/acre) today.',
          voiceScript: 'Attention Cotton farmer! Jassids and whiteflies are sucking essential sap from your cotton squares. Control this moderate outbreak by spraying Alika at eighty milliliters per acre.'
        },
        Hindi: {
          fullMessage: '🐛 सिंजेंटा कपास चेतावनी: आपके क्षेत्र में कपास की फसल पर जेसिड्स और सफेद मक्खी का मध्यम प्रकोप है। इससे पत्तियां पीली पड़कर सूख सकती हैं। तुरंत "Alika" (80 मिली प्रति एकड़) का छिड़काव करें और रस चूसने वाले कीटों का खात्मा करें!',
          smsVersion: '🐛कपास रसचूषक कीट चेतावनी: सफेद मक्खी और जेसिड को बढ़ने से रोकें। तुरंत सिंजेंटा अलीका (80ml/एकड़) का छिड़काव करें।',
          voiceScript: 'किसान भाइयों, कपास की फसल में सफेद मक्खी और हरा तेला रस चूस रहे हैं। इसे बढ़ने से रोकने के लिए आज ही सिंजेंटा कंपनी की अलीका दवा का छिड़काव करें।'
        },
        Telugu: {
          fullMessage: '🐛 సింజెంటా పత్తి అలర్ట్: పత్తిలో రసం పీల్చే పురుగులు (తెల్ల దోమ, పచ్చ దోమ) ఉధృతి పెరుగుతోంది. ఆకులు పసుపు రంగులోకి మారి ఎండిపోకముందే "Alika" (ఎకరానికి 80 ఎంఎల్) స్ప్రే చేయండి!',
          smsVersion: '🐛పత్తి తెల్లదోమ నివారణకు సింజెంటా అలీకా (ఎకరానికి 80 ఎం.ఎల్) ఉపయోగించండి. ఆకులు ఎండిపోకుండా రక్షించండి.',
          voiceScript: 'రైతు సోదరులారా! పత్తి పంటను తెల్లదोమ మరియు జస్సిడ్ల దాడి నుండి రక్షించుకోవడానికి వెంటనే అలాలికా పిచికారీ చేయాల్సిందిగా వినతి.'
        },
        Tamil: {
          fullMessage: '🐛 சின்ஜெண்டா பருத்தி எச்சரிக்கை: பருத்தி பயிரில் அசுவினி மற்றும் வெள்ளை ஈக்கள் தாக்கம் நடுத்தர அளவைக் கடந்துள்ளது. செடியின் நுனிகள் வாடாமல் தடுக்க உடனே "Alika" (ஏக்கருக்கு 80 மி.லி) தெளித்து பாதுகாப்பு கவசத்தை உருவாக்குங்கள்!',
          smsVersion: '🐛பருத்தி பூச்சி எச்சரிக்கை: வெள்ளை ஈ பாதிப்பை தடுக்க சின்ஜெண்டா அலிகா பயன்படுத்தவும். இலைகள் உதிர்வதைத் தடுத்து பயிர் கூட்டவும்.',
          voiceScript: 'அன்பான பருத்தி விவசாயிகளே! இலைகளில் சாறு உறிஞ்சப்படுவதை தடுக்க உடனே சின்ஜெண்டா அலிஹா மருந்தை ஏக்கருக்கு 80 மிலி என்ற அளவில் தெளிக்கவும்.'
        },
        Kannada: {
          fullMessage: '🐛 ಸಿಂಜೆಂಟಾ ಹತ್ತಿ ಎಚ್ಚರಿಕೆ: ಹತ್ತಿಯಲ್ಲಿ ಜಿಗಿ ಮತ್ತು ಬಿಳಿ ನೊಣದ ಬಾಧೆ ಸಾಮಾನ್ಯ ಮಿತಿಯನ್ನು ಮೀರಿದೆ. ಕಾಯಿ ಕಚ್ಚುವುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು "Alika" (ಎಕರೆಗೆ 80 ಮಿಲಿ) ಸಿಂಪಡಿಸಿ.',
          smsVersion: '🐛ಹತ್ತಿ ಕೀಟ ಅಲರ್ಟ್: ರಸಹೀರುವ ನೊಣಗಳ ನಾಶಕ್ಕೆ ಸಿಂಜೆಂಟಾ ಅಲಿಹಾ ಸೂಕ್ತ ಸಮಯದಲ್ಲೇ ಸಿಂಪಡಿಸಿ.',
          voiceScript: 'ಕೃಷಿಕರೇ, ಹತ್ತಿಯಲ್ಲಿ ರಸಹೀರುವ ಬ್ಯಾಕ್ಟೀರಿಯಾ ತಪ್ಪಿಸಲು ಇಂದೇ ಅತ್ಯುತ್ತಮ ಸೂತ್ರವಾದ ಅಲಿಹಾ ಖರೀದಿಸಿ ಚಿಕಿತ್ಸೆ ಕೈಗೊಳ್ಳಿ.'
        },
        Marathi: {
          fullMessage: '🐛 सिंजेंटा कापूस इशारा: कापसामध्ये पांढरी माशी आणि तुडतुड्यांचा प्रादुर्भाव वाढत आहे. यामुळे झाडांची वाट खुंटून पाते गळू शकतात. त्वरित "Alika" (८० मिली प्रति एकर) फवारणी करा व कापूस वाचवा!',
          smsVersion: '🐛कापूस पांढरी माशी इशारा: पांढरी माशीच्या तीव्र प्रादुर्भावासाठी सिंजेंटा अलीका ८० मिली प्रति एकरी फवारणी करा.',
          voiceScript: 'शेतकरी मित्रांनो, कापसावर तुडतुडे व पांढऱ्या माशीचा अटॅक सुरू आहे. आजच आपल्या कापूस शेतात अलीका फवारा व पाते गळणे थांबवा.'
        }
      }
    },
    severe: {
      recommendedProduct: 'Syngenta Ampligo 150 ZC',
      reach: 23500,
      score: 95,
      languages: {
        English: {
          fullMessage: '🚨 CRITICAL COTTON ALERT: Severe Pink Bollworm attack confirmed in local tracts. This directly damages internal lint and destroys market value. Instantly spray "Ampligo 150 ZC" (100ml/acre) to destroy larvae and protect cotton bolls.',
          smsVersion: '🚨COTTON BOLLWORM EMERGENCY: Pink Bollworm eating cotton bolls. Complete quality loss risk. Spray Ampligo (100ml/acre) immediately. Contact distributor!',
          voiceScript: 'Urgent call! Pink Bollworm larvae are boring into your cotton crop, ruining internal premium cotton fibers. Stop this destruction immediately by spraying Syngenta Ampligo at one hundred mil per acre.'
        },
        Hindi: {
          fullMessage: '🚨 अत्यंत महत्वपूर्ण: कपास में "गुलाबी सुंडी" (Pink Bollworm) का भयंकर हमला हुआ है। यह सुंडी कपास के गोलकों को अंदर से खाकर रुई की गुणवत्ता नष्ट कर देगी। तुरंत "Ampligo 150 ZC" (100 मिली प्रति एकड़) स्प्रे करें। थोड़ा भी विलंब भारी पड़ेगा!',
          smsVersion: '🚨कपास सुंडी आपातकाल: गुलाबी सुंडी का भारी तांडव! गोलक नष्ट होने से बचाएं। तुरंत एम्पलीगो (100 मिली/एकड़) का छिड़काव कर फसल सुरक्षित करें।',
          voiceScript: 'आपातकालीन सूचना! सिंजेंटा कंपनी की तरफ से कपास किसानों के लिए। गुलाबी सुंडी से कपास की भारी बर्बादी को रोकने के लिए तुरंत एम्पलीगो का छिड़काव सुनिश्चित करें।'
        },
        Telugu: {
          fullMessage: '🚨 అత్యవసర పత్తి అలర్ట్: పత్తి పంటను నాశనం చేసే "గులాబీ రంగు కాయతొలుచు పురుగు" (Pink Bollworm) దాడి చేధించబడింది. వెంటనే నివారించకపోతే దూది నాణ్యత పూర్తిగా దెబ్బతింటుంది. వెంటనే "Ampligo 150 ZC" (ఎకరానికి 100 ఎంఎల్) స్ప్రే చేయండి!',
          smsVersion: '🚨పత్తి గులాబీ పురుగు ప్రమాదం: కాయలు గూడు కట్టి నష్టపోకముందే అంప్లిగో (100 ఎం.ఎల్) పిచికారీ చేయండి. దిగుబడి కాపాడుకోండి.',
          voiceScript: 'అత్యవసర హెచ్చరిక! పత్తి కాయలలో గులాబీ రంగు పురుగు తిష్ట వేసింది. మీ దూది దిగుబడిని కాపాడుకోవడానికి వెంటనే సన్ పిచికారీ చేయండి.'
        },
        Tamil: {
          fullMessage: '🚨 பருத்தி தீவிர எச்சரிக்கை: பருத்தியில் கொடூரமான "இளஞ்சிவப்பு காய்ப்புழு" (Pink Bollworm) தாக்குதல் உறுதி செய்யப்பட்டுள்ளது. இது பருத்தியின் தரத்தை அழிக்கும். உடனடியாக ஏக்கருக்கு "Ampligo 150 ZC" (100 மி.லி) தெளித்து புழுக்களை அடியோடு ஒழியுங்கள்!',
          smsVersion: '🚨பருத்தி அவசர அலர்ட்: காய்ப்புழு பருத்தியின் காய்களை அழுகச் செய்கிறது. சின்ஜெண்டா ஆம்ப்ளிகோ (ஏக்கருக்கு 100 மி.லி) உடனே தெளிக்கவும்.',
          voiceScript: 'அவசர அபாய எச்சரிக்கை! பருத்திக் காய்களை துளைக்கும் இளஞ்சிவப்பு புழுவின் தாக்குதலை ஒடுக்க உடனே ஆம்பிலிகோ 100 மிலி தெளிக்குமாறு கேட்டுக்கொள்ளப்படுகிறது.'
        },
        Kannada: {
          fullMessage: '🚨 ಅತ್ಯಂತ ತುರ್ತು: ಹತ್ತಿ ಬೆಳೆಯಲ್ಲಿ ಹಾನಿಕಾರಕ "ಗುಲಾಬಿ ಕಾಯಿ ಕೊರಕ" ಹುಳು ತೀವ್ರವಾಗಿ ಹರಡುತ್ತಿದೆ. ಹತ್ತಿಯ ಗುಣಮಟ್ಟ ಹಾಳಾಗುವ ಮುನ್ನ ತಕ್ಷಣ "Ampligo 150 ZC" (ಎಕರೆಗೆ 100 ಮಿಲಿ) ಸಿಂಪಡಿಸಿ.',
          smsVersion: '🚨ಹತ್ತಿ ಕಾಯಿಕೊರಕ ಆಪತ್ತು: ಗುಲಾಬಿ ಹುಳು ವಿರುದ್ಧ ತಕ್ಷಣ ಆಂಪ್ಲಿಗೋ (ಎಕರೆಗೆ 100 ಮಿಲಿ) ಬಳಸಿ ಬೆಳೆ ಗುಣಮಟ್ಟ ಉಳಿಸಿಕೊಳ್ಳಿ.',
          voiceScript: 'ತುರ್ತು ಕಾಟ! ಹತ್ತಿಯಲ್ಲಿ ಅತಿ ಅಪಾಯಕಾರಿ ಗುಲಾಬಿ ಕಾಯಿ ಕೊರಕ ಹರಡುತ್ತಿದೆ, ತಕ್ಷಣ ಆಂಪ್ಲಿಗೋ ಸಿಂಪಡಿಸಿ ಬೆಳೆ ರಕ್ಷಿಸಿ.'
        },
        Marathi: {
          fullMessage: '🚨 कापूस आणीबाणी: कापूस पिकावर "गुलाबी बोंडअळी"चा (Pink Bollworm) भीषण हल्ला! बोंडे पोखरून कापसाची प्रत उध्वस्त होण्यापूर्वी तातडीने "Ampligo 150 ZC" (१०० मिली प्रति एकर) फवारणी करा. तात्काळ उपाय करा!',
          smsVersion: '🚨बोंडअळी आणीबाणी: गुलाबी बोंडअळीमुळे कापसाच्या बोंडाचे नुकसान! त्यावर नियंत्रण मिळवण्यासाठी तातडीने अ‍ॅम्प्लीगो फवारणी करा.',
          voiceScript: 'अतिशय महत्त्वाची सूचना कापूस उत्पादकांसाठी! बोंडअळी कापसाचे बोंड खराब करत आहे, त्वरित सिंजेंटा अ‍ॅम्प्लीगो १०० मिली प्रति एकर फवारा.'
        }
      }
    }
  },
  Wheat: {
    none: {
      recommendedProduct: 'Syngenta Tilt 250 EC',
      reach: 15000,
      score: 72,
      languages: {
        English: {
          fullMessage: '🌾 Syngenta Wheat Advisory: Ensure root moisture is stable during grain filling. Keep vigilant about early yellow rust spots on lower leaves. A routine application of Tilt fungicide secures maximum ear size.',
          smsVersion: '🌾Syngenta Help: Boost wheat quality grain! Inspect lower canopy. Spray Tilt preventive for superior rust protection.',
          voiceScript: 'Namaskar. Keep wheat ear development secure and watch out for rust symptoms. Tilt fungicide keeps leaves safe. Ask your nearest agronomist.'
        },
        Hindi: {
          fullMessage: '🌾 सिंजेंटा गेहूं परामर्श: दाना भरने की अवस्था के दौरान मिट्टी में पर्याप्त नमी सुनिश्चित करें। पत्तों के पीलेपन की समय-समय पर जांच करें। टिल्ट फंगीसाइड के उपयोग से गेहूं के दानों को चमकदार और वजनदार बनाएं!',
          smsVersion: '🌾गेहूं विशेषज्ञ: दाना भरते समय नमी बनाए रखें। बेहतर दानों के लिए पीलापन जांचें व सिंजेंटा टिल्ट का प्रयोग करें।',
          voiceScript: 'नमस्कार गेहूं उत्पादक भाइयों! गेहूं की बालियों में दाना भरते समय उचित नमी का ध्यान रखें और फसल को सुरक्षित रखने के लिए समय पर टिल्ट दवा छिड़कें।'
        },
        Telugu: {
          fullMessage: '🌾 సింజెంటా గోధుమ సలహా: గోధుమ గింజలు పోసుకునే దశలో పొలంలో తగినంత తేమ ఉండేలా చూసుకోండి. రస్ట్ తెగుళ్ళు రాకుండా రక్షిత చర్యగా టిల్ట్ పూయండి.',
          smsVersion: '🌾గోధుమ గింజ గట్టిపడటానికి మరియు రస్ట్ తెగులు నివారణకు టిల్ట్ స్ప్రే అనుకూలంగా ఉంటుంది.',
          voiceScript: 'నమస్కారం! గోధుమ పంటలో కాండం మరియు ఆకులకు పసుపు రస్ట్ రాకుండా ముందస్తుగా టిల్ట్ వాడాలని నిపుణులు సూచిస్తున్నారు.'
        },
        Tamil: {
          fullMessage: '🌾 சின்ஜெண்டா கோதுமை ஆலோசனை: கோதுமை மணிகள் முதிரும் பருவத்தில் மண்ணில் ஈரப்பதம் காப்பது அவசியம். இலைகள் துரு பிடிக்காமல் காக்க டில்ட் பூஞ்சை காளான் தெளிப்பது நலம் தரும்.',
          smsVersion: '🌾கோதுமை இலை துரு நோய் தடுக்க டில்ட் உகந்தது. பயிர் தரத்தை கூட்டி கூடுதல் மகசூல் பெற தகுந்தது.',
          voiceScript: 'வணக்கம் கோதுமை விவசாயிகளே! கோதுமையின் மணிகளை தடிமனாகவும் பளபளப்பாகவும் மாற்ற துரு நோய் வராமல் டில்ட் கொண்டு காப்பது நல்லது.'
        },
        Kannada: {
          fullMessage: '🌾 ಸಿಂಜೆಂಟಾ ಗೋಧಿ ಸಲಹೆ: ಗೋಧಿ ತೆನೆ ಕಾಳು ತುಂಬುವ ಹಂತದಲ್ಲಿದ್ದಾಗ ತೇವಾಂಶ ಕಾಪಾಡಿ. ಹಳದಿ ತುಕ್ಕು ರೋಗ ತಡೆಗೆ ಟಿಲ್ಟ್ ಸಿಂಪಡಿಸಲು ಸಲಹೆ ನೀಡಲಾಗಿದೆ.',
          smsVersion: '🌾ಗೋಧಿ ರೈತ ಗಮನಿಸಿ: ಉತ್ತಮ ಕಾಳುಗಳ ಗಾತ್ರಕ್ಕೆ ಮತ್ತು ತುಕ್ಕು ರೋಗ ಮುಕ್ತವಾಗಿಸಲು ಟಿಲ್ಟ್ ಬಳಸಿ.',
          voiceScript: 'ಕೃಷಿಕರೇ, ನಿಮ್ಮ ಗೋಧಿ ತೆನೆಯ ಕಾಳುಗಳು ಶಕ್ತಿಯುತವಾಗಲು ಮತ್ತು ಹಳದಿ ರೋಗ ಮುಕ್ತವಾಗಲು ಟಿಲ್ಟ್ ಉಪಯೋಗಿಸಿ.'
        },
        Marathi: {
          fullMessage: '🌾 सिंजेंटा गहू सल्ला: गव्हात दाणे भरण्याच्या टप्प्यात जमिनीमध्ये योग्य ओलावा राखा. तांबेरा रोगाचे लक्षण दिसताच "Tilt" बुरशीनाशकाची योग्य फवारणी करा, जिससे दाणे भरण्यास मदत होईल.',
          smsVersion: '🌾गहू तांबेरा टाळा: दाणे टपोरे होण्यासाठी तांबेरा प्रतिबंधक म्हणून सिंजेंटा टिल्ट फंगीसाइड उपयुक्त आहे.',
          voiceScript: 'नमस्कार! गव्हाची पीक जोमात असताना तांबेरा रोगापासून पानांचे संरक्षण करण्यासाठी सिंजेंटा टिल्टचा वापर करा.'
        }
      }
    },
    moderate: {
      recommendedProduct: 'Syngenta Actara 25 WG',
      reach: 12000,
      score: 81,
      languages: {
        English: {
          fullMessage: '🐛 Syngenta Advisory: Moderate Brown Wheat Aphid attack rising locally. Aphids suck juice from developing earheads, resulting in chaffy grains. Spray "Actara 25 WG" (50g/acre) to clear aphids quickly.',
          smsVersion: '🐛Wheat Aphid Warning: Sucking pests draining wheat head milk. Act quickly! Spray Syngenta Actara (50g/acre) to save grain weight.',
          voiceScript: 'Wheat alert! Brown aphids are colonizing the wheat spikes. Protect your milk-filling grain from damage by applying Actara at fifty grams per acre.'
        },
        Hindi: {
          fullMessage: '🐛 सिंजेंटा गेहूं चेतावनी: आपके गेहूं में "चेपा" (Aphid) कीट का मध्यम स्तर देखा गया है। यह कीट बालियों का रस चूसकर दाने को कमजोर बना देता है। तुरंत "Actara 25 WG" (50 ग्राम प्रति एकड़) का छिड़काव करें!',
          smsVersion: '🐛गेहूं चेपा चेतावनी: चेपा कीट बालियों से रस चूस रहा है। तुरंत सिंजेंटा एकतारा (50g/एकड़) का छिड़काव करें और दानों को बचाएं।',
          voiceScript: 'गेहूं उत्पादक भाइयों ध्यान दें! चेपा कीट गेहूं की बालियों को नुकसान पहुंचा रहा है। इसके झटपट सफाए के लिए पचास ग्राम एकतारा प्रति एकड़ का छिड़काव करें।'
        },
        Telugu: {
          fullMessage: '🐛 సింజెంటా గోధుమ అలర్ట్: గోధుమ వెన్నులలో చేమ పురుగులు (Aphids) రసం పీల్చుతున్నాయి. దీనివల్ల గింజలు తాలుగా మారతాయి. వెంటనే "Actara 25 WG" (ఎకరానికి 50 గ్రాములు) పిచికారీ చేయండి!',
          smsVersion: '🐛గోధుమ చేమ పురుగు నివారణకు సింజెಂಟా ఆక్టారా (ఎకరానికి 50 గ్రాములు) స్ప్రే చేసి గింజల బరువు కాపాడుకోండి.',
          voiceScript: 'రైతు బంధువులకు విన్నపం! గోధుమ పంటపై అఫిడ్స్ దాడి చేస్తున్నాయి. వెంటనే యాక్టారా వేయడం ద్వారా వీటిని తక్షణమే అదుపు చేయవచ్చు.'
        },
        Tamil: {
          fullMessage: '🐛 சின்ஜெண்டா கோதுமை அலர்ட்: கோதுமை கதிர்களில் அசுவினி பூச்சிகள் சாறு உறிஞ்ச துவங்கியுள்ளன. இதனால் மணிகள் பதராவதை தடுக்க, உடனே ஏக்கருக்கு "Actara 25 WG" (50 ಗ್ರಾಂ) தெளித்து பயிரைக் காக்கவும்!',
          smsVersion: '🐛கோதுமை அசுவினி பூச்சி அலர்ட்: கதிர்களில் உள்ள பாலூட்டும் பூச்சிகளிலிருந்து கோதுமையை மீட்க உடனே ஆக்டாரா தூவவும்.',
          voiceScript: 'அன்பான கோதுமை விவசாயிகளே! கதிர்களிலுள்ள சாற்றை உறிஞ்சும் பூச்சிகளை அழிக்க சின்ஜெண்டா ஆக்டாரா 50 கிராம் அளவில் ஏக்கருக்கு தெளித்திடவும்.'
        },
        Kannada: {
          fullMessage: '🐛 ಸಿಂಜೆಂಟಾ ಗೋಧಿ ಎಚ್ಚರಿಕೆ: ಹಸಿರು ಅಫಿಡ್ಸ್ ಕೀಟಗಳು ಗೋಧಿ ತೆನೆಯನ್ನು ಬಾಧಿಸುತ್ತಿವೆ. ಇದರಿಂದ ಹಿಟ್ಟು ತುಂಬುವಿಕೆ ಮೇಲೆ ಪರಿಣಾಮ ಬಿರದಿರಲು ತಕ್ಷಣ "Actara 25 WG" (ಎಕರೆಗೆ 50 ಗ್ರಾಂ) ಸಿಂಪಡಿಸಿ.',
          smsVersion: '🐛ಗೋಧಿ ಅಫಿಡ್ಸ್ ಹರಡುವಿಕೆ ತಡೆಗೆ ಸಿಂಜೆಂಟಾ ಆಕ್ಟಾರಾ 50 ಗ್ರಾಂ ಬಳಸಿ. ತೆನೆ ಉತ್ತಮ ತೂಕ ನೀಡುತ್ತದೆ.',
          voiceScript: 'ರೈತ ಬಾಂಧವರೇ, ಗೋಧಿ ತೆನೆಗಳಲ್ಲಿ ರಸ ಹೀರದಂತೆ ಕೀಟಗಳಿಂದ ಕಾಪಾಡಲು ಆಕ್ಟಾರಾ ಬಳಸಿ ಉತ್ತಮ ಧಾನ್ಯ ನಿಮ್ಮದಾಗಿಸಿ.'
        },
        Marathi: {
          fullMessage: '🐛 सिंजेंटा गहू चेतावणी: गव्हाच्या ओंब्यांवर मावा (Aphids) किडीचा प्रादुर्भाव वाढत आहे. यामुळे गव्हाचे दाणे चपटे होण्याचा धोका आहे. तातडीने "Actara 25 WG" (५० ग्रॅम प्रति एकर) फवारा!',
          smsVersion: '🐛गहू मावा नियंत्रण: चेपा किडीने ओंब्या सुकू नयेत म्हणून तुरंत सिंजेंटा एकतारा ५० ग्रॅम प्रति एकरी फवारणी करा.',
          voiceScript: 'शेतकरी मित्रांनो, गव्हावर मावा किडीचा प्रादुर्भाव झाला असल्यास पन्नास ग्रॅम सिंजेंटा एक्टारा फवारून तात्काळ नियंत्रण मिळवा.'
        }
      }
    },
    severe: {
      recommendedProduct: 'Syngenta Tilt 250 EC',
      reach: 14200,
      score: 91,
      languages: {
        English: {
          fullMessage: '🚨 CRITICAL ADVISORY: Severe Yellow Rust (Puccinia striformis) outbreaks validated in wheat tracts. This completely destroys green chlorophyll within days, crippling yield up to 40%. Spray "Tilt 250 EC" (200ml/acre) instantly!',
          smsVersion: '🚨WHEAT YELLOW RUST EMERGENCY: Yellow Rust coating wheat leaves. Extreme yield drop warning. Spray Syngenta Tilt (200ml/acre) now. Save crop.',
          voiceScript: 'Urgent Yellow Rust alert! Yellow pustules are covering your wheat leaves, blocking all grain growth. Instantly spray Syngenta Tilt at two hundred mil per acre to restore leaf greenness.'
        },
        Hindi: {
          fullMessage: '🚨 अत्यंत महत्वपूर्ण चेतावनी: आपके क्षेत्र में गेहूं पर "पीला रतुआ" (Yellow Rust) रोग बहुत भयानक रूप से फैल चुका है। पत्तियों पर पीली धारियां पाउडर की तरह दिखेंगी। फसल बचाने के लिए तुरंत "Tilt 250 EC" (200 मिली प्रति एकड़) स्प्रे करें!',
          smsVersion: '🚨गेहूं पीला रतुआ आपदा: पीला पाउडर पत्तों को बर्बाद कर रहा है। भारी घाटा रोकने हेतु तुरंत सिंजेंटा टिल्ट (200ml/एकड़) का छिड़काव करें।',
          voiceScript: 'अति आवश्यक सूचना! किसान भाइयों, गेहूं की फसल में पीला रतुआ रोग तेजी से फैल गया है। तुरंत सिंजेंटा टिल्ट दो सौ एमएल प्रति एकड़ का छिड़काव करें।'
        },
        Telugu: {
          fullMessage: '🚨 అత్యవసర గోధుమ రస్ట్ అలర్ట్: గోధుమ ఆకులపై పసుపు రస్ట్ (కుంకుమ తెగులు) తీవ్రంగా విస్తరించింది. తక్షణమే గ్రీన్ క్లోరోఫిల్ నశిస్తుంది. వెంటనే దీని నివారణకు "Tilt 250 EC" (ఎకరానికి 200 ఎంఎల్) స్ప్రే చేయండి!',
          smsVersion: '🚨గోధుమ పసుపు రస్ట్ అత్యవసరం: పంట ఆకులు పసుపు పొడిగా మారకముందే సింజెంటా టిల్ట్ (200 ఎం.ఎల్) పిచಿಕారీ చేయండి.',
          voiceScript: 'గోధుమ పొలాల్లో పసుపు కుంకుమ తెగులు తీవ్రంగా ఉంది. మీ చేతికందే పంటను రక్షించుకోవడానికి వెంటనే టిల్ట్ పిచಿಕారీ చేయండి.'
        },
        Tamil: {
          fullMessage: '🚨 கோதுமை அவசர எச்சரிக்கை: வயலில் "மஞ்சள் துரு நோய்" (Yellow Rust) மிக தீவிரமாக பரவியுள்ளது. இது இலைகளின் பச்சையத்தை முழுமையாக அழிக்கும். பயிரைக் காக்க உடனே ஏக்கருக்கு "Tilt 250 EC" (200 மி.லி) தெளிக்கவும்!',
          smsVersion: '🚨கோதுமை துருநோய் அவசர அலர்ட்: இலைகள் மஞ்சள் பொடியாக மாறுவதைத் தடுக்க உடனே சின்ஜெண்டா டில்ட் தெளிக்கவும்.',
          voiceScript: 'அவசர அபாய செய்தி! கோதுமை இலைகளை வாட்டும் மஞ்சள் துரு நோயை அழித்து இலைகளை பச்சையாக மாற்ற உடனே சின்ஜெண்டா டில்ட் பயன்படுத்தவும்.'
        },
        Kannada: {
          fullMessage: '🚨 ತುರ್ತು ಗೋಧಿ ಅಲರ್ಟ್: ಗೋಧಿ ಎಲೆಗಳ ಮೇಲೆ ಹಳದಿ ತುಕ್ಕುರೋಗ (Yellow Rust) ತೀವ್ರವಾಗಿ ಹಬ್ಬಿದೆ. ಕ್ಲೋರೊಫಿಲ್ ನಾಶವನ್ನು ತಡೆಯಲು ತಕ್ಷಣ "Tilt " (ಎಕರೆಗೆ 200 ಮಿಲಿ) ಸಿಂಪಡಿಸಿ.',
          smsVersion: '🚨ಗೋಧಿ ಹಳದಿ ತುಕ್ಕುರೋಗ ಆಪತ್ತು: ಶೀಘ್ರ ರೋಗ ಹತೋಟಿಗೆ ಸಿಂಜೆಂಟಾ ಟಿಲ್ಟ್ ಸಿಂಪಡಿಸಲು ಸೂಚಿಸಲಾಗಿದೆ.',
          voiceScript: 'ತುರ್ತು ಗೋಧಿ ಎಚ್ಚರಿಕೆ! ನಿಮ್ಮ ಗೋಧಿ ಬೆಳೆಗೆ ಬಂದಿರುವ ಮಾರಕ ತುಕ್ಕುರೋಗ ತೊಡೆದುಹಾಕಲು ತಕ್ಷಣ ಟಿಲ್ಟ್ ಔಷಧಿಯನ್ನು ಸ್ಪ್ರೇ ಮಾಡಿ.'
        },
        Marathi: {
          fullMessage: '🚨 अत्यंत गंभीर गहू इशारा: गव्हावर "पिवळा तांबेरा" (Yellow Rust) रोगाचा तीव्र उद्रेक झाला आहे! पानां मधील अन्न तयार करण्याची शक्ती संपण्यापूर्वी तातडीने "Tilt 250 EC" (२०० मिली प्रति एकर) फवारणी करा!',
          smsVersion: '🚨गहू पिवळा तांबेरा आणीबाणी: पानांवर पिवळा पावडरचा थर! पीक वाळण्यापूर्वी तातडीने सिंजेंटा टिल्ट २०० मिली फवारा.',
          voiceScript: 'अतिशय महत्त्वाची तांबेरा आणीबाणी! गव्हाचा पिवळा तांबेरा तात्काळ नियंत्रित करण्यासाठी आजच सिंजेंटा टिल्ट फवारून शेत वाचवा.'
        }
      }
    }
  },
  Tomato: {
    none: {
      recommendedProduct: 'Syngenta Revus',
      reach: 9000,
      score: 75,
      languages: {
        English: {
          fullMessage: '🍅 Syngenta Tomato advisory: Prevent late blight attack during flowering stage. Wet foliage triggers spore germinations. Spray Revus to establish a rain-shield defense over green tomatoes.',
          smsVersion: '🍅Syngenta Guide: Stop early rot and blight! Keep plants aerated and apply protective Revus for clear tomato buds.',
          voiceScript: 'Dear Tomato cultivator, to secure healthy flowering, ensure proper plant aeration. Apply protective Revus before dew sets in.'
        },
        Hindi: {
          fullMessage: '🍅 सिंजेंटा टमाटर सलाह: टमाटर की पुष्पन अवस्था पर अगेती झुलसा का खतरा रहता है। उमस भरे मौसम में पौधों के पत्तों को सड़ने व दाग-धब्बों से बचाने के लिए अच्छी कृषि क्रियाएं एवं सुरक्षा अपनाएं।',
          smsVersion: '🍅टमाटर विशेषज्ञ: बारिश व ओस में झुलसा रोग से फसल बचाएं। पौधों को स्वस्थ व फल चमकदार बनाने के लिए सलाह लें।',
          voiceScript: 'नमस्कार टमाटर उत्पादक किसान मित्रों, टमाटर के फूलों को गिरने से बचाने और स्वस्थ लाल फलों की पैदावार के लिए सिंजेंटा सुरक्षात्मक उपायों की जानकारी लीजिए।'
        },
        Telugu: {
          fullMessage: '🍅 సింజెంటా టమోటా సలహా: పూత దశలో ఆకుమచ్చ తెగులు రాకుండా రక్షించండి. తేమ గాలి వల్ల తెగుళ్లు పెరుగుతాయి. ముందస్తుగా రేవుస్ పూయడం వల్ల పంట ఆరోగ్యంగా ఉంటుంది.',
          smsVersion: '🍅టమోటా పూత రక్షణకు రక్షిత చర్యలు తీసుకోండి. పండ్లు తెగుళ్ళ బారిన పడకుండా రక్షించుకోండి.',
          voiceScript: 'నమస్కారం! టమోటా పూత రాలకుండా మరియు ఆకులు నల్లబడకుండా ముందస్తుగా రేవుస్ వాడాల్సిందిగా కోరుతున్నాము.'
        },
        Tamil: {
          fullMessage: '🍅 சின்ஜெண்டா தக்காளி ஆலோசனை: தக்காளி பூக்கும் பருவத்தில் இலைக்கருகல் நோய் தாக்காமல் காப்பது முக்கியம். தக்காளி பிஞ்சுகள் அழுகாமல் திரட்சியாக வளர ரேவுஸ் சிறந்த பாதுகாப்பு ஆகும்.',
          smsVersion: '🍅தக்காளி இலைக்கருகல் அச்சுறுத்தல் தவிர்க்க ரேவுஸ் பயன்படுத்தவும். பழங்கள் அழுகாமல் செழிப்பாக வளரும்.',
          voiceScript: 'வணக்கம் தக்காளி விவசாயிகளே! செடிகளில் பூக்கள் மற்றும் பிஞ்சுகள் உதிர்வதை தடுக்கவும் பனி அழுகலை கட்டுப்படுத்தவும் ரேவுஸ் பயன்படுத்தலாம்.'
        },
        Kannada: {
          fullMessage: '🍅 ಸಿಂಜೆಂಟಾ ಟೊಮೆಟೊ ಸಲಹೇ: ಹೂಬಿಡುವ ಹಂತದಲ್ಲಿ ಎಲೆ ಕಪ್ಪಾಗುವಿಕೆ ರೋಗ ಬರದಂತೆ ಮುನ್ನೆಚ್ಚರಿಕೆ ವಹಿಸಿ. ಉತ್ತಮ ಕಾಯಿ ಕಚ್ಚಲು ರೇವುಸ್ ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
          smsVersion: '🍅ಟೊಮೆಟೊ ಬೆಳೆ ರಕ್ಷಣೆ: ಶೀತ ವಾತಾವರಣದಲ್ಲಿ ರೋಗ ಹರಡುವಿಕೆ ತಡೆಯಲು ರೇವುಸ್ ಸಿಂಪಡಿಸಿ.',
          voiceScript: 'ಕೃಷಿಕರೇ, ಟೊಮೆಟೊ ಕಾಯಿಗಳು ಕೊಳೆಯದಂತೆ ಮತ್ತು ಬಂಗಾರ ಬಣ್ಣ ಬರುವಂತೆ ಇಂದೇ ಸಿಂಜೆಂಟಾ ರೇವುಸ್ ಬಳಸಿ.'
        },
        Marathi: {
          fullMessage: '🍅 सिंजेंटा टोमॅटो सल्ला: फुलोरा अवस्थेत करपा रोगाचा प्रादुर्भाव टाळण्यासाठी प्रतिबंधात्मक उपाय करा. पावसाळी वातावरणात टोमॅटोचे पाने ताजे ठेवण्यासाठी योग्य फवारणी घ्या.',
          smsVersion: '🍅टोमॅटो करपा खबरदारी: दमट हवेत झाडे सडण्यापासून वाचवण्यासाठी प्रतिबंधात्मक बुरशीनाशकांचा वापर करा.',
          voiceScript: 'नमस्कार शेतकरी बंधूंनो! टोमॅटोच्या पानांवर काळे डाग पडू नयेत आणि पीक टिकून राहावे म्हणून योग्य सल्ला घ्या.'
        }
      }
    },
    moderate: {
      recommendedProduct: 'Syngenta Revus',
      reach: 11000,
      score: 82,
      languages: {
        English: {
          fullMessage: '🍅 Syngenta Alert: Early Blight spreading in Tomato due to canopy stagnation. Black circular spots spreading online. Spray Revus (200ml/acre) to halt mycelial spread instantly.',
          smsVersion: '🍅Tomato Blight Active: Concentric spots destroying tomato foliage. Halt rot instantly. Spray Syngenta Revus (200ml/acre) today.',
          voiceScript: 'Attention Tomato grower! Late blight fungi are infesting your tomato stems. Apply Syngenta Revus at two hundred mil per acre for rapid action.'
        },
        Hindi: {
          fullMessage: '🍅 सिंजेंटा टमाटर चेतावनी: टमाटर में "अगेती झुलसा" (Early Blight) रोग की मध्यम शुरुआत हो चुकी है। पत्तों पर छल्लेनुमा काले धब्बे दिखाई देंगे। सुरक्षा के लिए तुरंत "Revus" (200 मिली प्रति एकड़) स्प्रे करें।',
          smsVersion: '🍅टमाटर झुलसा रोग चेतावनी: पत्तों पर काले गोल छल्ले फैल रहे हैं। तुरंत सिंजेंटा रेवस (200ml/एकड़) का छिड़काव करें।',
          voiceScript: 'किसान भाइयों, टमाटर के पत्तों पर काले गोल छल्लेदार धब्बे बन रहे हैं। यह झुलसा बीमारी है। तुरंत दो सौ एमएल सिंजेंटा रेवस स्प्रे करें।'
        },
        Telugu: {
          fullMessage: '🍅 సింజెంటా టమోటా అలర్ట్: టమోటా పొలంలో అల్టెర్నేరియా ఆకుమచ్చ తెగులు ఉధృతి ఉంది. ఆకులపై నల్లటి చారలు వ్యాపిస్తాయి. వెంటనే "Revus" (ఎకరానికి 200 ఎంఎల్) స్ప్రే చేయండి!',
          smsVersion: '🍅టమోటా ఆకుమచ్చ తెగులు అలర్ట్: పంట ఎండిపోకముందే అద్భుత నివారణకు సింజెంటా రేవుస్ వెంటనే పిచಿಕారీ చేయండి.',
          voiceScript: 'టమోటా రైతులకు సలహా! పొలంలో ఆకులు నల్లబడుతూ ఎండిపోతున్నాయి. వెంటనే పిచికారీ చేయడానికి రేవుస్ ఎంచుకోండి.'
        },
        Tamil: {
          fullMessage: '🍅 சின்ஜெண்டா தக்காளி எச்சரிக்கை: தக்காளியில் "முன்கூட்டியே கருகும் நோய்" ஆரம்பமாகியுள்ளது. வட்ட வடிவ கரும்புள்ளികള്‍ பரவுவதை நிறுத்த, உடனே "Revus" (ஏக்கருக்கு 200 மி.லி) தெளிக்கவும்!',
          smsVersion: '🍅தக்காளி கருகல் நோய் அலர்ட்: இலைகளில் கரும்புள்ளிகள் பரவுவதை தடுத்து பழங்களை காக்க ரேவுஸ் உடனடியாக தெளிக்கவும்.',
          voiceScript: 'அன்பான தக்காளி விவசாயிகளே! இலைகளிலுள்ள வட்ட வடிவ புள்ளிகளை போக்க உடனே ஏக்கருக்கு 200 மிலி என்ற அளவில் ரேவுஸ் தெளிக்கவும்.'
        },
        Kannada: {
          fullMessage: '🍅 ಸಿಂಜೆಂಟಾ ಟೊಮೆಟೊ ಎಚ್ಚರಿಕೆ: ಎಲೆಗಳ ಮೇಲೆ ನಡು ಹಳದಿ ಚುಕ್ಕೆ ಮತ್ತು ಕೊಳೆರೋಗ ಹರಡುತ್ತಿದೆ. ಹೂವುಗಳು ಉದುರದಂತೆ "Revus" (ಎಕರೆಗೆ 200 ಮಿಲಿ) ಸಿಂಪಡಿಸಿ.',
          smsVersion: '🍅ಟೊಮೆಟೊ ಎಲೆಕೊಳೆ ರೋಗ: ಬೆಳೆಗೆ ಬಂದ ಕೀಟಾಣು ನಾಶಕ್ಕೆ ಸಿಂಜೆಂಟಾ ರೇವುಸ್ ತಕ್ಷಣವೇ ಉಪಯೋಗಿಸಿ.',
          voiceScript: 'ರೈತರೇ, ಟೊಮೆಟೊ ಕೊಳೆತು ನಷ್ಟವಾಗುವುದನ್ನು ತಪ್ಪಿಸಲು ತಲಾ ಎಕರೆಗೆ 200 ಮಿಲಿ ರೇವುಸ್ ಸಿಂಪರಣೆ ಕೈಗೊಳ್ಳಿ.'
        },
        Marathi: {
          fullMessage: '🍅 सिंजेंटा टोमॅटो इशारा: टोमॅटो पिकावर "लवकर येणारा करपा" रोगाचा प्रादुर्भाव वाढतो आहे. पाने काळी पडण्यापूर्वी तातडीने "Revus" (२०० मिली प्रति एकर) ची फवारणी करा!',
          smsVersion: '🍅टोमॅटो करपा इशारा: पानांवर काळे चक्राकार चट्टे पसरत आहेत. त्वरित सिंजेंटा रेवस २०० मिली फवारा.',
          voiceScript: 'शेतकरी मित्रांनो, टोमॅटोवर लवकर येणारा करपा वाढल्यास उशीर न करता दोनशे मिली सिंजेंटा रेवसची पाऊटी करा.'
        }
      }
    },
    severe: {
      recommendedProduct: 'Syngenta Pegasus 50 WP',
      reach: 9400,
      score: 94,
      languages: {
        English: {
          fullMessage: '🚨 CRITICAL TOMATO WARNING: Severe Whitefly infestation coupled with Leaf Curl Virus confirmed. Complete wilting risk. Instantly spray "Pegasus 50 WP" (250g/acre) to stop whitefly vector and protect crop.',
          smsVersion: '🚨TOMATO WHITEFLY EMERGENCY: Whitefly spreading incurable Leaf Curl Virus. Instantly spray Pegasus 50 WP (250g/acre) to kill pests and save plants.',
          voiceScript: 'Emergency call! Thousands of whiteflies are spreading leaf curl virus in your tomato plantation. Save your yield value now by spraying Pegasus at two hundred and fifty grams per acre.'
        },
        Hindi: {
          fullMessage: '🚨 टमाटर आपातकालीन चेतावनी: सफ़ेद मक्खी (Whitefly) का भीषण हमला और पत्ता मरोड़ वायरस (Leaf Curl Virus) फैल रहा है! तुरंत "Pegasus 50 WP" (250 ग्राम प्रति एकड़) स्प्रे करें, ताकि सफेद मक्खी खत्म हो और वायरस रुक सके!',
          smsVersion: '🚨टमाटर फसल आपातकाल: पत्ता मरोड़ सफेद मक्खी का भारी हमला! फसल बर्बादी रोकने के लिए पेगासस 50 WP (250 ग्राम/एकड़) का फौरन छिड़काव करें।',
          voiceScript: 'टमाटर खेतों के लिए आपातकालीन चेतावनी! सफेद मक्खी के कारण मरोड़ बीमारी फैल रही है। इसके तुरंत नियंत्रण के लिए ढाई सौ ग्राम पेगासस प्रति एकड़ का छिड़काव तत्काल करें।'
        },
        Telugu: {
          fullMessage: '🚨 టమోటా అత్యవసర అలర్ట్: తెల్లదోమ ఉధృతి పెరిగి ఆకు ముడుత వైరస్ (Leaf Curl Virus) వేగంగా వ్యాపిస్తోంది. వెంటనే "Pegasus 50 WP" (ఎకరానికి 250 గ్రాములు) పిచಿಕారీ చేసి తెల్లదోమను అరికట్టండి!',
          smsVersion: '🚨టమోటా తెల్లదోమ వైరస్ అత్యవసరం: ఆకులు ముడుచుకుపోయి పండ్ల సైజ్ పడిపోకా ముందే వెంటనే పేగాసస్ 50 WP స్ప్రే చేయండి.',
          voiceScript: 'టమోటా రైతులకు అత్యవసర పిలుపు! ఆకుముడుత తెగులుకు కారణమైన తెల్లదోమను సమూలంగా తుడిచిపెట్టడానికి వెంటనే పెగాసస్ చల్లండి.'
        },
        Tamil: {
          fullMessage: '🚨 தக்காளி அவசர அலர்ட்: தக்காளியில் "வெள்ளை ஈ" தாக்குதலினால் இலைச்சுருட்டல் நோய் பரவத் தொடங்கியுள்ளது! செடி முழுமையாக காய்வதற்குள் உடனே ஏக்கருக்கு "Pegasus 50 WP" (250 கிராம்) தெளிக்கவும்!',
          smsVersion: '🚨தக்காளி வெள்ளை ஈ அவசரம்: இலைச்சுருட்டல் பரப்பும் ஈக்களை அழிக்க உடனடியாக சின்ஜெண்டா பெகாசஸ் 250 கிராம் தெளிக்கவும்.',
          voiceScript: 'அவசர அபாய செய்தி! தக்காளி இலைகளை சுருட்டும் வெள்ளை ஈக்களை ஒழித்து கட்ட உடனே சின்ஜெண்டா பெகாசஸ் 250 கிராம் பயன்படுத்துங்கள்.'
        },
        Kannada: {
          fullMessage: '🚨 ತುರ್ತು ಟೊಮೆಟೊ ಎಚ್ಚರಿಕೆ: ಬಿಳಿ ನೊಣದಿಂದ ಬರುವ ಎಲೆ ಮುರುಟು ರೋಗ (Leaf Curl Virus) ತೀವ್ರವಾಗಿ ಹರಡುತ್ತಿದೆ. ಬೆಳೆ ಉಳಿಸಿಕೊಳ್ಳಲು ತಕ್ಷಣ "Pegasus 50 WP" (ಎಕರೆಗೆ 250 ಗ್ರಾಂ) ಸಿಂಪಡಿಸಿ.',
          smsVersion: '🚨ಟೊಮೆಟೊ ವೈರಸ್ ತುರ್ತು: ಎಲೆಮುರುಟು ಹರಡುವ ಬಿಳಿ ನೊಣ ನಿವಾರಣೆಗೆ ಪೆಗಾಸಸ್ 50 WP ಇಂದೇ ಉಪಯೋಗಿಸಿ.',
          voiceScript: 'ಟೊಮೆಟೊ ಬೆಳೆಗಾರರೇ ತುರ್ತು ಸೂಚನೆ! ನಿಮ್ಮ ಬೆಳೆಗೆ ತಗುಲಿರುವ ಎಲೆಮುರುಟು ಬಿಳಿ ನೊಣ ತಡೆಯಲು ತಕ್ಷಣ ಪೆಗಾಸಸ್ ಔಷಧಿ ಸ್ಪ್ರೇ ಮಾಡಿ.'
        },
        Marathi: {
          fullMessage: '🚨 टोमॅटो आणीबाणी: टोमॅटोवर पांढऱ्या माशीमुळे "पाने मरणे" (Leaf Curl Virus) हा रोग अत्यंत वेगाने पसरत आहे. तात्काळ नियंत्रणासाठी "Pegasus 50 WP" (२५० ग्रॅम प्रति एकर) फवारणी करा!',
          smsVersion: '🚨टोमॅटो सफेद माशी आणीबाणी: खोड मरोड रोग पसरवणाऱ्या सफेद माशीसाठी पेगासस ५० WP २५० ग्रॅम फवारा.',
          voiceScript: 'अतिशय महत्त्वाची टोमॅटो आणीबाणी! पांढरी माशी आणि पर्णगुच्छ रोग रोखण्यासाठी तातडीने अडीचशे ग्रॅम पेगासस प्रति एकरी फवारा.'
        }
      }
    }
  },
  Sugarcane: {
    none: {
      recommendedProduct: 'Syngenta Virtako 0.6 GR',
      reach: 18000,
      score: 70,
      languages: {
        English: {
          fullMessage: '🌱 Syngenta Sugarcane Advisory: Prioritize vigorous root development during early tillering. Virtako application triggers higher cane density and builds deep defense against initial soil-borne insects.',
          smsVersion: '🌱Sugarcane Tips: Boost tillering and length! Soil application of Virtako granules ensures robust early shoot thickness.',
          voiceScript: 'Greetings. For premium sugarcane height and thicker cane girth, apply granular Virtako during early sowing tillage.'
        },
        Hindi: {
          fullMessage: '🌱 सिंजेंटा गन्ना परामर्श: शुरुआती कल्ले निकलने (Tillering) के दौरान गन्ने की मोटाई बढ़ाने पर ध्यान दें। सिंजेंटा विरताको मिट्टी में डालने से जड़ों का विकास मजबूत होता है और आने वाले कीड़ों से रक्षा होती है।',
          smsVersion: '🌱गन्ना उत्पादक: गन्ने के विकास व अधिक किल्ले पाने के लिए जड़ों को मजबूत करें। मिट्टी में विशेष दानेदार उर्वरक का योग करें।',
          voiceScript: 'नमस्कार गन्ना उत्पादक भाइयों! गन्ने की अधिक मोटाई और जबरदस्त पैदावार के लिए कल्ले निकलते समय सिंजेंटा विरताको का उपयोग मिट्टी में करें।'
        },
        Telugu: {
          fullMessage: '🌱 సింజెంటా చెరకు సలహా: చెరకు పిలకలు వేసే దశలో బలమైన వేర్ల ఎదుగుదలకు శ్రద్ధ వహించండి. విర్టాకో వాడకం వల్ల చెరకు గడలు లావుగా పెరుగుతాయి.',
          smsVersion: '🌱చెరకు లావుగా పెరగడానికి, కణుపుల వద్ద దృఢత్వానికి విర్టాకో మంచి రక్షణ ఇస్తుంది.',
          voiceScript: 'నమస్కారం! చెరకు నాటిన తొలినాళ్లలో కణితి పురుగు రాకుండా విర్టాకో గుళికలు చల్లాలని నిపుణుల సిఫార్సు.'
        },
        Tamil: {
          fullMessage: '🌱 சின்ஜெண்டா கரும்பு ஆலோசனை: கரும்பின் தூர் விடும் பருவத்தில் வேர் வளர்ச்சி வலுவாக இருக்க வேண்டும். விர்டாகோ குருணை மருந்து இடுவதன் மூலம் கரும்பின் தடிமன் மற்றும் எடை கூடும்.',
          smsVersion: '🌱கரும்பு விவசாயிகள்: கரும்பின் தடிமனை கூட்டி கூடுதல் எடை பெற விர்டாகோ குருணை உகந்தது.',
          voiceScript: 'வணக்கம் கரும்பு விவசாயிகளே! கரும்பில் ஆரம்ப கால வேர்ப்புழுக்களை கட்டுப்படுத்தவும் கரும்பை பருமனாக வளர்க்கவும் விர்டாகோ குருணை பயன்படுத்தவும்.'
        },
        Kannada: {
          fullMessage: '🌱 ಸಿಂಜೆಂಟಾ ಕಬ್ಬು ಸಲಹೆ: ಕಬ್ಬಿನಲ್ಲಿ ಕಂದು ಕೀಟ ಮತ್ತು ಬೇರುಹುಳು ತಡೆಗೆ ಆರಂಭದಲ್ಲೇ ತೇವಾಂಶ ನಿರ್ವಹಣೆ ಮಾಡಿ. ಶಕ್ತಿಶಾಲಿ ಬೆಳೆಗಾಗಿ ವಿರ್ಟಾಕೊ ಬಳಸಿ.',
          smsVersion: '🌱ಕಬ್ಬು ಬೆಳೆಗಾರರು ಗಮನಿಸಿ: ಹೆಚ್ಚುವರಿ ಗೆಣ್ಣುಗಳು ಹಾಗೂ ದಪ್ಪನೆಯ ಕಬ್ಬು ಪಡೆಯಲು ವಿರ್ಟಾಕೊ ಅತ್ಯುತ್ತಮ.',
          voiceScript: 'ಕಬ್ಬು ಬೆಳೆಗಾರರೇ ನಮಸ್ಕಾರ, ನಿಮ್ಮ ಕಬ್ಬಿನ ಇಳುವರಿ ಉತ್ತಮ ತೂಕ ನೀಡಲು ಆರಂಭಿಕ ತಿಂಗಳಲ್ಲಿ ವಿರ್ಟಾಕೊ ಬಳಸಿ.'
        },
        Marathi: {
          fullMessage: '🌱 सिंजेंटा ऊस सल्ला: उसाच्या फुटव्यांच्या टप्प्यात सशक्त मुळांच्या विकासाला प्राधान्य द्या. जमिनीतून व्हिरटाको दिल्याने कांडीची लांबी व जाडी वाढून उत्तम वजन मिळते.',
          smsVersion: '🌱ऊस उत्पादक: उसाचे अधिक फुटवे व लांबीसाठी जमिनीतून योग्य खतांची मात्रा सिंजेंटा व्हिरटाको सोबत द्या.',
          voiceScript: 'नमस्कार शेतकरी बंधूंनो! उसाच्या फुटवे वाढवण्यासाठी आणि कांडी जाड करण्यासाठी सिंजेंटा व्हिरटाकोचा वापर वाढवा.'
        }
      }
    },
    moderate: {
      recommendedProduct: 'Syngenta Virtako 0.6 GR',
      reach: 22000,
      score: 79,
      languages: {
        English: {
          fullMessage: '🌱 Syngenta Alert: Early Shoot Borer crossing minor threat in Sugarcane blocks. Dead hearts forming on core shoots. Apply "Virtako 0.6 GR" granular (10kg/acre) directly to base soil to suppress borers.',
          smsVersion: '🌱Sugarcane Shoot Borer spotted in soil. Don\'t lose cane tillers. Apply Syngenta Virtako 0.6 GR (10kg/acre) with soil today.',
          voiceScript: 'Attention Sugarcane farmer! Shoot Borer caterpillars are devouring the central growth shoots. Secure your sugarcane stools by applying Virtako granules at ten kilograms per acre.'
        },
        Hindi: {
          fullMessage: '🌱 सिंजेंटा गन्ना चेतावनी: कल्ले फूटते समय "अगेती तना छेदक" (Early Shoot Borer) का प्रकोप फैल रहा है। फसल बचाने हेतु तुरंत खाद के साथ मिलाकर "Virtako 0.6 GR" (10 किलो प्रति एकड़) गन्ने की जड़ों के पास डालें।',
          smsVersion: '🌱गन्ना छेदक चेतावनी: कल्ले सूखने से रोकें। यूरिया के साथ विरताको 0.6 GR (10 किलो/एकड़) जड़ों में डालें और पानी दें।',
          voiceScript: 'किसान भाइयों, गन्ने की फसल में तना छेदक सुंडी कल्ले सुखा रही है। इसके अचूक समाधान के लिए खाद में मिलाकर दस किलो विरताको प्रति एकड़ जमीन में दें।'
        },
        Telugu: {
          fullMessage: '🌱 సింజెంటా చెరకు అలర్ట్: చెరకు చేనులో మొవ్వు తొలుచు పురుగు ఉధృతి పెరుగుతోంది. గడల సంఖ్య పడిపోకముందే "Virtako 0.6 GR" (ఎకరానికి 10 కేజీలు) నేలలో చల్లండి!',
          smsVersion: '🌱చెరకు మొవ్వు పురుగు నివారణకు సింజెంటా విర్టాకో గుళికలు ఎకరానికి 10 కేజీలు చల్లి తక్షణ ఫలితం పొందండి.',
          voiceScript: 'చెరకు రైతులకు సలహా! మీ చేనులో మొవ్వులు ఎండిపోతుంటే వెంటనే విర్టాకో గుళికలు చల్లి తగిన తడి ఇవ్వండి.'
        },
        Tamil: {
          fullMessage: '🌱 சின்ஜெண்டா கரும்பு அலர்ட்: கரும்பில் "முன் குருத்துப்பூச்சி" தாக்குதலினால் குருத்துகள் காய்ந்து வருகின்றன! கரும்பின் எடையை காக்க "Virtako 0.6 GR" (ஏக்கருக்கு 10 கிலோ) மண்ணோடு கலந்து இடவும்!',
          smsVersion: '🌱கரும்பு குருத்துப்பூச்சி அலர்ட்: குருத்து காய்வதை தடுக்க சின்ஜெண்டா விர்டாகோ (ஏக்கருக்கு 10 கிலோ) மண்ணோடு இடவும்.',
          voiceScript: 'அன்பான கரும்பு விவசாயிகளே! செடிகளின் நடுக்குருத்து காய்ந்து போவதை கட்டுப்படுத்த உடனே விர்டாகோ குருணையை ஏக்கருக்கு 10 கிலோ இடவும்.'
        },
        Kannada: {
          fullMessage: '🌱 ಸಿಂಜೆಂಟಾ ಕಬ್ಬು ಎಚ್ಚರಿಕೆ: ಮೊಗ್ಗು ಕೊರಕ ಹುಳುವಿನ ಹಾವಳಿ ಹೆಚ್ಚುತ್ತಿದೆ. ಗಿಡಗಳ ಸುಳಿ ಎಲೆ ಒಣಗದಂತೆ ತಡೆಯಲು ಯೂರಿಯಾದೊಂದಿಗೆ "Virtako 0.6 GR" (ಎಕರೆಗೆ 10 ಕೆಜಿ) ಹರಡಿ.',
          smsVersion: '🌱ಕಬ್ಬಿನ ಸುಳಿ ಕೊರಕ ರೋಗ: ಕೀಟಗಳ ನಿವಾರಣೆಗೆ ಸಿಂಜೆಂಟಾ ವಿರ್ಟಾಕೊ 10 ಕೆಜಿಯನ್ನು ಬೇರುಬಾಗದಲ್ಲಿ ಒದಗಿಸಿ.',
          voiceScript: 'ಕಬ್ಬು ಬೆಳೆಗಾರರೇ ಗಮನಿಸಿ, ಸುಳಿ ಕೊರಕ ಹುಳುಗಳು ನಿಮ್ಮ ಕಬ್ಬನ್ನು ತಿನ್ನದಂತೆ ತಡೆಯಲು ತಕ್ಷಣ ವಿರ್ಟಾಕೊ ಬಳಸಿ.'
        },
        Marathi: {
          fullMessage: '🌱 सिंजेंटा ऊस इशारा: उसाच्या पिकात "शेंडा पोखरणाऱ्या अळीचा" प्रादुर्भाव वाढत आहे. पाने व कल्ले वाळण्यापूर्वी तातडीने "Virtako 0.6 GR" (१० किलो प्रति एकर) खतासोबत उसाच्या मुळाशी टाका!',
          smsVersion: '🌱ऊस शेंडे बोंग अळी इशारा: शेंडा वाळणे रोखण्यासाठी व्हिरटाको १० किलो प्रति एकरी जमीनित देऊन पाणी द्या.',
          voiceScript: 'शेतकरी मित्रांनो, उसाचा शेंडा सुकत असल्यास त्वरित विरताको दहा किलो प्रति एकरी खोडामध्ये देऊन ओलित करा.'
        }
      }
    },
    severe: {
      recommendedProduct: 'Syngenta Ridomil Gold',
      reach: 28100,
      score: 92,
      languages: {
        English: {
          fullMessage: '🚨 CRITICAL SUGARCANE ROOT ADVISORY: Severe Red Rot fungus spreading in fields due to water stagnation. Canes emit alcoholic smell and split. Drench soil immediately with "Ridomil Gold" (2.5g/litre) to prevent field devastation.',
          smsVersion: '🚨SUGARCANE RED ROT ADVISORY: Red Rot disease rotting internal stalks. Stalks splitting. Apply Ridomil Gold immediately at root zones to save crop.',
          voiceScript: 'Urgent Red Rot alert! Fungal mycelia are rotting your premium sugarcane canes from the inside. Secure your total yield value by drenching with Syngenta Ridomil Gold today.'
        },
        Hindi: {
          fullMessage: '🚨 गन्ने में लाल सड़न (Red Rot) आपातकाल: खेत में पानी रुकने से गन्ने में कैंसर "लाल सड़न रोग" फैल गया है! गन्नों को चीरने पर भीतर लाल रंग और शराब जैसी गंध आएगी। तुरंत रक्षा के लिए "Ridomil Gold" से जड़ की मिट्टी तर (Drench) करें!',
          smsVersion: '🚨गन्ना लाल सड़न भीषण संकट: पूरा गन्ना सड़ने व सूखने का खतरा! रेड रोट रोकने के लिए रिडोमिल गोल्ड से तुरंत जड़ों की तराई करें। वक्त की पुकार!',
          voiceScript: 'अत्यंत गंभीर आपातकालीन सूचना! सिंजेंटा की तरफ से गन्ना किसानों के लिए। लाल सड़न रोग गन्ने की फसल उखाड़ देगा। तुरंत रिडोमिल गोल्ड जड़ में घोल बनाकर डालें।'
        },
        Telugu: {
          fullMessage: '🚨 చెరకు ఎర్ర కుళ్ళు తెగులు (Red Rot) తీవ్ర హెచ్చరిక: పొలంలో నీరు నిలవడం వల్ల ఎర్ర కుళ్ళు తెగులు వ్యాపించింది. వెంటనే నివారించకపోతే మొత్తం గడలు నాశనమవుతాయి. వెంటనే "Ridomil Gold" ద్రావణాన్ని మొదళ్లకు తడపండి!',
          smsVersion: '🚨చెరకు ఎర్రకుళ్ళు అత్యవసరం: గడ మధ్యలో ఎరుపు రంగు మారి కుళ్ళక ముందే వెంటనే రిడోమిల్ గోల్డ్ వేర్లలో పోసి తడపండి.',
          voiceScript: 'అత్యవసర హెచ్చరిక! చెరకును అల్లాడిస్తున్న ఎర్రకుళ్ళు తెగులు నివారణకు వెంటనే రిడోమిల్ గోల్డ్ పిచికారీ చేయాల్సిందిగా విన్నపం.'
        },
        Tamil: {
          fullMessage: '🚨 கரும்பு "செவ்வழுகல் நோய்" (Red Rot) தீவிர எச்சரிக்கை: கரும்பின் உள்ளே சிகப்பாக மாறி சவ்வழுகல் நோய் பரவுகிறது! கரும்புகள் முழுமையாக வீணாவதைத் தடுக்க, உடனே "Ridomil Gold" கொண்டு வேர்ப்பகுதியில் ஊற்றவும்!',
          smsVersion: '🚨கரும்பு செவ்வழுகல் அவசர அலர்ட்: கரும்பு தண்டுகள் அழுகுவதை தடுக்க சின்ஜெண்டா ரிடோமில் கோல்ட் தெளித்து வேர் நனைக்கவும்.',
          voiceScript: 'அவசர அபாய செய்தி! கரும்பின் வேர் மற்றும் தண்டுப் பகுதியை அழுக வைக்கும் செவ்வழுகல் நோயை தடுக்க உடனே ரிடோமில் கோல்ட் தெளிக்கவும்.'
        },
        Kannada: {
          fullMessage: '🚨 ಅತ್ಯಂತ ತುರ್ತು: ಕಬ್ಬಿನಲ್ಲಿ ಮಾರಕ ಕೆಂಪು ಕೊಳೆ ರೋಗ (Red Rot) ಕಾಣಿಸಿಕೊಂಡಿದೆ. ಗರಿಗಳು ಒಣಗಿ ಇಳುವರಿ ಶೂನ್ಯವಾಗುವ ಮುನ್ನ ತಕ್ಷಣ "Ridomil Gold" ಔಷಧಿಯನ್ನು ಬುಡಕ್ಕೆ ಸುರಿಯಿರಿ.',
          smsVersion: '🚨ಕಬ್ಬಿನ ಕೆಂಪುಕೊಳೆ ರೋಗ ಆಪತ್ತು: ಉಳುಮೆ ಉಳಿಸಲು ತಕ್ಷಣ ಬುಡ ಭಾಗಕ್ಕೆ ರಿದೋಮಿಲ್ ಗೋಲ್ಡ್ ದ್ರಾವಣ ಸಿಂಪಡಿಸಿ.',
          voiceScript: 'ತುರ್ತು ಕಬ್ಬು ಎಚ್ಚರಿಕೆ! ಗದ್ದೆಯಲ್ಲಿ ನೀರು ನಿಂತು ಕೆಂಪು ಕೊಳೆರೋಗ ಹರಡಿದೆ, ತಕ್ಷಣ ರಿದೋಮಿಲ್ ಗೋಲ್ಡ್ ದ್ರಾವಣ ಬುಡಕ್ಕೆ ನೀಡಿ.'
        },
        Marathi: {
          fullMessage: '🚨 अत्यंत गंभीर ऊस आणीबाणी: पाणी साचल्यामुळे उसावर "तांब्या पिळवटणे" (Red Rot) हा रोग पसरला आहे! उसाची कांडी आतून सडू लागली आहे. त्वरित "Ridomil Gold" मुळांपाशी द्रावणाने ओले करून द्या!',
          smsVersion: '🚨ऊस लाल सड रोग आणीबाणी: ऊसातील कॅन्सर (रेड रॉट) च्या नियंत्रणासाठी तात्काळ रिडोमिल गोल्ड मुळाशी टाकून द्या.',
          voiceScript: 'अतिशय महत्त्वाची ऊस आणीबाणी! चाबूक उस रोग आणि लाल सड नियंत्रणासाठी तुरंत रिडोमिल गोल्डचा वापर करा.'
        }
      }
    }
  },
  Maize: {
    none: {
      recommendedProduct: 'Syngenta Ampligo 150 ZC',
      reach: 12000,
      score: 72,
      languages: {
        English: {
          fullMessage: '🌾 Syngenta Maize Advisory: Keep check of early vegetative whorls. Healthy leaves capture optimal sunlight. Routine protective spray of Ampligo builds deep larvicide shield on hybrid maize.',
          smsVersion: '🌾Hybrid Maize Advisory: Grow full cobs! Protect young whorls using preventive Ampligo for premium larvicide cover.',
          voiceScript: 'Greetings. To generate maximum grain fill on your hybrid maize, apply protective Ampligo on early maize vegetative whorls.'
        },
        Hindi: {
          fullMessage: '🌾 सिंजेंटा मक्का परामर्श: शुरुआती मक्के के पत्तों व सुतली (Whorls) पर खास ध्यान दें। स्वस्थ पत्तियां प्रकाश संश्लेषण बढ़ाकर भुट्टे का आकार बढ़ाती हैं। फसल की संपूर्ण सुरक्षा ही आपकी जीत है!',
          smsVersion: '🌾मक्का किसान: मक्का की शुरुआती बढ़त के लिए पत्तों की देखभाल करें। शानदार भुट्टे व बंपर दानों के लिए उचित समय पर सलाह लें।',
          voiceScript: 'नमस्कार मक्का उत्पादक किसान भाइयों! शानदार मक्का कली और मोटे भुट्टे पाने के लिए शुरुआती अवस्था से ही फसल को कीड़ों से बचाना जरूरी है।'
        },
        Telugu: {
          fullMessage: '🌾 Syngenta మక్కజొన్న సలహా: మక్కజొన్న ఆకులు ఆరోగ్యంగా ఉండేలా చూసుకోండి. ముందస్తు క్రిమిసంహారకంగా అంప్లిగో పిచికారీ చేసుకోవడం వల్ల లార్వా గుడ్లు పెరగకుండా నిరోధించవచ్చు.',
          smsVersion: '🌾మక్కజొన్న గింజ బాగా పోసుకోవడానికి, తెగుళ్ళు నివారణకు అంಪ್లిగో ముందస్తు స్ప్రే అనుకూలంగా ఉంటుంది.',
          voiceScript: 'నమస్కారం! మక్కజొన్నలో గులాబీ రంగు పురుగు నివారణకు ముందస్తుగా అంప్లిగో వాడాల్సిందిగా కోరుతున్నాము.'
        },
        Tamil: {
          fullMessage: '🌾 சின்ஜெண்டா மக்காச்சோளம் ஆலோசனை: மக்காச்சோள கதிர்களின் ஆரம்ப வளர்ச்சிப் பருவத்தில் குருத்துப் பகுதியை பாதுகாப்பது அவசியம். கதிர்கள் திரட்சியாக வளர ஆம்ப்ளிகோ சிறந்த பாதுகாப்பு ஆகும்.',
          smsVersion: '🌾மக்காச்சோளம் குருத்து நோய் தடுக்க ஆம்ப்ளிகோ உகந்தது. பயிர் தரத்தை கூட்டி கூடுதல் மகசூல் பெற தகுந்தது.',
          voiceScript: 'வணக்கம் மக்காச்சோள விவசாயிகளே! மக்காச்சோளத்தில் தண்டுப்புழுக்கள் வராமல் ஆம்ப்ளிகோ கொண்டு காப்பது நல்லது.'
        },
        Kannada: {
          fullMessage: '🌾 ಸಿಂಜೆಂಟಾ ಮೆಕ್ಕೆಜೋಳ ಸಲಹೆ: ಮೆಕ್ಕೆಜೋಳ ಕಾಳು ತುಂಬುವ ಹಂತದಲ್ಲಿದ್ದಾಗ ಮುನ್ನೆಚ್ಚರಿಕೆ ವಹಿಸಿ. ಸುಳಿ ಎಲೆ ರಕ್ಷಿಸಲು ಆಂಪ್ಲಿಗೋ ಸಿಂಪಡಿಸಲು ಸಲಹೆ ನೀಡಲಾಗಿದೆ.',
          smsVersion: '🌾ಮೆಕ್ಕೆಜೋಳ ರೈತ ಗಮನಿಸಿ: ಉತ್ತಮ ಕಾಳುಗಳ ಗಾತ್ರಕ್ಕೆ ಮತ್ತು ಕೀಟ ರೋಗ ಮುಕ್ತವಾಗಿಸಲು ಆಂಪ್ಲಿಗೋ ಬಳಸಿ.',
          voiceScript: 'ಕೃಷಿಕರೇ, ನಿಮ್ಮ ಮೆಕ್ಕೆಜೋಳ ಸುಳಿ ಎಲೆಗಳು ಶಕ್ತಿಯುತವಾಗಲು ಮತ್ತು ಹಳದಿ ರೋಗ ಮುಕ್ತವಾಗಲು ಆಂಪ್ಲಿಗೋ ಉಪಯೋಗಿಸಿ.'
        },
        Marathi: {
          fullMessage: '🌾 सिंजेंटा मका सल्ला: मका पिकाच्या सुरुवातीच्या वाढीच्या अवस्थेत लष्करी आळी व्यवस्थापन करा. मका पानांचे आकुंचन रोखण्यासाठी योग्य काळजी घ्या.',
          smsVersion: '🌾मका उत्पादकांनो: सुरुवातीच्या लष्करी आळी निर्मूलनासाठी सिंजेंटा अ‍ॅम्प्लीगोचा प्रतिबंधात्मक वापर करा.',
          voiceScript: 'नमस्कार शेतकरी मित्रांनो! मका पिकाला निरोगी ठेवण्यासाठी आणि अळीचा प्रादुर्भाव रोखण्यासाठी आजच उपाय घ्या.'
        }
      }
    },
    moderate: {
      recommendedProduct: 'Syngenta Ampligo 150 ZC',
      reach: 14000,
      score: 80,
      languages: {
        English: {
          fullMessage: '🐛 Syngenta Advisory: Moderate Armyworm foliage chewing identified in local Maize fields. Scrape damage on leaves visible. Spray "Ampligo 150 ZC" (100ml/acre) directly in leaf whorls to eliminate caterpillars.',
          smsVersion: '🐛Maize Armyworm warning: Caterpillars chewing vegetative whorls. Protect future cob weight. Spray Syngenta Ampligo (100ml/acre) now.',
          voiceScript: 'Maize alert! Early armyworm larvae are eating early leaf whorls. Apply Syngenta Ampligo at one hundred mil per acre directing spray into whorl cores.'
        },
        Hindi: {
          fullMessage: '🐛 सिंजेंटा मक्का चेतावनी: आपके खेतों में "लश्करी सुंडी" (Fall Armyworm) का मध्यम हमला देखा गया है। भुट्टों की रक्षा के लिए तुरंत "Ampligo 150 ZC" (100 मिली प्रति एकड़) का मक्के की सुतली में डाल कर छिड़काव करें!',
          smsVersion: '🐛मक्का सुंडी चेतावनी: लश्करी सुंडी भुट्टे और पत्तों को खा रही है। तुरंत सिंजेंटा एम्पलीगो (100ml/एकड़) का छिड़काव करें।',
          voiceScript: 'किसान भाइयों ध्यान दें! मक्के में अमेरिकी लश्करी सुंडी दिखाई देने लगी है। सुइयों की तरफ छिड़काव करते हुए सौ एमएल एम्पलीगो प्रति एकड़ स्प्रे करें।'
        },
        Telugu: {
          fullMessage: '🐛 సింజెంటా మక్కజొన్న అలర్ట్: మక్కజొన్న పంటలో కత్తెర పురుగు దాడి గుర్తించబడింది. వెంటనే నివారించకపోతే ఆకులు జల్లెడగా మారతాయి. నివారణకు "Ampligo 150 ZC" (ఎకరానికి 100 ఎంఎల్) స్ప్రే చేయండి!',
          smsVersion: '🐛మక్కజొన్న కత్తెర పురుగు నివారణకు సింజెంటా అంప్లిగో (ఎకరానికి 100 ఎం.ఎల్) పిచికారీ చేయండి. ఆకులు శీఘ్రంగా రక్షించుకోండి.',
          voiceScript: 'ప్రియమైన మక్కజొన్న రైతు, కత్తెర పురుగు ఆకులు నాశనం చేస్తోంది. వెంటనే అంప్లిగో పిచికారీ చేసుకొని చేనుని కాపాడుకోండి.'
        },
        Tamil: {
          fullMessage: '🐛 சின்ஜெண்டா மக்காச்சோளம் எச்சரிக்கை: மக்காச்சோளத்தில் "படைப்புழு" தாக்குதல் அதிகரித்துள்ளது. இலைகள் அரிப்பதைத் தடுக்க உடனே "Ampligo 150 ZC" (ஏக்கருக்கு 100 மி.ली) தெளிக்கவும்!',
          smsVersion: '🐛மக்காச்சோள படைப்புழு அலர்ட்: இலைகளில் ஓட்டைகள் விழுவதை தவிர்க்க சின்ஜெண்டா ஆம்ப்ளிகோ ஏக்கருக்கு 100 மி.லி இடவும்.',
          voiceScript: 'அன்பான மக்காச்சோள விவசாயிகளே! இலைகளிலுள்ள வட்ட வடிவ துளைகளை போக்க உடனே ஏக்கருக்கு 100 மிலி என்ற அளவில் ஆம்ப்ளிகோ தெளிக்கவும்.'
        },
        Kannada: {
          fullMessage: '🐛 ಸಿಂಜೆಂಟಾ ಮೆಕ್ಕೆಜೋಳ ಎಚ್ಚರಿಕೆ: ಸುಳಿಯಲ್ಲಿ ಕತ್ತರಿ ಹುಳುವಿನ ಹಾವಳಿ ಹೆಚ್ಚುತ್ತಿದೆ. ಗಿಡಗಳ ಸುಳಿ ಎಲೆ ಒಣಗದಂತೆ ತಡೆಯಲು ಯೂರಿಯಾದೊಂದಿಗೆ "Ampligo 150 ZC" (ಎಕರೆಗೆ 100 ಮಿಲಿ) ಸಿಂಪಡಿಸಿ.',
          smsVersion: '🐛ಮೆಕ್ಕೆಜೋಳ ಕತ್ತರಿ ಹುಳು ತಡೆಗೆ ಸಿಂಜೆಂಟಾ ಆಂಪ್ಲಿಗೋ 100 ಮಿಲಿ ಬಳಸಿ ಎಲೆಗಳು ಕಾಪಾಡಿ.',
          voiceScript: 'ಮೆಕ್ಕೆಜೋಳ ಬೆಳೆಗಾರರೇ ಗಮನಿಸಿ, ಕತ್ತರಿ ಹುಳುಗಳು ನಿಮ್ಮ ಜೋಳವನ್ನು ತಿನ್ನದಂತೆ ತಡೆಯಲು ತಕ್ಷಣ ಆಂಪ್ಲಿಗೋ ಬಳಸಿ.'
        },
        Marathi: {
          fullMessage: '🐛 सिंजेंटा मका इशारा: मका पिकावर "लष्करी अळीचे" बारीक छिद्र पडू लागले आहेत. पाने पोखरण्यापूर्वी तातडीने "Ampligo" (१०० मिली प्रति एकर) ची फवारणी थेट पोपऱ्यात करा!',
          smsVersion: '🐛मका लष्करी अळी इशारा: पाने पिवळे व चट्टे रोखण्यासाठी व्हिरटाको १०० मिली प्रति एकरी टाका.',
          voiceScript: 'शेतकरी मित्रांनो, मका पिकात लष्करी अळी असेल तर विरताको १०० मिली टाका व शेत निरोगी करा.'
        }
      }
    },
    severe: {
      recommendedProduct: 'Syngenta Elestal Neo',
      reach: 15200,
      score: 93,
      languages: {
        English: {
          fullMessage: '🚨 CRITICAL MAIZE WARNING: High-intensity Fall Armyworm devastation reported directly in hybrid tracts. Complete cob destruction warning. Immediately spray "Elestal Neo" (200g/acre) to secure yield weight!',
          smsVersion: '🚨MAIZE ARMYWORM EMERGENCY: Fall Armyworm eating through growing maize cobs. Urgent spray "Elestal Neo" (200g/acre) to kill larvae and save hybrid maize.',
          voiceScript: 'Severe Armyworm outbreak verified! Crop devastation is extremely fast. Delaying spray can cause total maize failure. Infuse your field immediately with Elestal Neo insecticide today.'
        },
        Hindi: {
          fullMessage: '🚨 मक्का आपातकालीन चेतावनी: अमेरिकी लश्करी सुंडी (Fall Armyworm) का भीषण तांडव! पूरा भुट्टा अंदर से खाया जा रहा है। फसल बचाने के लिए तुरंत "Elestal Neo" (200 ग्राम प्रति एकड़) छिड़कें। भारी नुकसान से बचें!',
          smsVersion: '🚨मक्का आपातकाल: लश्करी सुंडी सुतली और दाने खा रही है। फसल सुरक्षा हेतु सिंजेंटा एलेस्टाल नियो (200 ग्राम/एकड़) का फौरन छिड़काव करें।',
          voiceScript: 'मक्का खेतों के लिए आपातकालीन चेतावनी! मक्के में भयंकर लश्करी सुंडी बढ़ गई है। आपकी साल भर की कमाई बचाने के लिए तुरंत सिंजेंटा एलेस्टाल नियो छिड़कें।'
        },
        Telugu: {
          fullMessage: '🚨 మక్కజొన్న కత్తెర పురుగు విలయం: తీవ్రమైన కత్తెర పురుగు దాడి చేత పంట కంకులు పూర్తిగా విరిగిపోతున్నాయి. వెంటనే "Elestal Neo" (ఎకరానికి 200 గ్రాములు) పిచికారీ చేసి పంట కాపాడుకోండి!',
          smsVersion: '🚨మక్కజొన్న అత్యవసరం: పంట ఎండిపోకా ముందే వెంటనే ఎలెస్టాల్ నియో స్ప్రే చేయండి.',
          voiceScript: 'మక్కజೊన్న రైతులకు అత్యవసర పిలుపు! కత్తెర పురుగు తీవ్రతను అరికట్టడానికి వెంటనే సి అలస్టాల్ నియో చల్లండి.'
        },
        Tamil: {
          fullMessage: '🚨 மக்காச்சோளம் அவசர அலர்ட்: மக்காச்சோளத்தில் "படைப்புழு" தாக்குதலினால் கதிர்கள் முழுமையாக துளைக்கப்பட்டு வருகின்றன! உடனே ஏக்கருக்கு "Elestal Neo" (200 கிராம்) தெளிக்கவும்!',
          smsVersion: '🚨மக்காச்சோளம் படைப்புழு அவசரம்: படைப்புழுக்களை அழிக்க உடனடியாக சின்ஜெண்டா எலெஸ்டால் நியோ 200 கிராம் தெளிக்கவும்.',
          voiceScript: 'அவசர அபாய செய்தி! மக்காச்சோளத்தை துளைக்கும் படைப்புழுக்களை அழிக்க உடனே சின்ஜெண்டா எலெஸ்டால் நியோ பயன்படுத்துங்கள்.'
        },
        Kannada: {
          fullMessage: '🚨 ತುರ್ತು ಮೆಕ್ಕೆಜೋಳ ಎಚ್ಚರಿಕೆ: ಕತ್ತರಿ ಹುಳು ಸುಳಿಯ ಒಳಗೆ ಸೇರಿ ಇಡೀ ಕಾಳಿನ ಜಲ್ಲೆಯನ್ನು ತಿನ್ನುತ್ತಿದೆ. ಬೆಳೆ ಉಳಿಸಿಕೊಳ್ಳಲು ತಕ್ಷಣ "Elestal Neo" (ಎಕರೆಗೆ 200 ಗ್ರಾಂ) ಸಿಂಪಡಿಸಿ.',
          smsVersion: '🚨ಮೆಕ್ಕೆಜೋಳ ಕತ್ತರಿಹುಳು ತುರ್ತು: ಗಿಡ ಹಾನಿಕಾರಿಕ ಹುಳು ಮುಕ್ತವಾಗಿಸಲು ಎಲೆಸ್ಟಾಲ್ ನಿಯೊ ಇಂದೇ ಅತ್ಯುತ್ತಮ.',
          voiceScript: 'ಮೆಕ್ಕೆಜೋಳ ಬೆಳೆಗಾರರೇ ಹೆದರಬೇಡಿ, ಪೆಂಟಗ್ರಾಮ್ ಕತ್ತರಿಹುಳು ಕೊಲ್ಲಲು ತಕ್ಷಣ ಎಲೆಸ್ಟಾಲ್ ನಿಯೊ ಔಷಧಿ ಸ್ಪ್ರೇ ಮಾಡಿ.'
        },
        Marathi: {
          fullMessage: '🚨 मका आणीबाणी: मक्यावर "लष्करी अळी"चा (Fall Armyworm) भीषण हल्ला! कणसे पोखरून मका खराब होण्यापूर्वी तातडीने "Elestal Neo" (२०० ग्रॅम प्रति एकर) फवारणी करा!',
          smsVersion: '🚨मका आणीबाणी: लष्करी अळीमुळे मक्याच्या कणीसाचे नुकसान! त्यावर नियंत्रण मिळवण्यासाठी तातडीने एलेस्टाल नियो फवारणी करा.',
          voiceScript: 'अतिशय महत्त्वाची सूचना मका उत्पादकांसाठी! मक्यावरील लष्करी अळी ताबडतोब नष्ट करण्यासाठी तुरंत एलेस्टाल नियो फवारा.'
        }
      }
    }
  }
};

export const MOCK_BADGE_TEMPLATES = [
  { id: 'badge-img-1', name: 'Rajender Kumar (Punjab)', crop: 'Wheat', year: '2026', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200' },
  { id: 'badge-img-2', name: 'Sunita Patil (Maharashtra)', crop: 'Cotton', year: '2026', img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200' },
  { id: 'badge-img-3', name: 'Muthvel S (Tamil Nadu)', crop: 'Rice', year: '2026', img: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=200' },
  { id: 'badge-img-4', name: 'Reddy Chowdary (Andhra)', crop: 'Tomato', year: '2026', img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200' }
];
