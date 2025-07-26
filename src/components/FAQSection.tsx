import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Jak dołączyć do serwera WarmMC.EU?",
    answer: "Po prostu otwórz Minecraft, przejdź do Multiplayer i dodaj IP naszego serwera: play.warmmc.eu. Upewnij się, że używasz odpowiedniej wersji (obsługujemy 1.16-1.21)."
  },
  {
    question: "Czy serwer jest darmowy?",
    answer: "Tak! WarmMC.EU jest całkowicie darmowy. Oferujemy opcjonalne rangi premium i kosmetyki aby wspierać serwer, ale wszystkie podstawowe funkcje rozgrywki są dostępne dla każdego."
  },
  {
    question: "Jaką wersję Minecraft obsługujecie?",
    answer: "Obsługujemy Minecraft Java Edition w wersjach od 1.16 do 1.21. Zalecamy używanie najnowszej wersji dla najlepszego doświadczenia i wszystkich funkcji."
  },
  {
    question: "Czy są jakieś zasady których muszę przestrzegać?",
    answer: "Tak, mamy kilka prostych zasad aby wszyscy dobrze się bawili: zakaz griefingu, zakaz cheaterstwa/hackowania, szanuj innych graczy i zakaz nieodpowiednich treści. Pełne zasady są dostępne na naszym Discordzie."
  },
  {
    question: "Jak mogę zabezpieczyć ziemię i chronić swoje budowle?",
    answer: "Użyj komendy /claim ze złotą łopatą aby zabezpieczyć ziemię. Możesz również tworzyć miasta i narody dla większych społeczności. Wszystkie zabezpieczone obszary są automatycznie chronione przed griefingiem."
  },
  {
    question: "Czy mogę grać ze znajomymi którzy są nowi na serwerze?",
    answer: "Oczywiście! Możesz zapraszać znajomych, tworzyć partie, a nawet zakładać własne miasto razem. Mamy system polecających który nagradza zarówno Ciebie jak i Twoich znajomych gdy dołączą."
  },
  {
    question: "Co powinienem zrobić jeśli napotkam błąd lub potrzebuję pomocy?",
    answer: "Dołącz na nasz serwer Discord i stwórz ticket w kanale #support. Nasz zespół administracji jest aktywny i szybko pomoże Ci rozwiązać wszelkie problemy."
  },
  {
    question: "Czy są regularne wydarzenia i aktualizacje?",
    answer: "Tak! Organizujemy cotygodniowe wydarzenia, sezonowe celebracje, konkursy budowlane i regularne aktualizacje contentu. Śledź ogłoszenia na naszym Discordzie aby być na bieżąco ze wszystkimi wydarzeniami."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-fire bg-clip-text text-transparent">
            Często Zadawane Pytania
          </h2>
          <p className="text-xl text-muted-foreground">
            Wszystko czego potrzebujesz wiedzieć o dołączeniu i grze na WarmMC.EU
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 hover:shadow-warm transition-all duration-500 hover:scale-102 transform"
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