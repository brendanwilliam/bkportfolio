import Image from "next/image";
import clsx from "clsx";
import { Button } from "@/components/Button";
import { SocialLink } from "@/components/SocialLink";
import { Section } from "@/components/Section";
import { SubSection } from "@/components/SubSection";
import { Content } from "@/components/Content";
import { FormattedDate } from "@/components/FormattedDate";

// Hero global state

interface SocialLink {
  href: string,
  icon: string
}

interface HeroProfile {
  name: string,
  location: string,
  title: string,
  openToWork: boolean,
  socialLinks: SocialLink[],
  resumeHref: string
}

const heroProfile: HeroProfile = {
  name: "Brendan Keane",
  location: "Seattle, WA",
  title: "Frontend Developer & UX Designer",
  openToWork: true,
  socialLinks: [
    { href: "https://www.linkedin.com/in/brendanwillkeane/", icon: "bxl-linkedin"},
    { href: "mailto:brendanwillkeane@gmail.com", icon: "bxl-gmail"},
    { href: "https://www.figma.com/@bkhci", icon: "bxl-figma"},
    { href: "https://github.com/brendanwilliam", icon: "bxl-github"},
  ],
  resumeHref: ""
}

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

interface Project {
  date: Date,
  title: string,
  description: string,
  links: ContactLink[],
}
const projects: Project[] = [
  {
    date: new Date(2024, 3),
    title: "Figma to Frontend — Design system showcase",
    description: "Figma to Frontend is a design system showcase that demonstrates the process of converting a Figma design system into a fully functional frontend application. This project was built with React using TypeScript and TailwindCSS, and deployed with Next.js and Vercel.",
    links: [
      { title: "Project repository", icon: "bxl-github", href: "https://github.com/brendanwilliam/bkportfolio" }
    ]
  },
  {
    date: new Date(2024, 3),
    title: "Rough Draft Media — Digital media production company",
    description: "Rough Draft Media is a digital media production company that specializes in video production, web development, and brand design. This project was built with React using TypeScript and TailwindCSS, and deployed with Next.js and Vercel.",
    links: [
      { title: "roughdraftmedia.com", icon: "bx-link", href: "http://roughdraftmedia.com" },
      { title: "Project repository", icon: "bxl-github", href: "https://github.com/brendanwilliam/roughdraftmedia" }
    ]
  },
  {
    date: new Date(2024, 2),
    title: "Reflections of the River — Documentary series",
    description: "Reflections of the river is a documentary series investigating river health in the United States. This project. This project was build with React using JavaScript and TailwindCSS, and deployed with Next.js and Vercel.",
    links: [
      { title: "reflectionsoftheriver.com", icon: "bx-link", href: "http://reflectionsoftheriver.com" },
      { title: "Project repository", icon: "bxl-github", href: "https://github.com/brendanwilliam/rotr-series" }
    ]
  },
  {
    date: new Date(2023, 12),
    title: "AMK Music — Music composer portfolio",
    description: "AMK Music is a music composer portfolio website featuring an embedded music player and custom design. This project was initially built with Webflow and later migrated to React using TypeScript and TailwindCSS, and deployed with Next.js and Vercel.",
    links: [
      { title: "musicbyamk.com", icon: "bx-link", href: "http://musicbyamk.com" },
    ]
  }
]

function Profile() {
  return (
    <div className="flex flex-col justify-start items-center gap-0">
      <Image
      src="/profile.png"
      alt="Profile picture"
      width={160}
      height={160}
      className="rounded-full size-40"
      />
      <h1 className="text-4xl font-bold text-neutral-800 mb-2">{heroProfile.name}</h1>
      <h2 className="text-base font-normal text-neutral-500">{heroProfile.title}</h2>
      <p className={clsx(heroProfile.openToWork ? "block text-xs italic font-light text-sky-800" : "hidden")}>*Open to full-time opportunities</p>
    </div>
  )
}

function SocialLinks() {
  return (
    <div className="flex gap-3">
      {heroProfile.socialLinks.map((link, index) => (
        <SocialLink key={index} href={link.href} icon={link.icon} />
      ))}
    </div>
  )

}

function HeroProfile() {
  return (
    <div className="flex flex-col justify-start items-center gap-8">
      <Profile />
      <SocialLinks />
      <Button href={heroProfile.resumeHref} style="tertiary" icon="bx-download">Download resume</Button>
    </div>
  )
}

function HeroMenu() {
  return (
    <div className="w-full flex flex-col justify-end items-center gap-1">
      <Button href="#projects" style="primary">Projects</Button>
      <Button href="#about" style="secondary">About</Button>
    </div>
  )
}

function Hero() {
  return (
    <div className="w-full h-screen flex flex-col justify-between items-stretch gap-8 px-4 pb-8 pt-32">
      <HeroProfile />
      <HeroMenu />
    </div>
  )
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-2 justify-center items-stretch px-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} date={project.date} title={project.title} description={project.description} links={project.links} />
        ))}
      </div>
    </Section>
  )
}

function ProjectCard({
  date,
  title,
  description,
  links
}: {
  date: Date,
  title: string,
  description: string,
  links: ContactLink[]
}) {

  return (
    <div className="flex flex-col justify-center items-stretch gap-4 p-5 bg-white shadow rounded-xl border border-neutral-200">
      <div className="space-y-1">
        <FormattedDate date={date} className="text-xs font-medium text-neutral-500" />
        <h2 className="text-lg font-bold text-neutral-700">{title}</h2>
        <p className="text-sm font-light text-neutral-600">{description}</p>
      </div>
      <div className="flex flex-col justify-start items-start gap-1">
        {links.map((link, index) => (
          <Button key={index} href={link.href} style="tertiary" icon={link.icon}>{link.title}</Button>
        ))}
      </div>
    </div>
  )
}


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

function About() {
  return (
    <Section id="about" title="About">
      <Biography />
      <Contact />
    </Section>
  )
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen">
      <Hero />
      <Content>
        <Projects />
        <About />
      </Content>
    </main>
  );
}
