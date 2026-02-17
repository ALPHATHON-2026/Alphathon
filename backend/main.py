import warnings
warnings.filterwarnings("ignore", category=FutureWarning)

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import google.generativeai as genai
import json
from typing import List, Optional, Literal

# Load environment variables from .env file
load_dotenv()

# Configure Gemini API
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    print("Warning: GOOGLE_API_KEY not found in .env file")
else:
    genai.configure(api_key=GOOGLE_API_KEY)

# --- Firebase Initialization ---
import firebase_admin
from firebase_admin import credentials, firestore

try:
    cred_path = os.getenv("FIREBASE_CREDENTIALS")
    if not cred_path:
        print("Warning: FIREBASE_CREDENTIALS not found in .env file")
    else:
        cred = credentials.Certificate(cred_path)
        firebase_admin.initialize_app(cred)
        print("Firebase Admin SDK initialized successfully")
        db = firestore.client()
except Exception as e:
    print(f"Error initializing Firebase: {e}")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Models Matching Frontend ---

class FemaleStats(BaseModel):
    isPregnant: bool
    onPeriods: bool
    crampsLevel: int

class UserProfile(BaseModel):
    age: int
    height: float
    weight: float
    gender: Literal['male', 'female', 'other']
    personality: Literal['free', 'rigid']
    longTermMeds: str
    physicalWound: str
    femaleStats: Optional[FemaleStats] = None

class DailyAnalysisInput(BaseModel):
    routine: str
    weatherExposure: str
    foodConsumption: str
    foodPhotoBase64: Optional[str] = None
    energyLevel: int
    healthIssuesToday: str
    medsTakenToday: str
    activity: str
    sleepHours: float
    screenTime: Optional[float] = None

class DailyAnalysisRequest(BaseModel):
    profile: UserProfile
    daily: DailyAnalysisInput

# --- Helper to call Gemini ---

def call_gemini(prompt: str):
    if not GOOGLE_API_KEY:
        raise HTTPException(status_code=500, detail="Google API Key is not configured.")
    
    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content(prompt)
        text_response = response.text
        # Clean markdown
        if text_response.startswith("```json"):
            text_response = text_response[7:-3]
        elif text_response.startswith("```"):
            text_response = text_response[3:-3]
        
        return json.loads(text_response)
    except Exception as e:
         raise HTTPException(status_code=500, detail=f"Gemini analysis failed: {str(e)}")

# --- Endpoints ---

@app.get("/")
def read_root():
    return {"message": "Ayurvedic Analysis API Ready"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/health/firebase")
def firebase_health_check():
    try:
        # distinct check to see if app is initialized
        app_check = firebase_admin.get_app()
        return {"status": "connected", "app_name": app_check.name}
    except ValueError:
        return {"status": "disconnected", "error": "Firebase app not initialized"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

@app.post("/api/analyze-profile")
async def analyze_profile(profile: UserProfile):
    prompt = f"""
    You are an expert Ayurvedic doctor. Analyze this profile to determine the baseline Dosha.
    
    Profile: {profile.model_dump_json()}
    
    Return ONLY a JSON object with this EXACT structure:
    {{
      "doshaDominance": {{ "vata": <number 0-100>, "pitta": <number 0-100>, "kapha": <number 0-100> }},
      "termExplanations": [
         {{ "term": "<Term 1>", "explanation": "<Short explanation>" }},
         {{ "term": "<Term 2>", "explanation": "<Short explanation>" }},
         {{ "term": "<Term 3>", "explanation": "<Short explanation>" }}
      ],
      "initialAdvice": "<One paragraph of deep, mystical but practical advice based on their Dosha>"
    }}
    Ensure the percentages sum to 100 or close to it.
    """
    return call_gemini(prompt)

@app.post("/api/analyze-daily")
async def analyze_daily(request: DailyAnalysisRequest):
    prompt = f"""
    You are an expert Ayurvedic doctor and toxicologist. 
    Analyze the user's daily log against their baseline profile.
    
    Profile: {request.profile.model_dump_json()}
    Daily Log: {request.daily.model_dump_json()}
    
    Return ONLY a JSON object with this EXACT structure:
    {{
      "doshaState": {{ "vata": <number>, "pitta": <number>, "kapha": <number> }},
      "safetyBlindspot": "<Analyze medication/herb interactions or risks>",
      "seasonalDisconnect": "<Analyze food vs weather>",
      "trustDeficit": "<Analyze gap between intended health and actual habits>",
      "mentalHealthIgnorance": "<Analyze stress/sleep impact>",
      "recommendations": {{
        "routine": "<Specific routine correction>",
        "food": "<Specific food recommendation>"
      }}
    }}
    """
    return call_gemini(prompt)

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
