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
        clsx("flex flex-row justify-center items-center text-sm",
        style === "primary" || style === "secondary" ? "px-9 py-3 rounded-lg font-medium" : "p-0 font-normal",
        style === "primary" && "text-sky-50 bg-sky-600 hover:bg-sky-400",
        style === "secondary" && "text-sky-600 bg-transparent hover:bg-sky-100 border border-sky-600",
        style === "tertiary" && "text-sky-600 hover:text-sky-400")} >
      <span className={clsx()}>
        <i className={clsx((icon === '') ? 'hidden' : 'inline bx bx-xs translate-y-0.5 mr-1', icon)}/>{children}
      </span>
    </Link>

  )
}