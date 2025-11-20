export const Features = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 flex flex-col gap-12">
                <div className="flex flex-col gap-4 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 view-transition-name:features-header">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
                        Your Digital Legacy, Simplified
                    </h2>
                    <p className="text-lg md:text-xl font-normal leading-normal max-w-3xl mx-auto text-gray-600 dark:text-text-dark">
                        Lore provides all the tools you need to create a beautiful and lasting archive of your most important memories, stories, and media.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group flex flex-col gap-3 rounded-xl p-6 border border-gray-200 dark:border-muted-slate-blue bg-slate-bg-light/50 dark:bg-muted-slate-blue/20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default">
                        <span className="material-symbols-outlined text-primary group-hover:text-primary-dark transition-colors duration-300">edit_document</span>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                                Create and share instantly
                            </h3>
                            <p className="text-base font-normal leading-relaxed text-gray-600 dark:text-text-dark">
                                Write, edit, and publish your stories in a simple and intuitive editor. Share them with a private link.
                            </p>
                        </div>
                    </div>
                    <div className="group flex flex-col gap-3 rounded-xl p-6 border border-gray-200 dark:border-muted-slate-blue bg-slate-bg-light/50 dark:bg-muted-slate-blue/20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default">
                        <span className="material-symbols-outlined text-primary group-hover:text-primary-dark transition-colors duration-300">perm_media</span>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                                Attach rich media
                            </h3>
                            <p className="text-base font-normal leading-relaxed text-gray-600 dark:text-text-dark">
                                Bring your stories to life by easily attaching photos, video clips, and audio recordings to your entries.
                            </p>
                        </div>
                    </div>
                    <div className="group flex flex-col gap-3 rounded-xl p-6 border border-gray-200 dark:border-muted-slate-blue bg-slate-bg-light/50 dark:bg-muted-slate-blue/20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default">
                        <span className="material-symbols-outlined text-primary group-hover:text-primary-dark transition-colors duration-300">group_add</span>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                                Invite collaborators
                            </h3>
                            <p className="text-base font-normal leading-relaxed text-gray-600 dark:text-text-dark">
                                Build a shared legacy by inviting family, friends, or entire communities to contribute their own stories.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
