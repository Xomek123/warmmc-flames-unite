import { Card } from "@/components/ui/card";
import { Sword, Crown, Shield, Gamepad2, Trophy, Heart } from "lucide-react";

const features = [
  {
    icon: Sword,
    title: "Epic PvP Battles",
    description: "Engage in thrilling player vs player combat with custom weapons and balanced gameplay mechanics."
  },
  {
    icon: Crown,
    title: "Kingdom Building",
    description: "Create and manage your own kingdom, form alliances, and conquer territories in our vast world."
  },
  {
    icon: Shield,
    title: "Advanced Protection",
    description: "Your builds are safe with our advanced grief protection and rollback systems."
  },
  {
    icon: Gamepad2,
    title: "Multiple Game Modes",
    description: "From survival to creative, skyblock to factions - find your perfect gaming experience."
  },
  {
    icon: Trophy,
    title: "Competitive Events",
    description: "Weekly tournaments, building contests, and seasonal events with amazing rewards."
  },
  {
    icon: Heart,
    title: "Friendly Community",
    description: "Join our welcoming community of players from around the world in a toxicity-free environment."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-fire bg-clip-text text-transparent">
            Why Choose WarmMC?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes our server the perfect place to call home in the Minecraft universe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/70 backdrop-blur-sm border-border/50 p-6 hover:shadow-warm transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-gradient-fire mr-4 group-hover:animate-fire-flicker">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;