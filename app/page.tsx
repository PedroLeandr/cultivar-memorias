import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FirstActivity from "@/components/FirstActivity";
import Impact from "@/components/Impact";
import Goals from "@/components/Goals";
import Gallery from "@/components/Gallery";
import Timeline from "@/components/Timeline";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FirstActivity />
      <Impact />
      <Goals />
      <Gallery />
      <Timeline />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
