import { HeaderNavigation } from './overlay-menu.types';
/**
 * Overlay menu component.
 */
export declare class BsOverlayMenu {
  private modalRef;
  private modalId;
  isClosing: boolean;
  /**
   * The header navigation data.
   */
  headerNavigation: HeaderNavigation | string;
  get parsedHeaderNavigation(): HeaderNavigation;
  /**
   * Events
   */
  bsModalIsClosingHandler(e: CustomEvent): void;
  /**
   * Methods
   */
  private handleCloseButtonClick;
  render(): any;
}
