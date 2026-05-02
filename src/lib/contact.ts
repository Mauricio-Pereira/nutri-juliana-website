const whatsappMessage = "Olá, gostaria de agendar minha consulta.";
const whatsappPhone = "5512997848513";

export const contact = {
  phoneDisplay: "+55 12 99784-8513",
  phoneHref: "tel:+5512997848513",
  whatsappHref: `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(whatsappMessage)}`,
  email: "nutricionistajulianarabelo@gmail.com",
  emailHref: "mailto:nutricionistajulianarabelo@gmail.com",
  instagramHandle: "@julianarabelonutri",
  instagramHref: "https://www.instagram.com/julianarabelonutri/",
};
