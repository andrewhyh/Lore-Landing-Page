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
                        <div className="flex items-center justify-center lg:justify-start">
                            <Button className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-gray-900 text-base font-semibold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95">
                                <span className="truncate">Start Your Lore</span>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center animate-in fade-in zoom-in duration-1000 delay-300">
                        <img
                            className="w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-full shadow-[0_0px_80px_rgba(62,207,142,0.6)] hover:shadow-[0_0px_100px_rgba(62,207,142,0.8)] transition-shadow duration-500"
                            alt="Minimalist, geometric dinosaur icon with a subtle, futuristic glow"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLMsNmOu2lfWC1asqPK9uQLsPAjw55a7TXBQFG59m62Ja7Tx2NTiJW8ESd5HIiktGFNeYqE7lfkf38Yc_Uee1WxhzSP3gTRHEEBS_rUgD9ADHF0PWvEZmU0iFWJTfdwNlB3sp8tb9BCj_MRgSk6HWxw_EAjSIO_Tumbk5IRJo6kqBgYyT_qFFGr1Qp38ITWGhXT-V5ykHAx1u2U44rS5Ngv6bxAr_s_m3foCT3uwAFyB44r55GN-9U8-W-AunRxJhlHe7oXRdlcnY"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
