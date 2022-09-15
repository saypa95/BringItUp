export default class Form {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.inputs = this.form.querySelectorAll("input");
    this.message = {
      loading: "Loading...",
      success: "Successfully!",
      failure: "Something went wrong...",
    };
    this.path = "assets/question.php";
    this.statusMessage = document.createElement("div");
  }

  checkMailInput() {
    const mailInput = document.querySelector('[type="email"]');

    mailInput.addEventListener("keypress", function (e) {
      if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
        e.preventDefault();
      }
    });
  }

  initMask() {
    let setCursorPosition = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();

        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    };

    function createMask(event) {
      let matrix = "+1 (___) ___-____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : a;
      });

      if (event.type === "blur") {
        if (this.value.length == 2) {
          this.value = "";
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }

    let inputs = document.querySelectorAll('[name="phone"]');

    inputs.forEach((input) => {
      input.addEventListener("input", createMask);
      input.addEventListener("focus", createMask);
      input.addEventListener("blur", createMask);
    });
  }

  async postData(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await response.text();
  }

  clearForm() {
    this.inputs.forEach((input) => {
      input.value = "";
    });
  }

  init() {
    this.checkMailInput();
    this.initMask();

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      this.statusMessage.style.cssText = `
                    margin-top: 15px;
                    margin-left: 5px;
                    font-weight: 400;
                    line-height: 18px;
                    font-size: 18px;
                    color: #000;
                    mix-blend-mode: normal;
                    opacity: .89;
                `;
      this.form.parentNode.append(this.statusMessage);
      this.statusMessage.textContent = this.message.loading;

      const formData = new FormData(this.form);

      this.postData(this.path, formData)
        .then((response) => {
          console.log(response);
          this.statusMessage.textContent = this.message.success;
        })
        .catch(() => {
          this.statusMessage.textContent = this.message.failure;
        })
        .finally(() => {
          this.clearForm();
          setTimeout(() => {
            this.statusMessage.remove();
          }, 3000);
        });
    });
  }
}
