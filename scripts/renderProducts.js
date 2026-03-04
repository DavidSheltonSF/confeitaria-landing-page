import { products } from "./products.js";

const productsList = document.querySelector('.products')

function renderProducts() {
  products.map((product) => {
    const productCard = `
    <article class="product">
      <img class="product__image" src="${product.imageUrl}" alt="">
      <main>
        <div class="product__information">
        <h3 class="product__name">${product.name}</h3>
        <p class="product__price">R$${product.price}</p>
        </div>
        <button class="product__button button-primary">
          <a href="https://wa.me/5521969470527?text=${product.whatsAppText.replace(' ', '%20')}">
            PEDIR AGORA
          </a>  
        </button>
      </main>
    </article>
    `

    productsList.innerHTML += productCard;
  });
}

document.addEventListener('DOMContentLoaded', renderProducts)