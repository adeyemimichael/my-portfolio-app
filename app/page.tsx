import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { LazySection } from '@/components/LazySection';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const About = dynamic(() => import('@/components/About').then(mod => ({ default: mod.About })), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading About...</div>
});

const Skills = dynamic(() => import('@/components/Skills').then(mod => ({ default: mod.Skills })), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading Skills...</div>
});

const Projects = dynamic(() => import('@/components/Projects').then(mod => ({ default: mod.Projects })), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading Projects...</div>
});

const Contact = dynamic(() => import('@/components/Contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading Contact...</div>
});

const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-32 flex items-center justify-center">Loading Footer...</div>
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LazySection>
        <About />
      </LazySection>
      <LazySection>
        <Skills />
      </LazySection>
      <LazySection>
        <Projects />
      </LazySection>
      <LazySection>
        <Contact />
      </LazySection>
      <LazySection>
        <Footer />
      </LazySection>
    </main>
  );
}