// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// export function CursorAnimation() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHoveringText, setIsHoveringText] = useState(false);

//   useEffect(() => {
//     const updateMousePosition = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseOver = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
      
//       // Check if hovering over text elements
//       const textElements = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'SPAN', 'A', 'BUTTON', 'LABEL'];
//       const isTextElement = textElements.includes(target.tagName);
      
//       // Also check for elements with text content
//       const hasTextContent = target.textContent && target.textContent.trim().length > 0;
      
//       // Check if element has text-related classes - use getAttribute to handle SVG elements
//       const className = target.getAttribute('class') || '';
//       const hasTextClass = className.includes('text-') || 
//                           className.includes('font-') ||
//                           className.includes('title') ||
//                           className.includes('heading');

//       setIsHoveringText(isTextElement || (hasTextContent && hasTextClass));
//     };

//     const handleMouseOut = () => {
//       setIsHoveringText(false);
//     };

//     window.addEventListener('mousemove', updateMousePosition);
//     document.addEventListener('mouseover', handleMouseOver);
//     document.addEventListener('mouseout', handleMouseOut);

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//       document.removeEventListener('mouseover', handleMouseOver);
//       document.removeEventListener('mouseout', handleMouseOut);
//     };
//   }, []);

//   return (
//     <>
//       {/* Main cursor dot */}
//       <motion.div
//         className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
//         style={{
//           x: mousePosition.x - 4,
//           y: mousePosition.y - 4,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 500,
//           damping: 28,
//         }}
//       />
      
//       {/* Animated circle that zooms out on text hover */}
//       <motion.div
//         className="fixed top-0 left-0 border-2 border-primary/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
//         style={{
//           x: mousePosition.x,
//           y: mousePosition.y,
//         }}
//         animate={{
//           width: isHoveringText ? 60 : 20,
//           height: isHoveringText ? 60 : 20,
//           x: mousePosition.x - (isHoveringText ? 30 : 10),
//           y: mousePosition.y - (isHoveringText ? 30 : 10),
//           opacity: isHoveringText ? 0.8 : 0.4,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 300,
//           damping: 25,
//         }}
//       />
      
//       {/* Outer glow effect for text hover */}
//       <motion.div
//         className="fixed top-0 left-0 bg-primary/10 rounded-full pointer-events-none z-[9997] blur-sm"
//         style={{
//           x: mousePosition.x,
//           y: mousePosition.y,
//         }}
//         animate={{
//           width: isHoveringText ? 80 : 0,
//           height: isHoveringText ? 80 : 0,
//           x: mousePosition.x - (isHoveringText ? 40 : 0),
//           y: mousePosition.y - (isHoveringText ? 40 : 0),
//           opacity: isHoveringText ? 0.3 : 0,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 200,
//           damping: 30,
//         }}
//       />
//     </>
//   );
// }