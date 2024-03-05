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
    { href: "", icon: "bxl-linkedin"},
    { href: "", icon: "bxl-gmail"},
    { href: "", icon: "bxl-figma"},
    { href: "", icon: "bxl-github"},
  ],
  resumeHref: ""
}



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
      <div className="max-w-4xl w-full spacing-y-20 px-5 mb-0 py-10">
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

function About() {
  return (
    <>

    </>
  )
}

function Resume() {
  return (
    <>

    </>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen">
      <Hero />
      {/* <Content>
        <Projects />
        <About />
        <Resume />
      </Content> */}
    </main>
  );
}
