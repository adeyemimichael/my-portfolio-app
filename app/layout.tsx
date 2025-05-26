import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe | Full-Stack Developer',
  description: 'Personal portfolio website of John Doe, a full-stack developer specializing in modern web technologies.',
  keywords: ['developer', 'portfolio', 'full-stack', 'react', 'next.js', 'web development'],
  authors: [{ name: 'John Doe' }],
  openGraph: {
    type: 'website',
    url: 'https://yourusername.github.io',
    title: 'John Doe | Full-Stack Developer',
    description: 'Full-stack developer specializing in modern web technologies',
    siteName: 'John Doe Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Doe Portfolio',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}