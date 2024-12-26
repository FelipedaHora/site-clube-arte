"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Globe, BarChart, Camera, Megaphone, PenTool } from "lucide-react";

const services = [
  {
    title: "Design Gráfico",
    description: "Visuais atraentes que comunicam a mensagem da sua marca de forma eficaz.",
    icon: Paintbrush,
  },
  {
    title: "Design Web",
    description: "Sites responsivos que engajam e convertem visitantes.",
    icon: Globe,
  },
  {
    title: "Marketing Digital",
    description: "Campanhas estratégicas que impulsionam crescimento e engajamento.",
    icon: BarChart,
  },
  {
    title: "Fotografia",
    description: "Fotografia profissional que conta a história da sua marca.",
    icon: Camera,
  },
  {
    title: "Mídias Sociais",
    description: "Conteúdo envolvente que constrói sua presença online.",
    icon: Megaphone,
  },
  {
    title: "Identidade Visual",
    description: "Elementos de marca coesos que tornam você memorável.",
    icon: PenTool,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um conjunto completo de serviços criativos para ajudar sua marca a prosperar na era digital.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardHeader>
                    <service.icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}