/**
 * https://www.abeautifulsite.net/posts/finding-the-active-element-in-a-shadow-root/
 *
 * You can get the focused element with document.activeElement but,
 * if it's inside a shadow root, this will be the host element.
 *
 * Here's a recursive function that will return the internal element that has focus,
 * even if it's inside a shadow root.
 *
 */
export declare function getActiveElement(root?: Document | ShadowRoot): Element | null;
