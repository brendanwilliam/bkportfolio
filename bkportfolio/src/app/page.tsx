import Image from "next/image";

function Hero() {
  return (
    <>

    </>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
      <div className="max-w-4xl w-full spacing-y-20 px-5 mb-0 py-10">
        {children}
      </div>
  )

}

function Projects() {
  return (
    <>

    </>
  )
}



function ProjectCard({
  title,
  description,
  image,
  links
}: {
  title: string,
  description: string,
  image: string,
  links: [{
      title: string,
      icon: string,
      href: string
  }
]}) {

  return (
    <>

    </>
  )
}

function About() {
  return (
    <>

    </>
  )
}

function Resume() {
  return (
    <>

    </>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Content>
        <Projects />
        <About />
        <Resume />
      </Content>
    </main>
  );
}
