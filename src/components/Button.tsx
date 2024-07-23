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
        clsx("flex flex-row justify-center items-center text-base",
        style === "primary" || style === "secondary" ? "px-9 py-3 rounded-lg font-medium w-full hover:scale-105 ease-in-out duration-75" : "p-0 font-normal",
        style === "primary" && "text-emerald-50 bg-emerald-600 hover:bg-emerald-400",
        style === "secondary" && "text-emerald-600 bg-transparent hover:bg-emerald-100 border border-emerald-600",
        style === "tertiary" && "text-emerald-600 hover:text-emerald-300 hover:underline")} >
      <span className={clsx()}>
        <i className={clsx((icon === '') ? 'hidden' : 'inline bx bx-xs translate-y-0.5 mr-1', icon)}/>{children}
      </span>
    </Link>

  )
}