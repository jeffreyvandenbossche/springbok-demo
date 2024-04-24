import type { BsImage } from '../../atoms/image/image';
/**
 * Share banner component.
 */
export declare class BsLogoBar {
  /**
   * The logo to be displayed .
   */
  logo?: BsImage | string;
  get parsedLogo(): BsImage;
  render(): any;
}
