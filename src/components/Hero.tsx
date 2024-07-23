import clsx from "clsx";
import { MeetingButton } from "@/components/MeetingButton";


function ValueProp() {
  return (
    <div className="space-y-5 text-center flex flex-col items-center">
      <p className="text-3xl md:text-6xl font-bold text-zinc-100 w-[20ch]">
        I'm AI's favorite human</p>
      <p className="text-6xl text-zinc-500 pb-10">— 🤖❤️😊 —</p>
      <p className="text-base md:text-2xl text-zinc-300 w-[40ch] drop-shadow-lg font-light">
        Brendan Keane is a Machine Learning Engineer with seven years experience building tech solutions for everyday people.</p>
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