import React from 'react';
import { ScrollReveal } from "@/components/ScrollReveal";

export const Testimonials = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 flex flex-col gap-12">
                <ScrollReveal>
                    <div className="flex flex-col gap-4 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
                            Here's Why People Love Lore
                        </h2>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 dark:border-muted-slate-blue bg-slate-bg-light/50 dark:bg-muted-slate-blue/20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        <div className="flex items-center gap-4">
                            <img
                                className="size-12 rounded-full object-cover grayscale opacity-80"
                                alt="Portrait of Alex Chen"
                                src="/images/alex-chen.png"
                            />
                            <div>
                                <p className="text-base font-semibold leading-normal text-gray-900 dark:text-white">
                                    Alex Chen
                                </p>
                                <p className="text-sm font-normal leading-normal text-gray-500 dark:text-text-dark">
                                    Family Historian
                                </p>
                            </div>
                        </div>
                        <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-text-dark">
                            "Lore has been an incredible tool for our family. It's so easy to use, and we've already filled it with stories and photos that we'll cherish forever. The collaborative features are a game-changer."
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 dark:border-muted-slate-blue bg-slate-bg-light/50 dark:bg-muted-slate-blue/20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        <div className="flex items-center gap-4">
                            <img
                                className="size-12 rounded-full object-cover grayscale opacity-80"
                                alt="Portrait of Maria Garcia"
                                src="/images/maria-garcia.png"
                            />
                            <div>
                                <p className="text-base font-semibold leading-normal text-gray-900 dark:text-white">
                                    Maria Garcia
                                </p>
                                <p className="text-sm font-normal leading-normal text-gray-500 dark:text-text-dark">
                                    Community Archivist
                                </p>
                            </div>
                        </div>
                        <p className="text-base font-normal leading-relaxed text-gray-700 dark:text-text-dark">
                            "As a community historian, preserving oral histories is my passion. Lore simplifies the entire process, allowing me to attach audio clips directly to stories. It's an invaluable modern archive."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
