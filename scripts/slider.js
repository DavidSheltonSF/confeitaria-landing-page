import { carouselImages } from "./carouselImages.js";
const slider = document.querySelector('.slider');
const sliderNav = document.querySelector('.slider-nav')

document.addEventListener('DOMContentLoaded', () => {
  carouselImages.map((image, index) => {
    const sliderItem = `
      <img id="slide-${index}" src=${image.path}>
    `
    const navButton = `
      <a href="#slide-${index}"></a>
    `
    slider.innerHTML += sliderItem;
    sliderNav.innerHTML += navButton;
  })
})