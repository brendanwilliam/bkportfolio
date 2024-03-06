import { Button } from "@/components/Button";

export function Footer() {

  return (
    <footer>
      <div className="w-full bg-neutral-100 py-1 px-4 md:fixed md:bottom-0">
        <div className="flex justify-between">
          <div>
            <p className="text-neutral-700 text-xs font-light">&copy; Brendan Keane {new Date().getFullYear()}. All rights reserved.</p>
          </div>
          <div>
            <Button style="tertiary" icon="bxl-github" href="https://github.com/brendanwilliam/bkportfolio">Source code</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}