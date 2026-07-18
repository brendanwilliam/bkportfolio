import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { FormattedDate } from "@/components/FormattedDate";
import Image from "next/image";

interface ContactLink {
  title: string,
  icon: string,
  href: string
}

interface Project {
  thumbnail: string
  date: Date,
  title: string,
  tags: string[],
  description: string,
  status?: string,
  links: ContactLink[],
}

const projects: Project[] = [
  {
    thumbnail: "/project-thumbnail.jpg",
    date: new Date(2026, 6),
    title: "THE_GAME — Real-time multiplayer card game",
    tags: ["Next.js", "Flask", "Socket.IO", "PostgreSQL", "Docker", "Game Design"],
    description: "A multiplayer web implementation of The Game, with live lobbies, server-authoritative rules, reconnects, chat, and persistent game state.",
    links: [
      { title: "12100game.com", icon: "bx-link-external", href: "https://12100game.com" }
    ]
  },
  {
    thumbnail: "/project-thumbnail.jpg",
    date: new Date(2026, 6),
    title: "Medivox — Trustworthy clinical AI workflows",
    tags: ["Machine Learning", "Clinical AI", "TypeScript", "Python", "React Native", "UX Engineering"],
    description: "A case study of my work on safe, transparent clinical assessment workflows across mobile, API, and AI-processing systems.",
    links: [
      { title: "Read the case study", icon: "bx-file", href: "/projects/medivox" }
    ]
  },
  {
    thumbnail: "/project-thumbnail.jpg",
    date: new Date(2026, 6),
    title: "Model Context Protocol project",
    tags: ["MCP", "AI Tooling", "Developer Experience"],
    description: "An upcoming Model Context Protocol project. More details coming soon.",
    status: "Coming soon",
    links: []
  },
]



function ProjectCard({
  thumbnail,
  date,
  title,
  tags,
  description,
  status,
  links
}: {
  thumbnail: string,
  date: Date,
  title: string,
  tags: string[],
  description: string,
  status?: string,
  links: ContactLink[]
}) {

  return (
    <div className="flex w-full flex-col-reverse overflow-hidden rounded-xl bg-zinc-900 sm:flex-row sm:justify-between">
      <div className="flex flex-col items-stretch justify-center gap-4 px-6 py-10 sm:flex-1 sm:py-6">
        <FormattedDate date={date} className="text-sm font-medium text-zinc-400" />
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-zinc-200">{title}</h3>
          <p className="text-lg text-zinc-400">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-zinc-700 px-2.5 py-1 text-xs font-medium text-zinc-400">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start gap-1 mt-auto">
          {status && <span className="text-sm font-medium text-amber-300">{status}</span>}
          {links.map((link, index) => (
            <Button key={index} href={link.href} style="tertiary" icon={link.icon}>{link.title}</Button>
          ))}
        </div>
      </div>
      <div className="sm:ml-auto sm:shrink-0">
        <Image src={thumbnail} alt={title} width="300" height="300" className="hidden h-full sm:flex sm:min-w-72 sm:object-cover"/>
        <Image src={thumbnail} alt={title} width="600" height="300" className="-mb-2 flex w-full rounded-t-xl object-cover sm:hidden"/>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <Section id="projects" className="lg:grid lg:grid-cols-3 lg:gap-8">
      <div className="lg:sticky lg:top-16 lg:self-start">
        <h2 className="py-5 text-5xl font-bold text-zinc-100 md:text-5xl">Projects</h2>
      </div>
      <div className="flex flex-col gap-5 lg:col-span-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} thumbnail={project.thumbnail} date={project.date} title={project.title} tags={project.tags} description={project.description} status={project.status} links={project.links} />
        ))}
      </div>
    </Section>
  )
}
