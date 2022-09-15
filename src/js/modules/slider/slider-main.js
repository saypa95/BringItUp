import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor({ sliderSelector, nextSelcetor, prevSelector }) {
    super(sliderSelector);
    this.nextBtns = document.querySelectorAll(nextSelcetor);
    this.prevBtn = document.querySelectorAll(prevSelector);
    this.scheduleBtn = document.querySelectorAll(".menu__block-schedule");
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
    this.slideIndex += n;
    this.showSlide();
  }

  bindTriggers() {
    this.nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.changeSlide(1);
      });

      btn.parentNode.previousElementSibling.setAttribute("href", "index.html");
    });

    if (this.prevBtn.length != 0) {
      this.prevBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
          this.changeSlide(-1);
        });
      });
    }

    if (this.scheduleBtn.length != 0) {
      this.scheduleBtn.forEach((item) => {
        if (window.location.pathname == "/BringItUp/dist/index.html") {
          item.addEventListener("click", (e) => {
            // e.preventDefault();

            this.slideIndex = 5;
            this.showSlide();
          });
        }
      });
    }
  }

  render() {
    this.bindTriggers();
    this.showSlide();
  }
}
