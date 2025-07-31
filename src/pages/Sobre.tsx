import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Users, Heart, ArrowRight } from 'lucide-react';
import julianaProfile from '@/assets/juliana-profile.jpg';

const Sobre = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: 'Graduação em Nutrição',
      description: 'Formada em Nutrição pela UNIP',
      year: '2023',
    },
    {
      icon: Award,
      title: 'Nutricionista na Clinica Seven',
      description: 'Nutricionista responsável por atendimentos clínicos com foco em emagrecimento e saúde da mulher',
      year: '2024-Atualmente',
    },
    {
      icon: Users,
      title: 'Experiência Clínica',
      description: 'Mais de 3000 atendimentos realizados',
      year: '2023-Atualmente',
    },
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Abordagem centrada no paciente e suas necessidades individuais',
      year: 'Sempre',
    },
  ];

  const values = [
    {
      title: 'Acolhimento',
      description: 'Cada paciente é único e merece um atendimento personalizado e acolhedor.',
    },
    {
      title: 'Sustentabilidade',
      description: 'Mudanças graduais e sustentáveis são mais eficazes que dietas restritivas.',
    },
    {
      title: 'Evidência Científica',
      description: 'Baseio minhas orientações nas melhores evidências científicas disponíveis.',
    },
    {
      title: 'Qualidade de Vida',
      description: 'O objetivo é sempre promover bem-estar e qualidade de vida.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(img/background-home.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl font-bold mb-6 text-white">
                Conheça Juliana Rabelo
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Uma profissional dedicada à transformação de vidas através da 
                alimentação consciente e saudável, especializada no cuidado integral 
                da saúde da mulher e da família.
              </p>
              {/* <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <a href="/contato">
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button> */}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              <img
                src={'/img/profile-photo-4.png'}
                alt="Juliana Rabelo - Nutricionista"
                className="relative z-10 rounded-2xl shadow-2xl w-full h-auto border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Minha História */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(img/saude-da-mulher.png)` }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-8 text-center text-foreground">
              Minha História
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/10">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Minha jornada na nutrição começou com uma paixão pessoal pela alimentação 
                saudável e o desejo de ajudar as pessoas a descobrirem o poder transformador 
                de uma nutrição bem orientada.
              </p>
              <p>
                Durante minha formação, me apaixonei especialmente pela <strong className="text-foreground">
                nutrição materno-infantil</strong> e pela <strong className="text-foreground">
                saúde da mulher</strong>. Percebi como esses momentos únicos da vida 
                requerem um cuidado especial e uma abordagem mais humanizada.
              </p>
              <p>
                Acredito que cada pessoa tem uma história única 
                com a comida, e meu papel é ajudar a construir uma relação mais saudável e 
                prazerosa com a alimentação.
              </p>
              <p>
                Hoje, tenho a alegria de acompanhar mulheres em suas jornadas de 
                <strong className="text-foreground"> fertilidade</strong>, 
                <strong className="text-foreground"> gestação</strong>, 
                <strong className="text-foreground"> amamentação</strong> e 
                <strong className="text-foreground"> maternidade</strong>, além de orientar 
                sobre vegetarianismo e emagrecimento saudável.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualificações */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(img/materno-infantil.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/70"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center text-white">
            Formação e Experiência
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualifications.map((qual, index) => (
              <Card key={index} className="h-full bg-white/95 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <qual.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-xl font-semibold text-foreground">
                          {qual.title}
                        </h3>
                        <span className="text-sm text-primary font-medium">
                          {qual.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {qual.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(img/vegetarianismo.png)` }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center text-foreground">
            Meus Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(img/profile-photo-4.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6 text-white">
            Vamos Construir Juntas Sua Jornada de Saúde?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Estou aqui para te acompanhar em cada passo rumo a uma alimentação 
            mais saudável e equilibrada.
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6 rounded-full bg-white text-primary hover:bg-white/90 shadow-xl"
          >
            <a href="https://api.whatsapp.com/send?phone=5512997848513&text=Olá,%20gostaria%20de%20agendar%20minha%20consulta.">
              Conversar no WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section> */}
    </Layout>
  );
};

export default Sobre;