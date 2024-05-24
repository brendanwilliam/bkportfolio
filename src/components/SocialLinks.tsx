import Link from "next/link";
import clsx from "clsx";

interface SocialLink {
  href: string,
  icon: string
}

const socialLinks: SocialLink[] = [
  { href: "https://www.linkedin.com/in/brendanwillkeane/", icon: "bxl-linkedin"},
  { href: "mailto:brendanwillkeane@gmail.com", icon: "bxl-gmail"},
  { href: "https://www.figma.com/@bkhci", icon: "bxl-figma"},
  { href: "https://github.com/brendanwilliam", icon: "bxl-github"},
]


function SocialLink({
  href,
  icon = "",
}:{
  href: string,
  icon: string,
}) {

  return (
    <Link href={href} className="group flex justify-center items-center size-8 text-emerald-600 bg-transparent hover:bg-emerald-600 hover:text-sky-50 rounded-full transition-all ease-in-out duration-100">
        <i className={clsx("bx bx-xs group-hover:scale-125 transition-all ease-in-out duration-300", icon)} />
    </Link>

  )
}

export function SocialLinks({className = ""} : {className?: string}) {
  return (
    <div className={clsx("flex gap-0", className)}>
      {socialLinks.map((link, index) => (
        <SocialLink key={index} href={link.href} icon={link.icon} />
      ))}
    </div>
  )
}