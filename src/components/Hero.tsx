import clsx from "clsx";
import Image from "next/image";
import { Button } from "@/components/Button";
import { SocialLink } from "@/components/SocialLink";

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
  resumeHref: "/resume-brendankeane.pdf"
}

function Profile() {
  return (
    <div className="flex flex-col justify-start items-center gap-0">
      <Image
      src="/profile.jpg"
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
    <div className="flex flex-col justify-start md:justify-between md:py-16 h-full items-center gap-8">
      <Profile />
      <div className="flex flex-col gap-8">
        <SocialLinks />
        <Button href={heroProfile.resumeHref} style="tertiary" icon="bx-download">Download resume</Button>
      </div>
    </div>
  )
}

function HeroMenu() {
  return (
    <div className="md:hidden w-full flex flex-col justify-end items-center gap-1">
      <Button href="#projects" style="primary">Projects</Button>
      <Button href="#about" style="secondary">About</Button>
    </div>
  )
}

export function Hero() {
  return (
    <div className="w-full md:max-w-80 md:max-h-screen h-screen md:sticky md:top-0 flex flex-col justify-between md:justify-center md:py-8 md:bg-neutral-50 items-stretch gap-8 px-4 pb-8 pt-32">
      <HeroProfile />
      <HeroMenu />
    </div>
  )
}