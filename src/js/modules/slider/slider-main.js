import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor({ sliderSelector, nextSelcetor }) {
    super(sliderSelector);
    this.nextBtns = document.querySelectorAll(nextSelcetor);
  }

  showSlide() {
    if (this.slideIndex > this.slides.length - 1) {
      this.slideIndex = 0;
    }

    if (this.slideIndex < 0) {
      this.slideIndex = this.slides.length - 1;
    }

    this.slides.forEach((slide) => {
      slide.style.display = "none";
    });

    this.slides[this.slideIndex].style.display = "block";

    try {
      const hanson = document.querySelector(".hanson");
      hanson.style.display = "none";
      if (this.slideIndex == 2) {
        hanson.classList.add("animated");
        setTimeout(() => {
          hanson.style.display = "block";
          hanson.classList.add("fadeInUp");
        }, 3000);
      } else {
        hanson.classList.remove("fadeInUp");
      }
    } catch (e) {}
  }

  changeSlide(n) {
    this.showSlide((this.slideIndex += n));
  }

  render() {
    this.nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.changeSlide(1);
      });

      btn.parentNode.previousElementSibling.addEventListener("click", (e) => {
        e.preventDefault();
        this.slideIndex = 0;
        this.showSlide(this.slideIndex);
      });
    });

    this.showSlide();
  }
}
