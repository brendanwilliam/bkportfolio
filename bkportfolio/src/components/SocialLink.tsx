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
    <Link href={href} className="group flex justify-center items-center size-10 text-sky-600 bg-transparent hover:bg-sky-100 border border-sky-600 rounded-full transition-all ease-in-out duration-100 hover:scale-105">
        <i className={clsx("bx bx-sm", icon)} />
    </Link>

  )
}