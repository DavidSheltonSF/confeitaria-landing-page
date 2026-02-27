import {carouselImages} from './carouselImages.js'

const carouselRightButton = document.querySelector('.carousel__right-button');
const carouselLeftButton = document.querySelector('.carousel__left-button');
const carouselItemsContainer = document.querySelector('.carousel__items-list');

const itemsQuantity = 5;
const visibleItems = 3;
const itemsLength = 400;
const itemsGap = 24;
let itemsAtLeft = 0;
let itemsAtRight = itemsQuantity - visibleItems;
const step = itemsLength + (itemsGap * visibleItems);
let position = 0;


function moveNext(){
  if(itemsAtRight === 0) {
    return; 
  };
  position -= step;
  itemsAtLeft ++;
  itemsAtRight --
}

function moveBack(){
  if(itemsAtLeft === 0) {
    return
  };
  position += step;
  itemsAtLeft --;
  itemsAtRight ++;
}

function checkButtons() {
  if(itemsAtRight === 0){
    carouselRightButton.classList.remove('active-button');
    carouselRightButton.classList.add('disabled-button');
  }

   if(itemsAtRight > 0){
    carouselRightButton.classList.add('active-button');
    carouselRightButton.classList.remove('disabled-button');
  }

   if(itemsAtLeft === 0){
    carouselLeftButton.classList.remove('active-button');
    carouselLeftButton.classList.add('disabled-button');
  }

   if(itemsAtLeft > 0){
    carouselLeftButton.classList.add('active-button');
    carouselLeftButton.classList.remove('disabled-button');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  carouselImages.map((image) => {
    const carouselItem = `
      <div class="carousel__item">
        <img src="${image.path}" alt="">
      </div>
    `
  carouselItemsContainer.innerHTML += carouselItem;
  })
})

carouselRightButton.addEventListener('click', () => {
  moveNext()
  checkButtons()
  carouselItemsContainer.style.transform  = `translateX(${position}px)`
})


carouselLeftButton.addEventListener('click', () => {
  moveBack();
  checkButtons();
  carouselItemsContainer.style.transform = `translateX(${position}px)`
})