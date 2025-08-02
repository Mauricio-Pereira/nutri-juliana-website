import { Heart, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/80 border-t border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações de Contato */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+5512997848513"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+55 12 99784-8513</span>
              </a>
              <a
                href="mailto:nutricionistajulianarabelo@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>nutricionistajulianarabelo@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/julianarabelonutri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@julianarabelonutri</span>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">
              Links Rápidos
            </h3>
            <div className="space-y-2">
              <Link
                to="/sobre"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre Juliana
              </Link>
              {/* <Link
                to="/pacotes"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Pacotes
              </Link> */}
              <Link
                to="/blog"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/contato"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contato
              </Link>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">
              Siga-me
            </h3>
            <p className="text-muted-foreground mb-4">
              Fique por dentro de dicas e conteúdos sobre nutrição.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/julianarabelonutri/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5512997848513&text=Olá,%20gostaria%20de%20agendar%20minha%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:nutricionistajulianarabelo@gmail.com"
                className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-1">
            <span>© 2025 Juliana Rabelo. Feito com</span>
            <Heart className="h-4 w-4 text-primary fill-current" />
            <span>para sua saúde.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;