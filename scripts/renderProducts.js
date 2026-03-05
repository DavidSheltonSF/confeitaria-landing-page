import { products } from './products.js';
import { generateProductWhatsAppUrl } from './generateProductWhatsAppUrl.js';
import { formatPrice } from './helpers/formatPrice.js';

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
        <a
        class="product__link"
        href="${generateProductWhatsAppUrl(product)}"
        target="_blank"
        rel="noopener"
        >
        <div class="product__image-container">
          <img class="product__image" src="${product.imageUrl}" alt="${
      product.name
    }" loading="lazy" decoding="async">
        </div>
        <div class="product__content">
          <div class="product__information">
            <h3 class="product__name">${product.name}</h3>
            <p class="product__price">${formatPrice(product.price)}</p>
          </div>
          <span 
          class="button-primary 
          product__button" 

          >
          PEDIR AGORA
          </span> 
        </div>
        </a>
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
