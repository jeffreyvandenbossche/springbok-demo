import type { BsImage } from '../../atoms/image/image';
/**
 * Author component.
 */
export declare class BsAuthor {
  /**
   * Description.
   */
  authorImage: BsImage | string;
  get parsedAuthorImage(): BsImage;
  /**
   * Author's name
   */
  authorName: string;
  /**
   * Author's job position
   */
  authorPosition: string;
  /**
   * Main about title
   */
  aboutTitle: string;
  /**
   * Description text
   */
  description: string;
  render(): any;
}
