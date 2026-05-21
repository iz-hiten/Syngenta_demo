export type PestPressure = 'low' | 'medium' | 'high';

export interface StatePestData {
  id: string;
  name: string;
  pestPressure: PestPressure;
  pestName: string;
  crop: string;
  recommendedProduct: string;
  productDescription: string;
  farmersImpactedCount: number;
}

export type CropType = 'Rice' | 'Cotton' | 'Wheat' | 'Tomato' | 'Sugarcane' | 'Maize';
export type RegionType = 'Punjab' | 'Maharashtra' | 'Tamil Nadu' | 'Andhra Pradesh' | 'Uttar Pradesh' | 'Karnataka';
export type GrowthStage = 'Sowing' | 'Vegetative' | 'Flowering' | 'Harvest';
export type SeverityLevel = 'none' | 'moderate' | 'severe';
export type ChannelType = 'WhatsApp' | 'SMS' | 'Voice Call' | 'Social Media';
export type LanguageType = 'Hindi' | 'Telugu' | 'Tamil' | 'Kannada' | 'Marathi' | 'English';

export interface FarmerSegment {
  id: string;
  region: RegionType;
  crop: CropType;
  messagesThisWeek: number;
  fatigueScore: number; // 0 - 100
  status: 'safe' | 'warning' | 'suppressed';
  manualOverride: boolean;
  historyData: number[]; // Last 7 days message counts
}

export interface CampaignRecord {
  id: string;
  title: string;
  state: string;
  crop: CropType;
  channel: ChannelType;
  status: 'Active' | 'Triggered' | 'Snoozed' | 'Delivered' | 'Auto-paused';
  farmersReached: number;
  engagementRate: number; // e.g. 84.5
  timestamp: string;
}

export interface PestAlertScenario {
  id: string;
  state: RegionType;
  crop: CropType;
  pestName: string;
  severity: SeverityLevel;
  recommendedProduct: string;
  estimatedFarmers: number;
  channel: ChannelType;
}

export interface CampaignContentTemplate {
  crop: CropType;
  severity: SeverityLevel;
  stage: GrowthStage;
  region: RegionType;
  languages: {
    [key in LanguageType]: {
      fullMessage: string;
      smsVersion: string;
      voiceScript: string;
    }
  };
}
