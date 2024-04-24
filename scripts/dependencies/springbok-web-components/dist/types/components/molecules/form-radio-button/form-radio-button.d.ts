import { RadioButtonItem } from './form-radio-button.types';
/**
 * The form radio component.
 */
export declare class BsFormRadioButton {
  private formFieldRef;
  /**
   * State
   */
  invalid: boolean;
  focused: boolean;
  value: string;
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
   * A list of values for each radio button
   */
  options: RadioButtonItem[] | string;
  get parsedOptions(): RadioButtonItem[];
  /**
   * Methods
   */
  private handleOnChange;
  componentDidLoad(): void;
  render(): any;
}
