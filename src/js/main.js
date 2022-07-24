import "./fn.js";
import "virtual:windi.css";
import "../styles/style.css";

import Alpine from "alpinejs";
import "@kingshott/iodine";
// import validator from "./validator";

window.Alpine = Alpine;

Alpine.data("orderForm", validator);
// Alpine.data("servicesForm", validator);

// console.log(validator)

Alpine.start();

// let mail = document.getElementById("heroForm").elements;
// let inputs = document.querySelectorAll("input");

// let validMail = Iodine.assertEmail(mail, ["required", "email"]);
// Iodine.assertString(2, ['required', 'string'])

// console.log(getContact);

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
          console.log(errorMsg);
          this.isValid = isValid;
          this.errorMsg = errorMsg;
        },
        isValid: null,
        errorMsg: null,
      },
    },
    isFormValid: true,
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
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // body: new URLSearchParams(this.createFormDataObj(data)).toString(),
      })
        // This is how we route to /thanks on successful form submission
        // More on $router.push function: https://router.vuejs.org/guide/essentials/navigation.html
        // .then(() => this.$router.push("thanks"))
        .catch((error) => alert(error));
      return this.isFormValid;
    },
  };
}
