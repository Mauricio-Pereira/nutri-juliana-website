import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Users, Handshake } from 'lucide-react';

const Parcerias = () => {
  // Array de parceiros - você pode adicionar novos parceiros aqui
  const partners = [
    {
      id: 1,
      name: 'Clínica Seven',
      description: 'Emagrecimento com suporte, ciência e tecnologia. Rápido e saudável.',
      logo: '/img/clinica-seven.png', // Exemplo usando logo existente
      website: 'https://clinicaseven.com.br',
      category: 'Clínica',
    },
    {
      id: 2,
      name: 'Amor e Laços',
      description: 'Biscuitts para ocasiões especiais',
      logo: '/img/amor-e-lacos.jpg',
      website: 'https://www.instagram.com/amoremlacosbiscuitt',
      category: 'Biscuitt',
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Cuidado Integral',
      description: 'Atendimento multidisciplinar para cuidar de você por completo'
    },
    {
      icon: Users,
      title: 'Rede de Profissionais',
      description: 'Acesso a especialistas qualificados em diversas áreas'
    },
    {
      icon: Handshake,
      title: 'Confiança Mútua',
      description: 'Parcerias baseadas em valores compartilhados de excelência'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bottom-0 bg-background">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6 text-foreground">
            Parcerias
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Trabalho em parceria com profissionais e empresas que
            compartilham meus valores de saúde e bem-estar.
          </p>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça os profissionais e empresas que colaboram comigo
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {partners.map((partner) => (
              <Card key={partner.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center text-center">
                    {/* Logo do Parceiro */}
                    <div className="w-24 h-24 mb-4 flex items-center place-items-center justify-center bg-muted/30 rounded-lg overflow-hidden">
                      <img 
                        src={partner.logo} 
                        alt={`Logo ${partner.name}`}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          // Fallback se a imagem não carregar
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div 
                        className="hidden w-full h-full bg-primary/10 items-center justify-center rounded"
                        style={{ display: 'none' }}
                      >
                        <Heart className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    {/* Categoria */}
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                      {partner.category}
                    </span>

                    {/* Nome do Parceiro */}
                    <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                      {partner.name}
                    </h3>

                    {/* Descrição */}
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {partner.description}
                    </p>

                    {/* Link para site (se disponível) */}
                    {partner.website !== '#' && (
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        <a 
                          href={partner.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Visitar Site
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
              Por que Trabalho em Parceria?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Acredito que o cuidado com a saúde deve ser integrado e multidisciplinar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
            Interessado em uma Parceria?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Se você é um profissional ou empresa que compartilha meus valores de excelência
            em saúde e bem-estar, adoraria conversar sobre uma possível parceria.
          </p>
          <Button asChild size="lg">
            <a href="/contato">Entre em Contato</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Parcerias;