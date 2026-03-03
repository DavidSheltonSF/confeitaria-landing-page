import { slideImages } from "./slideImages.js";
const slider = document.querySelector('.slider');
const sliderNav = document.querySelector('.slider-nav')

document.addEventListener('DOMContentLoaded', () => {
  slideImages.map((image, index) => {
    const sliderItem = `
      <img id="slide-${index}" src=${image.path} alt=${image.alt} loading="lazy" srcset="${image.srcset}" sizes="100%">
    `
    const navButton = `
      <a href="#slide-${index}"></a>
    `
    slider.innerHTML += sliderItem;
    sliderNav.innerHTML += navButton;
  })
})