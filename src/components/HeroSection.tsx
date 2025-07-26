import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Server, Users, Zap, Globe } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with fire overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-warm opacity-80" />
      
      {/* Floating ember particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-fire-accent rounded-full animate-ember-float opacity-70"
            style={{
              left: `${20 + i * 10}%`,
              bottom: `${10 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fire-flicker">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-fire bg-clip-text text-transparent drop-shadow-lg">
            WarmMC.EU
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the warmth of community in our premium Minecraft server. 
          Join thousands of players in an epic adventure!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Server className="mr-2" />
            Join Server
          </Button>
          <Button variant="ember" size="lg" className="text-lg px-8 py-4">
            <Users className="mr-2" />
            Discord Community
          </Button>
        </div>

        {/* Server stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-fire-accent/30 p-4 text-center animate-glow-pulse">
            <div className="text-2xl font-bold text-fire-accent">1,247</div>
            <div className="text-sm text-muted-foreground">Online Players</div>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-fire-accent/30 p-4 text-center animate-glow-pulse">
            <div className="text-2xl font-bold text-fire-accent">24/7</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-fire-accent/30 p-4 text-center animate-glow-pulse">
            <div className="text-2xl font-bold text-fire-accent">50+</div>
            <div className="text-sm text-muted-foreground">Game Modes</div>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-fire-accent/30 p-4 text-center animate-glow-pulse">
            <div className="text-2xl font-bold text-fire-accent">99.9%</div>
            <div className="text-sm text-muted-foreground">Stability</div>
          </Card>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;