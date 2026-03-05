export function formatPrice(price) {
  return Number(price).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
