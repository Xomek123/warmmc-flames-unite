import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I join the WarmMC.EU server?",
    answer: "Simply open Minecraft, go to Multiplayer, and add our server IP: play.warmmc.eu. Make sure you're using the correct version (we support 1.16-1.21)."
  },
  {
    question: "Is the server free to play?",
    answer: "Yes! WarmMC.EU is completely free to play. We offer optional premium ranks and cosmetics to support the server, but all core gameplay features are available to everyone."
  },
  {
    question: "What version of Minecraft do you support?",
    answer: "We support Minecraft Java Edition versions 1.16 through 1.21. We recommend using the latest version for the best experience and all features."
  },
  {
    question: "Are there any rules I need to follow?",
    answer: "Yes, we have a few simple rules to ensure everyone has fun: no griefing, no cheating/hacking, be respectful to other players, and no inappropriate content. Full rules are available on our Discord."
  },
  {
    question: "How do I claim land and protect my builds?",
    answer: "Use the /claim command with a golden shovel to claim land. You can also create towns and nations for larger communities. All claimed areas are automatically protected from griefing."
  },
  {
    question: "Can I play with friends who are new to the server?",
    answer: "Absolutely! You can invite friends, create parties, and even start your own town together. We have a referral system that rewards both you and your friends when they join."
  },
  {
    question: "What should I do if I encounter a bug or need help?",
    answer: "Join our Discord server and create a ticket in the #support channel. Our staff team is active and will help you resolve any issues quickly."
  },
  {
    question: "Are there regular events and updates?",
    answer: "Yes! We host weekly events, seasonal celebrations, building contests, and regular content updates. Follow our Discord announcements to stay updated on all events."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-fire bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about joining and playing on WarmMC.EU
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 hover:shadow-warm transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-fire-accent transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;