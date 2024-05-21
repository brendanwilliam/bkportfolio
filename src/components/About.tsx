import { SubSection } from "@/components/SubSection";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

interface ContactLink {
  title: string,
  icon: string,
  href: string
}

const contact: ContactLink[] = [
  { title: "brendanwillkeane@gmail.com", icon: "bxl-gmail", href: "mailto:brendanwillkeane@gmail.com" },
  { title: "in/brendanwillkeane", icon: "bxl-linkedin", href: "https://www.linkedin.com/in/brendanwillkeane/" },
  { title: "Download resume", icon: "bx-file", href: "/resume-brendankeane.pdf" }
]

function Biography() {
  return (
    <SubSection title="Biography">
      <div className="font-light text-neutral-600 text-sm space-y-1">
        <p>Trained in both UI/UX design and software engineering, Brendan&apos;s technical edge lets him develop digital products while being mindful technical limitations.<br/>
        After starting his career as a UI/UX designer, Brendan transitioned to software engineering to better understand the developer experience when implementing his designs. From this experience he saw first-hand the challenges developers face at design handoff.<br/>
        At Rough Draft Media, his unique skills shine in brand design, web development, video editing, and technical art. He also explores the intersection of design and technology as a game developer and UI artist.<br/>
        Combining his passion for teaching technology and his experience in the field, Brendan is the lead designer for Smash Technology, a Seattle-based startup that provides tech industry training for underrepresented communities.<br/>
        </p>
      </div>
    </SubSection>

  )
}

function Contact() {
  return (
    <SubSection title="Contact">
      <div className="flex flex-col justify-start items-start gap-1">
        {contact.map((link, index) => (
          <Button key={index} href={link.href} style="tertiary" icon={link.icon}>{link.title}</Button>
        ))}
      </div>
    </SubSection>
  )
}

export function About() {
  return (
    <Section id="about" className="w-1/2">
      <Biography />
      <Contact />
    </Section>
  )
}