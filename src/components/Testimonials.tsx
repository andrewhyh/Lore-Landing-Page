export const Testimonials = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 flex flex-col gap-12">
                <div className="flex flex-col gap-4 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
                        Here's Why People Love Lore
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 dark:border-muted-slate-blue bg-slate-bg-light/50 dark:bg-muted-slate-blue/20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        <div className="flex items-center gap-4">
                            <img
                                className="size-12 rounded-full object-cover grayscale opacity-80"
                                alt="Portrait of Alex Chen"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfwkrRpZDWceHRMQhD7oPUwK9ClFy4ZvLB1v8WfUNvjyIMVtr-9-sZHNYyBaEntdRpXbaNCwnMopX9x7tKbV1Q53XbIGbAnR3NUGDnWGAga7Zawzps3wFlTkSz_OOqGfrHYQEoFKb7Bds-c4QfDpTSL7wBbG752771Jpe0MvnkdI1h8-qTqbgcjerXq7yKPrrnaS3I4QagiMUuGsy86mGbbeIurYt0o6Npx_ufHZutOEM8RA6LhoxCrob4hehysW8nmsplZ4zxRgY"
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
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkZiGWIn7BphFUK_kTkPdhdxXT9Svlwnjt6ST3hIFO_baOA0YNU603hfvMYljUBtHhJcCJkRdeE92QfKM1DrGAYwo3HqGwg-iHyp3joty2SQAWWFZjl9-uP32lqFIIRmQQZm4wPj2nJIkSfSBdE8kIfIh7et9YoP_y76RsZSIsCJL0HZq9zmRO9c-Y6N_XP2q0pwMnsoN7Os_-z04RJPh66NwZAbaJQvxQLmINMMH-fvsbsobVdQAq1LUKsW_D32qimTAP1a7SMZE"
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
