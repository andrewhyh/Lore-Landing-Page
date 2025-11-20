import { Button } from "@/components/ui/button";

export const CTA = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-8 text-center bg-slate-bg-light/50 dark:bg-muted-slate-blue/20 py-12 px-6 rounded-xl border border-gray-200 dark:border-muted-slate-blue animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
                            Ready to Start Your Story?
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-text-dark max-w-xl mx-auto">
                            Sign up today and begin preserving the moments that matter most.
                        </p>
                    </div>
                    <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-gray-900 text-base font-semibold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95">
                        <span className="truncate">Start Your Lore Free</span>
                    </Button>
                </div>
            </div>
        </section>
    );
};
