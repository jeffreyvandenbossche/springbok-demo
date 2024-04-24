import { defaultValidator, EmailValidator, DateTimeValidator, LengthValidator, MinMaxValidator, } from './validators';
import { ValidatorNames } from './validators.types';
export function validatorFactory(name, options) {
  switch (name) {
    case ValidatorNames.DateTime:
      return DateTimeValidator;
    case ValidatorNames.Length:
      return LengthValidator(options.min, options.max);
    case ValidatorNames.MinMax:
      return MinMaxValidator(options.min, options.max);
    case ValidatorNames.Email:
      return EmailValidator();
    default:
      return defaultValidator;
  }
}
export function getValidator(v) {
  if (typeof v === 'string') {
    return validatorFactory(v, null);
  }
  return validatorFactory(v.name, v.options);
}
//# sourceMappingURL=validators.factory.js.map
