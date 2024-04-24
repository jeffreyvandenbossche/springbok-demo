import { EventEmitter } from '../../../stencil-public-runtime';
export declare class BsAccordionItem {
  /**
   * Accordion's unique identifier used for accessibility.
   */
  identifier: string;
  validateIdentifier(newValue: string): void;
  /**
   * Accordion's title.
   */
  accordionItemTitle: string;
  /**
   * Accordion's active state
   */
  active?: boolean;
  /**
   * Is the accordion expandable?
   */
  expandable?: boolean;
  /**
   * Accordion's event emitter
   */
  bsAccordionStateAction: EventEmitter<Boolean>;
  private bsAccordionStateActionHandler;
  render(): any;
}
