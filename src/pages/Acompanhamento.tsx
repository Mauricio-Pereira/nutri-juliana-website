import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ClipboardCheck,
  HeartHandshake,
  MessageCircle,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import heroBackground from '@/assets/background-home.webp';
import { contact, createWhatsAppHref } from '@/lib/contact';

const Acompanhamento = () => {
  const plans = [
    {
      name: 'Consulta com Retorno',
      duration: 'Cuidado pontual',
      cadence: 'Consulta individual',
      sessions: '1 consulta + 1 retorno',
      description: 'Para quem deseja avaliar o momento atual, receber um direcionamento personalizado e revisar os primeiros passos.',
      icon: ClipboardCheck,
      featured: false,
    },
    {
      name: 'Jornada Essencial',
      duration: '3 meses',
      cadence: 'Encontros mensais',
      sessions: '3 consultas + 1 retorno',
      description: 'Para iniciar mudanças com tempo para aplicar as orientações, observar respostas e realizar ajustes ao longo do processo.',
      icon: CalendarCheck,
      featured: false,
    },
    {
      name: 'Jornada Consistência',
      duration: '6 meses',
      cadence: 'Encontros mensais',
      sessions: '6 consultas + 1 retorno',
      description: 'Para consolidar hábitos, acompanhar diferentes fases da rotina e construir resultados mais sustentáveis.',
      icon: RefreshCw,
      featured: true,
    },
    {
      name: 'Jornada Intensiva',
      duration: '3 meses',
      cadence: 'Encontros quinzenais',
      sessions: '5 consultas + 1 retorno',
      description: 'Para momentos que pedem ajustes mais próximos e acompanhamento frequente da evolução.',
      icon: Sparkles,
      featured: false,
    },
    {
      name: 'Jornada Transformação',
      duration: '6 meses',
      cadence: 'Encontros quinzenais',
      sessions: '11 consultas + 1 retorno',
      description: 'Para quem busca um cuidado contínuo, com proximidade para adaptar estratégias e sustentar novos hábitos.',
      icon: HeartHandshake,
      featured: false,
    },
  ];

  const includedItems = [
    'Avaliação completa da rotina, do histórico e dos objetivos',
    'Plano alimentar personalizado e adaptado à sua realidade',
    'Análise dos exames laboratoriais apresentados',
    'Orientação sobre suplementação, quando indicada',
    'Ajustes de estratégia de acordo com a sua evolução',
    'Suporte para dúvidas durante o período de acompanhamento',
  ];

  const frequentlyAskedQuestions = [
    {
      question: 'Como funciona a nossa primeira consulta?',
      answer: 'Na nossa primeira consulta, quero te conhecer de verdade. Vamos conversar sobre sua rotina, seus hábitos, suas preferências, seu histórico e o que você deseja alcançar. A partir disso, construo uma estratégia alimentar individualizada, possível de aplicar e que faça sentido para a sua vida.',
    },
    {
      question: 'Como saber se o acompanhamento mensal ou quinzenal é melhor para mim?',
      answer: 'Eu avalio essa escolha com você. O formato mensal oferece mais tempo para colocar as orientações em prática entre os encontros. Já o quinzenal permite que eu acompanhe sua adaptação mais de perto e faça ajustes com maior frequência. Tudo depende do seu objetivo, da sua rotina e do suporte que você precisa neste momento.',
    },
    {
      question: 'As consultas são online?',
      answer: 'Sim. Atendo online por videochamada, para que você possa cuidar da sua saúde com privacidade e comodidade, onde estiver. No horário combinado, basta escolher um lugar tranquilo para conversarmos com calma.',
    },
    {
      question: 'Preciso ter exames laboratoriais para começar?',
      answer: 'Não precisa. Podemos começar mesmo sem exames. Se você tiver resultados recentes, traga para a consulta, pois eles podem me ajudar a compreender melhor o seu momento e tornar a avaliação ainda mais completa.',
    },
    {
      question: 'Posso falar com você entre as consultas?',
      answer: 'Sim. Enquanto seu acompanhamento estiver ativo, você pode me enviar dúvidas relacionadas às orientações que combinamos. Respondo dentro do meu horário de atendimento. Esse suporte ajuda nos ajustes do dia a dia, mas não substitui uma consulta nem deve ser utilizado em situações de urgência.',
    },
    {
      question: 'Como posso saber os valores e as condições?',
      answer: 'Pode me chamar pelo WhatsApp. Antes de simplesmente enviar os valores, gosto de entender um pouco do que você busca para indicar o formato de acompanhamento mais adequado. Depois disso, explico com clareza o investimento e as condições disponíveis.',
    },
    {
      question: 'E se eu ainda não souber qual acompanhamento escolher?',
      answer: 'Não tem problema. Você não precisa chegar com isso decidido. Me conte um pouco sobre seu objetivo e seu momento atual, e eu te ajudo a entender qual frequência e duração podem fazer mais sentido para você, sem compromisso.',
    },
  ];

  return (
    <Layout>
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-24 md:py-32"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-warm-900/90 via-warm-900/75 to-warm-900/25" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">
              Acompanhamento nutricional
            </p>
            <h1 className="font-serif text-5xl font-bold leading-tight md:text-6xl">
              Cuidado próximo para mudanças que permanecem
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              Sua alimentação não precisa caber em uma fórmula pronta. Escolha um acompanhamento que respeita seu momento, sua rotina e o tempo necessário para construir resultados sustentáveis.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white px-7 py-6 text-base text-primary hover:bg-white/90">
                <a href="#formatos">
                  Ver formatos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/50 bg-white/10 px-7 py-6 text-base text-white backdrop-blur-sm hover:bg-white hover:text-primary">
                <a href={contact.packagesWhatsappHref} target="_blank" rel="noopener noreferrer">
                  Conversar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Mais do que uma consulta
              </p>
              <h2 className="font-serif text-4xl font-bold leading-tight text-foreground">
                Orientação, aplicação e ajustes ao longo do caminho
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A consulta organiza o ponto de partida. O acompanhamento permite entender como seu corpo e sua rotina respondem, corrigir o que não funcionou e fortalecer o que faz sentido para você.
              </p>
            </div>
            <Card className="border-primary/20 bg-secondary/60 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Em todos os formatos, o cuidado pode incluir:
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {includedItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/85">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="formatos" className="scroll-mt-24 bg-muted/40 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Formatos de cuidado
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Encontre o ritmo ideal para você
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A frequência mais adequada depende do seu objetivo e do nível de suporte que você precisa neste momento.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.featured
                    ? 'border-primary bg-primary text-primary-foreground shadow-xl'
                    : 'border-primary/15 bg-card'
                }`}
              >
                {plan.featured && (
                  <div className="bg-warm-900 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Mais tempo para consolidar hábitos
                  </div>
                )}
                <CardContent className="flex h-full flex-col p-7">
                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full ${plan.featured ? 'bg-white/15' : 'bg-primary/10'}`}>
                    <plan.icon className={`h-6 w-6 ${plan.featured ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${plan.featured ? 'text-white/75' : 'text-primary'}`}>
                    {plan.duration}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold">{plan.name}</h3>
                  <div className={`my-5 h-px ${plan.featured ? 'bg-white/20' : 'bg-border'}`} />
                  <p className="font-semibold">{plan.sessions}</p>
                  <p className={`mt-1 text-sm ${plan.featured ? 'text-white/75' : 'text-primary'}`}>
                    {plan.cadence}
                  </p>
                  <p className={`mt-4 flex-grow leading-relaxed ${plan.featured ? 'text-white/85' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </p>
                  <Button
                    asChild
                    size="lg"
                    variant={plan.featured ? 'secondary' : 'outline'}
                    className={`mt-7 w-full ${plan.featured ? 'bg-white text-primary hover:bg-white/90' : 'border-primary/30 hover:bg-primary hover:text-primary-foreground'}`}
                  >
                    <a
                      href={createWhatsAppHref(`Olá, gostaria de saber mais sobre o formato ${plan.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quero saber mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-primary/15 bg-background p-6 text-center shadow-sm">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Os detalhes de investimento e condições são apresentados de forma individual, após entendermos qual formato faz mais sentido para o seu momento.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Dúvidas frequentes
              </p>
              <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                Antes de começarmos
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Separei aqui algumas respostas para você se sentir mais segura e entender como será o nosso cuidado.
              </p>
            </div>

            <Accordion type="single" collapsible className="rounded-2xl border border-primary/15 bg-card px-6 shadow-sm sm:px-8">
              {frequentlyAskedQuestions.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index + 1}`} className="last:border-b-0">
                  <AccordionTrigger className="py-6 text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline sm:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pr-8 text-base leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <MessageCircle className="mx-auto mb-5 h-10 w-10" />
          <h2 className="font-serif text-4xl font-bold">Ainda não sabe qual escolher?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed opacity-90">
            Me conte um pouco sobre seus objetivos. Eu te ajudo a identificar o formato de acompanhamento mais adequado, sem compromisso.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 bg-white px-8 py-6 text-base text-primary hover:bg-white/90">
            <a href={contact.packagesWhatsappHref} target="_blank" rel="noopener noreferrer">
              Conversar comigo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Acompanhamento;
