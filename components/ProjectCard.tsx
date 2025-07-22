'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, X, Calendar, Users, Zap, Eye } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
  fullDescription?: string;
  features?: string[];
  duration?: string;
  team?: string;
  gallery?: string[];
}

interface ProjectModalProps {
  project: ProjectCardProps;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-background rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div>
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-muted-foreground mt-1">{project.description}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
            {/* Main Image */}
            <div className="relative h-64 md:h-80">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 space-y-6">
              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.duration && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Duration</p>
                      <p className="text-sm text-muted-foreground">{project.duration}</p>
                    </div>
                  </div>
                )}
                {project.team && (
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Team</p>
                      <p className="text-sm text-muted-foreground">{project.team}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Status</p>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              {project.fullDescription && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">About This Project</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>
              )}

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t bg-background/95 backdrop-blur-sm">
            <div className="flex gap-3">
              {project.githubUrl && (
                <Button asChild variant="outline">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  liveUrl, 
  githubUrl, 
  index,
  fullDescription,
  features,
  duration,
  team,
  gallery
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -5 }}
        className="group cursor-pointer"
        onClick={openModal}
      >
        <Card className="h-full overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="bg-white/90 dark:bg-black/90 rounded-full p-3 backdrop-blur-sm"
              >
                <Eye className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="line-clamp-2">{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{tags.length - 3} more
                </Badge>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            {githubUrl && (
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={(e) => e.stopPropagation()}
              >
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Code
                </Link>
              </Button>
            )}
            {liveUrl && (
              <Button 
                asChild 
                size="sm" 
                className="flex-1"
                onClick={(e) => e.stopPropagation()}
              >
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>

      <ProjectModal
        project={{
          title,
          description,
          image,
          tags,
          liveUrl,
          githubUrl,
          index,
          fullDescription,
          features,
          duration,
          team,
          gallery
        }}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}