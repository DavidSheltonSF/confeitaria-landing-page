import { products } from './products.js';
import { generateProductWhatsAppUrl } from './generateProductWhatsAppUrl.js';
import { priceToCurrencyString } from './helpers/formatPrice.js';

const productsList = document.querySelector('.products');
const searchBarInput = document.querySelector('.search-bar__input');

function clearProducts() {
  productsList.innerHTML = '';
}

function renderProducts(prod) {
  clearProducts();
  prod.map((product) => {
    const productCard = `
      <article class="product fade-in-animation">
        <img class="product__image" src="${product.imageUrl}" alt="${
      product.name
    }" loading="lazy">
        <div class="product__content">
          <div class="product__information">
            <h3 class="product__name">${product.name}</h3>
            <p class="product__price">${priceToCurrencyString(product.price)}</p>
          </div>
          <a 
          class="button-primary 
          product__button" 
          href="${generateProductWhatsAppUrl(product)}"
          target="_blank">
          rel="noopener"
          PEDIR AGORA
          </a> 
        </div>
      </article>
    `;

    productsList.innerHTML += productCard;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
});

function filterProducts(products, searchText) {
  const normalizedText = searchText.toLowerCase();
  return products.filter((product) => {
    return product.name.toLowerCase().startsWith(normalizedText);
  });
}

searchBarInput.addEventListener('input', (e) => {
  const filteredProducts = filterProducts(products, e.target.value);
  renderProducts(filteredProducts);
});
