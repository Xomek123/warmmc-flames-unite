import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Users, Calendar, Award } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-fire bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with thousands of players, share your builds, get help, and stay updated with the latest news
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Discord Card */}
          <Card className="bg-card/70 backdrop-blur-sm border-border/50 p-8 text-center hover:shadow-fire transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-fire rounded-full mb-6 animate-fire-flicker">
              <MessageSquare className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Discord Server</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join our active Discord community with over 15,000 members. Get instant support, 
              participate in events, and make new friends!
            </p>
            <Button variant="fire" size="lg" className="w-full">
              Join Discord
            </Button>
          </Card>

          {/* Community Stats */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 flex items-center space-x-4 hover:shadow-warm transition-all duration-300">
              <div className="p-3 bg-gradient-fire rounded-full animate-glow-pulse">
                <Users className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-fire-accent">15,247</div>
                <div className="text-muted-foreground">Discord Members</div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 flex items-center space-x-4 hover:shadow-warm transition-all duration-300">
              <div className="p-3 bg-gradient-fire rounded-full animate-glow-pulse">
                <Calendar className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-fire-accent">Weekly</div>
                <div className="text-muted-foreground">Community Events</div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 flex items-center space-x-4 hover:shadow-warm transition-all duration-300">
              <div className="p-3 bg-gradient-fire rounded-full animate-glow-pulse">
                <Award className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-fire-accent">24/7</div>
                <div className="text-muted-foreground">Active Moderation</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Community Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-fire-secondary rounded-full mb-4">
              <MessageSquare className="w-6 h-6 text-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Live Chat Support</h4>
            <p className="text-muted-foreground">Get help instantly from our staff and helpful community members</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-fire-secondary rounded-full mb-4">
              <Calendar className="w-6 h-6 text-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Events & Giveaways</h4>
            <p className="text-muted-foreground">Regular events with prizes, building contests, and exclusive rewards</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-fire-secondary rounded-full mb-4">
              <Award className="w-6 h-6 text-foreground" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Showcase Your Builds</h4>
            <p className="text-muted-foreground">Share your creations and get featured in our community galleries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;