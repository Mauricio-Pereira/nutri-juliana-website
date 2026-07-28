const whatsappPhone = "5512997848513";

export const createWhatsAppHref = (message: string) =>
  `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(message)}`;

export const contact = {
  phoneDisplay: "+55 12 99784-8513",
  phoneHref: "tel:+5512997848513",
  whatsappHref: createWhatsAppHref("Olá, gostaria de agendar minha consulta."),
  packagesWhatsappHref: createWhatsAppHref(
    "Olá, gostaria de conhecer os formatos de acompanhamento e entender qual é o mais indicado para mim.",
  ),
  email: "nutricionistajulianarabelo@gmail.com",
  emailHref: "mailto:nutricionistajulianarabelo@gmail.com",
  instagramHandle: "@julianarabelonutri",
  instagramHref: "https://www.instagram.com/julianarabelonutri/",
};
