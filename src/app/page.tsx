import { Content } from "@/components/Content";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";


export default function Home() {
  return (
    <main className="flex md:sticky md:top-0 min-h-screen flex-col md:flex-row md:justify-start md:items-start md:h-screen w-screen bg-white overflow-auto md:max-h-screen">
      <Hero />
      <Content className="lg:flex md:top-0 block lg:flex-row-reverse justify-start items-start md:p-6">
        <div className="size-0 ml-auto"></div>
        <Projects />
        <About />
      </Content>
    </main>
  );
}
