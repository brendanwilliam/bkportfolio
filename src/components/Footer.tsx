import { Button } from "@/components/Button";

export function Footer() {

  return (
    <footer>
      <div className="w-full bg-zinc-900 py-2 px-4 relative z-50 border-t border-zinc-400">
        <div className="flex justify-between items-end">
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