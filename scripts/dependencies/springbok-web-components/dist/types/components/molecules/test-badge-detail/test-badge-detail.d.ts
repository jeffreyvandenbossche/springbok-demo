import { BsImage } from '../../atoms/image/image';
import { BsButton } from '../../atoms/button/button';
/**
 * Test badge detail component.
 */
export declare class BsTestBadgeDetail {
  /** Props */
  /** The badge title. */
  badgeTitle: string;
  /** The badge content. */
  badgeText: string;
  /** The badge CTA. */
  badgeCta: BsButton | string;
  get parsedBadgeCta(): BsButton;
  /**
   * The test badge image.
   */
  badgeImages: BsImage[] | string;
  get parsedbadgeImages(): BsImage[];
  render(): any;
}
