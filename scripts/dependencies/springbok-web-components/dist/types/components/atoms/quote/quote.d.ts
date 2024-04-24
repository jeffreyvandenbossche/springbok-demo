import { BsImage } from '../image/image';
/**
 * The Quote component is used for indicating that a particular section of text is being taken from another website or other source.
 */
export declare class BsQuote {
  /**
   * The quote text copied from an external source.
   */
  text: string;
  /**
   * Author's name
   */
  authorName: string;
  /**
   * Author's job position
   */
  authorPosition: string;
  /**
   * A URL that designates a source document or message for the information quoted. Used for SEO purposes.
   */
  source?: string;
  /**
   *  Prop for adding an image
   */
  authorImage: BsImage | string;
  get parsedAuthorImage(): BsImage;
  render(): any;
}
