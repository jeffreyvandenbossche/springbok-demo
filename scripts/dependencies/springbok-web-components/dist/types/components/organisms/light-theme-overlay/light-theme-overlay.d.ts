/**
 * Lark-theme overlay component.
 */
export declare class BsLightOverlay {
  private modalRef;
  /** Props */
  /**
   * Does the content contain multiple screens?
   */
  screens?: boolean;
  /** Methods */
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
