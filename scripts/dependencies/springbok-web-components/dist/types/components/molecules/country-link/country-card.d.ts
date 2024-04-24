import { BsImage } from '../../atoms/image/image';
import { BsTitle } from '../../atoms/title/title';
/**
 * Country link card component.
 */
export declare class BsCountryCard {
  /** Props */
  /**
   * The flag image.
   */
  flag: BsImage | string;
  get parsedFlag(): BsImage;
  /**
   * The country name.
   */
  countryTitle: BsTitle | string;
  get parsedTitle(): BsTitle;
  /**
   * The list of links to be rendered.
   */
  brands: {
    label: string;
    href: string;
  }[] | string;
  get parsedBrands(): {
    label: string;
    href: string;
  }[];
  render(): any;
}
