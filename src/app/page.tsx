import Head from "next/head";
import {seoMeta} from "@/lib/utils/seo";
import Hero from "@/components/pages/Hero";
import About from "@/components/pages/About";
import Header from "@/components/pages/Header";
import Footer from "@/components/pages/Footer";
import Skills from "@/components/pages/Skills";
import Sidebar from "@/components/pages/Sidebar";
import Contact from "@/components/pages/Contact";
import Services from "@/components/pages/Services";
import Projects from "@/components/pages/Projects";
import {IconParticles} from "@/components/Animations/IconParticles";
import {IconParticles3} from "@/components/Animations/IconParticles3";
import {IconParticles2} from "@/components/Animations/IconParticlesCanva";
import {SwarmParticles} from "@/components/Animations/ElectricTrailCanvas";
import {ElectricTrailHeavy} from "@/components/Animations/ElectricTrailHeavy";
import {ElectricFlowSparkles} from "@/components/Animations/ElectricFlowSparkles";
import {ExplodingTrailCanvas} from "@/components/Animations/ExplodingTrailCanvas";
import {ElectricTrailWithNoise} from "@/components/Animations/ElectricTrailWithNoise";
import { SocialMediaLinks } from "@/components/ui/SocialMediaLinks";

export default function Home() {
  return (
    <>
      <Head>
        <title>{seoMeta.title}</title>
        <meta
          name="description"
          content={seoMeta.description}
        />
        <meta
          property="og:title"
          content={seoMeta.title}
        />
        <meta
          property="og:description"
          content={seoMeta.description}
        />
        <meta
          property="og:url"
          content={seoMeta.url}
        />
        <meta
          property="og:image"
          content={seoMeta.image}
        />
        <link
          rel="canonical"
          href={seoMeta.url}
        />
        <meta
          name="robots"
          content="index, follow"
        />
      </Head>
      <main className="scroll-smooth bg-white dark:bg-neutral-900 text-gray-900 dark:text-white">
        <Header />
        {/* <IconParticles2 /> */}
        {/* <IconParticles3 /> */}
        {/* <IconParticles /> */}
        {/* <ExplodingTrailCanvas /> */}
        {/* <ElectricTrailWithNoise /> */}
        {/* <ElectricTrailHeavy /> */}
        {/* <SwarmParticles /> */}
        {/* <ElectricFlowSparkles /> */}
        <Sidebar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
