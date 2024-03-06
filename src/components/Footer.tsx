import { Button } from "@/components/Button";

export function Footer() {

  return (
    <footer>
      <div className="w-full bg-neutral-100 p-4">
        <div className="flex justify-between">
          <div>
            <p className="text-neutral-700 text-sm">&copy; Brendan Keane {new Date().getFullYear()}. Brendan Keane. All rights reserved.</p>
          </div>
          <div>
            <Button style="tertiary" icon="bxl-github" href="https://github.com/brendanwilliam/bkportfolio">View this project on GitHub</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}