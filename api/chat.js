import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // Solo POST consentito
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { contents, systemInstruction } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured on server' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    // Usiamo gemini-1.5-flash che è veloce ed economico
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: systemInstruction
    });

    const result = await model.generateContent({ contents });
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ text });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: 'Failed to generate content', details: error.message });
  }
}
