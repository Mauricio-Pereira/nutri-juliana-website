import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Instagram, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import consultationImage from '@/assets/consultation.jpg';

const Contato = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone/WhatsApp',
      info: '+55 12 99784-8513',
      link: 'https://api.whatsapp.com/send?phone=5512997848513&text=Olá,%20gostaria%20de%20agendar%20minha%20consulta.',
      description: 'Atendimento via WhatsApp',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      info: '@julianarabelo_nutri',
      link: 'https://www.instagram.com/julianarabelo_nutri/',
      description: 'Dicas e conteúdos diários',
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@julianarabelo.com',
      link: 'mailto:contato@julianarabelo.com',
      description: 'Para dúvidas gerais',
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'Atendimento Presencial e Online',
      link: '#',
      description: 'Flexibilidade para você',
    },
  ];

  const schedule = [
    { day: 'Segunda a Sexta', hours: '08:00 - 18:00' },
    { day: 'Sábado', hours: '08:00 - 12:00' },
    { day: 'Domingo', hours: 'Fechado' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${consultationImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-serif text-5xl font-bold mb-6">
            Vamos Conversar?
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Estou aqui para te ajudar a transformar sua relação com a alimentação. 
            Entre em contato e vamos iniciar sua jornada de saúde juntas!
          </p>
        </div>
      </section>

      {/* Principais Formas de Contato */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4 text-foreground">
              Como me Encontrar
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha a forma mais conveniente para entrar em contato
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <contact.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                    {contact.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    {contact.description}
                  </p>
                  <p className="font-medium text-foreground mb-4 flex-grow">
                    {contact.info}
                  </p>
                  {contact.link !== '#' && (
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <a href={contact.link} target="_blank" rel="noopener noreferrer">
                        Acessar
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WhatsApp Destaque */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                  Agende sua Consulta pelo WhatsApp
                </h3>
                <p className="text-muted-foreground mb-6">
                  A forma mais rápida e prática de agendar sua consulta. 
                  Clique no botão abaixo e envie uma mensagem.
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 rounded-full"
                >
                  <a 
                    href="https://api.whatsapp.com/send?phone=5512997848513&text=Olá,%20gostaria%20de%20agendar%20minha%20consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Horários de Atendimento */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold mb-4 text-foreground">
                Horários de Atendimento
              </h2>
              <p className="text-xl text-muted-foreground">
                Consultas presenciais e online disponíveis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      Horários
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {schedule.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="font-medium text-foreground">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      Modalidades
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Presencial</h4>
                      <p className="text-muted-foreground text-sm">
                        Atendimento no consultório com toda infraestrutura necessária
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Online</h4>
                      <p className="text-muted-foreground text-sm">
                        Consultas via videochamada para sua comodidade
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Domiciliar</h4>
                      <p className="text-muted-foreground text-sm">
                        Atendimento em casa para casos específicos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Atendimento */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-8 text-foreground">
              Como Funciona o Atendimento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                  Primeira Consulta
                </h3>
                <p className="text-muted-foreground">
                  Avaliação completa do seu histórico de saúde e objetivos
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                  Plano Personalizado
                </h3>
                <p className="text-muted-foreground">
                  Desenvolvimento de um plano alimentar adaptado ao seu estilo de vida
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                  Acompanhamento
                </h3>
                <p className="text-muted-foreground">
                  Consultas de retorno para ajustes e acompanhamento da evolução
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Pronta para Começar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Não perca mais tempo. Sua jornada para uma vida mais saudável 
            pode começar hoje mesmo!
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6 rounded-full"
          >
            <a href="https://api.whatsapp.com/send?phone=5512997848513&text=Olá,%20gostaria%20de%20agendar%20minha%20consulta.">
              Agendar Minha Consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;