import type { BsImage } from '../../atoms/image/image';
/**
 * Article teaser card component.
 */
export declare class BsArticleCard {
  /**
   * The article related image.
   */
  articleImage: BsImage | string;
  get parsedArticleImage(): BsImage;
  /**
   * The article title.
   */
  articleTitle: string;
  /**
   * The cta label.
   */
  articleCta: string;
  /**
   * The article href.
   */
  articleHref: string;
  render(): any;
}
