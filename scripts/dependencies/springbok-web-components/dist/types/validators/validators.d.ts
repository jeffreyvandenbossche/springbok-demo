import type { Validator } from './validators.types';
export declare const defaultValidator: Validator<any>;
export declare function LengthValidator(min: string, max: string): Validator<string>;
export declare function MinMaxValidator(min: string, max: string): Validator<string>;
export declare function EmailValidator(): Validator<string>;
export declare const DateTimeValidator: Validator<string>;
