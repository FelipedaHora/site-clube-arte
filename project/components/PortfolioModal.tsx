"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { StaticImageData } from "next/image";

interface PortfolioItemDetail {
  title: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  mainImage: string | StaticImageData;
  gallery: (string | StaticImageData)[];
  logoAnimation?: string;
}


interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItemDetail | null;
}

export default function PortfolioModal({ isOpen, onClose, item }: PortfolioModalProps) {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{item.title}</DialogTitle>
          <DialogDescription className="text-lg text-primary">
            {item.client}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-4">
          {/* Main Image */}
          <AspectRatio ratio={16 / 9}>
            <img
              src={typeof item.mainImage === 'string' ? item.mainImage : item.mainImage.src}
              alt={item.title}
              className="rounded-lg object-cover w-full h-full"
            />
          </AspectRatio>


          {/* Project Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Sobre o Projeto</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>

          {/* Challenge and Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold">O Desafio</h4>
              <p className="text-muted-foreground">{item.challenge}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Nossa Solução</h4>
              <p className="text-muted-foreground">{item.solution}</p>
            </div>
          </div>

          {/* Logo Animation if available */}
          {item.logoAnimation && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Evolução da Marca</h3>
              <div className="bg-muted rounded-lg p-4">
                <img
                  src={item.logoAnimation}
                  alt="Animação do Logo"
                  className="mx-auto"
                />
              </div>
            </div>
          )}

          {/* Image Gallery */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Galeria do Projeto</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {item.gallery.map((image, index) => (
              <AspectRatio key={index} ratio={1}>
                <img
                  src={typeof image === 'string' ? image : image.src}
                  alt={`${item.title} - Imagem ${index + 1}`}
                  className="rounded-lg object-cover w-full h-full hover:opacity-90 transition-opacity"
                />
              </AspectRatio>
            ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-muted p-6 rounded-lg text-center space-y-4">
            <h3 className="text-xl font-semibold">Gostou do que viu?</h3>
            <p className="text-muted-foreground">
              Vamos criar algo incrível juntos para sua marca.
            </p>
            <Button size="lg" className="group" onClick={() => {
              onClose();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Iniciar Projeto
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}