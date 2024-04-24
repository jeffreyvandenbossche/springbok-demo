export const defaultValidator = {
  validate: () => true,
};
export function LengthValidator(min, max) {
  return {
    validate: (value) => {
      const regex = new RegExp(`^.{${min || 0},${max || ''}}$`);
      return regex.test(value);
    },
    errorMessage: 'LengthError',
  };
}
export function MinMaxValidator(min, max) {
  return {
    validate: (value) => {
      if (Number(min) && Number(value) < Number(min)) {
        return false;
      }
      if (Number(max) && Number(value) > Number(max)) {
        return false;
      }
      if (new Date(min) instanceof Date && new Date(value) < new Date(min)) {
        return false;
      }
      if (new Date(max) instanceof Date && new Date(value) > new Date(max)) {
        return false;
      }
      return true;
    },
    errorMessage: 'numberError',
  };
}
export function EmailValidator() {
  return {
    validate: (value) => {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\u0600-\u06FF\u0400-\u04FF\u0370-\u03ff\-0-9]+\.)+[a-zA-Z\u0600-\u06FF\u0400-\u04FF\u0370-\u03ff]{2,}))$/;
      return regex.test(value);
    },
    errorMessage: 'emailError',
  };
}
export const DateTimeValidator = {
  validate: (value) => {
    const dateValue = new Date(value);
    if (dateValue instanceof Date) {
      return true;
    }
    return false;
  },
  errorMessage: 'dateTimeError',
};
//# sourceMappingURL=validators.js.map
