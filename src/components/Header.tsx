import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contact } from '@/lib/contact';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Juliana Rabelo', href: '/sobre' },
    { name: 'Acompanhamento', href: '/acompanhamento' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Função para fazer scroll para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Função para lidar com clique nos links
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Fecha o menu mobile se estiver aberto
    scrollToTop(); // Faz scroll para o topo
  };

  return (
    <header className="fixed top-0 w-full h-22 z-50 bg-muted/[80] backdrop-blur-sm border-b border-border shadow-sm flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 w-full items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
          {/* Logo - Sempre à esquerda */}
          <div className="flex-shrink-0 ml-0 pl-0">
            <Link to="/" onClick={handleLinkClick} className="flex items-center">
              <img
                src="/img/logo-3cores-sem-fundo.webp"
                alt="Juliana Rabelo"
                width="900"
                height="249"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centralizada */}
          <nav className="hidden md:flex md:justify-self-center">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleLinkClick}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* WhatsApp Button - Sempre à direita */}
          <div className="hidden md:block md:justify-self-end">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
              </a>
            </Button>
          </div>

          {/* Mobile menu button - À direita */}
          <div className="md:hidden flex-shrink-0">
            <button
              type="button"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground hover:text-primary hover:bg-accent'
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar Consulta
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
