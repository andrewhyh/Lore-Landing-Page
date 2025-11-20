import React from 'react';

export const ShootingStars = () => {
    const stars = [
        { top: 0, right: 0, delay: '0s', duration: '1s' },
        { top: 0, right: 80, delay: '0.2s', duration: '3s' },
        { top: 80, right: 0, delay: '0.4s', duration: '2s' },
        { top: 0, right: 180, delay: '0.6s', duration: '1.5s' },
        { top: 0, right: 400, delay: '0.8s', duration: '2.5s' },
        { top: 0, right: 600, delay: '1s', duration: '3s' },
        { top: 300, right: 0, delay: '1.2s', duration: '1.75s' },
        { top: 0, right: 700, delay: '1.4s', duration: '1.25s' },
        { top: 0, right: 1000, delay: '0.75s', duration: '2.25s' },
        { top: 0, right: 450, delay: '2.75s', duration: '2.75s' },
    ];

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none w-full h-full -rotate-[20deg] scale-110">
            {stars.map((star, index) => (
                <span
                    key={index}
                    className="absolute w-1 h-1 bg-black dark:bg-white rounded-full shadow-[0_0_0_4px_rgba(0,0,0,0.1),0_0_0_8px_rgba(0,0,0,0.1),0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_4px_rgba(255,255,255,0.1),0_0_0_8px_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.1)] animate-shooting-star before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-[300px] before:h-[1px] before:bg-gradient-to-r before:from-black before:to-transparent dark:before:from-white dark:before:to-transparent"
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
