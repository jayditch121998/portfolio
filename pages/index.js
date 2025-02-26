import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
export default function Main() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}