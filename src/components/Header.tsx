import clsx from "clsx";
import Image from "next/image";
import { Button } from "@/components/Button";
import { SocialLinks } from "@/components/SocialLinks";
import { MeetingButton } from "@/components/MeetingButton";

// Hero data schema

interface HeroProfile {
  name: string,
  location: string,
  title: string,
}

// Hero data
const heroProfile: HeroProfile = {
  name: "Brendan Keane",
  location: "Seattle, WA",
  title: "Design & UX Engineer",}

function Title() {
  return (
    <h1 className="md:text-xl text-base font-bold text-zinc-400 mb-2">{heroProfile.name}<span className="md:text-lg text-sm font-normal text-zinc-500">{' | '}{heroProfile.title}</span></h1>
  )
}

export function Header() {
  return (
    <div className="w-screen z-50 bg-zinc-950 border-b border-zinc-800 sticky top-0 px-5">
      <div className="container mx-auto flex justify-between items-center h-16 pt-1">
        <Title />
        <SocialLinks />
      </div>
    </div>
  )
}



