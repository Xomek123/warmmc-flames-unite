import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Users, Calendar, Award } from "lucide-react";
const CommunitySection = () => {
  return <section className="py-20 px-6 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-fire bg-clip-text text-transparent">
            Dołącz do Naszej Społeczności
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Połącz się z tysiącami graczy, dziel się swoimi budowlami, uzyskaj pomoc i bądź na bieżąco z najnowszymi wiadomościami
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Discord Card */}
          <Card className="bg-card/70 backdrop-blur-sm border-border/50 p-8 text-center hover:shadow-fire transition-all duration-500 transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-fire rounded-full mb-6 animate-fire-flicker">
              <MessageSquare className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Serwer Discord</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Dołącz do naszej aktywnej społeczności Discord z ponad 15,000 członków. Uzyskaj natychmiastową pomoc, 
              uczestniczj w wydarzeniach i zawieraj nowe znajomości!
            </p>
            <Button variant="fire" size="lg" className="w-full transition-all duration-350">
              Dołącz do Discord
            </Button>
          </Card>

          {/* Community Stats */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 flex items-center space-x-4 hover:shadow-warm transition-all duration-500 transform hover:scale-105">
              <div className="p-3 bg-gradient-fire rounded-full animate-glow-pulse">
                <Users className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-fire-accent">15,247</div>
                <div className="text-muted-foreground">Członków Discord</div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 flex items-center space-x-4 hover:shadow-warm transition-all duration-500 transform hover:scale-105">
              <div className="p-3 bg-gradient-fire rounded-full animate-glow-pulse">
                <Calendar className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-fire-accent">Cotygodniowe</div>
                <div className="text-muted-foreground">Wydarzenia Społeczności</div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 flex items-center space-x-4 hover:shadow-warm transition-all duration-500 transform hover:scale-105">
              <div className="p-3 bg-gradient-fire rounded-full animate-glow-pulse">
                <Award className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-fire-accent">24/7</div>
                <div className="text-muted-foreground">Aktywna Moderacja</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Community Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center transform transition-all duration-500 hover:scale-105">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-fire-secondary rounded-full mb-4 animate-smooth-bounce">
              <MessageSquare className="w-6 h-6 text-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Wsparcie Live Chat</h4>
            <p className="text-muted-foreground">Uzyskaj pomoc natychmiast od naszego personelu i pomocnych członków społeczności</p>
          </div>
          <div className="text-center transform transition-all duration-500 hover:scale-105">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-fire-secondary rounded-full mb-4 animate-smooth-bounce">
              <Calendar className="w-6 h-6 text-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Wydarzenia i Konkursy</h4>
            <p className="text-muted-foreground">Regularne wydarzenia z nagrodami, konkursy budowlane i ekskluzywne nagrody</p>
          </div>
          <div className="text-center transform transition-all duration-500 hover:scale-105">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-fire-secondary rounded-full mb-4 animate-smooth-bounce">
              <Award className="w-6 h-6 text-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Pokaż Swoje Budowle</h4>
            <p className="text-muted-foreground">Dziel się swoimi kreacjami i zostań wyróżniony w naszych galeriach społeczności</p>
          </div>
        </div>
      </div>
    </section>;
};
export default CommunitySection;