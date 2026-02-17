export interface UserProfile {
  age: number;
  height: number;
  weight: number;
  gender: 'male' | 'female' | 'other';
  personality: 'free' | 'rigid';
  longTermMeds: string;
  physicalWound: string;
  femaleStats?: {
    isPregnant: boolean;
    onPeriods: boolean;
    crampsLevel: number; // 0-10
  };
}

export interface DailyAnalysisInput {
  routine: string;
  weatherExposure: string;
  foodConsumption: string;
  foodPhotoBase64?: string;
  energyLevel: number; // 1-10
  healthIssuesToday: string;
  medsTakenToday: string;
  activity: string;
  sleepHours: number;
  screenTime?: number;
}

export interface ProfileBaseline {
  doshaDominance: { vata: number; pitta: number; kapha: number };
  termExplanations: { term: string; explanation: string }[];
  initialAdvice: string;
}

export interface DailyReport {
  doshaState: { vata: number; pitta: number; kapha: number };
  safetyBlindspot: string;
  seasonalDisconnect: string;
  trustDeficit: string;
  mentalHealthIgnorance: string;
  recommendations: {
    routine: string;
    food: string;
  };
}
