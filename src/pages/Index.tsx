import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Baby, Leaf, Scale, ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/background-home.png';

const Index = () => {
  const specialties = [
    {
      id: 'saude-mulher',
      icon: Heart,
      title: 'Saúde da Mulher',
      description: 'Cuidar da saúde da mulher envolve compreender as nuances e particularidades de cada fase da vida.',
      fullDescription: 'Foco especialmente em áreas como fertilidade, saúde reprodutiva, ciclos menstruais, endometriose e síndrome do ovário policístico (SOP). Se você está tentando engravidar, lidando com desafios hormonais ou simplesmente buscando um equilíbrio menstrual, estou aqui para ajudar.',
      color: 'text-pink-600',
      bgImage: '/img/saude-da-mulher.png',
    },
    {
      id: 'materno-infantil',
      icon: Baby,
      title: 'Materno-Infantil',
      description: 'A nutrição durante a gestação e a infância é crucial para um desenvolvimento saudável.',
      fullDescription: 'Acompanho desde a pré-concepção, gestação, pós-parto e amamentação, oferecendo orientações que promovem uma alimentação balanceada, com foco em nutrientes essenciais. Para os pequenos, trabalho na introdução alimentar e na formação de hábitos saudáveis, respeitando cada fase de desenvolvimento e necessidades individuais.',
      color: 'text-blue-600',
      bgImage: '/img/materno-infantil.png',
    },
    {
      id: 'vegetarianismo',
      icon: Leaf,
      title: 'Vegetarianismo',
      description: 'Seja por questões éticas, ambientais ou de saúde, a alimentação vegetariana é uma escolha cada vez mais comum.',
      fullDescription: 'Ofereço orientação para quem deseja adotar ou já segue uma dieta vegetariana, garantindo que todos os nutrientes essenciais sejam incluídos na alimentação. Exploramos juntos opções saborosas e nutritivas, mostrando que é possível ter uma alimentação completa e cheia de sabores.',
      color: 'text-green-600',
      bgImage: '/img/vegetarianismo.png',
    },
    {
      id: 'emagrecimento',
      icon: Scale,
      title: 'Emagrecimento',
      description: 'O processo de emagrecimento vai além de perder peso. É sobre conquistar saúde, bem-estar e autoconfiança.',
      fullDescription: 'Trabalho com planos alimentares individualizados, que respeitam suas preferências e rotina, sem restrições extremas. Meu objetivo é promover uma relação saudável com a comida, ajudando a entender sinais de fome e saciedade, e incentivando a prática de hábitos sustentáveis.',
      color: 'text-purple-600',
      bgImage: '/img/emagrecimento.png',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
            Juliana Rabelo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow font-light">
            Nutrindo futuras gerações com amor 💕
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full"
          >
            <a href="https://api.whatsapp.com/send?phone=5512997848513&text=Olá,%20gostaria%20de%20agendar%20minha%20consulta.">
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
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
                src={'public/img/profile-photo-1.jpeg'}
                alt="Juliana Rabelo - Nutricionista"
                className="rounded-2xl shadow-2xl w-full h-auto"
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
              className="group relative w-full h-96 lg:h-[29rem] text-white flex items-center justify-center text-center overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              {/* Background Image com overlay */}
              <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 z-0"
          style={{ backgroundImage: `url(${specialty.bgImage})` }}
              />
              
              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-black/50 z-0 transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" />
              
              {/* Overlay adicional que muda no hover */}
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/40 transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-0" />
              
              {/* Conteúdo */}
              <div className="relative z-10 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:mt-[40%] group-hover:-translate-y-20">
          {/* Título sempre visível */}
          <h3 className="font-serif text-2xl font-bold mb-4 z-10" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            {specialty.title}
          </h3>
          
          {/* Descrição que aparece no hover */}
          <p className="opacity-0 max-h-0 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100 group-hover:max-h-96 text-center mx-5 text-sm lg:text-base leading-relaxed">
            {specialty.fullDescription}
                </p>
              </div>
            </div>
          ))}
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
            className="text-lg px-8 py-6 rounded-full"
          >
            <a href="https://api.whatsapp.com/send?phone=5512997848513&text=Olá,%20gostaria%20de%20agendar%20minha%20consulta.">
              Agendar Consulta pelo WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
