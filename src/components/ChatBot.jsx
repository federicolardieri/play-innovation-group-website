import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2, Minimize2 } from 'lucide-react';
import { AI_SYSTEM_PROMPT } from '../utils/aiKnowledge';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Ciao! Sono **William**, l'assistente di PlayInnovation Group. Come posso aiutarti oggi? 🎾" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  // Chat logic now handled through /api/chat serverless function
  // to keep the API KEY secure on the server.

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Convert history to the format expected by Gemini
      const contents = messages.slice(1).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      // Add current message
      contents.push({
        role: 'user',
        parts: [{ text: input }]
      });

      // Call our internal Vercel Serverless Function
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: contents,
          systemInstruction: AI_SYSTEM_PROMPT
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Server error');
      }

      const data = await response.json();
      const botText = data.text;

      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      let errorMessage = 'Scusami, ho riscontrato un errore tecnico. Riprova più tardi.';

      if (error.message?.includes('Server error')) {
        errorMessage = "Il server ha riscontrato un problema. Verifica la configurazione su Vercel.";
      } else if (error.message?.includes('fetch')) {
        errorMessage = "Errore di connessione. Verifica la tua rete internet.";
      }

      setMessages(prev => [...prev, { role: 'bot', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-brand-cyan rounded-full shadow-2xl flex items-center justify-center text-brand-graphite hover:scale-110 transition-transform z-[100] group"
      >
        <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-brand-graphite"></div>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 w-[90vw] md:w-[400px] ${isMinimized ? 'h-16' : 'h-[600px]'} max-h-[80vh] bg-brand-graphite/95 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl flex flex-col z-[100] overflow-hidden transition-all duration-300`}>
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center border border-brand-cyan/30">
            <Bot size={20} className="text-brand-cyan" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">William</h4>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] text-brand-steel uppercase font-mono tracking-widest">Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => setIsMinimized(!isMinimized)} className="p-2 text-brand-steel hover:text-white transition-colors">
            <Minimize2 size={18} />
          </button>
          <button onClick={() => setIsOpen(false)} className="p-2 text-brand-steel hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${msg.role === 'user'
                    ? 'bg-brand-cyan text-brand-graphite rounded-tr-none'
                    : 'bg-white/5 text-brand-offwhite border border-white/5 rounded-tl-none'
                  }`}>
                  <div className="whitespace-pre-wrap">
                    {msg.text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i} className="text-brand-cyan font-bold">{part.slice(2, -2)}</strong>;
                      }
                      return part;
                    })}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/5 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <Loader2 size={16} className="text-brand-cyan animate-spin" />
                  <span className="text-xs text-brand-steel">L'assistente sta scrivendo...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-white/5">
            <div className="flex items-center gap-2 bg-brand-graphite/50 border border-white/10 rounded-xl p-2 focus-within:border-brand-cyan/50 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Fai una domanda..."
                className="flex-1 bg-transparent border-none focus:outline-none text-white text-sm px-2"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 bg-brand-cyan rounded-lg flex items-center justify-center text-brand-graphite hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-brand-steel text-center mt-3 uppercase font-mono tracking-tighter opacity-50">
              Powered by PlayInnovation AI Intelligence
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;
