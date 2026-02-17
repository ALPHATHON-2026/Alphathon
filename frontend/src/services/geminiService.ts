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
    throw error;
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
    throw error;
  }
};
