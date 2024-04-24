import type { BsImage } from '../../atoms/image/image';
/**
 * Product card component.
 */
export declare class BsProductCard {
  /** Props */
  /**
   * The product card title.
   */
  cardTitle: string;
  /**
   * The cta label.
   */
  cardText: string;
  /**
   * The product card image.
   */
  cardImage: BsImage | string;
  get parsedCardImage(): BsImage;
  render(): any;
}
