import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Juliana Rabelo', href: '/sobre' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pacotes', href: '/pacotes' },
    { name: 'Parcerias', href: '/parcerias' },
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
      <div className="container mx-8 px-0 sm:px-0 lg:px-0">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo - Sempre à esquerda */}
          <div className="flex-shrink-0 ml-0 pl-0">
            <Link to="/" onClick={handleLinkClick} className="flex items-center">
              <img src={'/img/logo-3cores-sem-fundo.png'} alt="Juliana Rabelo" className="h-20" />
            </Link>
          </div>

          {/* Desktop Navigation - Centralizada */}
          <nav className="hidden md:flex flex-1 justify-center">
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
          <div className="hidden md:block flex-shrink-0">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a
                href="https://api.whatsapp.com/send?phone=5512997848513&text=Olá,%20gostaria%20de%20agendar%20minha%20consulta."
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
              className=""
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
                    href="https://api.whatsapp.com/send?phone=5512997848513&text=Olá,%20gostaria%20de%20agendar%20minha%20consulta."
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