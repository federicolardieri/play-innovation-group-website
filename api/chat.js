import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // Configurazione CORS (opzionale ma utile per Vercel)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { contents, systemInstruction } = req.body;
  
  // LOG per debug su Vercel (visibili nei log di Vercel Dashboard)
  console.log("Receiving request for ChatBot API");
  
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("CRITICAL: GEMINI_API_KEY is missing in process.env");
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured on server. Check Vercel Environment Variables.' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: systemInstruction
    });

    console.log("Sending request to Google Gemini API...");
    const result = await model.generateContent({ contents });
    const response = await result.response;
    const text = response.text();
    
    console.log("Response received successfully from Gemini");
    return res.status(200).json({ text });
  } catch (error) {
    console.error("Gemini API Error details:", error);
    return res.status(500).json({ 
      error: 'Failed to generate content', 
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
