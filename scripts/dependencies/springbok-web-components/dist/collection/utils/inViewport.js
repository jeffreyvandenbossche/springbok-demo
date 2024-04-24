import { isEmpty } from '@springbokagency/stencil-base';
export function isInViewport(el, container) {
  if (!isEmpty(el)) {
    const rect = el.getBoundingClientRect();
    if (container && !isEmpty(container.getBoundingClientRect())) {
      const containerRect = container.getBoundingClientRect();
      return (rect.top >= containerRect.top &&
        rect.left >= containerRect.left &&
        rect.bottom <= containerRect.bottom &&
        rect.right <= containerRect.right);
    }
    return (rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth));
  }
  return false;
}
//# sourceMappingURL=inViewport.js.map
