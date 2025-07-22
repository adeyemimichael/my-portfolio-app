'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Linkedin, Eye } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Using image from public directory for static export compatibility
import imageProf from "@/components/assets/imer.jpg"
import { PDFViewer } from '@/components/PDFViewer';
export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  const openPDFViewer = () => setIsPDFOpen(true);
  const closePDFViewer = () => setIsPDFOpen(false);

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-md mx-auto"
          >
            {/* Decorative border */}
            <div className="absolute inset-0 w-full h-full rounded-xl border-2 border-primary/20 transform -translate-x-4 -translate-y-4"></div>

            {/* Image container with fixed aspect ratio */}
            <div className="relative w-full  h-[500px] aspect-square overflow-hidden rounded-xl bg-muted">
              <Image
                src={imageProf}
                alt="Professional portrait"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
                unoptimized
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Who am I?</h3>
            <p className="text-muted-foreground">
              I`m a passionate Web Developer (Major In frontend and Backend) with 3+ years of experience building web applications and software solutions.
              My journey in tech started when I learnt that I can change how website looks right from my phone, the joining of writing my first html statrted on my phone.
            </p>
            <p className="text-muted-foreground">
              I specialize in JavaScript/TypeScript, React, Next.js, and modern web technologies.
              I`m constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-muted-foreground">Ibadan, Oyo state Nigeria</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-muted-foreground">B.Eng. Computer Engineering</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Experience</h4>
                <p className="text-muted-foreground">3+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Freelance</h4>
                <p className="text-muted-foreground">Available</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={openPDFViewer} className="gap-2">
                <Eye className="w-4 h-4" />
                View Resume
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link href="/cvayo.pdf" target="_blank" download="Ayobami_Akande_Resume.pdf">
                  <FileText className="w-4 h-4" />
                  Download Resume
                </Link>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <Link href="https://linkedin.com/in/akandeayobami" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* PDF Viewer Modal */}
        <PDFViewer
          pdfUrl="/cvayo.pdf"
          isOpen={isPDFOpen}
          onClose={closePDFViewer}
        />
      </div>
    </section>
  );
}