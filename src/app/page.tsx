import { Content } from "@/components/Content";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Header } from "@/components/Header";


export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col overflow-auto">
      <Header />
      <Hero />
      <Content className="flex flex-col px-5">
        <Projects />
        <About id="about" className="" />
      </Content>
    </main>
  );
}
