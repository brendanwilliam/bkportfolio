import { SubSection } from "@/components/SubSection";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import clsx from 'clsx';

interface ContactLink {
  title: string,
  icon: string,
  href: string
}

const contact: ContactLink[] = [
  { title: "brendanwillkeane@gmail.com", icon: "bxl-gmail", href: "mailto:brendanwillkeane@gmail.com" },
  { title: "in/brendanwillkeane", icon: "bxl-linkedin", href: "https://www.linkedin.com/in/brendanwillkeane/" },
  { title: "Resume", icon: "bx-file", href: "https://www.bkportfolio.me/resume_brendankeane.pdf" }
]

function Biography() {
  return (
    <SubSection title="">
      <div className="text-zinc-400 text-lg space-y-1 max-w-[50ch]">
        <p>
        A Machine Learning Engineer and a Human-Computer Interaction graduate from the University of Washington that combines data and ML engineering skill with an eye for the social impact of emerging technologies.<br/><br/>
        As an undergraduate, he split his focus between design and engineering with a goal of being an engineer&apos;s favorite designer. With skills in Figma, Adobe After Effects, and Adobe Illustrator, he found early work as a mobile product designer for an AI chatbot research lab at the Center for Technology and Behavioral Health at Dartmouth College. This foundational experience has led to over four years of experience working in AI.
        <br/><br/>
        In the following years, he would work developing data-mining programs in Python to research the geography of American social movements, build network models to visualize who artists like BTS are connected to though samples, and studying human-computer interaction with ChatGPT while it&apos;s influence transcended the tech world into pop culture.
        <br/><br/>
        Upon graduating from the University of Washington iSchool with a B.S. in Human-Computer Interaction, he founded Rough Draft Media to continue work as a Data Engineer while producing the video podcast “Can I Tell You Something?” In this role he regularly builds datasets and develops machine learning models to understand the world of digital media in the era of ubiquitous AI.
        <br/><br/>
        <strong>Currently, he is looking for full-time opportunities as a Machine Learning Engineer.</strong>
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
    <Section id={id} className={clsx("lg:max-w-sm lg:ml-auto", className)}>
      <h2 className="sticky top-14 z-30 bg-zinc-950 py-5 md:text-5xl text-5xl font-bold text-zinc-100">About</h2>
      <Biography />
    </Section>
  )
}