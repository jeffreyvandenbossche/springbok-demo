import { HeaderNavigation } from '../overlay-menu/overlay-menu.types';
/**
 * Header navigation component.
 */
export declare class BsHeaderNavigation {
  /**
   * State
   */
  stickyMenuIsVisible: boolean;
  /**
   * The .
   */
  headerNavigation: HeaderNavigation | string;
  get parsedHeaderNavigation(): HeaderNavigation;
  /**
   * Listeners
   */
  handleBodyScroll(): void;
  render(): any;
}
