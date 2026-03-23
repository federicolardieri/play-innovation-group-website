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
  
  const apiKey = (process.env.GEMINI_API_KEY || "").trim();

  if (!apiKey) {
    console.error("CRITICAL: GEMINI_API_KEY is missing in process.env");
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured on server. Check Vercel Environment Variables.' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Configurazione del modello con system instruction nel formato corretto
    const modelOptions = { 
      model: "gemini-1.5-flash",
    };
    
    if (systemInstruction) {
      modelOptions.systemInstruction = {
        parts: [{ text: systemInstruction }]
      };
    }

    const model = genAI.getGenerativeModel(modelOptions);

    console.log("Sending request to Google Gemini API...");
    
    if (!Array.isArray(contents)) {
      throw new Error("Invalid contents format: expected an array");
    }

    // Effettua la generazione del contenuto
    const result = await model.generateContent({ contents });
    const response = await result.response;
    const text = response.text();
    
    if (!text) {
      throw new Error("Lo script ha ricevuto un contenuto vuoto da Gemini.");
    }

    console.log("Response received successfully from Gemini");
    return res.status(200).json({ text });
  } catch (error) {
    console.error("Gemini API Error details:", error);
    
    // Gestione errori specifica per 404 o altri problemi comuni
    let status = 500;
    let message = error.message;

    if (error.message?.includes('404')) {
      message = "Il modello Gemini non è stato trovato (404). Verifica la chiave API e la regione.";
      status = 404;
    }

    return res.status(status).json({ 
      error: 'Failed to generate content', 
      message: message,
      type: error.constructor.name
    });
  }
}
