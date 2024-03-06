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
  { title: "Download resume", icon: "bx-download", href: "" }
]

function Biography() {
  return (
    <SubSection title="Biography">
      <div className="font-light text-neutral-600 text-sm space-y-1">
        <p>Trained in both UI/UX design and software  engineering, Brendan’s technical edge lets him develop digital products  from idea to reality. At Rough Draft Media, his unique skills shine in  brand design, web development, video editing, and technical art.</p>
        <p>Since  graduating the University of Washington with a B.S. in Human-Computer  Interaction, Brendan has produced custom websites for film &  television, professional portfolios, and online learning platforms.</p>
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
    <Section id="about" title="About" className="md:max-w-sm">
      <Biography />
      <Contact />
    </Section>
  )
}