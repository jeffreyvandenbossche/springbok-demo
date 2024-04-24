import { BsButton } from '../../atoms/button/button';
/**
 * Newsletter banner component.
 */
export declare class BsNewsletterBanner {
  /**
   * Section's title
   */
  sectionTitle: string;
  /**
   * Subtitle
   */
  subtitle: string;
  /**
   * Description.
   */
  button: BsButton | string;
  get parsedButton(): BsButton;
  render(): any;
}
