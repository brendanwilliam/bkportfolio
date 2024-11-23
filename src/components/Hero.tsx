import clsx from "clsx";
import { MeetingButton } from "@/components/MeetingButton";


function ValueProp() {
  return (
    <div className="space-y-5 text-left flex flex-col items-start mt-10">
      <div className="space-y-1">
        <p className="text-3xl md:text-6xl font-bold text-zinc-100 w-[20ch]">
          Brendan Keane </p>
        <p className="font-normal text-xl md:text-3xl text-zinc-300">
            Data & Machine Learning Engineer</p>
      </div>
      <div className="w-20 h-1 bg-emerald-600"></div>
      <p className="text-base md:text-lg text-zinc-300 w-[48ch] drop-shadow-lg font-light">
        Brendan Keane is a Machine Learning Engineer with seven years experience building tech solutions for everyday people.</p>
    </div>
  )
}

function HeroProfile() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-start gap-10 py-20 mb-14">
      <ValueProp />
      <MeetingButton />
    </div>
  )
}

export function Hero() {
  return (
    <div className="w-full px-10 bg-[url('/hero-background.png')] bg-fixed bg-cover">
      <HeroProfile />
    </div>
  )
}