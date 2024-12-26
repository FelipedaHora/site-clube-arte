"use client";

import { ArrowRight, MousePointerClick, ChevronDown } from "lucide-react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useResponsiveBackground } from "@/hooks/useResponsiveBackground";
import { useMediaQuery } from 'react-responsive';

const backgroundImages = {
  desktop: "/images/landing-page.jpg",
  mobile: "/images/landing-page-mobile.jpg"
};

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const background = useResponsiveBackground(backgroundImages);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
  
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
  
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const scrollToAbout = () => {
    const servicesSection = document.getElementById('about');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          <Image
            src={background}
            alt="Background"
            priority
            quality={100}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={background}
            alt="Hero Background"
            priority
            quality={100}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <>
      {isMobile ? (
        // Layout Mobile
        <div className="relative z-10 flex items-end justify-center h-screen sm:items-center">
          <div className={`container px-4 mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} sm:mb-0 mb-10`}>
            <div className="max-w-4xl text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-16 mb-6 text-white leading-snug font-poppins">
                <span className="text-4xl sm:text-5xl lg:text-6xl">Posicione-se no Digital,</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-poppins text-4xl sm:text-5xl lg:text-6xl">
                  Conecte-se com Pessoas
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-poppins text-4xl sm:text-5xl lg:text-6xl">
                  e Venda mais.
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 max-w-3xl leading-relaxed font-poppins">
                Somos especialistas em posicionamento nas redes sociais para alavancar suas vendas.
              </p>
              <div className="flex flex-col items-center sm:items-start gap-4">
                <Button 
                  size="lg"
                  onClick={scrollToAbout} 
                  className="group bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-primary/90 font-poppins w-64 h-16 sm:w-[485px] sm:h-[97px] text-lg sm:text-2xl"
                >
                  Começar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Layout Web
        <div className={`relative z-10 container px-4 mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white text-left leading-snug font-poppins">
              Posicione-se no Digital,
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-poppins">
                Conecte-se com Pessoas
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-poppins">
                e Venda mais.
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-3xl text-left leading-relaxed font-poppins">
              <span>Somos uma agência especializada em</span>
              <br />
              <span>posicionamento em redes sociais para</span>
              <br />
              <span>promover e alavancar suas vendas.</span>
              <br />
              <span>Somos uma extensão do seu negócio.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button 
                size="lg"
                onClick={scrollToAbout} 
                className="group bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-primary/90 font-poppins w-[485px] h-[97px] text-2xl"
              >
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
    </section>
  );
}