import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Typewriter } from "@/components/Typewriter";
import { WaitlistForm } from "@/components/WaitlistForm";

export const Hero = () => {
    return (
        <section id="waitlist-form" className="py-20 md:py-28 lg:py-32 scroll-mt-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="flex flex-col gap-8 text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="flex flex-col gap-6">
                            <ScrollReveal>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-gray-900 dark:text-white min-h-[1.2em]">
                                    <Typewriter
                                        words={["Preserve Your Story.", "Share Your Legacy.", "Your Digital Archive."]}
                                        highlightWords={["Preserve", "Legacy", "Digital Archive"]}
                                        highlightClassName="text-electric-teal"
                                    />
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal>
                                <p className="text-xl md:text-2xl font-normal text-gray-600 dark:text-text-dark leading-relaxed">
                                    A modern archive for communities, families, and storytellers. Create digital journals, attach photos and videos, and build a shared legacy that lives forever.
                                </p>
                            </ScrollReveal>
                        </div>
                        <WaitlistForm />
                    </div>
                    <div className="flex justify-center items-center animate-in fade-in zoom-in duration-1000 delay-300">
                        <img
                            className="w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-full shadow-[0_0px_80px_rgba(62,207,142,0.6)] hover:shadow-[0_0px_100px_rgba(62,207,142,0.8)] transition-shadow duration-500"
                            alt="Minimalist, geometric dinosaur icon with a subtle, futuristic glow"
                            src="/images/hero-image.png"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
};
