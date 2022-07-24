export default () => {
  function validator() {
    return {
      fields: {
        name: {
          value: null,
          rules: ["required"],
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
      validationCallback(field) {
        let { value, rules } = field;
        let isValid = Iodine.assert(value, rules);
        let errorMsg = isValid.valid ? null : isValid.error;

        return { isValid, errorMsg };
      },
      submit() {
        this.isFormValid = !Object.values(this.fields).some((field) => !field.isValid);
        return this.isFormValid;
      }
    };
  }
};
