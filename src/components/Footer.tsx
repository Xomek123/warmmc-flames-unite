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
              The warmest Minecraft community in Europe. Join thousands of players in epic adventures.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover:text-fire-accent">
                <MessageSquare className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-fire-accent">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-fire-accent">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-fire-accent">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Server Rules</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Getting Started</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Commands List</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Ranks & Perks</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Discord Server</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Forums</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Player Gallery</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Events Calendar</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Report a Bug</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Contact Staff</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Donations</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 WarmMC.EU. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Server IP: <span className="text-fire-accent font-mono">play.warmmc.eu</span>
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-fire-accent transition-colors">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;