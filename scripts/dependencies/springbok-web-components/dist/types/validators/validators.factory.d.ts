import { Validator, ValidatorEntry } from './validators.types';
export declare function validatorFactory(name: string, options: any): Validator<any>;
export declare function getValidator<A>(v: string | ValidatorEntry): Validator<A>;
