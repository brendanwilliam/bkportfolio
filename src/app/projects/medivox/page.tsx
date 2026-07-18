import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medivox case study — Brendan Keane",
  description: "Brendan Keane's work on trustworthy clinical AI workflows at Medivox.",
};

const contributions = [
  {
    title: "Safe assessment generation",
    body: "I helped build the systems that turn clinical evidence into assessment drafts while keeping evidence readiness and verification visible throughout the workflow. The work spans API contracts, background processing, and the clinician-facing product experience.",
  },
  {
    title: "Trust and transparency in the interface",
    body: "I designed and implemented feedback that explains what the system is doing: evidence status, generation phases, progress, retries, and meaningful confirmations. The goal was to make an AI-assisted workflow understandable rather than opaque.",
  },
  {
    title: "Evidence safeguards",
    body: "I contributed safeguards around clinical-document handling, including safety-status reporting and protections against untrusted document content. These controls support a workflow where the provenance and readiness of source material matter.",
  },
];

export default function MedivoxCaseStudy() {
  return (
    <main className="min-h-screen w-screen bg-zinc-950 px-5 py-12 text-zinc-100 md:py-20">
      <article className="container mx-auto max-w-3xl">
        <Link href="/#projects" className="inline-flex items-center text-emerald-500 hover:text-emerald-300 hover:underline">
          <i className="bx bx-left-arrow-alt mr-1" />Back to projects
        </Link>

        <header className="mt-10 border-b border-zinc-800 pb-10">
          <p className="text-sm font-medium text-zinc-400">2026 · Clinical AI · Full-stack engineering</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-100 md:text-6xl">Medivox</h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-zinc-400">
            Building clinical AI workflows that make evidence, generation progress, and safety signals clear to the people using them.
          </p>
        </header>

        <section className="space-y-8 py-12">
          <p className="text-lg leading-relaxed text-zinc-300">
            Medivox is a healthcare technology platform. My contributions focused on the assessment-generation experience across mobile, backend, and AI-processing systems: helping clinicians move from source evidence to useful drafts with clear system feedback and practical safeguards.
          </p>

          {contributions.map((contribution) => (
            <section key={contribution.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-zinc-100">{contribution.title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-zinc-400">{contribution.body}</p>
            </section>
          ))}
        </section>

        <section className="border-t border-zinc-800 py-10">
          <h2 className="text-xl font-bold text-zinc-100">A note on confidentiality</h2>
          <p className="mt-3 text-zinc-400">
            This overview intentionally omits private source code, patient information, internal metrics, and implementation details. It is a public summary of my contributions, not a product specification.
          </p>
        </section>
      </article>
    </main>
  );
}
