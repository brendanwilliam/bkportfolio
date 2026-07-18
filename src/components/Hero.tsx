import { Button } from "@/components/Button";


function ValueProp() {
  return (
    <div className="mt-10 flex flex-col items-center space-y-5 text-center">
      <div className="space-y-1">
        <p className="text-3xl font-bold text-zinc-100 md:text-6xl">
          Brendan Keane </p>
        <p className="font-normal text-xl md:text-3xl text-zinc-300">
            Senior AI Software Engineer</p>
      </div>
      <div className="w-20 h-1 bg-emerald-600"></div>
      <p className="max-w-[48ch] text-base font-light text-zinc-300 drop-shadow-lg md:text-lg">
        Brendan Keane is a Senior AI Software Engineer building reliable, human-centered AI products and the systems behind them.</p>
    </div>
  )
}

function HeroProfile() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-10 px-5 py-20 mb-14 text-center">
      <ValueProp />
      <Button href="#projects" style="secondary" icon="bx-down-arrow-alt">View Projects</Button>
    </div>
  )
}

export function Hero() {
  return (
    <div className="w-full bg-[url('/hero-background.png')] bg-fixed bg-cover">
      <HeroProfile />
    </div>
  )
}
