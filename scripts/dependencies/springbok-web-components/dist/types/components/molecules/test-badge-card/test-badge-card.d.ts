import type { BsImage } from '../../atoms/image/image';
/**
 * Test badge card component.
 */
export declare class BsTestBadgeCard {
  /** Props */
  /**
   * The test badge title.
   */
  cardTitle: string;
  /**
   * The test badge description.
   */
  cardText: string;
  /**
   * The test badge image.
   */
  cardImage: BsImage | string;
  get parsedCardImage(): BsImage;
  render(): any;
}
