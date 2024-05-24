import { Content } from "@/components/Content";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Header } from "@/components/Header";


export default function Home() {
  return (
    <main className="flex md:sticky md:top-0 min-h-screen flex-col w-screen overflow-auto md:max-h-screen">
      <Header />
      <Hero />
      <Content className="flex lg:flex-row flex-col lg:gap-20 px-5">
        <Projects />
        <About id="about" />
      </Content>
    </main>
  );
}
