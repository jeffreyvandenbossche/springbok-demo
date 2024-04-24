import { ButtonVariant } from '../../atoms/button/button.types';
import { BsButton } from '../../atoms/button/button';
import { BsTitle } from '../../atoms/title/title';
/**
 * CTA Banner component.
 */
export declare class BsCTABanner {
  /**
   * The (json)object containing the bs-title element properties
   */
  bannerTitle: BsTitle | string;
  get parsedBannerTitle(): BsTitle;
  /**
   * The banner subtitle
   */
  subtitle?: string;
  /**
   * The (json)object containing the bs-button element properties.
   */
  button: BsButton | string;
  get parsedButton(): BsButton;
  /** The banner variant. */
  variant?: ButtonVariant;
  /** Should the background be filled up? */
  filled?: boolean;
  render(): any;
}
