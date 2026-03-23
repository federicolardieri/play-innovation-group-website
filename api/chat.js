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
    // Forza la versione v1 dell'API se v1beta dà problemi 404
    const genAI = new GoogleGenerativeAI(apiKey);
    // Nota: L'SDK v0.24+ gestisce internamente la versione, ma possiamo assicurarci di usare gemini-1.5-flash 
    // che è disponibile globalmente su v1.
    
    // Proviamo con il nome modello esatto della documentazione
    const modelName = "gemini-1.5-flash";
    
    const modelOptions = { 
      model: modelName,
    };
    
    if (systemInstruction) {
      modelOptions.systemInstruction = {
        parts: [{ text: systemInstruction }]
      };
    }

    const model = genAI.getGenerativeModel(modelOptions);

    console.log(`Sending request to Google Gemini API (Model: ${modelName})...`);
    
    if (!Array.isArray(contents)) {
      throw new Error("Invalid contents format: expected an array");
    }

    // Effettua la generazione del contenuto
    const result = await model.generateContent({ contents });
    const response = await result.response;
    const text = response.text();
    
    if (!text) {
      throw new Error("Empty response from AI");
    }

    console.log("Response received successfully from Gemini");
    return res.status(200).json({ text });
  } catch (error) {
    console.error("DEBUG - Gemini API Error:", error);
    
    let status = 500;
    let message = error.message;

    if (error.message?.includes('404')) {
      status = 404;
      message = `Modello non trovato (404). Ho provato 'gemini-1.5-flash'. Dettagli: ${error.message}`;
    } else if (error.message?.includes('403') || error.message?.includes('API_KEY_INVALID')) {
      status = 403;
      message = "Chiave API non valida o permessi insufficienti.";
    }

    return res.status(status).json({ 
      error: 'AI Initialization Error', 
      message: message,
      type: error.constructor.name
    });
  }
}
