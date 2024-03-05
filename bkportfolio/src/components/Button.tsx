import React from "react";
import Link from "next/link";
import clsx from "clsx";

export function Button({
  href,
  style,
  children,
  icon = "",
}:{
  href: string,
  style: string,
  children: React.ReactNode,
  icon?: string,
}) {


  return (
    <Link href={href} className={
        clsx("flex flex-row justify-center items-center gap-1",
        (style === ("primary" || "secondary")) ? "px-9 py-3 rounded-lg" : "p-0",
        style === "primary" && "text-sky-50 bg-sky-600 hover:bg-sky-400",
        style === "secondary" && "text-sky-600 bg-transparent hover:bg-sky-100",
        style === "tertiary" && "text-sky-600 hover:text-sky-400")} >
      <span className={clsx()}>
        <i className={clsx((icon === '') ? 'hidden' : 'inline', 'bx bx-xs', icon)}/>{children}
      </span>
    </Link>

  )
}