import { BsImage } from '../../atoms/image/image';
/**
 * Experience Zone card component.
 */
export declare class BsExperienceZoneCard {
  /**
   * Should the layout for singular items be applied?
   */
  singular?: boolean;
  /**
   * The Experience Zone card title.
   */
  cardTitle: string;
  /**
   * The Experience Zone card image.
   */
  cardImage: BsImage | string;
  get parsedCardImage(): BsImage;
  /** Should the image have a play icon? */
  video?: boolean;
  render(): any;
}
