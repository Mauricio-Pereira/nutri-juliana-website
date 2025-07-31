import Layout from '@/components/Layout';

const Parcerias = () => {
  return (
    <Layout>
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6 text-foreground">
            Parcerias
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Trabalhamos em parceria com profissionais e empresas que 
            compartilham nossos valores de saúde e bem-estar.
          </p>
          <p className="text-muted-foreground">
            Interessado em parcerias? Entre em contato conosco.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Parcerias;