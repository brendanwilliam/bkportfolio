import Link from "next/link";
import clsx from "clsx";

export function SocialLink({
  href,
  icon = "",
}:{
  href: string,
  icon: string,
}) {

  return (
    <Link href={href} className="group flex justify-center items-center size-8 text-sky-600 bg-transparent hover:bg-sky-600 hover:text-sky-50 rounded-full transition-all ease-in-out duration-100">
        <i className={clsx("bx bx-xs group-hover:scale-125 transition-all ease-in-out duration-300", icon)} />
    </Link>

  )
}