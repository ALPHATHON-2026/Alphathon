import type { UserProfile, DailyAnalysisInput, ProfileBaseline, DailyReport } from "../types";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export const analyzeProfile = async (profile: UserProfile): Promise<ProfileBaseline> => {
  try {
    const response = await fetch(`${API_URL}/api/analyze-profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to analyze profile");
    }

    return await response.json();
  } catch (error) {
    console.error("Profile analysis error:", error);
    // Fallback Mock Data
    console.warn("Using fallback mock data due to API failure.");
    return {
      doshaDominance: { vata: 40, pitta: 30, kapha: 30 },
      termExplanations: [
        { term: "Vata", explanation: "The energy of movement and potential." },
        { term: "Pitta", explanation: "The energy of digestion and transformation." },
        { term: "Kapha", explanation: "The energy of structure and lubrication." }
      ],
      initialAdvice: "Your biological rhythm shows a dominance of Vata. Prioritize warmth, routine, and grounding foods to maintain balance."
    };
  }
};

export const analyzeDaily = async (profile: UserProfile, daily: DailyAnalysisInput): Promise<DailyReport> => {
  try {
    const response = await fetch(`${API_URL}/api/analyze-daily`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ profile, daily }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to analyze daily inputs");
    }

    return await response.json();
  } catch (error) {
    console.error("Daily analysis error:", error);
    // Fallback Mock Data
    console.warn("Using fallback mock data due to API failure.");
    return {
      doshaState: { vata: 35, pitta: 35, kapha: 30 },
      safetyBlindspot: "Potential interaction between spicy foods and high Pitta state.",
      seasonalDisconnect: "Dry weather exacerbating Vata imbalance.",
      trustDeficit: "Gut-Brain axis signaling stress due to irregular eating times.",
      mentalHealthIgnorance: "Anxiety levels elevated due to lack of grounding practices.",
      recommendations: {
        routine: "Establish a consistent sleep schedule and morning grounding practice.",
        food: "Favor warm, cooked meals with healthy fats and mild spices."
      }
    };
  }
};
