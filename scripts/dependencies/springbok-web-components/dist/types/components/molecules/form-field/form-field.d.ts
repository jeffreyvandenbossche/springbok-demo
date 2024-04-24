import { IconName } from '../../../components';
import { ValidatorEntry } from '../../../validators/validators.types';
/**
 * The form field component.
 */
export declare class BsFormField {
  private validatorFunc;
  private errorMessage;
  /**
   * The value of the form field
   */
  value: string;
  valueDidChange(): void;
  /**
   * The name of the form field
   */
  name: string;
  /**
   * Wether or not the form field is filled
   */
  filled: boolean;
  /**
   * Wether or not the form field is focussed
   */
  focused: boolean;
  /**
   * Wether or not the form field is invalid
   */
  invalid: boolean;
  /**
   * Wether or not the form field is required
   */
  required: boolean;
  /**
   * The error message to be displayed on the form field in case of invalidity
   */
  invalidMessage: string;
  /**
   * The error message to be displayed on the form field when the required field is not populated
   */
  requiredMessage: string;
  /**
   * The icon to be displayed on the right hand side of the form field
   */
  icon?: IconName;
  /**
   * The label describing the form field
   */
  label?: string;
  /**
   * A border styling for text input and select fields
   */
  border?: boolean;
  /**
   * The validator function name used to validate the form field
   */
  validator?: string | ValidatorEntry;
  /**
   * A method to run the validation on the form input value
   */
  validate(value?: string): Promise<void>;
  componentWillLoad(): void;
  render(): any;
}
