import { Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contact } from '@/lib/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                href={contact.phoneHref}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{contact.phoneDisplay}</span>
              </a>
              <a
                href={contact.emailHref}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="break-words [overflow-wrap:anywhere]">{contact.email}</span>
              </a>
              <a
                href={contact.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>{contact.instagramHandle}</span>
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
                href={contact.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href={contact.emailHref}
                className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            ©Copyright Juliana Rabelo - {currentYear}. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm font-semibold text-foreground">
            Desenvolvido por{" "}
            <a
              href="https://mp-portfolio.mauricio-pvieira1.workers.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Mauricio Pereira
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
