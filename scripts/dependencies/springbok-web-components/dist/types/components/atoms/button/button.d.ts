import { EventEmitter } from '../../../stencil-public-runtime';
import { ButtonTarget, ButtonType, ButtonVariant, ButtonClickEvent } from './button.types';
import { IconName } from '../icon/icon.types';
/**
 * Description of the component.
 */
export declare class BsButton {
  /**
   * Button's text
   */
  text: string;
  /**
   * Links's href
   */
  href?: string;
  /**
   * Link's target
   */
  target?: ButtonTarget;
  /**
   * The value for the bsClickEvent.
   */
  value?: any;
  /**
   * Button's type
   */
  type?: ButtonType;
  /**
   * Define what kind of action the button will be used for (i.e. "open-video-modal")
   */
  action?: string;
  /**
   * The class of the button or link.
   */
  tagClass?: string;
  /**
   * Button's style variant
   */
  variant?: ButtonVariant;
  /**
   * Button's style variant
   */
  ghost?: boolean;
  /**
   * Button's icon
   */
  iconLeft?: IconName;
  /**
   * Second button's icon
   */
  iconRight?: IconName;
  /**
   * Make the button take the full-width
   */
  isFullWidth?: boolean;
  /**
   * Disable button interactions
   */
  isDisabled?: boolean;
  /**
   * Button's custom click event
   */
  bsButtonClick: EventEmitter<ButtonClickEvent>;
  private handleClick;
  render(): any;
}
