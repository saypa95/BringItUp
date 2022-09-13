export default class Slider {
  constructor(sliderSelector) {
    this.slider = document.querySelector(sliderSelector);
    this.slides = this.slider.children;
    this.slideIndex = 0;
  }
}
