import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Pacotes = () => {
  return (
    <Layout>
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6 text-foreground">
            Pacotes e Planos
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Oferecemos diferentes opções de acompanhamento nutricional 
            para atender suas necessidades específicas.
          </p>
          <p className="text-muted-foreground mb-8">
            Entre em contato para conhecer nossos pacotes personalizados.
          </p>
          <Button asChild size="lg">
            <a href="/contato">Conhecer Pacotes</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Pacotes;