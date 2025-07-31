import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Baby, Leaf, Scale, ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import julianaProfile from '@/assets/juliana-profile.jpg';

const Index = () => {
  const specialties = [
    {
      icon: Heart,
      title: 'Saúde da Mulher',
      description: 'Foco em fertilidade, saúde reprodutiva, ciclos menstruais, endometriose, SOP',
      color: 'text-pink-600',
    },
    {
      icon: Baby,
      title: 'Materno-Infantil',
      description: 'Pré-concepção ao pós-parto, amamentação, introdução alimentar',
      color: 'text-blue-600',
    },
    {
      icon: Leaf,
      title: 'Vegetarianismo',
      description: 'Orientação em alimentação plant-based garantindo perfil nutricional completo',
      color: 'text-green-600',
    },
    {
      icon: Scale,
      title: 'Emagrecimento',
      description: 'Controle de peso sustentável, sem restrições extremas',
      color: 'text-purple-600',
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
      <section className="py-20 bg-background">
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
                  Com especialização em <strong className="text-foreground">saúde da mulher</strong>, 
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
                src={julianaProfile}
                alt="Juliana Rabelo - Nutricionista"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Especialização */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4 text-foreground">
              Áreas de Especialização
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Atendimento especializado e personalizado para cada fase da sua vida
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className={`inline-flex p-4 rounded-full bg-background mb-4 ${specialty.color}`}>
                    <specialty.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                    {specialty.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow">
                    {specialty.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
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
