import { BsArticleCard } from '../../molecules/article-card/article-card';
import { BsTitle } from '../../atoms/title/title';
/**
 * Related articles component.
 */
export declare class BsRelatedArticlesCard {
  /**
   * The article related image.
   */
  articlesData: BsArticleCard[] | string;
  get parsedArticlesData(): BsArticleCard[];
  /**
   * Description.
   */
  relatedArticlesTitle: BsTitle | string;
  get parsedRelatedArticlesTitle(): BsTitle;
  render(): any;
}
