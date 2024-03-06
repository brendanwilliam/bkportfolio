import { Content } from "@/components/Content";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row items-center justify-between w-screen">
      <Hero />
      <Content>
        <Projects />
        <About />
      </Content>
    </main>
  );
}
