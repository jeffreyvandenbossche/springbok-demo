import { IconName } from '../../../components';
import { InputType } from './form-input.types';
/**
 * The form input component.
 */
export declare class BsFormInput {
  private formFieldRef;
  /**
   * Wether or not the input field is filled
   */
  filled: boolean;
  /**
   * Wether or not the input field is focused
   */
  focused: boolean;
  /**
   * Wether or not the input field is invalid
   */
  invalid: boolean;
  /**
   * The unique name to identify the form element
   */
  name: string;
  /**
   * The unique name to identify the form element
   */
  type: InputType;
  /**
   * The label describing the form field
   */
  label: string;
  /**
   * The value of the form field
   */
  value?: string;
  validateValue(newValue: string): void;
  /**
   * Wether or not the input field is required
   */
  required?: boolean;
  /**
   * Wether or not the input field is required
   */
  min?: string;
  /**
   * Wether or not the input field is required
   */
  max?: string;
  /**
   * The error message to be displayed when the required field remains empty
   */
  requiredMessage: string;
  /**
   * The error message to be displayed when the field has an invalid input
   */
  invalidMessage?: string;
  /**
   * The icon to be displayed on the right hand side of the form field
   */
  icon?: IconName;
  /**
   * The default amount of rows the textarea has
   */
  rows?: number;
  /**
   * Wether or not the textarea is resizeable by the user
   */
  resizeable?: boolean;
  private inputEl;
  private focus;
  private focusout;
  private getValidator;
  private charInputTypes;
  private placeholderInputTypes;
  render(): any;
}
