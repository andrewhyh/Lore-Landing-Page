import { Button } from "@/components/ui/button";

export const Hero = () => {
    return (
        <section className="py-20 md:py-28 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="flex flex-col gap-8 text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-gray-900 dark:text-white">
                                <span className="font-extrabold text-electric-teal">Preserve</span> Your Story. Share Your <span className="font-extrabold text-electric-teal">Legacy</span>.
                            </h1>
                            <p className="text-xl md:text-2xl font-normal text-gray-600 dark:text-text-dark leading-relaxed">
                                A modern archive for communities, families, and storytellers. Create digital journals, attach photos and videos, and build a shared legacy that lives forever.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg mx-auto lg:mx-0">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 h-12 w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-400"
                                />
                                <Button className="flex-shrink-0 w-full sm:w-auto min-w-[140px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary text-gray-900 text-base font-semibold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
                                    <span>Join Our Waitlist Today</span>
                                </Button>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 pl-2">
                                Get notified when we drop Lore.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center animate-in fade-in zoom-in duration-1000 delay-300">
                        <img
                            className="w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-full shadow-[0_0px_80px_rgba(62,207,142,0.6)] hover:shadow-[0_0px_100px_rgba(62,207,142,0.8)] transition-shadow duration-500"
                            alt="Minimalist, geometric dinosaur icon with a subtle, futuristic glow"
                            src="/images/dino-logo.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
