import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
    words: string[];
    className?: string;
    speed?: number;
    skipDelay?: number;
    highlightWords?: string[];
    highlightClassName?: string;
}

export const Typewriter = ({
    words,
    className,
    speed = 70,
    skipDelay = 15,
    highlightWords = [],
    highlightClassName = "text-electric-teal"
}: TypewriterProps) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [forwards, setForwards] = useState(true);
    const [skipCount, setSkipCount] = useState(0);

    const currentWord = words[wordIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                if (offset >= currentWord.length) {
                    setSkipCount(prev => prev + 1);
                    if (skipCount >= skipDelay) {
                        setForwards(false);
                        setSkipCount(0);
                    }
                } else {
                    setOffset(prev => prev + 1);
                }
            } else {
                if (offset === 0) {
                    setForwards(true);
                    setWordIndex(prev => (prev + 1) % words.length);
                    setOffset(0);
                } else {
                    setOffset(prev => prev - 1);
                }
            }
        }, speed);

        return () => clearInterval(interval);
    }, [currentWord, offset, forwards, skipCount, speed, skipDelay, words.length]);

    const segments = useMemo(() => {
        if (!highlightWords.length) return [{ text: currentWord, isHighlight: false }];

        const pattern = new RegExp(`(${highlightWords.join('|')})`, 'gi');
        const parts = currentWord.split(pattern);
        return parts.map(part => ({
            text: part,
            isHighlight: highlightWords.some(w => w.toLowerCase() === part.toLowerCase())
        })).filter(s => s.text.length > 0);
    }, [currentWord, highlightWords]);

    const renderText = () => {
        let charCount = 0;
        return segments.map((segment, index) => {
            if (charCount >= offset) return null;

            const remainingChars = offset - charCount;
            const textToRender = segment.text.slice(0, remainingChars);

            charCount += segment.text.length;

            return (
                <span
                    key={index}
                    className={segment.isHighlight ? highlightClassName : undefined}
                >
                    {textToRender}
                </span>
            );
        });
    };

    return (
        <span className={cn("inline-block", className)}>
            {renderText()}
            <span className="animate-pulse">|</span>
        </span>
    );
};
