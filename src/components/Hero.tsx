import clsx from "clsx";
import { MeetingButton } from "@/components/MeetingButton";


function ValueProp() {
  return (
    <div className="space-y-5 text-center flex flex-col items-center">
      <p className="text-3xl md:text-7xl font-bold text-zinc-100 w-[15ch]">
        My work is designed to engineer.</p>
      <p className="text-base md:text-2xl text-zinc-300 w-[40ch] drop-shadow-lg font-light">
        With experience in UI/UX design and software engineering, I connect design and development teams to streamline production.</p>
    </div>
  )
}

function HeroProfile() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-20 py-20">
      <ValueProp />
      <MeetingButton />
    </div>
  )
}

export function Hero() {
  return (
    <div className="w-full px-10 bg-[url('/hero-background.png')] bg-fixed">
      <HeroProfile />
    </div>
  )
}