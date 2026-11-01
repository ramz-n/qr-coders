import type { IncomingMessage, ServerResponse } from "http";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const PRICING_TABLE = `
=== OFFICIAL QRCODERS PRICING MATRIX TABLE ===
=== OFFICIAL QRCODERS PRICING MATRIX TABLE ===

| Service | Nepal (NPR) | Europe (Euro) | Min. Scope | Max. Scope |
|---|---|---|---|---|
| Websites | 15,000 - 30,000+ | €400 - €1,000+ | SPA, websites with 1-5 pages, etc. | Business website with more pages, chat features, etc. |
| Web Applications | 60,000 - 1,50,000+ | €1,000 - €3,000+ | Dynamic application architectures | E-commerce systems, Custom enterprise web applications |
| SEOs | 20,000 - 50,000+ / month | €300 - €600+ / month | Basic keyword research, meta tag optimizations | Deeper on-page technical optimization, structural fixes |
| Android Apps | 1,50,000 - 3,000,000+ | €2,000 - €4,000+ | Static content, basic UI/UX, 4-8 screens, no backend | Custom UI, payment gateways, database sync, push notices |
| iOS Apps | 1,50,000 - 3,000,000+ | €2,000 - €4,000+ | Basic Apple-compliant UI, 4-8 screens, no backend | Custom premium iOS designs, payment gateways, push integrations |
| Desktop Applications | 2,00,000 - 4,50,000+ | €2,500 - €5,500+ | Basic localized inventory tracking software | Enterprise ERP suites, custom complex billing architectures |
| Maintenance & Support | 3,00,000 - 60,000+ / month | €150 - €1,000+ / month | Routine core updates, security patching, file backups | Active uptime monitoring, bug remediation, technical reports |
| Cloud Solutions | 15,000 - 3,00,000+ | €300 - €10,000+ | Basic server environments, cloud deployments / migrations | Scalable AWS/Azure management, complex microservices infrastructure |
| Digital Marketing | 15,000 - 1,50,000+ / month | €350 - €1,500+ / month | Social media posting (8-12 assets), graphics setup | Google Business profile authority, full analytics reporting |
| IT Consulting | 10,000 - 2,00,000+ | €60 - €125+ / hour | Standard infrastructure advice, technical audits | Senior architectural consulting, emergency mitigation support |
| UI/UX Design | 15,000 - 3,00,000+ | €500 - €15,000+ | Static landing flows, small presentation sites | Cross-platform mobile ecosystems, complete SaaS visual products |
| Content Writing | 1,500 - 15,000+ | €100 - €150+ | Brief standard articles (1K words), core SEO copy | Comprehensive technical documentation, website page bundles |
`;

const QRCODERS_INSTRUCTION = `You are an expert Technical Solutions Architect and Sales Assistant for QRCoders (https://qrcoders.site), a software development and IT Consulting company located in Narayangarh, Chitwan, Nepal.
Your primary goal is to help prospective clients engineer their ideas into software solutions and pitch QRCoders as the perfect agency to build it and also estimate the pricing of the project.

CRITICAL KNOWLEDGE GROUNDING:
When users ask specific questions about QRCoders' services, previous works, contact channels, or local updates, get information from www.qrcoders.site and do not fabricate things.

CRITICAL PRICING RULES:
1. You must cross-reference all project feature requests with the Official Pricing Matrix provided below.
2. Never invent or hallucinate pricing outside these brackets. If a project crosses multiple categories, estimate based on the average category bracket or point them explicitly to a custom calculation quote.
3. Always display the pricing segment as a clean, visually structured list highlighting features, target match, and the specific cost range in NPR.

${PRICING_TABLE}

Guidelines:
1. Be polite, professional, and confident. Use local context (Chitwan/Nepal) if relevant.
2. Outline clean, modern tech stacks (e.g., React, Node.js, .NET, PostgreSQL) when clients ask for features.
3. If the user wants to start development, get pricing, or book a meeting, enthusiastically guide them to chat with the human engineering team on WhatsApp at +977 9744700704.`;

interface ServerRequest extends IncomingMessage {
    body: any;
}

export default async function handler(req: ServerRequest, res: ServerResponse) {
    res.setHeader("Content-Type", "application/json");

    if (req.method !== "POST") {
        res.statusCode = 405;
        return res.end(JSON.stringify({ error: "Method Not Allowed" }));
    }

    try {
        const { history } = req.body || {};

        if (!history) {
            res.statusCode = 400;
            return res.end(
                JSON.stringify({ error: "Missing conversation history" }),
            );
        }

        let responseText = "";

        try {
            const response = await ai.models.generateContent({
                model: "models/gemini-3.8-flash",
                config: { systemInstruction: QRCODERS_INSTRUCTION },
                contents: history,
            });
            responseText = response.text || "";
        } catch (primaryError: any) {
            if (
                primaryError?.status === 503 ||
                primaryError?.message?.includes("503") ||
                primaryError?.message?.includes("demand")
            ) {
                const fallbackResponse = await ai.models.generateContent({
                    model: "models/gemini-3.5-flash-lite",
                    config: { systemInstruction: QRCODERS_INSTRUCTION },
                    contents: history,
                });
                responseText = fallbackResponse.text || "";
            } else {
                throw primaryError;
            }
        }

        res.statusCode = 200;
        return res.end(JSON.stringify({ text: responseText }));
    } catch (error: any) {
        res.statusCode = 500;
        return res.end(
            JSON.stringify({
                error: error?.message || "Internal Server Error",
            }),
        );
    }
}
