export default class Officer {
  constructor(officerSelector, itemSelector, triggerSelector) {
    this.officer = document.querySelector(officerSelector);
    this.cards = this.officer.querySelectorAll(itemSelector);
    this.trigger = this.officer.querySelector(triggerSelector);
    this.cardToShowIndex = 0;
  }

  hideCards() {
    this.cards.forEach((card, i) => {
      if (i != this.cards.length - 1) {
        card.style.display = "none";
        card.classList.add("animated", "fadeIn");
      }
    });
  }

  showCard() {
    this.cards.forEach((card, i) => {
      if (i == this.cardToShowIndex) {
        card.style.display = "flex";
      }
    });
    this.cardToShowIndex++;

    if(this.cardToShowIndex == this.cards.length - 1){
      this.cards[this.cards.length - 1].style.display = "none";
    }
  }

  init() {
    this.trigger.addEventListener("click", () => {
      this.showCard();
    });
    this.hideCards();
  }
}
