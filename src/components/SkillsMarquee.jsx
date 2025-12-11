import React from 'react';
import { motion } from 'framer-motion';

const SkillsMarquee = () => {
    const skills = [
        "PYTHON", "LANGCHAIN", "LLMOPS", "RAG", "DOCKER", "KUBERNETES", "AWS", "PINECONE", "FAISS", "TENSORFLOW",
        "REACT", "TAILWIND", "NEXT.JS", "VITE"
    ];

    const colors = [
        "#00f0ff", // Cyan
        "#ff0099", // Magenta
        "#00ff00", // Lime
        "#ffff00", // Yellow
        "#9d00ff", // Purple
        "#ff5f00", // Orange
    ];

    // Duplicate list for seamless loop
    const marqueeContent = [...skills, ...skills, ...skills];

    return (
        <div className="py-20 overflow-hidden bg-black border-y border-white/5 relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

            <motion.div
                className="flex whitespace-nowrap gap-16"
                animate={{ x: "-33.33%" }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity
                }}
            >
                {marqueeContent.map((skill, index) => (
                    <span
                        key={index}
                        style={{ color: colors[index % colors.length] }}
                        className="text-2xl md:text-4xl font-mono font-bold select-none transition-colors duration-300 opacity-80 hover:opacity-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                    >
                        {skill} <span className="text-white/20 mx-4">•</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default SkillsMarquee;
