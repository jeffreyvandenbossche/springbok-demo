/**
 * Date component.
 */
export declare class BsDate {
  isDateValid: boolean;
  isLanguageCodeValid: boolean;
  /**
   * Raw date string in yyyy-mm-dd format
   */
  date: string;
  /**
   * Language's iso code
   */
  languageIsoCode: string;
  /**
   * Has white text?
   */
  isWhite?: boolean;
  private checkDateFormat;
  private checkLanguageCodeFormat;
  private renderDate;
  componentWillRender(): void;
  render(): any;
}
