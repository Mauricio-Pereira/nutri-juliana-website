import Layout from '@/components/Layout';

const Blog = () => {
  return (
    <Layout>
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6 text-foreground">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Em breve você encontrará aqui artigos e dicas sobre nutrição, 
            saúde da mulher e alimentação saudável.
          </p>
          <p className="text-muted-foreground">
            Enquanto isso, siga nosso Instagram @julianarabelonutri para 
            conteúdos diários!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;