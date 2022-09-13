import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor({ sliderSelector, next, prev, activeClass, animate, autoplay }) {
    super(sliderSelector);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
  }

  decorizeSlides() {
    this.slides.forEach((slide) => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector(".card__title").style.opacity = "0.4";
        slide.querySelector(".card__controls-arrow").style.opacity = "0";
      }
    });

    this.slides[0].classList.add(this.activeClass);

    if (this.animate) {
      this.slides[0].querySelector(".card__title").style.opacity = "1";
      this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
    }
  }

  nextSlide() {
    if (this.slides[1].tagName == "BUTTON") {
      do {
        this.slider.append(this.slides[1]);
      } while (this.slides[1].tagName == "BUTTON");
    }
    this.slider.append(this.slides[0]);
    this.decorizeSlides();
  }

  bindTriggers() {
    this.next.addEventListener("click", () => {
      this.nextSlide();
    });

    this.prev.addEventListener("click", () => {
      if (this.slides[this.slides.length - 1].tagName == "BUTTON") {
        do {
          this.slider.prepend(this.slides[this.slides.length - 1]);
        } while (this.slides[this.slides.length - 1].tagName == "BUTTON");
      }
      this.slider.prepend(this.slides[this.slides.length - 1]);
      this.decorizeSlides();
    });
  }

  autoplayGo(){
    const autoplay = setInterval(() => this.nextSlide(), 3000);

    this.slider.addEventListener("mouseenter", ()=>{
      clearInterval(autoplay);
    });

    this.next.addEventListener("mouseenter", ()=>{
      clearInterval(autoplay);
    });

    this.prev.addEventListener("mouseenter", ()=>{
      clearInterval(autoplay);
    });
  }

  init() {
    this.slider.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

    this.bindTriggers();
    this.decorizeSlides();

    if (this.autoplay) {
      this.autoplayGo();

      this.slider.addEventListener("mouseleave", ()=>{
        this.autoplayGo();
      });
  
      this.next.addEventListener("mouseleave", ()=>{
        this.autoplayGo();
      });
  
      this.prev.addEventListener("mouseleave", ()=>{
        this.autoplayGo();
      });
    }
  }
}
