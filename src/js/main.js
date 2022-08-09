import "./fn.js";
import "virtual:windi.css";
import "../styles/style.css";

import Alpine from "alpinejs";
import "@kingshott/iodine";
import focus from '@alpinejs/focus'


window.Alpine = Alpine;

Alpine.plugin(focus)
Alpine.data("contactForm", validator);

Alpine.start();


function validator() {
  return {
    fields: {
      name: {
        value: null,
        rules: ["required", "string", "minLength:2"],
        validate(callback) {
          let { isValid, errorMsg } = callback(this);
          this.isValid = isValid;
          this.errorMsg = errorMsg;
        },
        isValid: null,
        errorMsg: null,
      },
      email: {
        value: null,
        rules: ["required", "email"],
        validate(callback) {
          let { isValid, errorMsg } = callback(this);
          this.isValid = isValid;
          this.errorMsg = errorMsg;
        },
        isValid: null,
        errorMsg: null,
      },
    },
    isFormValid: true,
    formMessage: "",
    validationCallback(field) {
      Iodine.setErrorMessage("required", "Это обязательное поле");
      Iodine.setErrorMessage("minLength", "Имя должно содержать '[PARAM]' или больше буквы");
      Iodine.setErrorMessage("email", "Введите действующий адрес электронной почты. Например: address@mail.com");
      let { value, rules } = field;
      let isValid = Iodine.assert(value, rules).valid;
      let errorMsg = Iodine.assert(value, rules).valid ? null : Iodine.assert(value, rules).error;

      return { isValid, errorMsg };
    },
    submit() {
      this.isFormValid = !Object.values(this.fields).some((field) => !field.isValid);
      let myForm = document.getElementById(this.$refs.form.attributes.id.value);
      let formData = new URLSearchParams(new FormData(myForm)).toString();
      if (this.isFormValid) {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData,
        })
          // This is how we route to /thanks on successful form submission
          // More on $router.push function: https://router.vuejs.org/guide/essentials/navigation.html
          .then((response) => {
            if (response.ok) {
              myForm.reset();
              // console.log("form reset");
              this.isFormValid = false;
              this.formMessage = "Форма успешно отправлена";
            } else {
              throw new Error(`Something went wrong: ${response.statusText}`);
            }
          })
          // .then(() => console.log("Form submitted"))
          .catch((error) => alert(error));
      } else {
        console.log("Form is not valid");
      }
      // return this.isFormValid;
    },
  };
}