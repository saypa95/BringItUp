import Slider from "./modules/slider/slider";
import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/videoPlayer";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  try {
    const bigMainSlider = new MainSlider({
      sliderSelector: ".page",
      nextSelcetor: ".next",
    });
    bigMainSlider.render();
  } catch (e) {
    const bigModulesSlider = new MainSlider({
      sliderSelector: ".moduleapp",
      nextSelcetor: ".next",
    });
    bigModulesSlider.render();
  }

  const showUpSlider = new MiniSlider({
    sliderSelector: ".showup__content-slider",
    next: ".showup__next",
    prev: ".showup__prev",
    activeClass: "card-active",
    animate: true,
  });
  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    sliderSelector: ".modules__content-slider",
    prev: ".modules__info-btns .slick-prev",
    next: ".modules__info-btns .slick-next",
    activeClass: "card-active",
    animate: true,
    autoplay: true,
  });
  modulesSlider.init();

  const feedSlider = new MiniSlider({
    sliderSelector: ".feed__slider",
    prev: ".feed__slider .slick-prev",
    next: ".feed__slider .slick-next",
    activeClass: "feed__item-active",
  });
  feedSlider.init();

  const player = new VideoPlayer(".overlay", ".showup .play");
  player.init();
});
