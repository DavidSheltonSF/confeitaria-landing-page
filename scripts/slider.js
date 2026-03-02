import { slideImages } from "./slideImages.js";
const slider = document.querySelector('.slider');
const sliderNav = document.querySelector('.slider-nav')

document.addEventListener('DOMContentLoaded', () => {
  slideImages.map((image, index) => {
    const sliderItem = `
      <img id="slide-${index}" src=${image.path} alt=${image.alt}>
    `
    const navButton = `
      <a href="#slide-${index}"></a>
    `
    slider.innerHTML += sliderItem;
    sliderNav.innerHTML += navButton;
  })
})