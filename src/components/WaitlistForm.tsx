import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export const WaitlistForm = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleFocus = () => {
            // Small timeout to allow smooth scroll to finish
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        };

        // Check hash on mount
        if (window.location.hash === "#waitlist-form") {
            handleFocus();
        }

        // Listen for hash changes
        const onHashChange = () => {
            if (window.location.hash === "#waitlist-form") {
                handleFocus();
            }
        };

        // Listen for clicks on anchors pointing to this form (for when hash is already set)
        const onClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            if (link && link.getAttribute('href') === '#waitlist-form') {
                handleFocus();
            }
        };

        window.addEventListener("hashchange", onHashChange);
        window.addEventListener("click", onClick);

        return () => {
            window.removeEventListener("hashchange", onHashChange);
            window.removeEventListener("click", onClick);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setMessage("");

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            setMessage("You're on the list!");
            setEmail("");
        } catch (error: any) {
            setStatus("error");
            setMessage(error.message);
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full max-w-lg mx-auto lg:mx-0">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
                <input
                    ref={inputRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === "loading" || status === "success"}
                    className="flex-1 h-12 w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-400"
                />
                <Button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="flex-shrink-0 w-full sm:w-auto min-w-[140px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary text-gray-900 text-base font-semibold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                    <span>{status === "loading" ? "Joining..." : status === "success" ? "Joined!" : "Join Our Waitlist Today"}</span>
                </Button>
            </form>
            {message && (
                <p className={`text-sm pl-2 ${status === "error" ? "text-red-500" : "text-green-500"}`}>
                    {message}
                </p>
            )}
            {!message && (
                <p className="text-sm text-gray-500 dark:text-gray-400 pl-2">
                    Get notified when we drop Lore.
                </p>
            )}
        </div>
    );
};
