import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const { email } = await request.json();

        if (!email) {
            return new Response(JSON.stringify({ error: "Email is required" }), {
                status: 400,
            });
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(JSON.stringify({ error: "Invalid email format" }), {
                status: 400,
            });
        }

        const { error } = await supabase
            .from("waitlist")
            .insert([{ email }]);

        if (error) {
            if (error.code === "23505") {
                return new Response(
                    JSON.stringify({ error: "Email already registered" }),
                    { status: 409 }
                );
            }
            throw error;
        }

        return new Response(
            JSON.stringify({ message: "Successfully added to waitlist" }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Waitlist error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
        });
    }
};
