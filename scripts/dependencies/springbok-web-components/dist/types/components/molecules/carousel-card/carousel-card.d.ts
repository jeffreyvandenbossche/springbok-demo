import { BsImage } from '../../atoms/image/image';
/**
 * Carousel card component.
 */
export declare class BsCarouselCard {
  /** Props */
  /**
   * The list of images to be shown in the carousel.
   */
  imageCollection: BsImage[] | string;
  get parsedImageCollection(): BsImage[];
  /**
   * Should autoplay be enabled?
   */
  autoplay?: boolean;
  /**
   * Should the autoplay be slow?
   */
  slow?: boolean;
  /**
   * The title of the carousel displayed in the footer.
   */
  carouselTitle?: string;
  /**
   * The logo to be displayed in the footer.
   */
  logo?: BsImage | string;
  /**
   * The cta label.
   */
  cta: string;
  /**
   * Should the carousel be displayed in slim variation.
   */
  slim?: boolean;
  render(): any;
}
