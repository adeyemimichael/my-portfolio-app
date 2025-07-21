'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Maximize2, 
  Minimize2, 
  X,
  FileText,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PDFViewerProps {
  pdfUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export function PDFViewer({ pdfUrl, isOpen, onClose }: PDFViewerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Ayobami_Akande_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const zoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const zoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={cn(
            "relative bg-background rounded-lg shadow-2xl overflow-hidden",
            isFullscreen 
              ? "w-full h-full m-0 rounded-none" 
              : "w-[90vw] h-[90vh] max-w-4xl mx-auto mt-[5vh]"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Resume - Ayobami Akande</h3>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Zoom Controls */}
              <div className="flex items-center gap-1 mr-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={zoomOut}
                  disabled={zoom <= 50}
                  className="h-8 w-8 p-0"
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <span className="text-sm font-mono min-w-[3rem] text-center">
                  {zoom}%
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={zoomIn}
                  disabled={zoom >= 200}
                  className="h-8 w-8 p-0"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
              </div>

              {/* Page Navigation */}
              <div className="flex items-center gap-1 mr-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevPage}
                  disabled={currentPage <= 1}
                  className="h-8 w-8 p-0"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm font-mono min-w-[4rem] text-center">
                  {currentPage} / {totalPages}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextPage}
                  disabled={currentPage >= totalPages}
                  className="h-8 w-8 p-0"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Action Buttons */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownload}
                className="h-8 w-8 p-0"
              >
                <Download className="w-4 h-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="h-8 w-8 p-0"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* PDF Content */}
          <div className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900">
            <div className="flex justify-center p-4">
              <div 
                className="bg-white shadow-lg"
                style={{ 
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.2s ease-in-out'
                }}
              >
                <iframe
                  src={`${pdfUrl}#page=${currentPage}&zoom=${zoom}`}
                  className="w-[210mm] h-[297mm] border-0"
                  title="Resume PDF"
                  onLoad={(e) => {
                    // Try to get total pages (this might not work with all PDF viewers)
                    // For now, we'll assume it's a multi-page document
                    setTotalPages(4); // You can adjust this based on your actual PDF
                  }}
                />
              </div>
            </div>
          </div>

          {/* Footer with keyboard shortcuts */}
          <div className="px-4 py-2 border-t bg-background/95 backdrop-blur-sm">
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <div className="flex gap-4">
                <span>← → Navigate pages</span>
                <span>Esc Close</span>
              </div>
              <div>
                Use mouse wheel to scroll
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Keyboard shortcuts hook
export function usePDFKeyboardShortcuts(
  isOpen: boolean,
  onClose: () => void,
  onNextPage: () => void,
  onPrevPage: () => void
) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          onNextPage();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          onPrevPage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNextPage, onPrevPage]);
}