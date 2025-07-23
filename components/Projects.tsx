'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  fullDescription?: string;
  features?: string[];
  duration?: string;
  team?: string;
  gallery?: string[];
  status?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Relivee Platform',
    description: 'ReLivee helps you capture, organize, and reflect on your adventures and fun moments with AI-assisted journaling, emotion tagging, and beautiful visualizations.',
    image: '/project-relive.png',
    tags: ['React', 'Next.js', 'TypeScript', 'Gemini AI', 'Tailwind CSS', 'Framer Motion'],
    category: ['frontend', 'backend', 'featured'],
    liveUrl: 'https://relive-gallery.vercel.app',
    githubUrl: 'https://github.com/adeyemimichael/Relive-app',
    featured: true,
    status: 'Completed',
    fullDescription: 'ReLivee is a comprehensive platform designed to help users capture, organize, and reflect on their life experiences. Built with modern web technologies, it features AI-powered journaling capabilities, emotion tracking, and beautiful data visualizations to help users understand their personal growth journey.',
    features: [
      'AI-assisted journaling with Gemini AI integration',
      'Emotion tagging and sentiment analysis',
      'Beautiful data visualizations and insights',
      'Secure user authentication and data protection',
      'Responsive design for all devices',
      'Real-time synchronization across devices'
    ],
    duration: '3 months',
    team: 'Solo Project',
    gallery: [
      '/project-relive.png',

    ]
  },

  {
    id: 2,
    title: 'Unilorin Tech Summit`24',
    description: 'A global tech event that happened at the university of Ilorin',
    image: '/unilorintecxh.png',
    tags: ['JavaScript', 'React', 'REST API', 'tailwind css', 'Framer Motion', 'firebase'],
    category: ['frontend'],
    liveUrl: 'https://unilorin-tech.vercel.app/',
    githubUrl: 'https://github.com/adeyemimichael/unilorin-tech',
    status: 'Completed',
    fullDescription: 'The Unilorin Tech Summit is an annual global event that transcends borders to embrace innovation. It gathers Founders, Business Leaders, Tech Enthusiasts, and Entrepreneurs most Importantly students from diverse backgrounds for insights, idea generation, and collaboration.',
    features: [
      'Attendees sign up page ',
      'Showcase of Tech industry leaders',
      'Database management system implementation for attendees data ',
      'smooth animation on scroll',
      'Responsive design for mobile and desktop'
    ],
    duration: '4 month',
    team: 'Solo Project',
    gallery: [

      '/unilorintecxh.png'
    ]
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase projects and skills (this website).',
    image: '/portfo.png',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    category: ['frontend'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/adeyemimichael/my-portfolio-app',
    status: 'Completed',
    fullDescription: 'A modern, responsive portfolio website built with Next.js and enhanced with smooth animations. Features include project showcases, interactive components, and a clean, professional design.',
    features: [
      'Responsive design with mobile-first approach',
      'Smooth animations with Framer Motion',
      'Interactive project showcases with modal popups',
      'PDF resume viewer with navigation',
      'Contact form with validation',
      'Dark/light theme toggle'
    ],
    duration: '1 month',
    team: 'Solo Project',
    gallery: [
      '/portfo.png',

    ]
  },
  {
    id: 4,
    title: 'Productive',
    description: 'An imaginary task management platform built for students by student',
    image: '/productive.png',
    tags: ['React', 'TypeScript', 'Redux', 'Firebase', 'Material-UI'],
    category: ['frontend', 'featured'],
    liveUrl: 'https://productive-qdbs.vercel.app/',
    githubUrl: 'https://github.com/adeyemimichael/productive',
    featured: true,
    status: 'In Progress',
    fullDescription: 'A comprehensive task management solution built with React and TypeScript.',
    features: [

      'Task prioritization and categorization',
      'Due date reminders and notifications',
      'Team management and role-based permissions',
      'Progress tracking and analytics'
    ],
    duration: '2 months',
    team: 'Solo Project',
    gallery: [

      '/productive.png'
    ]
  },
  {
    id: 5,
    title: 'Open Source project-Hacktoberfest contribution',
    description: 'An open-source portfolio website for easy deployment on Vercel.',
    image: '/portfoliomi.png',
    tags: ['Javscript', 'html', 'CSS'],
    category: ['frontend'],
    githubUrl: 'https://github.com/adeyemimichael/portfolio',
    status: 'Completed',
    fullDescription: 'Portfolio Website An open-source portfolio website for easy deployment on Vercel. Customize your profile using the profileConfig file to update links and upload resumes effortlessly. Optimized for responsiveness, this project encourages contributions and improvements.',
    features: [
      ' Benton Grid layout implementation',
      'Typing effect implementation'
    ],
    duration: '6 weeks',
    team: 'Open source Project',

    gallery: [
      '/portfoliomi.png',

    ]
  },

  {
    id: 6,
    title: 'Techclaritycoach',
    description: 'A Comprehensive Guide to Launch Your Tech Career',
    image: '/techclarity.png',
    tags: ['Javascript', 'Typescript', 'CSS', 'MDX'],
    category: ['frontend'],
    liveUrl: 'https://techclaritycoach.vercel.app/',
    githubUrl: 'https://github.com/peterayeniofficial/techclaritycoach',
    status: 'Completed',
    fullDescription: 'Tech clarity coach is an amazing project i contributed to as a technical writer, it helps individual get started in tech by providing them witht the resources needed to kick start their career in tech.',
    features: [
      'Search area to for users to access resources',
      'Detailed Mentor suggestions for each career path',
      'Industries and sectors',
      'Job roles and responsibility',

    ],
    duration: '2 months',
    team: 'Open Source Project',
    gallery: [
      '/techclarity.png',

    ]
  },
];

const categories = [
  { name: 'All', value: 'all' },
  { name: 'Frontend', value: 'frontend' },
  { name: 'Backend', value: 'backend' },
  { name: 'Featured', value: 'featured' },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category.includes(activeCategory)
  );

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects and see my skills in action. Each project demonstrates
            my ability to solve real-world problems with code.
          </p>
        </motion.div>

        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font- bold mb-8 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  index={index}
                  fullDescription={project.fullDescription}
                  features={project.features}
                  duration={project.duration}
                  team={project.team}
                  gallery={project.gallery}
                  status={project.status}
                />
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.value)}
              className="transition-all duration-300"
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
              fullDescription={project.fullDescription}
              features={project.features}
              duration={project.duration}
              team={project.team}
              gallery={project.gallery}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
}