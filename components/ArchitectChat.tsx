'use client';

import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Send, Bot, Loader2, X, MessageSquare, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '' });

interface Message {
  role: 'user' | 'model';
  content: string;
  image?: string;
}

export default function ArchitectChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendMessage = async () => {
    if ((!input.trim() && !selectedImage) || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      image: selectedImage || undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setSelectedImage(null);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      }));

      const parts: any[] = [];
      if (userMessage.image) {
        parts.push({
          inlineData: {
            data: userMessage.image.split(',')[1],
            mimeType: 'image/jpeg'
          }
        });
      }
      parts.push({ text: userMessage.content || "Analyze this image in the context of the Humbled Architect's synthesis." });

      const response = await ai.models.generateContent({
        model: userMessage.image ? 'gemini-3.1-pro-preview' : 'gemini-3-flash-preview',
        contents: [
          ...history,
          { role: 'user', parts }
        ],
        config: {
          systemInstruction: "You are the Humbled Architect, an expert in Lurianic Kabbalah and modern neuro-anatomy. You help users understand the structural bridge between esoteric wisdom and biological reality. Your tone is scholarly, poetic, and deeply respectful of both ancient tradition and modern science. Use the synthesis provided in the app (Modules 0-6) as your primary framework."
        }
      });

      const text = response.text || "I apologize, but I could not formulate a response.";
      setMessages((prev) => [...prev, { role: 'model', content: text }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages((prev) => [...prev, { role: 'model', content: "I apologize, but the connection to the Infinite (or the API) has been momentarily severed. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-500 transition-all z-50 mystic-glow"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] glass-card flex flex-col z-50 shadow-2xl border-amber-900/30"
          >
            <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-900/50 flex items-center justify-center border border-amber-500/30">
                  <Bot className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-display font-medium text-sm">The Humbled Architect</h3>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Synthesis Engine</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-zinc-300">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800">
              {messages.length === 0 && (
                <div className="text-center py-10 space-y-2">
                  <p className="text-zinc-500 text-sm italic">&quot;We stand before a cathedral of flesh and bone...&quot;</p>
                  <p className="text-xs text-zinc-600">Ask me about the Tzimtzum, the RAS, or the 12 Cranial Nerves.</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={cn("flex flex-col", m.role === 'user' ? "items-end" : "items-start")}>
                  <div className={cn(
                    "max-w-[85%] p-3 rounded-2xl text-sm",
                    m.role === 'user' ? "bg-amber-600 text-white rounded-tr-none" : "bg-zinc-800 text-zinc-200 rounded-tl-none"
                  )}>
                    {m.image && (
                      <div className="relative w-full aspect-video mb-2 rounded-lg overflow-hidden border border-white/10">
                        <Image src={m.image} alt="Uploaded" fill unoptimized className="object-cover" />
                      </div>
                    )}
                    <div className="markdown-body text-sm leading-relaxed">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-zinc-500 text-xs animate-pulse">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  <span>Architect is contemplating...</span>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-zinc-800 bg-zinc-900/80">
              {selectedImage && (
                <div className="relative inline-block mb-2">
                  <div className="relative w-16 h-16 rounded border border-amber-500/50 overflow-hidden">
                    <Image src={selectedImage} alt="Preview" fill unoptimized className="object-cover" />
                  </div>
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-2 -right-2 bg-zinc-950 rounded-full p-0.5 border border-zinc-800 z-10"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              <div className="flex gap-2">
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 text-zinc-500 hover:text-amber-500 transition-colors"
                >
                  <Upload className="w-5 h-5" />
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Inquire about the synthesis..."
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading}
                  className="p-2 bg-amber-600 text-white rounded-lg hover:bg-amber-500 disabled:opacity-50 transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
