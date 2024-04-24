import { TitleTag, TitleVariant, TitleColor, TitleSize } from './title.types';
/**
 * The title component.
 */
export declare class BsTitle {
  /**
   * To customize the text
   */
  text: string;
  /**
   * To set the title tag
   */
  tag: TitleTag;
  /**
   * To set the color
   */
  color: TitleColor;
  /**
   * To set the title variant
   */
  variant: TitleVariant;
  /**
   * To set the title size
   */
  size?: TitleSize;
  render(): any;
}
