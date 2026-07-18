import { SubSection } from "@/components/SubSection";
import { Section } from "@/components/Section";

function Biography() {
  return (
    <SubSection title="">
      <div className="text-zinc-400 text-lg space-y-1 max-w-[50ch]">
        <p>
        Brendan Keane is a Senior AI Software Engineer who builds reliable, human-centered AI products from interface to infrastructure. His recent work spans clinical AI workflows, real-time multiplayer systems, and developer tooling, with an emphasis on making complex systems understandable, safe, and useful.<br/><br/>
        At Medivox, he has contributed across mobile, API, and AI-processing systems for clinical assessment workflows. This includes evidence-readiness and safety signals, AI-generation progress and retry experiences, and the product infrastructure that helps clinicians move from source material to useful drafts with clarity and control.
        <br/><br/>
        He brings a Human-Computer Interaction foundation from the University of Washington to full-stack AI engineering. His approach pairs production-minded software development with close attention to the people who rely on the systems he builds.
        <br/><br/>
        <strong>He is currently focused on building the next generation of trustworthy AI software.</strong>
        </p>
      </div>
    </SubSection>

  )
}

export function About({
  id,
  className = "",
}: {
  id: string,
  className?: string
}) {
  return (
    <Section id={id} className={className}>
      <h2 className="sticky top-14 z-30 bg-zinc-950 py-5 md:text-5xl text-5xl font-bold text-zinc-100">About</h2>
      <Biography />
    </Section>
  )
}
