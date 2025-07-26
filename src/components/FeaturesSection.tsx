import { Card } from "@/components/ui/card";
import { Sword, Crown, Shield, Gamepad2, Trophy, Heart } from "lucide-react";
const features = [{
  icon: Sword,
  title: "Epickie Walki PvP",
  description: "Weź udział w ekscytujących walkach gracz vs gracz z niestandardową bronią i zbalansowaną mechaniką gry."
}, {
  icon: Crown,
  title: "Budowanie Królestwa",
  description: "Stwórz i zarządzaj własnym królestwem, zawieraj sojusze i podbijaj terytoria w naszym rozległym świecie."
}, {
  icon: Shield,
  title: "Zaawansowana Ochrona",
  description: "Twoje budowle są bezpieczne dzięki naszym zaawansowanym systemom ochrony przed griefingiem."
}, {
  icon: Gamepad2,
  title: "Wiele Trybów Gry",
  description: "Od survival po creative, skyblock po factions - znajdź swoje idealne doświadczenie gamingowe."
}, {
  icon: Trophy,
  title: "Konkurencyjne Wydarzenia",
  description: "Cotygodniowe turnieje, konkursy budowlane i sezonowe wydarzenia z niesamowitymi nagrodami."
}, {
  icon: Heart,
  title: "Przyjazna Społeczność",
  description: "Dołącz do naszej przyjaznej społeczności graczy z całego świata w środowisku wolnym od toksyczności."
}];
const FeaturesSection = () => {
  return <section className="py-20 px-6 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-fire bg-clip-text text-transparent mx-0 py-[10px] my-[10px] px-[10px]">
            Dlaczego WarmMC?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Odkryj, co czyni nasz serwer idealnym miejscem do nazywania domem w uniwersum Minecraft
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <Card key={index} className="bg-card/70 backdrop-blur-sm border-border/50 p-6 hover:shadow-warm transition-all duration-500 hover:scale-105 group transform">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-gradient-fire mr-4 group-hover:animate-fire-flicker">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;