import { BsTitle } from '../../atoms/title/title';
/**
 * The Accordion component.
 */
export declare class BsAccordion {
  /**
   * Section's title.
   */
  mainTitle?: BsTitle | string;
  get parsedMainTitle(): BsTitle;
  bsAccordionStateHandler(event: CustomEvent<boolean>): void;
  render(): any;
}
