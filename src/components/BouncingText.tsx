import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BouncingTextProps {
    text: string;
    highlightWords?: string[];
    highlightClassName?: string;
    className?: string;
}

export const BouncingText: React.FC<BouncingTextProps> = ({
    text,
    highlightWords = [],
    highlightClassName = "text-electric-teal",
    className,
}) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn("flex flex-wrap justify-center", className)}
        >
            {words.map((word, index) => {
                // Check if the word (stripped of punctuation) is in the highlight list
                const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
                const isHighlighted = highlightWords.includes(cleanWord);

                return (
                    <span key={index} className={cn("inline-block whitespace-nowrap mr-2", isHighlighted && highlightClassName)}>
                        {word.split("").map((letter, letterIndex) => (
                            <motion.span
                                key={letterIndex}
                                variants={child}
                                className="inline-block"
                                whileHover={{
                                    y: -5,
                                    transition: {
                                        type: "spring",
                                        damping: 12,
                                        stiffness: 200,
                                    }
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </span>
                );
            })}
        </motion.div>
    );
};
