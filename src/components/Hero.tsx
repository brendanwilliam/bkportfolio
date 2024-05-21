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

function Profile() {
  return (
    <div className="flex justify-between w-full sticky top-0">
      <h1 className="text-xl font-bold text-neutral-800 mb-2">{heroProfile.name}<span className="text-lg font-normal text-neutral-500">{' | '}{heroProfile.title}</span></h1>
      <SocialLinks />
    </div>
  )
}

function ValueProp() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-lg text-neutral-600">I design and build digital products that are intuitive, accessible, and delightful to use.</p>
      <p className="text-lg text-neutral-600">Let&apos;s create something great together.</p>
    </div>
  )
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

function ActionButtons() {
  return (
    <div className="flex gap-2">
      <MeetingButton />
    </div>
  )
}

function HeroProfile() {
  return (
    <div className="flex flex-col justify-start md:justify-between md:py-16 h-full items-start gap-8">
      <ValueProp />
      <ActionButtons />
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
    <div className="w-full px-10 bg-neutral-200">
      <HeroProfile />
      {/* <HeroMenu /> */}
    </div>
  )
}