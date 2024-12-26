"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:clubeartemidia@gmail.com?subject=Nova Consulta&body=${encodeURIComponent(message)}`;
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5544998829108", "_blank");
  };

  return (
    <section id="contact" className="py-16 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground mb-8">
            Pronto para transformar sua marca? Vamos discutir seu projeto.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center justify-center gap-4 p-6 bg-background rounded-lg shadow-sm">
              <Mail className="h-6 w-6 text-primary" />
              <div className="text-left">
                <h3 className="font-semibold">E-mail</h3>
                <p className="text-sm text-muted-foreground">clubeartemidia@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 bg-background rounded-lg shadow-sm">
              <Phone className="h-6 w-6 text-primary" />
              <div className="text-left">
                <h3 className="font-semibold">Telefone</h3>
                <p className="text-sm text-muted-foreground">(44) 99882-9108</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Sua mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-[150px]"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button type="submit" size="lg" className="group">
                Enviar E-mail
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={handleWhatsApp}
              >
                Contato via WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}