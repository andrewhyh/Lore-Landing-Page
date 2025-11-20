import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
    words: string[];
    className?: string;
    speed?: number;
    skipDelay?: number;
}

export const Typewriter = ({
    words,
    className,
    speed = 70,
    skipDelay = 15
}: TypewriterProps) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [forwards, setForwards] = useState(true);
    const [skipCount, setSkipCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentWord = words[wordIndex];

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

            setText(currentWord.substring(0, offset));
        }, speed);

        return () => clearInterval(interval);
    }, [words, wordIndex, offset, forwards, skipCount, speed, skipDelay]);

    return (
        <span className={cn("inline-block", className)}>
            {text}
            <span className="animate-pulse">|</span>
        </span>
    );
};
