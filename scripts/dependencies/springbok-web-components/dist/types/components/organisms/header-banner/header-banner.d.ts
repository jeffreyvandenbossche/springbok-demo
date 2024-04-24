import { BsTitle } from '../../atoms/title/title';
import { BsImage } from '../../atoms/image/image';
import { BsButton } from '../../atoms/button/button';
import { Variant } from './header-banner.types';
import { BsVideoCard } from '../../molecules/video-card/video-card';
/**
 * Header banner component.
 */
export declare class BsHeaderBanner {
  /** States */
  isMobile: boolean;
  /**
   * A (json)object string containing the bs-image elemement properties.
   */
  image?: BsImage | string;
  get parsedImage(): BsImage;
  /**
   * A (json)object string containing the bs-image that is used for the logo elemement properties.
   */
  logo?: BsImage | string;
  get parsedLogo(): BsImage;
  /** A label to be displayed on the top if there is no logo. */
  label?: string;
  /**
   * A (json)object string containing the bs-title elemement properties.
   */
  headerTitle: BsTitle | string;
  get parsedHeaderTitle(): BsTitle;
  /** The header banner subtitle. */
  subtitle?: string;
  /**
   * A (json)object string containing the bs-button elemement properties.
   */
  button?: BsButton | string;
  get parsedButton(): BsButton;
  /** The header banner variant. Either 'image' or 'video'. */
  variant: Variant;
  /**
   * A (json)object string containing the bs-video-card elemement properties.
   */
  video?: BsVideoCard | string;
  get parsedvideo(): BsVideoCard;
  /** Listeners */
  handleScreenResized(): void;
  /** Methods */
  private onResize;
  private throttleMethod;
  render(): any;
}
