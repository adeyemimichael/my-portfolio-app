'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0">
            <Link 
              href="/" 
              className="text-xl font-bold tracking-tight flex items-center gap-2"
            >
              <span className="text-primary">Dev</span>
              <span>Portfolio</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-2">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
          
          <nav className="flex flex-col sm:flex-row items-center gap-6 mb-6 md:mb-0">
            <Link href="#" className="text-sm hover:text-primary transition-colors">Home</Link>
            <Link href="#about" className="text-sm hover:text-primary transition-colors">About</Link>
            <Link href="#skills" className="text-sm hover:text-primary transition-colors">Skills</Link>
            <Link href="#projects" className="text-sm hover:text-primary transition-colors">Projects</Link>
            <Link href="#contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="mailto:hello@example.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}