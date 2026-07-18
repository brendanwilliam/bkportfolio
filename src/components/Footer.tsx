import { Button } from "@/components/Button";

export function Footer() {

  return (
    <footer>
      <div className="relative z-50 w-full border-t border-zinc-400 bg-zinc-900 px-4 py-2">
        <div className="container mx-auto flex items-end justify-between">
          <div>
            <p className="text-zinc-400 text-xs font-light">&copy; Brendan Keane {new Date().getFullYear()}. All rights reserved.</p>
          </div>
          <div>
            <Button style="tertiary" icon="bxl-github" href="https://github.com/brendanwilliam/bkportfolio">Source code</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
