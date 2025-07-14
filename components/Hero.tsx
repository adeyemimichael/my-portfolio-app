'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Github, Linkedin, Sparkles, Zap, Star } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const TypingEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    } else {
      // Blink cursor after typing is complete
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      
      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

const FloatingIcon = ({ 
  icon: Icon, 
  delay = 0, 
  duration = 4,
  className = "",
  size = 24 
}: { 
  icon: any; 
  delay?: number; 
  duration?: number; 
  className?: string;
  size?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: [0, 1, 1, 0],
      y: [20, -10, -20, -40],
      x: [0, 10, -5, 15],
      rotate: [0, 5, -5, 10]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 3 + 2,
      ease: "easeInOut"
    }}
    className={cn("absolute text-primary/30", className)}
  >
    <Icon size={size} />
  </motion.div>
);

const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-primary/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, -200],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const CodeRain = () => {
  const codeSnippets = [
    'const magic = () => {}',
    'function create() {}',
    'let dreams = true',
    'if (passion) {}',
    'while (learning) {}',
    'return success',
    'async await future',
    'export default me'
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary font-mono text-sm"
          style={{
            left: `${(i * 12.5) + Math.random() * 10}%`,
            top: '-10%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
        </motion.div>
      ))}
    </div>
  );
};

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(x * 100);
      mouseY.set(y * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    // Start the main animation sequence
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-chart-1/10" />
      
      {/* Particle Field */}
      <ParticleField />
      
      {/* Code Rain Effect */}
      <CodeRain />
      
      {/* Interactive Background Grid */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--primary), 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--primary), 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Code Icons */}
      <FloatingIcon icon={Code} delay={1} className="top-20 left-20" />
      <FloatingIcon icon={Sparkles} delay={2} className="top-32 right-32" size={20} />
      <FloatingIcon icon={Zap} delay={3} className="bottom-40 left-32" size={28} />
      <FloatingIcon icon={Star} delay={4} className="bottom-32 right-20" size={16} />

      {/* Main Content */}
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          style={{ rotateX, rotateY }}
          className="max-w-4xl mx-auto text-center perspective-1000"
        >
          {/* Animated Avatar/Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.3, 
              type: "spring", 
              stiffness: 200,
              damping: 15
            }}
            className="mb-8 inline-block relative"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative p-6 rounded-full bg-gradient-to-r from-primary/20 to-chart-1/20 backdrop-blur-sm border border-primary/30"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Code size={48} className="text-primary" />
              </motion.div>
              
              {/* Orbiting Elements */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-primary rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                  }}
                  animate={{
                    rotate: angle + 360,
                    x: 40 * Math.cos((angle * Math.PI) / 180),
                    y: 40 * Math.sin((angle * Math.PI) / 180),
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Main Heading with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
              style={{
                background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--chart-1)), hsl(var(--chart-2)))',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="block text-3xl md:text-4xl"
              >
                Hello, I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
                className="block text-3xl md:text-4xl mt-2"
              >
                <TypingEffect text="Ayobami Akande" />
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle with Wave Animation */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="text-xl md:text-3xl text-muted-foreground mb-8 font-light"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: 'linear-gradient(90deg, hsl(var(--muted-foreground)), hsl(var(--primary)), hsl(var(--muted-foreground)))',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A Developer crafting digital experiences, Solutions that is scalable
            </motion.span>
          </motion.h2>

          {/* Animated Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild size="lg" className="gap-3 group relative overflow-hidden bg-gradient-to-r from-primary to-chart-1 hover:from-chart-1 hover:to-primary transition-all duration-300">
                <Link href="#projects">
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    View My Work
                  </motion.span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild variant="outline" size="lg" className="gap-3 group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <Link href="#contact">
                  <motion.span
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Get In Touch
                  </motion.span>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links with Hover Effects */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/adeyemimichael", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/akandeayobami", label: "LinkedIn" }
            ].map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.7 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" asChild className="relative group">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="w-6 h-6 transition-colors group-hover:text-primary" />
                    
                    {/* Ripple Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/30"
                      initial={{ scale: 0, opacity: 1 }}
                      whileHover={{ 
                        scale: 2, 
                        opacity: 0,
                        transition: { duration: 0.6 }
                      }}
                    />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator with Pulse */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <Link 
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors group"
              aria-label="Scroll down"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.2 }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="group-hover:stroke-primary transition-colors"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
                
                {/* Pulsing Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Mouse Follower Effect */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-primary/20 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
    </div>
  );
}