import Accordion from "./modules/accordion";
import Download from "./modules/download";
import Form from "./modules/form";
import Officer from "./modules/officer";
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

    const officerOld = new Officer(
      ".officerold",
      ".officer__card-item",
      ".plus"
    );
    officerOld.init();

    const officerNew = new Officer(
      ".officernew",
      ".officer__card-item",
      ".plus"
    );
    officerNew.init();

    const mainForm = new Form(".form");
    mainForm.init();

    const scheldueForm = new Form(".schedule__form .form");
    scheldueForm.init();

    const player = new VideoPlayer(".overlay", "[data-url]");
    player.init();
  } catch (e) {
    const bigModulesSlider = new MainSlider({
      sliderSelector: ".moduleapp",
      nextSelcetor: ".nextmodule",
      prevSelector: ".prevmodule"
    });
    bigModulesSlider.render();

    const player = new VideoPlayer(".overlay", "[data-url]");
    player.init();

    new Accordion(".plus").init();

    new Download(".download").init();
  }
});
