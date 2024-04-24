import { BsTitle } from '../../atoms/title/title';
import { BsImage } from '../../atoms/image/image';
/**
 * Blog header component.
 */
export declare class BsBlogHeader {
  /**
   * A (json)object string containing the bs-image elemement properties.
   */
  image: BsImage | string;
  get parsedImage(): BsImage;
  /**
   * A (json)object string containing the bs-image that is used for the logo elemement properties.
   */
  logo: BsImage | string;
  get parsedLogo(): BsImage;
  /**
   * A (json)object string containing the bs-title elemement properties.
   */
  head: BsTitle | string;
  get parsedTitle(): BsTitle;
  render(): any;
}
