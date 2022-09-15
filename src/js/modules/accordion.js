export default class Accordion{
  constructor(triggerSelector){
    this.triggers = document.querySelectorAll(triggerSelector);
  }

  bindTriggers(){
    this.triggers.forEach(item => {
      item.addEventListener("click", ()=> {
        const blockToShow = item.parentNode.nextElementSibling;
        blockToShow.classList.toggle("show");
      });
    });
  }

  init(){
    this.bindTriggers();
  }
}