import clsx from "clsx";
import Image from "next/image";
import { Button } from "@/components/Button";
import { SocialLink } from "@/components/SocialLink";
import { MeetingButton } from "@/components/MeetingButton";

// Hero data schema
interface SocialLink {
  href: string,
  icon: string
}

interface HeroProfile {
  name: string,
  location: string,
  title: string,
  socialLinks: SocialLink[],
  resumeHref: string
}

// Hero data
const heroProfile: HeroProfile = {
  name: "Brendan Keane",
  location: "Seattle, WA",
  title: "Design & UX Engineer",
  socialLinks: [
    { href: "https://www.linkedin.com/in/brendanwillkeane/", icon: "bxl-linkedin"},
    { href: "mailto:brendanwillkeane@gmail.com", icon: "bxl-gmail"},
    { href: "https://www.figma.com/@bkhci", icon: "bxl-figma"},
    { href: "https://github.com/brendanwilliam", icon: "bxl-github"},
  ],
  resumeHref: "/resume-brendankeane.pdf"
}


function SocialLinks() {
  return (
    <div className="flex gap-0">
      {heroProfile.socialLinks.map((link, index) => (
        <SocialLink key={index} href={link.href} icon={link.icon} />
      ))}
    </div>
  )
}

function Title() {
  return (
    <h1 className="text-xl font-bold text-neutral-800 mb-2">{heroProfile.name}<span className="text-lg font-normal text-neutral-500">{' | '}{heroProfile.title}</span></h1>
  )
}

function ResumeButton() {
  return (
    <Button href={heroProfile.resumeHref} style="tertiary" icon="bx-file">
      Resume
    </Button>
  )
}

export function Header() {
  return (
    <div className="w-screen z-50">
      <div className="container mx-auto flex justify-between items-center h-16">
        <Title />
        <SocialLinks />
      </div>
    </div>
  )
}



