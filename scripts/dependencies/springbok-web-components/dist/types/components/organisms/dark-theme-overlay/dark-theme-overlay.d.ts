import { BsImage } from '../../atoms/image/image';
/**
 * Dark-theme overlay component.
 */
export declare class BsDarkOverlay {
  private modalRef;
  /** States */
  isMobile: boolean;
  /** Props */
  /**
   * The title of the carousel displayed in the footer.
   */
  mainTitle?: string;
  /**
   * Does the content contain multiple screens?
   */
  screens?: boolean;
  /**
   * The logo to be displayed in the footer.
   */
  logo: BsImage | string;
  get parsedLogo(): BsImage;
  /** Listeners */
  handleScreenResized(): void;
  /** Methods */
  private onResize;
  private throttleMethod;
  /**
   * This method triggers the close method on the modal.
   */
  closeOverlay(): Promise<void>;
  /**
   * This method triggers the previous slide method on the modal.
   */
  previousSlide(): Promise<void>;
  /**
   * This method triggers the next slide method on the modal.
   */
  nextSlide(): Promise<void>;
  /**
   * This method triggers the handle focus method on the modal.
   */
  focusTrap(): Promise<void>;
  render(): any;
}
