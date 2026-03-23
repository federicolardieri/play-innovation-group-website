---
name: gemini-api-dev
description: Core Gemini API development skill providing documentation and best practices
---
# Gemini API Development Skill

This skill provides direct access to the latest Gemini API documentation, integration patterns, and best practices.

## Core Information
- **SDK:** Use `@google/genai` (Node.js/JS) or `google-genai` (Python).
- **Models:**
  - `gemini-2.0-flash`
  - `gemini-1.5-flash`
  - `gemini-1.5-pro`
  - `gemini-3-flash-preview` (Experimental/Latest)

## Best Practices
- **API Key Security:** Always store the API key in a `.env` file and exclude it from version control via `.gitignore`.
- **System Instructions:** Use the `systemInstruction` parameter during model initialization to set the assistant's persona and knowledge base.
- **Chat History:** Pass the conversation history using the `contents` or `history` parameter to maintain context across turns.

## Usage Example (JavaScript)
```javascript
import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });

async function chat(input, history) {
  const result = await client.models.generateContent({
    model: "gemini-1.5-flash",
    contents: [...history, { role: 'user', parts: [{ text: input }] }],
    config: {
      systemInstruction: "Sei un assistente esperto in impianti sportivi."
    }
  });
  return result.text;
}
```

## Advanced Features
- **Context Caching:** Use `cacheContent` or `cachedContents.createReplica` for long-context efficiency.
- **Function Calling:** Define tools that the model can call to interact with external systems.
- **Structured Output:** Enforce JSON output by defining a response schema.
