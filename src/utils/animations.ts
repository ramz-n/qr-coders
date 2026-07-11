import type { Variants } from "framer-motion";

export const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const defaultViewport = {
    once: true,
    amount: 0.25 // Triggers when 25% of the element is visible
};