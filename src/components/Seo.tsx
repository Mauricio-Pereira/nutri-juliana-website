import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { contact } from '@/lib/contact';

const siteUrl = 'https://nutricionistajulianarabelo.com.br';
const socialImageUrl = `${siteUrl}/img/logo-3cores-sem-fundo.webp`;

const pageConfigurations = {
  '/': {
    title: 'Juliana Rabelo | Nutricionista Online',
    description: 'Atendimento nutricional online com Juliana Rabelo, CRN-3 80627, para saúde da mulher, gestação, vegetarianismo e emagrecimento saudável.',
    type: 'WebPage',
  },
  '/sobre': {
    title: 'Sobre Juliana Rabelo | Nutricionista CRN-3 80627',
    description: 'Conheça a formação, a experiência e a abordagem humanizada de Juliana Rabelo em saúde da mulher, nutrição materno-infantil e cuidado nutricional.',
    type: 'AboutPage',
  },
  '/acompanhamento': {
    title: 'Acompanhamento Nutricional Online | Juliana Rabelo',
    description: 'Conheça consultas e acompanhamentos nutricionais online mensais ou quinzenais, com plano personalizado, ajustes e suporte durante o processo.',
    type: 'WebPage',
  },
  '/contato': {
    title: 'Contato e Agendamento | Juliana Rabelo Nutricionista',
    description: 'Fale com a nutricionista Juliana Rabelo, CRN-3 80627, para tirar dúvidas, conhecer os acompanhamentos e agendar sua consulta online.',
    type: 'ContactPage',
  },
} as const;

const Seo = () => {
  const { pathname } = useLocation();
  const configuration = pageConfigurations[pathname as keyof typeof pageConfigurations] ?? pageConfigurations['/'];

  useEffect(() => {
    const canonicalUrl = pathname === '/' ? `${siteUrl}/` : `${siteUrl}${pathname}`;
    const metaTags = [
      { attribute: 'name', key: 'description', content: configuration.description },
      { attribute: 'name', key: 'robots', content: 'index,follow,max-image-preview:large' },
      { attribute: 'property', key: 'og:title', content: configuration.title },
      { attribute: 'property', key: 'og:description', content: configuration.description },
      { attribute: 'property', key: 'og:type', content: 'website' },
      { attribute: 'property', key: 'og:url', content: canonicalUrl },
      { attribute: 'property', key: 'og:image', content: socialImageUrl },
      { attribute: 'property', key: 'og:image:alt', content: 'Juliana Rabelo Nutricionista' },
      { attribute: 'property', key: 'og:image:width', content: '900' },
      { attribute: 'property', key: 'og:image:height', content: '249' },
      { attribute: 'name', key: 'twitter:card', content: 'summary_large_image' },
      { attribute: 'name', key: 'twitter:title', content: configuration.title },
      { attribute: 'name', key: 'twitter:description', content: configuration.description },
      { attribute: 'name', key: 'twitter:image', content: socialImageUrl },
    ];

    document.title = configuration.title;

    metaTags.forEach(({ attribute, key, content }) => {
      let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }

      meta.content = content;
    });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    const personId = `${siteUrl}/#juliana-rabelo`;
    const websiteId = `${siteUrl}/#website`;
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          '@id': personId,
          name: 'Juliana Rabelo',
          url: `${siteUrl}/sobre`,
          image: `${siteUrl}/img/profile-photo-6.webp`,
          jobTitle: 'Nutricionista',
          description: 'Nutricionista com atendimento online e foco em saúde da mulher, nutrição materno-infantil, vegetarianismo e emagrecimento saudável.',
          identifier: {
            '@type': 'PropertyValue',
            propertyID: 'CRN-3',
            value: '80627',
          },
          email: contact.email,
          telephone: contact.phoneDisplay,
          sameAs: [contact.instagramHref],
          knowsAbout: [
            'Saúde da mulher',
            'Fertilidade e saúde reprodutiva',
            'Nutrição materno-infantil',
            'Vegetarianismo',
            'Emagrecimento saudável',
          ],
        },
        {
          '@type': 'WebSite',
          '@id': websiteId,
          url: `${siteUrl}/`,
          name: 'Juliana Rabelo Nutricionista',
          inLanguage: 'pt-BR',
          publisher: { '@id': personId },
        },
        {
          '@type': configuration.type,
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: configuration.title,
          description: configuration.description,
          inLanguage: 'pt-BR',
          isPartOf: { '@id': websiteId },
          about: { '@id': personId },
        },
      ],
    };

    let jsonLd = document.head.querySelector<HTMLScriptElement>('script[data-seo-json-ld]');

    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.type = 'application/ld+json';
      jsonLd.dataset.seoJsonLd = 'true';
      document.head.appendChild(jsonLd);
    }

    jsonLd.textContent = JSON.stringify(structuredData).replace(/</g, '\\u003c');
  }, [configuration, pathname]);

  return null;
};

export default Seo;
