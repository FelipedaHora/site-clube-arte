"use client";

import { cn } from "@/lib/utils";
import { useResponsiveBackground } from "@/hooks/useResponsiveBackground";
import { useEffect, useState } from "react";

interface AboutSectionProps {
  smallText: string;
  title: string | React.ReactNode;
  description: string;
  align?: "left" | "right";
  backgroundImage: {
    desktop: string;
    mobile: string;
  };
  className?: string;
}

export default function AboutSection({ 
  smallText, 
  title, 
  description, 
  align = "left",
  backgroundImage,
  className
}: AboutSectionProps) {
  const background = useResponsiveBackground(backgroundImage);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
  
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
  
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <div 
      className={cn(
        "relative flex items-center h-screen overflow-hidden",
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={background}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {isMobile ? (
        <div className="container relative z-20 px-4 mx-auto flex flex-col items-center justify-end h-screen pb-16">
          <div className="max-w-2xl text-center">
            <div className="space-y-4"> {/* Reduzi o espaço vertical */}
              <span className="text-white text-sm uppercase tracking-widest font-medium">
                {smallText}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                {title}
              </h2>
              <p className="text-gray-200 text-xl leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
        ) : (
          <div className="container relative z-20 px-4 mx-auto">
            <div className={`max-w-2xl ${align === "right" ? "ml-auto" : ""}`}>
              <div className="space-y-8">
                <span className="text-white text-primary text-sm uppercase tracking-wider font-medium">
                  {smallText}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white whitespace-nowrap">
                  {title}
                </h2>
                <p className="text-gray-200 text-xl leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}