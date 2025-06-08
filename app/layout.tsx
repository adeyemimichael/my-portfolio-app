import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
// import { CursorAnimation } from '@/components/cursorAnimation';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ayobami Akande | Full-Stack Developer',
  description: 'Personal portfolio website of Ayobami AKANDE, a full-stack developer specializing in modern web technologies.',
  keywords: ['developer', 'portfolio', 'full-stack', 'react', 'next.js', 'web development'],
  authors: [{ name: 'Ayobami Akande' }],
  openGraph: {
    type: 'website',
    url: 'https://adeyemimichael.github.io',
    title: 'John Doe | Full-Stack Developer',
    description: 'Full-stack developer specializing in modern web technologies',
    siteName: 'Ayobami Akande Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ayobami Akande Portfolio',
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
      <body className={cn(inter.className, "min-h-screen bg-background cursor-none")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <CursorAnimation /> */}
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}