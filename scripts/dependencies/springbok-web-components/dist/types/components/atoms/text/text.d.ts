import { TextSize, TextColor } from './text.types';
/**
 * The text component.
 */
export declare class Paragraph {
  /**
   * To customize the text
   */
  text: string;
  /**
   * To set the title size
   */
  size?: TextSize;
  /**
   * To set the color
   */
  textColor?: TextColor;
  private handleUrlHash;
  componentDidLoad(): void;
  render(): any;
}
