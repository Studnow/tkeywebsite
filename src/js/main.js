import "./fn.js";
import "virtual:windi.css";
import "../styles/style.css";

import Alpine from "alpinejs";
import "@kingshott/iodine";
// import validator from "./validator";

window.Alpine = Alpine;

Alpine.data("contactForm", form);
// Alpine.data("servicesForm", validator);

// console.log(validator)

Alpine.start();

// let mail = document.getElementById("heroForm").elements;
// let inputs = document.querySelectorAll("input");

// let validMail = Iodine.assertEmail(mail, ["required", "email"]);
// Iodine.assertString(2, ['required', 'string'])

// console.log(getContact);

// function validator() {
//   return {
//     fields: {
//       name: {
//         value: null,
//         rules: ["required", "string", "minLength:2"],
//         validate(callback) {
//           let { isValid, errorMsg } = callback(this);
//           this.isValid = isValid;
//           this.errorMsg = errorMsg;
//         },
//         isValid: null,
//         errorMsg: null,
//       },
//       email: {
//         value: null,
//         rules: ["required", "email"],
//         validate(callback) {
//           let { isValid, errorMsg } = callback(this);
//           this.isValid = isValid;
//           this.errorMsg = errorMsg;
//         },
//         isValid: null,
//         errorMsg: null,
//       },
//     },
//     isFormValid: true,
//     validationCallback(field) {
//       Iodine.setErrorMessage("required", "Это обязательное поле");
//       Iodine.setErrorMessage("minLength", "Имя должно содержать '[PARAM]' или больше буквы");
//       Iodine.setErrorMessage("email", "Введите действующий адрес электронной почты. Например: address@mail.com");
//       let { value, rules } = field;
//       let isValid = Iodine.assert(value, rules).valid;
//       let errorMsg = Iodine.assert(value, rules).valid ? null : Iodine.assert(value, rules).error;

//       return { isValid, errorMsg };
//     },
//     submit() {
//       this.isFormValid = !Object.values(this.fields).some((field) => !field.isValid);
//       let myForm = document.getElementById("heroForm");
//       let formData = new URLSearchParams(new FormData(myForm)).toString();
//       console.log(formData);
//       if (this.isFormValid) {
//         fetch("/", {
//           method: "POST",
//           headers: { "Content-Type": "application/x-www-form-urlencoded" },
//           body: formData,
//         })
//           // This is how we route to /thanks on successful form submission
//           // More on $router.push function: https://router.vuejs.org/guide/essentials/navigation.html
//           .then((response) => {
//             if (response.ok) {
//               myForm.reset();
//               console.log("form reset")
//             } else {
//               throw new Error(`Something went wrong: ${response.statusText}`)
//             }
//           })
//           // .then(() => console.log("Form submitted"))
//           .catch((error) => alert(error));
//       }else {
//         console.log("Form is not valid")
//       }
//       return this.isFormValid;
//     },
//   };
// }

// document.querySelector("form").addEventListener("submit", handleSubmit);

function form () {
  return {
    handleSubmit(e) {
  // e.preventDefault();
  let myForm = document.getElementById("contact");
  console.log(myForm)
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
}
  }
}
