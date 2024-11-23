import Link from "next/link";
import clsx from "clsx";
import { Button } from "@/components/Button";

interface SocialLink {
  href: string,
  icon: string,
  text: string,
}

const socialLinks: SocialLink[] = [
  { href: "https://www.linkedin.com/in/brendanwillkeane/", icon: "bxl-linkedin", text: "LinkedIn"},
  { href: "https://github.com/brendanwilliam", icon: "bxl-github", text: "Github"},
  { href: "/resume_brendankeane.pdf", icon: "bx-file", text: "Resume"},
]



export function SocialLinks({className = ""} : {className?: string}) {
  return (
    <div className={clsx("flex flex-row gap-4", className)}>
      {socialLinks.map((link, index) => (
        <Button key={index} href={link.href} style="tertiary" icon={link.icon}>{link.text}</Button>
      ))}
    </div>
  )
}