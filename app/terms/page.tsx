import type { Metadata } from "next";
import { LegalLayout } from "@/components/site/legal-layout";

export const metadata: Metadata = {
  title: "Terms — Lore",
  description:
    "The plain-language terms of using Lore — what you can expect from us, what we ask of you.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Terms"
      title="The plain-language agreement."
      updated="June 2026"
      intro={
        <>
          These terms cover using Lore. We've kept them as readable as we can.
          Where a section sounds legal, it is — but the intent is what's
          written in plain English next to it.
        </>
      }
      sections={[
        {
          id: "agreement",
          title: "The agreement",
          body: (
            <p>
              By creating a Lore account you agree to these terms and to our{" "}
              <a href="/privacy" className="link-underline text-ink dark:text-cream">
                Privacy notice
              </a>
              . If you don't agree, please don't create an account.
            </p>
          ),
        },
        {
          id: "your-account",
          title: "Your account",
          body: (
            <>
              <p>
                You're responsible for the email address you sign in with and
                for anything done through your account. Keep your email secure.
                Tell us if you suspect access was misused.
              </p>
              <p>
                You must be at least 13 to create an account; younger family
                members can be added by an adult collaborator.
              </p>
            </>
          ),
        },
        {
          id: "your-content",
          title: "Your content stays yours",
          body: (
            <>
              <p>
                You own everything you upload. We don't claim any rights to
                your photos, videos, voice notes, or stories beyond what's
                needed to store and display them inside Lore for you and the
                people you've shared them with.
              </p>
              <p>
                You're responsible for having the rights to upload the content
                you upload — don't upload things that aren't yours to share.
              </p>
            </>
          ),
        },
        {
          id: "acceptable-use",
          title: "Acceptable use",
          body: (
            <>
              <p>Lore is a private archive for families. Please don't:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Upload content that's illegal in your jurisdiction or ours.</li>
                <li>Use Lore to harass, threaten, or stalk anyone.</li>
                <li>Attempt to access another family's archive.</li>
                <li>Resell or commercially exploit the service.</li>
              </ul>
            </>
          ),
        },
        {
          id: "payment",
          title: "Plans, payment, and refunds",
          body: (
            <>
              <p>
                Paid plans renew automatically until cancelled. You can cancel
                at any time from your account; you keep access through the end
                of the period you've paid for.
              </p>
              <p>
                Forever is a one-time payment for lifetime access (as defined
                in our pricing page). If Lore winds down, Forever-plan members
                receive a guaranteed 12-month migration window.
              </p>
              <p>
                Refunds within 30 days of any new payment, for any reason —
                just email{" "}
                <a href="mailto:billing@lore.app" className="link-underline text-ink dark:text-cream">
                  billing@lore.app
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: "termination",
          title: "Closing your account",
          body: (
            <p>
              You can close your account at any time from settings. We can
              terminate accounts that materially violate these terms — we'll
              try to warn you first and give you a chance to export.
            </p>
          ),
        },
        {
          id: "warranty",
          title: "Warranty and liability",
          body: (
            <>
              <p>
                Lore is provided “as is.” We work hard to be reliable, but we
                don't warrant uninterrupted service. Make backups of anything
                irreplaceable — the export tool exists for exactly this reason.
              </p>
              <p>
                To the maximum extent permitted by law, our liability is
                limited to the amount you've paid us in the last 12 months.
              </p>
            </>
          ),
        },
        {
          id: "changes",
          title: "Changes",
          body: (
            <p>
              We may update these terms occasionally. Material changes will be
              announced via email at least 30 days before they take effect.
            </p>
          ),
        },
        {
          id: "contact",
          title: "Contact",
          body: (
            <p>
              Reach us at{" "}
              <a href="mailto:legal@lore.app" className="link-underline text-ink dark:text-cream">
                legal@lore.app
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
