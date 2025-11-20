import React from 'react';

export const ShootingStars = () => {
    const stars = [
        { top: 0, right: 0, delay: '0s', duration: '2s' },
        { top: 0, right: 80, delay: '0.2s', duration: '5s' },
        { top: 80, right: 0, delay: '0.4s', duration: '4s' },
        { top: 0, right: 180, delay: '0.6s', duration: '3s' },
        { top: 0, right: 400, delay: '0.8s', duration: '5s' },
        { top: 0, right: 600, delay: '1s', duration: '6s' },
        { top: 300, right: 0, delay: '1.2s', duration: '3.5s' },
        { top: 0, right: 700, delay: '1.4s', duration: '2.5s' },
        { top: 0, right: 1000, delay: '0.75s', duration: '4.5s' },
        { top: 0, right: 450, delay: '2.75s', duration: '5.5s' },
    ];

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none w-full h-full -rotate-[20deg] scale-110">
            {stars.map((star, index) => (
                <span
                    key={index}
                    className="absolute w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full shadow-[0_0_0_4px_rgba(0,0,0,0.05),0_0_0_8px_rgba(0,0,0,0.05),0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_0_4px_rgba(255,255,255,0.05),0_0_0_8px_rgba(255,255,255,0.05),0_0_20px_rgba(255,255,255,0.05)] animate-shooting-star before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-[300px] before:h-[1px] before:bg-gradient-to-r before:from-black/20 before:to-transparent dark:before:from-white/20 dark:before:to-transparent"
                    style={{
                        top: star.top,
                        right: star.right,
                        animationDelay: star.delay,
                        animationDuration: star.duration,
                    }}
                />
            ))}
        </div>
    );
};
