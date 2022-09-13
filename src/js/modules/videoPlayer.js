export default class VideoPlayer {
  constructor(overlaySelector, triggersSelector) {
    this.overlay = document.querySelector(overlaySelector);
    this.triggers = document.querySelectorAll(triggersSelector);
  }

  bindTriggers() {
    this.triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        if (document.querySelector('iframe#frame')) {
          this.overlay.style.display = 'flex';
      }else{
        const url = trigger.dataset.url;
        this.createPlayer(url);
      }
      });
    });
  }

  bindClose() {
    this.overlay.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("overlay") ||
        e.target.classList.contains("close")
      ) {
        this.overlay.style.display = "none";
        this.player.stopVideo();
      }
    });
  }

  createPlayer(url) {
    this.player = new YT.Player("frame", {
      height: "100%",
      width: "100%",
      videoId: url,
    });

    this.overlay.style.display = "flex";
  }

  init() {
    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.bindTriggers();
    this.bindClose();
  }
}
