import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
}

export const ScrollReveal = ({ children, className }: ScrollRevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 1
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};
