"use client";

import { useState } from "react";
import Link from "next/link";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import  logoClubArte  from "../public/images/logo-clube-arte.png";
import { useMediaQuery } from 'react-responsive';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <header className="fixed w-full bg-transparent z-50 border-b border-pink-500/30">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src={logoClubArte} 
              alt="Clube Arte Logo" 
              className="h-5 w-auto"
            />
          </Link>
  
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={`hover:text-pink-500 text-pink-300 transition-all hover:text-shadow-neon`}>
                    Início
                  </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#services" legacyBehavior passHref>
                    <NavigationMenuLink className={`hover:text-pink-500 text-pink-300 transition-all hover:text-shadow-neon`}>
                      Serviços
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#portfolio" legacyBehavior passHref>
                    <NavigationMenuLink className={`hover:text-pink-500 text-pink-300 transition-all hover:text-shadow-neon`}>
                      Portfólio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#contact" legacyBehavior passHref>
                    <NavigationMenuLink className={`hover:text-pink-500 text-pink-300 transition-all hover:text-shadow-neon`}>
                      Contato
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
  
          <Button className="hidden md:inline-flex bg-pink-500 hover:bg-pink-600 text-white shadow-neon-pink">
            Começar Agora
          </Button>
  
          <button
            className="md:hidden text-pink-300 hover:text-pink-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
  
        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-pink-300 hover:text-pink-500 hover:bg-pink-900/30 transition-all text-shadow-neon"
              >
                Início
              </Link>
              <Link
                href="#services"
                className="block px-3 py-2 rounded-md text-base font-medium text-pink-300 hover:text-pink-500 hover:bg-pink-900/30 transition-all text-shadow-neon"
              >
                Serviços
              </Link>
              <Link
                href="#portfolio"
                className="block px-3 py-2 rounded-md text-base font-medium text-pink-300 hover:text-pink-500 hover:bg-pink-900/30 transition-all text-shadow-neon"
              >
                Portfólio
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-pink-300 hover:text-pink-500 hover:bg-pink-900/30 transition-all text-shadow-neon"
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </header>
      {/* Estilos adicionais no Tailwind */}
      <style jsx global>{`
        .hover\:text-shadow-neon:hover {
          text-shadow: 0 0 5px #ff69b4, 0 0 10px #ff69b4, 0 0 20px #ff69b4;
        }
        .shadow-neon-pink {
          box-shadow: 0 0 10px #ff69b4, 0 0 20px #ff69b4;
        }
      `}</style>
    </>
  );
}