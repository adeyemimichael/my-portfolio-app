# 🚀 Ayobami Akande - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features interactive project showcases, smooth animations, and a professional design to highlight my skills and projects as a Full-Stack Developer.

## 🌟 Live Demo

**🔗 [View Live Portfolio](https://michaelsportfolio-jzsmii60m-adeyemimichaels-projects.vercel.app)**

## ✨ Features

### 🎨 **Interactive Design**
- **Smooth Animations** - Framer Motion powered transitions and hover effects
- **Custom Cursor Animation** - Interactive cursor that responds to text elements
- **Dark/Light Theme Toggle** - Seamless theme switching with next-themes
- **Responsive Design** - Mobile-first approach that works on all devices

### 👤 **About Section**
- **Professional Profile Image** - High-quality portrait with hover effects
- **Interactive PDF Resume Viewer** - Built-in PDF viewer with navigation controls
- **Downloadable Resume** - Direct PDF download functionality
- **Personal Information Grid** - Location, education, experience, and availability

### 🚀 **Project Showcase**
- **Interactive Project Cards** - Clickable cards with hover animations
- **Detailed Project Modals** - Pop-up modals with comprehensive project information
- **Dynamic Status Indicators** - Color-coded project status (Completed, In Progress, Planning)
- **Project Filtering** - Filter projects by category (Frontend, Backend, Featured)
- **Image Galleries** - Multiple screenshots for each project
- **Live Demo & Code Links** - Direct links to live projects and GitHub repositories

### 🛠 **Technical Features**
- **Static Site Generation** - Optimized for fast loading and SEO
- **TypeScript** - Type-safe development with full TypeScript support
- **Component Architecture** - Modular, reusable React components
- **Performance Optimized** - Lazy loading, image optimization, and code splitting

## 🛠 Tech Stack

### **Frontend**
- **Next.js 13.5.1** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### **UI Components**
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful & consistent icon library
- **Custom Components** - Tailored UI components for specific needs

### **Development Tools**
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Vercel** - Deployment and hosting platform

## 📁 Project Structure

```
project/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Home page component
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── button.tsx           # Button component variants
│   │   ├── card.tsx             # Card component
│   │   ├── badge.tsx            # Badge component
│   │   └── theme-toggle.tsx     # Dark/light theme toggle
│   ├── About.tsx                # About section with PDF viewer
│   ├── Contact.tsx              # Contact form and information
│   ├── CursorAnimation.tsx      # Custom cursor animation
│   ├── Footer.tsx               # Footer component
│   ├── Hero.tsx                 # Hero section with animations
│   ├── Navbar.tsx               # Navigation component
│   ├── PDFViewer.tsx            # Interactive PDF viewer modal
│   ├── ProjectCard.tsx          # Individual project card component
│   ├── Projects.tsx             # Projects showcase section
│   ├── Skills.tsx               # Skills and technologies section
│   └── ThemeProvider.tsx        # Theme context provider
├── hooks/                       # Custom React hooks
│   └── use-toast.ts            # Toast notification hook
├── lib/                         # Utility libraries
│   ├── emailjs-config.ts       # Email.js configuration
│   ├── framer-animations.ts    # Framer Motion animation presets
│   └── utils.ts                # Utility functions
├── public/                      # Static assets
│   ├── project-*.png           # Project images
│   ├── profile-image.jpg       # Profile picture
│   └── cvayo.pdf              # Resume PDF
└── package.json                # Dependencies and scripts
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm, yarn, or pnpm

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/adeyemimichael/my-portfolio-app.git
   cd my-portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**
```bash
npm run build
npm run start
```

## 🎨 Customization

### **Adding New Projects**
1. Add project images to the `public/` directory
2. Update the `projects` array in `components/Projects.tsx`:

```typescript
{
  id: 7,
  title: 'Your Project Name',
  description: 'Brief project description',
  image: '/your-project-image.png',
  tags: ['React', 'TypeScript', 'Next.js'],
  category: ['frontend', 'featured'],
  liveUrl: 'https://your-project.com',
  githubUrl: 'https://github.com/yourusername/project',
  status: 'Completed', // 'Completed' | 'In Progress' | 'Planning' | 'On Hold'
  featured: true,
  fullDescription: 'Detailed project description...',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  duration: '2 months',
  team: 'Solo Project',
  gallery: [
    '/project-screenshot-1.png',
    '/project-screenshot-2.png'
  ]
}
```

### **Updating Personal Information**
- **Profile Image**: Replace `public/profile-image.jpg`
- **Resume**: Replace `public/cvayo.pdf`
- **Personal Details**: Update `components/About.tsx`
- **Contact Information**: Update `components/Contact.tsx`

### **Customizing Theme**
- **Colors**: Modify CSS variables in `app/globals.css`
- **Fonts**: Update font imports in `app/layout.tsx`
- **Animations**: Customize in `lib/framer-animations.ts`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 **Mobile devices** (320px+)
- 📱 **Tablets** (768px+)
- 💻 **Laptops** (1024px+)
- 🖥 **Desktops** (1280px+)

## 🔧 Key Components

### **PDFViewer Component**
Interactive PDF viewer with features:
- Page navigation (previous/next)
- Zoom controls (50% - 200%)
- Fullscreen mode
- Download functionality
- Keyboard shortcuts (arrow keys, escape)

### **ProjectCard Component**
Reusable project card with:
- Hover animations and effects
- Click-to-expand modal functionality
- Dynamic status indicators with colors
- Tag display with overflow handling
- Responsive image handling

### **CursorAnimation Component**
Custom cursor animation that:
- Follows mouse movement
- Responds to text elements
- Provides visual feedback on hover
- Works across all components

## 🚀 Deployment

### **Deploy to Vercel (Recommended)**
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### **Deploy to Netlify**
1. Build the project: `npm run build`
2. Deploy the `out/` folder to Netlify

### **Deploy to GitHub Pages**
1. Update `next.config.js` with your repository name
2. Build and export: `npm run build`
3. Deploy the `out/` folder to GitHub Pages

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ Performance
- 🎯 **Core Web Vitals**: Excellent
- 📦 **Bundle Size**: Optimized with code splitting
- 🖼 **Images**: Optimized with Next.js Image component
- 🚀 **Loading Speed**: Fast with static generation

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ayobami Akande**
- 🌐 Website: [Portfolio](https://michaelsportfolio-jzsmii60m-adeyemimichaels-projects.vercel.app)
- 💼 LinkedIn: [akandeayobami](https://linkedin.com/in/akandeayobami)
- 🐙 GitHub: [adeyemimichael](https://github.com/adeyemimichael)

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For seamless deployment and hosting
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For beautiful animations
- **Radix UI** - For accessible UI components
- **Unsplash** - For high-quality placeholder images

---

⭐ **If you found this project helpful, please give it a star!** ⭐

---

*Built with ❤️ by Ayobami Akande*