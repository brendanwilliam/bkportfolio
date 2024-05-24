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
  nda: boolean,
  links: ContactLink[],
}

const projects: Project[] = [
  {
    thumbnail: "/figma-to-frontend.png",
    date: new Date(2024, 3),
    title: "Figma to Frontend — Design system showcase",
    tags: ["Figma", "React", "TypeScript", "TailwindCSS", "Next.js", "Vercel", "Design Systems", "UX Engineering"],
    description: "Figma to Frontend is a design system showcase that demonstrates the process of converting a Figma design system into a fully functional frontend application. This project was built with React using TypeScript and TailwindCSS, and deployed with Next.js and Vercel.",
    nda: false,
    links: [
      { title: "Figma designs", icon: "bxl-figma", href: "https://www.figma.com/community/file/1347365788085846321/figma-to-frontend" },
      { title: "Project repository", icon: "bxl-github", href: "https://github.com/brendanwilliam/bkportfolio" }
    ]
  },
  {
    thumbnail: "/roughdraft-thumbnail.png",
    date: new Date(2024, 3),
    title: "Rough Draft Media — Digital media production company",
    tags: ["UX Engineering", "TypeScript", "TailwindCSS", "Next.js", "Vercel"],
    description: "Rough Draft Media is a digital media production company that specializes in video production, web development, and brand design. This project was built with React using TypeScript and TailwindCSS, and deployed with Next.js and Vercel.",
    nda: false,
    links: [
      { title: "roughdraftmedia.com", icon: "bx-link", href: "http://roughdraftmedia.com" },
      { title: "Project repository", icon: "bxl-github", href: "https://github.com/brendanwilliam/roughdraftmedia" }
    ]
  },
  {
    thumbnail: "/zoomapp-thumbnail.png",
    date: new Date(2023, 10),
    title: "Zoom meeting app — Startup project for post-meeting notes based on AI transcription",
    tags: ["Figma", "UX Research", "UI/UX Design", "Prototyping"],
    description: "This Zoom meeting app is a startup project that aims to provide post-meeting notes based on AI transcription. Due to a non-disclosure agreement, I am unable to share significant details about this project.",
    nda: true,
    links: []
  },
  {
    thumbnail: "/chatdwg-thumbnail.png",
    date: new Date(2023, 10),
    title: "ChatDWG — Building an intuition for AI-written content",
    tags: ["UX Engineering", "UX Research", "UI/UX Design", "Figma", "Prototyping", "Design Systems"],
    description: "ChatDWG is a project that aims to build an intuition for AI-written content through playing the game Two Truths and a Lie. This project was designed and prototyped in Figma, and developed with HTML, CSS, and JavaScript.",
    nda: false,
    links: [
      { title: "roughdraftmedia.com", icon: "bx-link", href: "https://brendanwilliam.github.io/chatdwg/" },
      { title: "Project repository", icon: "bxl-github", href: "https://github.com/brendanwilliam/chatdwg" }
    ]
  },
]



function ProjectCard({
  thumbnail,
  date,
  title,
  description,
  links
}: {
  thumbnail: string,
  date: Date,
  title: string,
  description: string,
  links: ContactLink[]
}) {

  return (
    <div className="flex md:flex-row flex-col-reverse rounded-xl bg-zinc-900 w-full">
      <div className="flex flex-col justify-center items-stretch gap-4 p-6 ">
        <div className="space-y-1">
          <FormattedDate date={date} className="text-xs font-medium text-zinc-400" />
          <h3 className="text-lg font-bold text-zinc-200">{title}</h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-1 mt-auto">
          {links.map((link, index) => (
            <Button key={index} href={link.href} style="tertiary" icon={link.icon}>{link.title}</Button>
          ))}
        </div>
      </div>
      <div className="">
        <Image src={thumbnail} alt={title} width="300" height="300" className="rounded-xl hidden md:flex h-full md:min-w-80"/>
        <Image src={thumbnail} alt={title} width="600" height="300" className="md:hidden flex rounded-t-xl -mb-2 w-full object-cover"/>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <Section id="projects" className="">
      <h2 className="sticky top-14 z-30 bg-zinc-950 py-5 md:text-4xl text-2xl font-bold text-zinc-100">Projects</h2>
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} thumbnail={project.thumbnail} date={project.date} title={project.title} description={project.description} links={project.links} />
        ))}
      </div>
    </Section>
  )
}