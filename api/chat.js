/* global process */
import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  // Restrict CORS to the production domain (override via ALLOWED_ORIGIN env var if needed)
  const allowedOrigin = process.env.ALLOWED_ORIGIN || 'https://www.playinnovationgroup.com';
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { contents, systemInstruction } = req.body;

  console.log("Receiving request for ChatBot API");

  const apiKey = (process.env.GEMINI_API_KEY || "").trim();

  if (!apiKey) {
    console.error("CRITICAL: GEMINI_API_KEY is missing in process.env");
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured on server. Check Vercel Environment Variables.' });
  }

  if (!Array.isArray(contents)) {
    return res.status(400).json({ error: 'Invalid contents format: expected an array' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const config = systemInstruction ? { systemInstruction } : {};

    console.log("Sending request to Google Gemini API (Model: gemini-3-flash-preview)...");

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents,
      config,
    });

    const text = response.text;

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
      message = `Modello non trovato (404). Dettagli: ${error.message}`;
    } else if (error.message?.includes('403') || error.message?.includes('API_KEY_INVALID')) {
      status = 403;
      message = "Chiave API non valida o permessi insufficienti.";
    }

    return res.status(status).json({
      error: 'AI Initialization Error',
      message,
      type: error.constructor.name
    });
  }
}
