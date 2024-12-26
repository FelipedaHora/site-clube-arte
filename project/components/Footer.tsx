import { Palette } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Palette className="h-6 w-6" />
              <span className="font-bold text-xl">Clube Arte</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Transforme sua marca com nossas soluções inovadoras de marketing e excelência criativa.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-foreground">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-muted-foreground hover:text-foreground">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>clubeartemidia@gmail.com</li>
              <li>(44) 99882-9108</li>
              <li>Rua Emilia Do Prado Silva, 421</li>
              <li>Paranvaí - PR, 87703-280</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Clube Arte. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}