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
  description: string,
  links: ContactLink[],
}
const projects: Project[] = [
  {
    thumbnail: "/project-thumbnail.jpg",
    date: new Date(2024, 3),
    title: "Figma to Frontend — Design system showcase",
    description: "Figma to Frontend is a design system showcase that demonstrates the process of converting a Figma design system into a fully functional frontend application. This project was built with React using TypeScript and TailwindCSS, and deployed with Next.js and Vercel.",
    links: [
      { title: "Figma designs", icon: "bxl-figma", href: "https://www.figma.com/community/file/1347365788085846321/figma-to-frontend" },
      { title: "Project repository", icon: "bxl-github", href: "https://github.com/brendanwilliam/bkportfolio" }
    ]
  },
  {
    thumbnail: "/project-thumbnail.jpg",
    date: new Date(2024, 3),
    title: "Rough Draft Media — Digital media production company",
    description: "Rough Draft Media is a digital media production company that specializes in video production, web development, and brand design. This project was built with React using TypeScript and TailwindCSS, and deployed with Next.js and Vercel.",
    links: [
      { title: "roughdraftmedia.com", icon: "bx-link", href: "http://roughdraftmedia.com" },
      { title: "Project repository", icon: "bxl-github", href: "https://github.com/brendanwilliam/roughdraftmedia" }
    ]
  },
  {
    thumbnail: "/project-thumbnail.jpg",
    date: new Date(2024, 2),
    title: "Reflections of the River — Documentary series",
    description: "Reflections of the River is a documentary series investigating river health in the United States. This project. This project was build with React using JavaScript and TailwindCSS, and deployed with Next.js and Vercel.",
    links: [
      { title: "reflectionsoftheriver.com", icon: "bx-link", href: "http://reflectionsoftheriver.com" },
      { title: "Project repository", icon: "bxl-github", href: "https://github.com/brendanwilliam/rotr-series" }
    ]
  },
  {
    thumbnail: "/project-thumbnail.jpg",
    date: new Date(2023, 12),
    title: "AMK Music — Music composer portfolio",
    description: "AMK Music is a music composer portfolio website featuring an embedded music player and custom design. This project was initially built with Webflow and later migrated to React using TypeScript and TailwindCSS, and deployed with Next.js and Vercel.",
    links: [
      { title: "musicbyamk.com", icon: "bx-link", href: "http://musicbyamk.com" },
    ]
  }
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
      <h2 className="sticky top-14 z-30 bg-zinc-950 py-5 text-4xl font-bold text-zinc-100">Projects</h2>
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} thumbnail={project.thumbnail} date={project.date} title={project.title} description={project.description} links={project.links} />
        ))}
      </div>
    </Section>
  )
}