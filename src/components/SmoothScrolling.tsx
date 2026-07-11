import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface SmoothScrollProps {
    children: React.ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [pageHeight, setPageHeight] = useState(0);

    useEffect(() => {
        if (!scrollRef.current) return;
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setPageHeight(entry.contentRect.height);
            }
        });
        resizeObserver.observe(scrollRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    const { scrollY } = useScroll();

    const smoothY = useSpring(scrollY, {
        damping: 15,
        mass: 0.2,
        stiffness: 50
    });

    const y = useTransform(smoothY, (value) => -value);

    return (
        <>
            {/* Fixed viewport container */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    overflow: "hidden"
                }}
            >
                <motion.div ref={scrollRef} style={{ y }}>
                    {children}
                </motion.div>
            </div>

            <div style={{ height: pageHeight }} />
        </>
    );
}