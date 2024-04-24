import { BsTestBadgeDetail } from '../../molecules/test-badge-detail/test-badge-detail';
/**
 * The test badge modal component.
 */
export declare class BsTestBadgeModal {
  private overlayRef;
  /** Props */
  /**
   * The index of the featured image.
   */
  index: number;
  /**
   * The list of images to be shown in the carousel.
   */
  testBadgeCollection: (BsTestBadgeDetail & {
    cardTitle: string;
    cardText: string;
  })[] | string;
  get parsedtestBadgeCollection(): (BsTestBadgeDetail & {
    cardTitle: string;
    cardText: string;
  })[];
  /** Listeners */
  bsNextSlideActionHandler(): void;
  bsPreviousSlideActionHandler(): void;
  /** methods */
  private updateIndex;
  render(): any;
}
