import Image from "next/image";
import clsx from "clsx";
import { Button } from "@/components/Button";
import { SocialLink } from "@/components/SocialLink";

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

function Content({ children }: { children: React.ReactNode }) {
  return (
      <div className="w-full spacing-y-8">
        {children}
      </div>
  )
}

function Section({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <div id={id} className="w-full pt-4 pb-8">
      <h1 className="px-4 text-3xl text-neutral-800 font-bold pb-4">{title}</h1>
      {children}
    </div>
  )
}

function Projects() {
  return (
    <>

    </>
  )
}



function ProjectCard({
  title,
  description,
  image,
  links
}: {
  title: string,
  description: string,
  image: string,
  links: [{
      title: string,
      icon: string,
      href: string
  }
]}) {

  return (
    <>

    </>
  )
}

function SubSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="w-full px-4 pb-4">
      <h2 className="text-sm text-neutral-700 font-bold pb-2">{title}</h2>
      {children}
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
