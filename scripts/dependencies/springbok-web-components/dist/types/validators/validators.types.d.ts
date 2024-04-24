export interface Validator<A> {
  validate: (x: A) => boolean;
  errorMessage?: string;
}
export declare enum ValidatorNames {
  Length = "length",
  MinMax = "min-max",
  Email = "email",
  DateTime = "date-time"
}
export type ValidatorEntry = {
  name: ValidatorNames;
  options?: any;
};
