import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { FormattedDate } from "@/components/FormattedDate";

interface ContactLink {
  title: string,
  icon: string,
  href: string
}

interface Project {
  date: Date,
  title: string,
  description: string,
  links: ContactLink[],
}
const projects: Project[] = [
  {
    date: new Date(2024, 3),
    title: "Figma to Frontend — Design system showcase",
    description: "Figma to Frontend is a design system showcase that demonstrates the process of converting a Figma design system into a fully functional frontend application. This project was built with React using TypeScript and TailwindCSS, and deployed with Next.js and Vercel.",
    links: [
      { title: "Project repository", icon: "bxl-github", href: "https://github.com/brendanwilliam/bkportfolio" }
    ]
  },
  {
    date: new Date(2024, 3),
    title: "Rough Draft Media — Digital media production company",
    description: "Rough Draft Media is a digital media production company that specializes in video production, web development, and brand design. This project was built with React using TypeScript and TailwindCSS, and deployed with Next.js and Vercel.",
    links: [
      { title: "roughdraftmedia.com", icon: "bx-link", href: "http://roughdraftmedia.com" },
      { title: "Project repository", icon: "bxl-github", href: "https://github.com/brendanwilliam/roughdraftmedia" }
    ]
  },
  {
    date: new Date(2024, 2),
    title: "Reflections of the River — Documentary series",
    description: "Reflections of the river is a documentary series investigating river health in the United States. This project. This project was build with React using JavaScript and TailwindCSS, and deployed with Next.js and Vercel.",
    links: [
      { title: "reflectionsoftheriver.com", icon: "bx-link", href: "http://reflectionsoftheriver.com" },
      { title: "Project repository", icon: "bxl-github", href: "https://github.com/brendanwilliam/rotr-series" }
    ]
  },
  {
    date: new Date(2023, 12),
    title: "AMK Music — Music composer portfolio",
    description: "AMK Music is a music composer portfolio website featuring an embedded music player and custom design. This project was initially built with Webflow and later migrated to React using TypeScript and TailwindCSS, and deployed with Next.js and Vercel.",
    links: [
      { title: "musicbyamk.com", icon: "bx-link", href: "http://musicbyamk.com" },
    ]
  }
]

function ProjectCard({
  date,
  title,
  description,
  links
}: {
  date: Date,
  title: string,
  description: string,
  links: ContactLink[]
}) {

  return (
    <div className="flex flex-col justify-center items-stretch gap-4 p-6 bg-white shadow rounded-xl border border-neutral-200">
      <div className="space-y-1">
        <FormattedDate date={date} className="text-xs font-medium text-neutral-500" />
        <h2 className="text-lg font-bold text-neutral-700">{title}</h2>
        <p className="text-sm font-light text-neutral-600">{description}</p>
      </div>
      <div className="flex flex-col justify-start items-start gap-1">
        {links.map((link, index) => (
          <Button key={index} href={link.href} style="tertiary" icon={link.icon}>{link.title}</Button>
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-2 justify-center items-stretch px-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} date={project.date} title={project.title} description={project.description} links={project.links} />
        ))}
      </div>
    </Section>
  )
}