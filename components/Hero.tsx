'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const TypingEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
};

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background particles/gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5" />
      
      <div className="absolute inset-0">
        <div className="h-full w-full flex flex-wrap justify-center items-center gap-8 opacity-10 select-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i}
              className={cn(
                "text-primary font-mono text-sm md:text-base",
                i % 3 === 0 && "text-chart-1",
                i % 5 === 0 && "text-chart-2",
                i % 7 === 0 && "text-chart-3"
              )}
            >
              {["</>", "{}", "[]", "//", "=>", "&&", "||"][i % 7]}
            </div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-6 inline-block">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="flex justify-center mb-4"
            >
              <div className="relative p-3 rounded-full bg-secondary text-secondary-foreground">
                <Code size={32} />
              </div>
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            <span className="text-primary">Hello, I'm </span>
            <br className="md:hidden" />
            <TypingEffect text="John Doe" />
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            Full-Stack Developer building the future, one line of code at a time
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex flex-col md:flex-row gap-4 justify-center mb-8"
          >
            <Button asChild size="lg" className="gap-2 group">
              <Link href="#projects">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex justify-center gap-4"
          >
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <Link 
            href="#about"
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}