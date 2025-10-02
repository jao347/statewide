import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
}
