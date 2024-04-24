import { isEmpty } from '@springbokagency/stencil-base';
export function deepQuerySelector(selector, root) {
  // select all items of this Shadow DOM
  let allChildren;
  if (root instanceof Document) {
    allChildren = root.querySelectorAll('*');
  }
  else {
    allChildren = root.shadowRoot.querySelectorAll('*');
  }
  // using for loops instead of forEach to allow for early return
  for (let i = 0; i < allChildren.length; i += 1) {
    const child = allChildren[i];
    // if match CSS selector, return the element
    if (child.matches(selector)) {
      return child;
    }
    // if has shadow root, re-execute main function
    if (!isEmpty(child.shadowRoot)) {
      const result = deepQuerySelector(selector, child);
      if (!isEmpty(result)) {
        return result;
      }
    }
  }
  // no matching element found
  return null;
}
//# sourceMappingURL=deepQuerySelector.js.map
