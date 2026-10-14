import { WhatsappLogoIcon, X } from "@phosphor-icons/react";
import { useState } from "react";

const WhatsAppFloatingBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userMessage, setUserMessage] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSendMessage = (e: any) => {
        e.preventDefault();
        if (!userMessage.trim()) return;

        const baseText = `*Inquiry from QRCoders Website*\n\n${userMessage}`;
        const encodedText = encodeURIComponent(baseText);
        const whatsappUrl = `https://wa.me{+9779744700704}?text=${encodedText}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        setUserMessage("");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans text-left">
            {isOpen && (
                <div
                    className="mb-4 w-80 md:w-96 h-[400px] bg-[#E5DDD5] rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-popup"
                    style={{
                        animation: "popup 0.25s ease-out forwards",
                        backgroundImage: "url('https://githubusercontent.com')",
                        backgroundSize: "contain",
                    }}
                >
                    <div className="bg-[#075E54] text-white p-4 flex items-center justify-between shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-inner">
                                QR
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm leading-tight">
                                    QRCoders Support
                                </h4>
                                <span className="text-[11px] text-emerald-200 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block animate-pulse"></span>
                                    Typically replies instantly
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="text-white opacity-70 hover:opacity-100 text-xl font-bold transition-opacity focus:outline-none"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto flex flex-col justify-start">
                        <div className="bg-white text-gray-800 text-sm p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] mb-2 relative">
                            <p className="font-medium text-[12px] text-emerald-600 mb-0.5">
                                QRCoders
                            </p>
                            Namaste! 👋 Welcome to QRCoders. How can we help you
                            today?
                            <span className="block text-right text-[10px] text-gray-400 mt-1">
                                Just now
                            </span>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSendMessage}
                        className="bg-white p-2 flex items-center gap-2 border-t border-gray-200"
                    >
                        <input
                            type="text"
                            placeholder="Type your message here..."
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            className="flex-1 bg-gray-100 rounded-full py-2 px-4 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#075E54]"
                        />
                        <button
                            type="submit"
                            disabled={!userMessage.trim()}
                            className="bg-[#128C7E] hover:bg-[#075E54] text-white p-2 rounded-full w-9 h-9 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg
                                className="w-4 h-4 fill-current rotate-90"
                                viewBox="0 0 24 24"
                            >
                                <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}

            <button
                onClick={toggleChat}
                className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95 focus:outline-none ${
                    isOpen ? "bg-gray-700" : "bg-emerald-700 hover:bg-[#20BA5A]"
                }`}
            >
                {isOpen ? (
                    <span className="text-xl font-bold">
                        <X />
                    </span>
                ) : (
                    <WhatsappLogoIcon size={40} />
                )}
            </button>
        </div>
    );
};

export default WhatsAppFloatingBot;
