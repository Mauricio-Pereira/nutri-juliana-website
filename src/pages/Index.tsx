import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Baby, Leaf, Scale, ArrowRight, CalendarDays, MessagesSquare, Sparkles } from 'lucide-react';
import heroBackground from '@/assets/background-home.webp';
import { contact } from '@/lib/contact';

const Index = () => {
  const specialties = [
    {
      id: 'saude-mulher',
      icon: Heart,
      title: 'Saúde da Mulher',
      description: 'Cuidar da saúde da mulher envolve compreender as nuances e particularidades de cada fase da vida.',
      fullDescription: 'Foco especialmente em áreas como fertilidade, saúde reprodutiva, ciclos menstruais, endometriose e síndrome do ovário policístico (SOP). Se você está tentando engravidar, lidando com desafios hormonais ou simplesmente buscando um equilíbrio menstrual, estou aqui para ajudar.',
      color: 'text-pink-600',
      bgImage: '/img/saude-da-mulher.webp',
    },
    {
      id: 'materno-infantil',
      icon: Baby,
      title: 'Materno-Infantil',
      description: 'A nutrição durante a gestação e a infância é crucial para um desenvolvimento saudável.',
      fullDescription: 'Acompanho desde a pré-concepção, gestação, pós-parto e amamentação, oferecendo orientações que promovem uma alimentação balanceada, com foco em nutrientes essenciais. Para os pequenos, trabalho na introdução alimentar e na formação de hábitos saudáveis, respeitando cada fase de desenvolvimento e necessidades individuais.',
      color: 'text-blue-600',
      bgImage: '/img/materno-infantil.webp',
    },
    {
      id: 'vegetarianismo',
      icon: Leaf,
      title: 'Vegetarianismo',
      description: 'Seja por questões éticas, ambientais ou de saúde, a alimentação vegetariana é uma escolha cada vez mais comum.',
      fullDescription: 'Ofereço orientação para quem deseja adotar ou já segue uma dieta vegetariana, garantindo que todos os nutrientes essenciais sejam incluídos na alimentação. Exploramos juntos opções saborosas e nutritivas, mostrando que é possível ter uma alimentação completa e cheia de sabores.',
      color: 'text-green-600',
      bgImage: '/img/vegetarianismo.webp',
    },
    {
      id: 'emagrecimento',
      icon: Scale,
      title: 'Emagrecimento',
      description: 'O processo de emagrecimento vai além de perder peso. É sobre conquistar saúde, bem-estar e autoconfiança.',
      fullDescription: 'Trabalho com planos alimentares individualizados, que respeitam suas preferências e rotina, sem restrições extremas. Meu objetivo é promover uma relação saudável com a comida, ajudando a entender sinais de fome e saciedade, e incentivando a prática de hábitos sustentáveis.',
      color: 'text-purple-600',
      bgImage: '/img/emagrecimento.webp',
    },
  ];

  return (
    <Layout>
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/45 to-primary/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="max-w-2xl text-white">
            <p className="mb-5 inline-flex rounded-lg border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium uppercase tracking-[0.18em] backdrop-blur-sm">
              Nutrição clínica e materno-infantil
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight text-shadow-lg">
              Juliana Rabelo
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-xl text-white/90 text-shadow font-light leading-relaxed">
              Atendimento nutricional para saúde da mulher, gestação, vegetarianismo e emagrecimento saudável.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6 rounded-lg"
              >
                <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/50 bg-white/10 text-white hover:bg-white hover:text-primary text-base px-8 py-6 rounded-lg backdrop-blur-sm"
              >
                <a href="/sobre">
                  Conhecer a Juliana
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-4xl font-bold mb-6 text-foreground">
                Sobre Mim
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Olá, meu nome é <strong className="text-foreground">Juliana Rabelo</strong>, 
                  sou nutricionista e apaixonada por alimentação saudável e qualidade de vida.
                </p>
                <p>
                  Meu propósito é ajudar as pessoas a terem uma alimentação mais saudável e 
                  equilibrada, sem neuras e sem dietas restritivas. Acredito que a nutrição 
                  deve ser prazerosa, sustentável e adaptada ao estilo de vida de cada pessoa.
                </p>
                <p>
                  Com foco em <strong className="text-foreground">saúde da mulher</strong>, 
                  <strong className="text-foreground"> nutrição materno-infantil</strong>, 
                  <strong className="text-foreground"> vegetarianismo</strong> e 
                  <strong className="text-foreground"> emagrecimento saudável</strong>, 
                  ofereço um atendimento personalizado e humanizado.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" variant="outline">
                  <a href="/sobre">
                    Conhecer Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/img/profile-photo-5.webp"
                alt="Juliana Rabelo - Nutricionista"
                width="1200"
                height="1600"
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Especialização */}
      <section className="pb-9 bg-muted/30">
        <div className="text-center py-12 px-4">
          <h2 className="font-serif text-4xl font-bold mb-4 text-foreground">
            Áreas de Foco
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Atendimento especializado e personalizado para cada fase da sua vida
          </p>
        </div>
        
        {/* Container das áreas - Horizontal em desktop */}
        <div className="flex flex-col lg:flex-row p-0 m-0">
          {specialties.map((specialty) => (
            <div 
              key={specialty.id}
              className="group relative w-full h-96 lg:h-[29rem] text-white flex items-center justify-center text-center overflow-hidden cursor-pointer transition-all duration-700 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
            >
              {/* Background Image com overlay */}
              <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 z-0"
          style={{ backgroundImage: `url(${specialty.bgImage})` }}
              />
              
              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-black/50 z-0 transition-colors duration-700 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]" />
              
              {/* Overlay adicional que muda no hover */}
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/40 transition-colors duration-700 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] z-0" />
              
              {/* Conteúdo */}
              <div className="relative z-10 transition-all duration-700 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:mt-[40%] group-hover:-translate-y-20">
          {/* Título sempre visível */}
          <h3 className="font-serif text-2xl font-bold mb-4 z-10" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            {specialty.title}
          </h3>
          
          {/* Descrição que aparece no hover */}
          <p className="opacity-0 max-h-0 overflow-hidden transition-all duration-700 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100 group-hover:max-h-96 text-center mx-5 text-sm lg:text-base leading-relaxed">
            {specialty.fullDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Acompanhamento Nutricional */}
      <section className="relative overflow-hidden bg-background py-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/60 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Cuidado que continua
              </p>
              <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Um acompanhamento para cada momento da sua jornada
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Além da consulta individual, você pode contar com encontros periódicos para ajustar estratégias, acompanhar sua evolução e transformar orientações em hábitos possíveis para a sua rotina.
              </p>
              <Button asChild size="lg" className="mt-8 px-7 py-6 text-base">
                <a href="/acompanhamento">
                  Conhecer os formatos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-primary/20 bg-card/90 shadow-lg sm:translate-y-6">
                <CardContent className="p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <CalendarDays className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Encontros no seu ritmo
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Opções pontuais, mensais ou quinzenais, de acordo com seus objetivos e com a fase do cuidado.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card className="border-primary/20 bg-primary text-primary-foreground shadow-lg">
                  <CardContent className="p-7">
                    <Sparkles className="mb-4 h-7 w-7" />
                    <h3 className="font-serif text-xl font-semibold">Estratégia personalizada</h3>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">
                      Condutas e ajustes construídos a partir da sua realidade.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/20 bg-card/90 shadow-lg">
                  <CardContent className="p-7">
                    <MessagesSquare className="mb-4 h-7 w-7 text-primary" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">Suporte no processo</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Um canal para dúvidas entre os encontros durante o acompanhamento.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Pronta para Transformar sua Alimentação?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agende sua consulta e inicie sua jornada rumo a uma vida mais saudável e equilibrada.
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="secondary"
            className="px-4 py-6 text-base sm:px-8 sm:text-lg rounded-lg"
          >
            <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
              Agendar pelo WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
