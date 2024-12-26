"use client";

import AboutSection from "./AboutSection";

export default function About() {
  return (
    <section id="about" className="flex flex-col -space-y-[1px]">
      <AboutSection
        smallText="A Designer ideal para seu negócio"
        title={<>Quem é <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-poppins">Vittoria Vieira</span>?</>}
        description="Designer com mais de 8 anos de experiência em social media e gerenciamento de redes sociais. Minha especialidade é transformar a presença online de marcas em ferramentas de engajamento e vendas, criando conteúdos estratégicos que conectam, fidelizam e impulsionam resultados."
        backgroundImage={{
          desktop: "/images/BACKGROUND-ABOUT-VITTORIA.jpg",
          mobile: "/images/BACKGROUND-ABOUT-VITTORIA-MOBILE.jpg"
        }}
        className="border-b border-white/10"
      />
      <AboutSection
        smallText="O Programador ideal para seu negócio"
        title={<>Quem é <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-poppins">Felipe da Hora</span>?</>}
        description="Programador especializado em softwares para empresas de pequeno porte, landing pages, criação de sites e branding de marcas. Com minha expertise, ajudo negócios a se destacarem no digital, criando soluções visuais e funcionais que atraem clientes, fortalecem a identidade da marca e aumentam as conversões."
        align="right"
        backgroundImage={{
          desktop: "/images/BACKGROUND-ABOUT-FELIPE.png",
          mobile: "/images/BACKGROUND-ABOUT-FELIPE-MOBILE.jpg"
        }}
      />
    </section>
  );
}