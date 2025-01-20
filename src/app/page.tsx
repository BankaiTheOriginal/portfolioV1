import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Footer from "@/components/sections/footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
