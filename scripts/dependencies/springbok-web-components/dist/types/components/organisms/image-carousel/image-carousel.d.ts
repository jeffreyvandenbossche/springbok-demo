import type { BsImage } from '../../atoms/image/image';
/**
 * The image carousel component.
 */
export declare class BsImageCarousel {
  private timeout;
  private focusedImageRef;
  private thumbnailWrapRef;
  private overlayRef;
  desktop: boolean;
  /** Props */
  /**
   * The list of images to be shown in the carousel.
   */
  imageCollection: BsImage[] | string;
  get parsedImageCollection(): BsImage[];
  /**
   * The index of the featured image.
   */
  index: number;
  handleIndexChange(): void;
  /**
   * Should autoplay be enabled?
   */
  autoplay?: boolean;
  /**
   * Should the autoplay be slow?
   */
  slow?: boolean;
  /**
   * The title of the carousel displayed in the footer.
   */
  carouselTitle?: string;
  /**
   * The logo to be displayed in the footer.
   */
  logo?: BsImage | string;
  /** methods */
  private onResize;
  private throttleMethod;
  private updateIndex;
  private setTimer;
  private autoscrollThumbnails;
  /** Listeners */
  handleBsSwipeAction(e: CustomEvent): void;
  handleScreenResized(): void;
  handleNextMedia(): void;
  handlePreviousMedia(): void;
  render(): any;
}
