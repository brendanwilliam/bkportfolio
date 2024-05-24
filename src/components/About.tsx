import { SubSection } from "@/components/SubSection";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { SocialLinks } from "@/components/SocialLinks";
import clsx from 'clsx';

interface ContactLink {
  title: string,
  icon: string,
  href: string
}

const contact: ContactLink[] = [
  { title: "brendanwillkeane@gmail.com", icon: "bxl-gmail", href: "mailto:brendanwillkeane@gmail.com" },
  { title: "in/brendanwillkeane", icon: "bxl-linkedin", href: "https://www.linkedin.com/in/brendanwillkeane/" },
  { title: "Resume", icon: "bx-file", href: "/resume_brendankeane.pdf" }
]

function Biography() {
  return (
    <SubSection title="Biography">
      <div className="text-zinc-400 text-sm space-y-1">
        <p>Trained in both UI/UX design and software engineering, Brendan&apos;s technical edge lets him develop digital products while being mindful technical limitations.<br/><br/>
        He started his career in UI/UX design, crafting experiences for web, mobile, and VR. His experience designing for multiple platforms shaped his skills in user research, wireframing, prototyping, and usability testing building a foundation for crafting responsive design systems in Figma.<br/><br/>
        Bothered by the disconnect between design details and developer implementation, Brendan transitioned into software engineering to better understand the developer experience. This practice introduced him to React, Next.js, and Tailwind CSS establishing analogues between Figma features and front-end developer best practices. He is currently developing a course titled <strong>Figma to Frontend</strong> to help prospective designers use technical constraints to simplify handoffs in cross-functional teams.<br/><br/>
        At Rough Draft Media, his unique skills shine in brand design, web development, video editing, and technical art where he produces and co-hosts podcasts and develops custom websites. In between projects, Brendan also explores the intersection of design and technology as a game developer and UI artist.<br/><br/>
        Combining his passion for teaching technology and his experience in the field, Brendan is the lead designer for Smash Technology, a Seattle-based startup that provides tech industry training for underrepresented communities. He is responsible for the course sales experience, student onboarding, and chatbot integration.<br/><br/>
        To learn more about Brendan, visit his <a href={contact[1].href} className="text-emerald-600 hover:underline hover:text-emerald-300">LinkedIn profile</a> or <a href={contact[2].href} className="text-emerald-600 hover:text-emerald-300 hover:underline">download his resume</a>.
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

export function About({
  id,
  className = "",
}: {
  id: string,
  className?: string
}) {
  return (
    <Section id={id} className={clsx("lg:max-w-sm lg:ml-auto", className)}>
      <h2 className="sticky top-14 z-30 bg-zinc-950 py-5 text-4xl font-bold text-zinc-100">About</h2>
      <Contact />
      <Biography />
    </Section>
  )
}