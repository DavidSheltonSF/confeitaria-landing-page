export function generateProductWhatsAppUrl(product) {
  const text = `Olá, gostaria de pedir ${product.name}`

  const url = `https://wa.me/5521969470527?text=${text}`
  
  return url;
}