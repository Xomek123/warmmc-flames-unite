import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Twitter, Youtube, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-fire bg-clip-text text-transparent">
              WarmMC.EU
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Najcieplejsza społeczność Minecraft w Europie. Dołącz do tysięcy graczy w epickich przygodach.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover:text-fire-accent transition-all duration-300">
                <MessageSquare className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-fire-accent transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-fire-accent transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-fire-accent transition-all duration-300">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Szybkie Linki</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Zasady Serwera</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Pierwsze Kroki</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Lista Komend</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Rangi i Korzyści</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Społeczność</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Serwer Discord</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Forum</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Galeria Graczy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Kalendarz Wydarzeń</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Wsparcie</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Centrum Pomocy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Zgłoś Błąd</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Kontakt z Administracją</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Donacje</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 WarmMC.EU. Wszystkie prawa zastrzeżone.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              IP Serwera: <span className="text-fire-accent font-mono">play.warmmc.eu</span>
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Polityka Prywatności</a>
            <a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">Warunki Usługi</a>
            <a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors duration-300">RODO</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;