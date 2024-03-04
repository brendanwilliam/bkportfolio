'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'font-header font-medium text-lg uppercase tracking-wide drop-shadow text-white',
          isActive
            ? 'underline'
            : 'hover:underline',
        )}
      >
        {children}
      </Link>
    </li>
  )
}


function Navigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul className="w-full flex flex-row justify-evenly gap-20 pt-5 items-start">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/podcast">Projects</NavItem>
        <NavItem href="/podcast">About</NavItem>
        <NavItem href="/about">Resume</NavItem>
      </ul>
    </nav>
  )
}

export function Header() {

  return (
    <>
      <header
        className="pointer-events-none fixed w-full top-0 z-50 flex flex-none flex-col"
      >
        <Navigation className="pointer-events-auto block w-full" />
      </header>
    </>
  )
}