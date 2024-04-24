/**
 * Description of the component.
 */
export declare class BsImage {
  /**
   * Image's src
   */
  src: string;
  /**
   * Image's srcset
   */
  srcset?: string;
  /**
   * Image's width
   */
  width: string | number;
  /**
   * Image's height
   */
  height: string | number;
  /**
   * Image's sizes
   */
  imageSizes?: string;
  /**
   * Image's alternative text
   */
  altText?: string;
  /**
   * "itemprop" attribute
   */
  itemprop?: string;
  /**
   * Image's caption
   */
  caption?: string;
  /**
   * Determine if text under or on image
   */
  captionCover?: boolean;
  /**
   * Determine if image is stretching to fill its container's size
   */
  cover?: boolean;
  /**
   * Source image
   */
  source?: string;
  /**
   * Enable lazy loading?
   */
  lazy?: boolean;
  render(): any;
}
