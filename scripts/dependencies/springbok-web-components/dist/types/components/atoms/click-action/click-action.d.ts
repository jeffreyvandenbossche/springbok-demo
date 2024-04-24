import { EventEmitter } from '../../../stencil-public-runtime';
import { ClickActionTarget, ClickActionType, type ClickActionEvent } from './click-action.types';
/**
 * The click action component.
 */
export declare class BsClickAction {
  /**
   * The name for the bsClickAction event.
   */
  name?: string;
  /**
   * The value for the bsClickAction event.
   */
  value?: any;
  /**
   * The type of button for the bsClickAction component.
   */
  type?: ClickActionType;
  /**
   * The href of bsClickAction component, will convert the button into a link.
   */
  href?: string;
  /**
   * The target of the provided href.
   */
  target?: ClickActionTarget;
  /**
   * The class of the button or link.
   */
  tagClass?: string;
  /**
   * Disabled state of inner tag.
   */
  disabled?: boolean;
  /**
   * Use aria-label attribute when link/button doesn't have any text
   */
  ariaLabelText?: string;
  /**
   * Emitted when the component is clicked.
   */
  bsClickAction: EventEmitter<ClickActionEvent>;
  private handleClick;
  render(): any;
}
