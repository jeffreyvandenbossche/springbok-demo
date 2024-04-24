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
import { isEmpty } from '@springbokagency/stencil-base';
export function getActiveElement(root = document) {
  const activeEl = root.activeElement;
  if (isEmpty(activeEl)) {
    return null;
  }
  if (!isEmpty(activeEl.shadowRoot)) {
    return getActiveElement(activeEl.shadowRoot);
  }
  return activeEl;
}
//# sourceMappingURL=getActiveElement.js.map
