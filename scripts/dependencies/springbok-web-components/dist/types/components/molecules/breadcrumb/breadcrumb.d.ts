import { BreadcrumbData } from './breadcrumb.types';
/**
 * The breadcrumb component.
 */
export declare class BsBreadcrumb {
  private action;
  private wrapper;
  /** States */
  wrapped: boolean;
  displayedItems: Array<BreadcrumbData | string>;
  /** Props */
  /**
   * Breadcrumb items data.
   */
  data: BreadcrumbData[] | string;
  get parsedData(): BreadcrumbData[];
  /** Methods */
  private onBsButtonClick;
  componentWillLoad(): void;
  render(): any;
}
