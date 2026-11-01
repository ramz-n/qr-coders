export interface ChatPart {
    text: string;
}

export interface ChatContent {
    role: "user" | "model";
    parts: ChatPart[];
}

export const getTechConsultantREsponse = async (history: ChatContent[]) => {
    try {
        const response = await fetch("/api/consultant", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ history }),
        });

        if (!response.ok) {
            throw new Error(`Server returned status code ${response.status}`);
        }

        const data = await response.json();
        return data.text || null;
    } catch (error) {
        console.error("Agent Service Error:", error);
        return null;
    }
};
