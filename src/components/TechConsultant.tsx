import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getTechConsultantREsponse } from "../services/aiService";

import { X, Send, Bot, User, Loader2, BotMessageSquare } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

interface Message {
    id: string;
    role: "user" | "model";
    text: string;
}

const TechConsultant = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [input, setInput] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            role: "model",
            text: "Namaste! Welcome to QRCoders. I am your AI Tech Consultant at QRCoders. Tell me about your business or software idea, and I can draft a technical roadmap for you instantly!",
        },
    ]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: crypto.randomUUID(),
            role: "user",
            text: input.trim(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const conversationHistory = messages.map((msg) => ({
                role: msg.role,
                parts: [{ text: msg.text }],
            }));

            conversationHistory.push({
                role: "user",
                parts: [{ text: userMessage.text }],
            });

            const modelText =
                await getTechConsultantREsponse(conversationHistory);

            setMessages((prev) => [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    role: "model",
                    text:
                        modelText ||
                        "I apologize, I encountered a minor connection issue. Please feel free to connect directly with our human engineers on WhatsApp!",
                },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    role: "model",
                    text: "Sorry, I am hitting high traffic limits. Let's switch over to our live engineering team on WhatsApp!",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 font-sans">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer flex items-center justify-center w-14 h-14 rounded-full bg-accent text-white shadow-[4px_4px_15px_5px_gray] hover:bg-accent-strong hover:scale-105 transition-all duration-300 group"
                    aria-label="Open AI Tech Consultant"
                >
                    <BotMessageSquare className="w-8 h-8 group-hover:rotate-6 transition-transform animate-pulse" />
                    <span className="absolute right-16 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
                        Talk to QRCoders' AI Consultant 🤖
                    </span>
                </button>
            )}

            {isOpen && (
                <div className="w-80 h-130 bg-white rounded-2xl shadow-[4px_4px_20px_5px_gray] border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
                    <div className="p-4 bg-linear-to-r from-accent to-accent-strong text-white flex items-center justify-between shadow-md">
                        <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/30">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm leading-tight">
                                    QRCoders' AI Consultant
                                </h3>
                                <span className="text-[11px] text-accent-tint/90 flex items-center">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                                    Online
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 rounded-md hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer
                            "
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto bg-accent-tint/50 space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex items-start space-x-2.5 ${msg.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                            >
                                <div
                                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border shadow-sm ${
                                        msg.role === "user"
                                            ? "bg-accent-tint border-accent-strong/50 text-accent"
                                            : "bg-white border-gray-200 text-gray-600"
                                    }`}
                                >
                                    {msg.role === "user" ? (
                                        <User className="w-4 h-4" />
                                    ) : (
                                        <Bot className="w-4 h-4" />
                                    )}
                                </div>
                                <div
                                    className={`max-w-[78%] rounded-2xl p-3 text-xs leading-relaxed shadow-sm whitespace-pre-wrap ${
                                        msg.role === "user"
                                            ? "bg-accent text-white rounded-tr-none"
                                            : "bg-white text-gray-900 rounded-tl-none border border-gray-100"
                                    }`}
                                >
                                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex items-start space-x-2.5">
                                <div className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center shadow-sm">
                                    <Bot className="w-4 h-4" />
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-3 shadow-sm flex items-center space-x-2">
                                    <Loader2 className="w-4 h-4 text-accent animate-spin" />
                                    <span className="text-xs text-accent-bg-accent-tint0">
                                        Analyzing...Please wait
                                    </span>
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    <div className="px-4 py-2 bg-accent-tint border-y border-accent-strong flex items-center justify-between text-xs">
                        <span className="text-accent/80 font-medium">
                            Ready to start building?
                        </span>
                        <a
                            href="https://wa.me/9779744700704?text=Hello%20QR%20Coders%2C%20I%27m%20interested%20in%20your%20services"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center space-x-1 font-bold text-accenbg-accent-strong hover:text-accent-strong transition-colors bg-white px-2.5 py-1 rounded-md border border-accent-strong/50 shadow-sm"
                        >
                            <WhatsappLogoIcon className="w-5 h-5 text-green-500" />
                            <span>WhatsApp</span>
                        </a>
                    </div>

                    <form
                        onSubmit={handleSendMessage}
                        className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={isLoading}
                            placeholder="e.g., I need a delivery web app..."
                            className="flex-1 bg-accent-tint border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-accent-bg-accent-tint0 focus:border-accent-strong focus:bg-white disabled:opacity-60 transition-all"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isLoading}
                            className="p-2 rounded-xl bg-accent text-white hover:bg-accent-strong disabled:bg-gray-100 disabled:text-gray-400 transition-colors shadow-md flex items-center justify-center shrink-0"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default TechConsultant;
