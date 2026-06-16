import type { Metadata } from "next";
import { LegalLayout } from "@/components/site/legal-layout";

export const metadata: Metadata = {
  title: "Privacy — Lore",
  description:
    "How Lore handles your memories: what we collect, what we don't, and what's yours.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacy"
      title="What's yours stays yours."
      updated="June 2026"
      intro={
        <>
          We collect as little as we can get away with. We never sell or share
          your memories. You can take everything with you whenever you want.
          Below is the long version — but that's the short one.
        </>
      }
      sections={[
        {
          id: "summary",
          title: "The short version",
          body: (
            <ul className="list-disc pl-5 space-y-2">
              <li>
                We don't sell your data. We don't run ads. We don't train AI on
                your memories.
              </li>
              <li>
                Your archive is encrypted in transit and at rest. Row-level
                security keeps each account separate at the database.
              </li>
              <li>
                No Lore employee can browse your archive. Access is logged
                when it's ever needed for support — and only with your consent.
              </li>
              <li>
                You can export everything, in plain formats, at any time. You
                can delete everything, permanently, at any time.
              </li>
            </ul>
          ),
        },
        {
          id: "what-we-collect",
          title: "What we collect",
          body: (
            <>
              <p>
                <strong className="text-ink dark:text-cream">
                  Account information
                </strong>{" "}
                — your email address, your display name, and the family/circle
                memberships you choose to create.
              </p>
              <p>
                <strong className="text-ink dark:text-cream">
                  Memories you upload
                </strong>{" "}
                — photos, videos, voice notes, written stories, and the
                metadata you attach (people, places, dates).
              </p>
              <p>
                <strong className="text-ink dark:text-cream">
                  Basic usage telemetry
                </strong>{" "}
                — pageviews, error logs, and similar diagnostics, aggregated
                and stripped of personal content. We do not track you across
                the web.
              </p>
            </>
          ),
        },
        {
          id: "what-we-dont",
          title: "What we don't collect",
          body: (
            <p>
              We don't fingerprint your device. We don't load third-party
              analytics that aggregate behaviour across sites. We don't analyse
              the content of your memories to target you with ads — there are
              no ads on Lore.
            </p>
          ),
        },
        {
          id: "how-we-protect",
          title: "How we protect your archive",
          body: (
            <>
              <p>
                Storage is encrypted at rest with industry-standard ciphers.
                Connections are TLS 1.3 in transit. Database access is gated by
                row-level security — every query is scoped to the requesting
                user.
              </p>
              <p>
                Operational access is least-privilege and audit-logged. No
                support agent can browse your archive without an explicit
                consent flow you can revoke.
              </p>
            </>
          ),
        },
        {
          id: "sharing",
          title: "Who we share with",
          body: (
            <>
              <p>
                We use a small number of carefully chosen sub-processors to
                operate the service — for hosting, transactional email, and
                payments. None of them receive the contents of your memories
                except as required to deliver the service (e.g. storing the
                files you upload).
              </p>
              <p>
                We don't share your data with advertisers, data brokers, or
                governments unless legally compelled — and where allowed, we'll
                tell you.
              </p>
            </>
          ),
        },
        {
          id: "your-rights",
          title: "Your rights",
          body: (
            <>
              <p>
                You can export, correct, or delete anything in your archive at
                any time, from your account settings. Deletion is permanent
                within 30 days, including backups.
              </p>
              <p>
                If you're in a region with GDPR, UK GDPR, or similar protections,
                those rights apply. Email{" "}
                <a href="mailto:privacy@lore.app" className="link-underline text-ink dark:text-cream">
                  privacy@lore.app
                </a>{" "}
                for any request.
              </p>
            </>
          ),
        },
        {
          id: "contact",
          title: "Contact",
          body: (
            <p>
              Reach us at{" "}
              <a href="mailto:privacy@lore.app" className="link-underline text-ink dark:text-cream">
                privacy@lore.app
              </a>
              . A person reads every one.
            </p>
          ),
        },
      ]}
    />
  );
}
