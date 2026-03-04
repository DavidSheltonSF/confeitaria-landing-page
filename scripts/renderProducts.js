import { products } from './products.js';
import { generateProductWhatsAppUrl } from './generateProductWhatsAppUrl.js';

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
      <img class="product__image" src="${product.imageUrl}" alt="">
      <main>
        <div class="product__information">
        <h3 class="product__name">${product.name}</h3>
        <p class="product__price">R$${product.price}</p>
        </div>
          <a class="button-primary product__button" href="${generateProductWhatsAppUrl(
            product,
          )}"
          target="_blank">
            PEDIR AGORA
          </a>  
      </main>
    </article>
    `;

    productsList.innerHTML += productCard;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
});

searchBarInput.addEventListener('input', (e) => {
  const filteredProducts = products.filter((product) =>
    product.name.startsWith(e.target.value),
  );

  renderProducts(filteredProducts);
});
