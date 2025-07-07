import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dileep | Developer Portfolio</title>
        <meta
          name="description"
          content="Personal portfolio of Dileep - Frontend Developer"
        />
      </Head>
      <main className="scroll-smooth bg-white dark:bg-neutral-900 text-gray-900 dark:text-white">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
