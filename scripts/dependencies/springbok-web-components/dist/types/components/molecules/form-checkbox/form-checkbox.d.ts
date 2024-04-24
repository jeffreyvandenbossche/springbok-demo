import { CheckboxItem } from './form-checkbox.types';
/**
 * The form checkbox component.
 */
export declare class BsFormCheckbox {
  private formFieldRef;
  /**
   * State
   */
  invalid: boolean;
  focused: boolean;
  value: string[];
  /**
   * The unique name to identify the form element
   */
  name: string;
  /**
   * The error message to be displayed when the required field remains empty
   */
  requiredMessage: string;
  /**
   * Wether or not the checkbox is required
   */
  required?: boolean;
  /**
   * The label displayed after the checkbox
   */
  label?: string;
  /**
   * Description.
   */
  options: CheckboxItem[] | string;
  get parsedOptions(): CheckboxItem[];
  /**
   * Methods
   */
  private handleOnChange;
  componentDidLoad(): void;
  render(): any;
}
